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

const SYSTEM_INSTRUCTION = `Anda adalah Asisten AI Interaktif JAY di website portofolio resmi Fajar Ramadhan (Brand: JAY).
Fajar adalah seorang Creative Web Developer profesional yang berdomisili di Kp. Cadasari Tengah, Indonesia.
Keahlian utamanya mencakup React, Next.js, TypeScript, Tailwind CSS, JavaScript modern, dan Desain UI/UX.
Informasi Kontak:
- Email: fajarramdhn765@gmail.com
- WhatsApp: +62 858-1176-7579 (085811767579)
- Brand: JAY
- Status: Tersedia untuk proyek lepas (freelance), posisi remote, dan kolaborasi teknis kreatif.

Filosofi Utama: "Saya membangun pengalaman digital modern melalui kode yang bersih, desain yang matang, dan teknologi inovatif. Desain yang hebat seharusnya terasa alami dan tak kasat mata."

Peran dan Tanggung Jawab Anda:
1. Berikan tanggapan dalam Bahasa Indonesia yang ramah, profesional, percaya diri, dan artikulatif (atau Bahasa Inggris jika pengunjung bertanya dalam Bahasa Inggris).
2. Jawab pertanyaan pengunjung dan calon klien tentang pengalaman Fajar, karya pilihan (AURUM E-Commerce, METRICA Analytics, QUANTUM Frontier, dll.), tingkat keahlian teknis, dan pendekatan desain.
3. Berikan saran kelayakan proyek (project feasibility), rekomendasi arsitektur teknologi (React, Next.js, Tailwind, TypeScript), dan perkiraan tahapan kerja.
4. Jika pengunjung ingin memesan proyek atau merekrut Fajar, arahkan ke email resmi (fajarramdhn765@gmail.com) atau WhatsApp (+6285811767579).`;

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
