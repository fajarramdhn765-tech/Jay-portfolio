import React, { useState } from 'react';
import { ArrowUpRight, Download, MapPin, X, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const About: React.FC = () => {
  const { about, personal } = PORTFOLIO_DATA;
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const handleDownloadCV = () => {
    setCvModalOpen(true);
  };

  const handleExportTextResume = () => {
    const resumeText = `FAJAR RAMADHAN (JAY)
Creative Web Developer
Email: ${personal.email}
WhatsApp: ${personal.whatsappFormatted}
Lokasi: ${personal.location}, Indonesia
GitHub: ${personal.githubUrl}
LinkedIn: ${personal.linkedinUrl}

RINGKASAN PROFESIONAL:
${personal.bio}

KEAHLIAN UTAMA:
- Frontend: React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS
- Alat & Workflow: Git, GitHub, Vite, Node.js, Express, Figma, Desain UI/UX Responsif
- Spesialisasi: Desain Web Dark Minimalist Editorial, Optimasi Performa, Arsitektur Komponen

PENCAPAIAN UTAMA:
- 15+ Proyek Web Selesai
- 100% Standar Kode Bersih
- Latensi Mikro-interaksi Sub-200ms

PORTOFOLIO & KARYA PILIHAN:
1. AURUM Luxe E-Commerce (React, TypeScript, Tailwind)
2. METRICA Analytics Suite (Next.js, Telemetry, UI)
3. QUANTUM Frontier Launchpad (Brutalist Landing Page)
4. AURA Collaborative Canvas (Aplikasi Web)
5. CHROMALUMIN Spatial Lab (Studio Web Kreatif)
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Fajar_Ramadhan_JAY_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#FF5A1F] uppercase font-mono mb-3">
            <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
            <span>{about.kicker}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-4xl font-display leading-[1.15]">
            {about.headline}
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Personal Introduction Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#141414] border border-[#262626] p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden group">
              {/* Subtle orange accent gradient glow in corner */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF5A1F]/10 blur-2xl pointer-events-none group-hover:bg-[#FF5A1F]/20 transition-all" />

              {/* Profile Card Header */}
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#38201a] shrink-0 bg-[#0e0705]">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#FF5A1F] uppercase tracking-wider">
                    {personal.brandName} · {personal.role}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {personal.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-[#A3A3A3]">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5A1F]" />
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>

              {/* Biography snippet */}
              <p className="text-sm text-[#A3A3A3] leading-relaxed border-t border-[#222222] pt-5">
                {personal.bio}
              </p>

              {/* Detailed personal properties */}
              <div className="space-y-3 pt-2 text-xs font-mono">
                <div className="flex items-center justify-between py-2 border-b border-[#222222]">
                  <span className="text-[#737373]">KETERSEDIAAN</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {personal.availability}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#222222]">
                  <span className="text-[#737373]">DISIPLIN UTAMA</span>
                  <span className="text-white">Full-Stack Frontend & UI/UX</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#222222]">
                  <span className="text-[#737373]">KONTAK LANGSUNG</span>
                  <span className="text-[#D4D4D4]">{personal.email}</span>
                </div>
              </div>

              {/* Download CV CTA */}
              <button
                onClick={handleDownloadCV}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] hover:from-[#f04e13] hover:to-[#db200f] text-white font-semibold text-sm transition-all shadow-lg shadow-[#FF5A1F]/20 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Unduh CV →</span>
              </button>
            </div>
          </div>

          {/* Right Column: Narrative & Quantitative Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
              <p className="text-white font-medium text-lg sm:text-xl leading-relaxed">
                {about.paragraphs[0]}
              </p>
              <p>
                {about.paragraphs[1]}
              </p>
            </div>

            {/* Key Performance Indicators & Proof Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#222222]">
              {about.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#121212] border border-[#222222] space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-display text-gradient-orange">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#737373] font-mono leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Values Banner */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-[#262626] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#FF5A1F] font-semibold">SIAP BERKOLABORASI</div>
                <div className="text-sm font-semibold text-white">
                  Mencari solusi rekayasa web yang bersih, teruji, dan berkinerja tinggi?
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#1e1e1e] hover:bg-[#282828] border border-[#333333] text-xs font-semibold text-white transition-all whitespace-nowrap"
              >
                <span>Tanyakan Ketersediaan</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5A1F]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CV Modal Preview & Download Dialog */}
      {cvModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#141414] border border-[#2e2e2e] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setCvModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#202020] text-[#A3A3A3] hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-[#FF5A1F] mb-4">
              <FileText className="w-6 h-6" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase">
                PRATINJAU CURRICULUM VITAE
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white font-display mb-1">
              {personal.name}
            </h3>
            <p className="text-sm text-[#A3A3A3] mb-6">
              {personal.title} · {personal.location}, Indonesia
            </p>

            <div className="space-y-4 text-sm text-[#D4D4D4] bg-[#0c0c0c] p-5 rounded-2xl border border-[#242424] font-mono leading-relaxed">
              <div>
                <span className="text-[#FF5A1F] font-bold">TENTANG:</span> {personal.bio}
              </div>
              <div>
                <span className="text-[#FF5A1F] font-bold">KEAHLIAN:</span> React, Next.js, TypeScript, JavaScript, Tailwind CSS, HTML5, CSS3, Git, Vite, Node.js
              </div>
              <div>
                <span className="text-[#FF5A1F] font-bold">EMAIL:</span> {personal.email}
              </div>
              <div>
                <span className="text-[#FF5A1F] font-bold">WHATSAPP:</span> {personal.whatsappFormatted}
              </div>
              <div>
                <span className="text-[#FF5A1F] font-bold">STATUS:</span> {personal.availability}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 mt-6 pt-4 border-t border-[#262626]">
              <button
                onClick={() => setCvModalOpen(false)}
                className="px-4 py-2 text-xs font-medium text-[#A3A3A3] hover:text-white cursor-pointer"
              >
                Tutup
              </button>
              <button
                onClick={handleExportTextResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] text-white text-xs font-bold transition-all shadow-md shadow-[#FF5A1F]/20 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Simpan CV ke Perangkat</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
