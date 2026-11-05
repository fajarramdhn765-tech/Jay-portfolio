import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Initialize GoogleGenAI server-side with required headers
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || '',
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `Anda adalah Asisten AI Interaktif JAY di website portofolio edukatif resmi Fajar Ramadhan (Brand: JAY).
Fajar adalah seorang calon Creative Web Developer yang berdomisili di Kp. Cadasari Tengah, Indonesia, dengan dedikasi tinggi pada proses belajar ("Learning by Doing. Creating with Purpose").
Ia mendalami pengembangan web, prompt engineering dengan bantuan ChatGPT, desain game arcade, konsep aplikasi Android, dan deployment cloud.
Karya & Eksplorasi Pembelajaran Fajar:
1. AI & Prompt Engineering: Penyusunan prompt terstruktur untuk arsitektur UI/UX dan logika aplikasi.
2. Web Development: Website portofolio JAY dark premium (React 19, TypeScript, Tailwind CSS v4).
3. Game Development: Snake & Ladder Game (multiplayer 2-4 pemain), Brick Breaker Arcade (mekanik paddle & pantulan bola), Street Fighter Arcade (konsep pertarungan, combo, health bar, timer).
4. Android Application: Konsep aplikasi kalkulator Android (tata letak tombol ergonomis, evaluasi matematika).
5. Creative Design: Branding logo game dan palet warna dark premium dengan aksen oranye-merah (#FF5A1F).
6. Web Deployment & PWA: Pengaturan deployment Vercel dan arsitektur PWA.

Informasi Kontak:
- Email: fajarramdhn765@gmail.com
- WhatsApp: +62 858-1176-7579 (085811767579)
- Brand: JAY
- Status: Terbuka untuk proyek kolaborasi, magang, dan freelance.

Filosofi Belajar: "Learning Never Stops. Every Idea Has the Potential to Become Something Great."
Tiga Prinsip: Stay Curious, Learn by Doing, Keep Improving.

Peran Anda:
1. Berikan tanggapan dalam Bahasa Indonesia yang ramah, jujur, menginspirasi, dan edukatif (atau Bahasa Inggris jika ditanya dalam Bahasa Inggris).
2. Bersikap jujur mengenai status proyek Fajar (bedakan antara konsep/prompt yang dibuat, prototipe, dan karya yang telah selesai).
3. Jelaskan bagaimana Fajar memanfaatkan ChatGPT sebagai akselerator belajar dan rekan diskusi kreatif.
4. Bantu pengunjung mendiskusikan peluang kolaborasi dan berikan kontak langsung Fajar.`;

// Contact form API endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Semua kolom (nama, email, subjek, pesan) wajib diisi.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Mohon cantumkan alamat email yang valid.' });
  }

  console.log(`[Pengiriman Kontak] Dari: ${name} <${email}> | Subjek: ${subject}`);
  console.log(`[Isi Pesan]: ${message}`);

  return res.status(200).json({
    success: true,
    message: `Terima kasih ${name}! Pesan Anda telah diterima. Fajar akan segera membalas ke ${email}.`,
  });
});

// Gemini Multi-turn Chat API endpoint
app.post('/api/gemini/chat', async (req: Request, res: Response) => {
  try {
    const { messages, thinkingMode, preferredModel } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required.' });
    }

    if (!process.env.GEMINI_API_KEY) {
      return res.status(500).json({
        error: 'Gemini API key is not configured. Please add GEMINI_API_KEY to your environment.',
      });
    }

    // Format chat contents into standard Gemini multi-turn format
    const formattedContents = messages.map((m: { role: 'user' | 'assistant' | 'model'; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : m.role,
      parts: [{ text: m.content }],
    }));

    // Handle model selection according to user requirements:
    // Complex queries & thinking mode -> gemini-4-argon with ThinkingLevel.HIGH (do not set maxOutputTokens)
    // General tasks -> gemini-3.8-flash
    // Fast queries -> gemini-3.1-flash-lite
    let chosenModel = preferredModel || (thinkingMode ? 'gemini-4-argon' : 'gemini-3.8-flash');
    let config: Record<string, any> = {
      systemInstruction: SYSTEM_INSTRUCTION,
    };

    if (thinkingMode) {
      chosenModel = 'gemini-4-argon';
      config.thinkingConfig = {
        thinkingLevel: ThinkingLevel.HIGH,
      };
    }

    try {
      const response = await ai.models.generateContent({
        model: chosenModel,
        contents: formattedContents,
        config,
      });

      return res.status(200).json({
        text: response.text || "I'm sorry, I couldn't generate a response. Feel free to reach out to Fajar directly!",
        modelUsed: chosenModel,
        thinkingEnabled: !!thinkingMode,
      });
    } catch (modelError: any) {
      console.warn(`Error generating content with ${chosenModel}:`, modelError?.message || modelError);
      
      // If gemini-4-argon requires a paid API key or hits quota, gracefully fallback to gemini-3.8-flash
      if (chosenModel === 'gemini-4-argon') {
        console.log('Falling back to gemini-3.8-flash for chat completion...');
        const fallbackResponse = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: formattedContents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });

        return res.status(200).json({
          text: fallbackResponse.text || "I'm here to help you learn more about Fajar's web development work!",
          modelUsed: 'gemini-3.8-flash (fallback)',
          thinkingEnabled: false,
        });
      }
      throw modelError;
    }
  } catch (error: any) {
    console.error('Gemini chat API error:', error);
    return res.status(500).json({
      error: error?.message || 'Failed to process AI chat message.',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
