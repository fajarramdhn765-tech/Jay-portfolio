import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, ArrowUpRight, Github, Linkedin, MapPin, Clock } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Contact: React.FC = () => {
  const { contact, personal } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== 'idle') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Mohon masukkan nama lengkap Anda.';
    if (!formData.email.trim()) return 'Mohon masukkan alamat email Anda.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) return 'Mohon masukkan alamat email yang valid.';
    if (!formData.subject.trim()) return 'Mohon masukkan subjek pesan.';
    if (!formData.message.trim()) return 'Mohon tuliskan isi pesan Anda.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus('error');
      setErrorMessage(validationError);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setSuccessMessage(data.message || 'Pesan Anda berhasil dikirim! Fajar akan segera membalas.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.error || 'Gagal mengirim pesan.');
      }
    } catch (err: any) {
      console.warn('Backend submission fallback to mailto:', err);
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Halo Fajar,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;

      setStatus('success');
      setSuccessMessage('Membuka aplikasi email Anda dengan detail pesan yang telah terisi...');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#090909] relative overflow-hidden">
      {/* Background ambient orange lighting */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-[radial-gradient(circle,_rgba(255,90,31,0.12)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#FF5A1F] uppercase font-mono">
            <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
            <span>HUBUNGI SAYA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-display leading-[1.1]">
            {contact.headline}
          </h2>
          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            {contact.description}
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              {/* WhatsApp direct card */}
              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 rounded-2xl bg-[#141414] hover:bg-[#181818] border border-[#242424] hover:border-[#FF5A1F]/50 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#737373]">WHATSAPP LANGSUNG</div>
                      <div className="text-base font-bold text-white group-hover:text-[#FF5A1F] transition-colors font-display">
                        {personal.whatsappFormatted}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#FF5A1F] transition-colors" />
                </div>
                <div className="mt-3 text-xs text-[#A3A3A3]">
                  Obrolan langsung di WhatsApp untuk diskusi cepat dan penentuan linimasa proyek.
                </div>
              </a>

              {/* Email direct card */}
              <a
                href={`mailto:${personal.email}?subject=Diskusi%20Proyek%20dengan%20Fajar`}
                className="group block p-6 rounded-2xl bg-[#141414] hover:bg-[#181818] border border-[#242424] hover:border-[#FF5A1F]/50 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-[#FF5A1F]/15 text-[#FF5A1F] border border-[#FF5A1F]/30">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#737373]">EMAIL RESMI</div>
                      <div className="text-base font-bold text-white group-hover:text-[#FF5A1F] transition-colors font-display">
                        {personal.email}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#FF5A1F] transition-colors" />
                </div>
                <div className="mt-3 text-xs text-[#A3A3A3]">
                  Kirimkan brief proyek mendalam, dokumen RFP, atau tawaran kerja sama profesional.
                </div>
              </a>
            </div>

            {/* Location & Timeframe info */}
            <div className="p-6 rounded-2xl bg-[#121212] border border-[#222222] space-y-3 text-xs font-mono text-[#A3A3A3]">
              <div className="flex items-center gap-2 text-white">
                <MapPin className="w-4 h-4 text-[#FF5A1F]" />
                <span className="font-semibold">{personal.location}, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#737373]" />
                <span>{contact.responseTime}</span>
              </div>
            </div>

            {/* Social links row */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#141414] hover:bg-[#1e1e1e] border border-[#242424] text-xs font-semibold text-white transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Profil GitHub</span>
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#141414] hover:bg-[#1e1e1e] border border-[#242424] text-xs font-semibold text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-[#242424] shadow-2xl space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Kirim Pesan Langsung
              </h3>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800 text-emerald-300 text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400 mt-0.5" />
                  <div>
                    <div className="font-bold">Pesan Terkirim</div>
                    <div className="text-xs text-emerald-400/90 mt-0.5">{successMessage}</div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-800 text-red-300 text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-red-400 mt-0.5" />
                  <div>
                    <div className="font-bold">Pemberitahuan</div>
                    <div className="text-xs text-red-400/90 mt-0.5">{errorMessage}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[#A3A3A3]">
                      NAMA LENGKAP *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="cth. Sarah Jenkins"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0e0e] border border-[#262626] text-white placeholder-[#525252] text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-[#A3A3A3]">
                      ALAMAT EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="cth. sarah@perusahaan.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0e0e0e] border border-[#262626] text-white placeholder-[#525252] text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-[#A3A3A3]">
                    SUBJEK *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="cth. Pembuatan Website Baru / Konsultasi Redesign"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0e0e] border border-[#262626] text-white placeholder-[#525252] text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-medium text-[#A3A3A3]">
                    PESAN *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan tentang rencana proyek, linimasa yang diharapkan, dan detail kebutuhan Anda..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0e0e0e] border border-[#262626] text-white placeholder-[#525252] text-sm focus:outline-none focus:border-[#FF5A1F] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] hover:from-[#f04e13] hover:to-[#db200f] text-white font-bold text-sm transition-all shadow-lg shadow-[#FF5A1F]/25 disabled:opacity-50 cursor-pointer"
                >
                  {status === 'loading' ? (
                    <span>Memvalidasi & Mengirim...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan →</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
