import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, Brain, RotateCcw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  modelUsed?: string;
  thinkingEnabled?: boolean;
}

interface GeminiChatBotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const GeminiChatBot: React.FC<GeminiChatBotProps> = ({ isOpen, onClose, onOpen }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      role: 'assistant',
      content: `Halo! Saya **Asisten AI JAY**, didukung oleh teknologi Google Gemini.\n\nSaya siap menjawab pertanyaan seputar keahlian web development Fajar Ramadhan, studi kasus proyek, estimasi waktu & ruang lingkup pengerjaan, atau mendiskusikan kolaborasi digital. Silakan tanyakan apa saja atau aktifkan **Mode Berpikir Kritis (High Thinking)** untuk pertanyaan teknis yang kompleks!`,
      modelUsed: 'gemini-3.8-flash',
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [thinkingMode, setThinkingMode] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'gemini-3.8-flash' | 'gemini-4-argon' | 'gemini-3.1-flash-lite'>('gemini-3.8-flash');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const starterPrompts = [
    'Apa saja teknologi keahlian Fajar?',
    'Estimasi linimasa pembuatan website e-commerce',
    'Bagaimana alur kerja sama dengan Fajar?',
    'Jelaskan filosofi desain & kode Fajar',
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: textToSend.trim(),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          thinkingMode,
          preferredModel: thinkingMode ? 'gemini-4-argon' : selectedModel,
        }),
      });

      const data = await response.json();

      if (response.ok && data.text) {
        setMessages((prev) => [
          ...prev,
          {
            id: `assistant-${Date.now()}`,
            role: 'assistant',
            content: data.text,
            modelUsed: data.modelUsed,
            thinkingEnabled: data.thinkingEnabled,
          },
        ]);
      } else {
        throw new Error(data.error || 'Gagal menerima tanggapan.');
      }
    } catch (err: any) {
      console.error('Gemini chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: `Maaf, koneksi ke asisten AI sedang mengalami kendala. Anda dapat langsung menghubungi Fajar melalui email **${PORTFOLIO_DATA.personal.email}** atau WhatsApp di **${PORTFOLIO_DATA.personal.whatsappFormatted}**!`,
          modelUsed: 'offline-fallback',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: `init-${Date.now()}`,
        role: 'assistant',
        content: `Percakapan telah direset. Ada yang bisa saya bantu terkait karya dan keahlian Fajar Ramadhan?`,
        modelUsed: thinkingMode ? 'gemini-4-argon' : selectedModel,
      },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={onOpen}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] hover:from-[#f04e13] hover:to-[#db200f] text-white font-bold text-xs shadow-2xl shadow-[#FF5A1F]/30 hover:shadow-[#FF5A1F]/50 transition-all hover:scale-105 cursor-pointer group"
          aria-label="Buka Asisten AI JAY"
        >
          <div className="relative">
            <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping" />
          </div>
          <span>Chat dengan AI JAY</span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[620px] h-[85vh] sm:h-[600px] flex flex-col rounded-3xl bg-[#121212] border border-[#2a2a2a] shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#1c0f0a] to-[#120806] border-b border-[#292929] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative p-2 rounded-xl bg-[#FF5A1F]/20 text-[#FF5A1F] border border-[#FF5A1F]/30">
                <Bot className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white font-display">
                    Asisten AI JAY
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#242424] text-[#A3A3A3]">
                    Gemini
                  </span>
                </div>
                <div className="text-[11px] text-[#A3A3A3] flex items-center gap-1.5">
                  <span>Agen Interaktif Portofolio</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="p-1.5 text-[#737373] hover:text-white rounded-lg hover:bg-[#202020] transition-colors cursor-pointer"
                title="Reset percakapan"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-[#737373] hover:text-white rounded-lg hover:bg-[#202020] transition-colors cursor-pointer"
                title="Tutup obrolan"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Controls Bar: Thinking Mode Toggle & Model Switch */}
          <div className="px-4 py-2.5 bg-[#0e0e0e] border-b border-[#222222] flex items-center justify-between text-xs">
            {/* Thinking Mode Switch */}
            <button
              onClick={() => {
                const nextState = !thinkingMode;
                setThinkingMode(nextState);
                if (nextState) {
                  setSelectedModel('gemini-4-argon');
                }
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                thinkingMode
                  ? 'bg-[#FF5A1F]/20 text-[#FF5A1F] border border-[#FF5A1F]/40 font-semibold'
                  : 'bg-[#181818] text-[#737373] hover:text-white border border-[#262626]'
              }`}
              title="Aktifkan Berpikir Kritis untuk analisis arsitektur mendalam"
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Berpikir Kritis {thinkingMode ? 'AKTIF' : 'NONAKTIF'}</span>
            </button>

            {/* Model Badge */}
            <span className="text-[11px] font-mono text-[#737373]">
              {thinkingMode ? 'gemini-4-argon (High Thinking)' : selectedModel}
            </span>
          </div>

          {/* Message Thread */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-lg bg-[#FF5A1F]/20 text-[#FF5A1F] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 space-y-1.5 ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] text-white shadow-md'
                      : 'bg-[#181818] text-[#E5E5E5] border border-[#262626]'
                  }`}
                >
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {msg.content}
                  </div>

                  {msg.role === 'assistant' && msg.modelUsed && (
                    <div className="text-[10px] font-mono text-[#737373] pt-1 border-t border-[#222222] flex items-center justify-between">
                      <span>Model: {msg.modelUsed}</span>
                      {msg.thinkingEnabled && (
                        <span className="text-[#FF5A1F]">Reasoning: HIGH</span>
                      )}
                    </div>
                  )}
                </div>

                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-lg bg-[#242424] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2.5 text-xs text-[#A3A3A3] p-2 bg-[#181818] rounded-2xl w-max border border-[#242424]">
                <Brain className="w-3.5 h-3.5 text-[#FF5A1F] animate-spin" />
                <span>
                  {thinkingMode
                    ? 'Menganalisis secara mendalam dengan gemini-4-argon...'
                    : 'Menghasilkan jawaban dengan Gemini...'}
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          {messages.length <= 2 && !loading && (
            <div className="px-4 py-2 border-t border-[#1f1f1f] bg-[#0c0c0c] flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {starterPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-full bg-[#171717] hover:bg-[#222222] border border-[#2a2a2a] text-[11px] text-[#A3A3A3] hover:text-white whitespace-nowrap transition-colors cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          <div className="p-3 bg-[#141414] border-t border-[#222222]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  thinkingMode
                    ? 'Ajukan pertanyaan arsitektur mendalam atau estimasi...'
                    : 'Tanyakan apa saja seputar portofolio Fajar...'
                }
                disabled={loading}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#292929] text-white placeholder-[#525252] text-xs sm:text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] text-white hover:opacity-90 transition-opacity disabled:opacity-40 cursor-pointer"
                aria-label="Kirim pesan"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
