import React from 'react';
import { Globe, Code2, Palette, Sparkles, Check, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  '01': <Globe className="w-6 h-6 text-[#FF5A1F]" />,
  '02': <Code2 className="w-6 h-6 text-[#FF5A1F]" />,
  '03': <Palette className="w-6 h-6 text-[#FF5A1F]" />,
  '04': <Sparkles className="w-6 h-6 text-[#FF5A1F]" />,
};

export const Services: React.FC = () => {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0b0b0b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#FF5A1F] uppercase font-mono">
            <span className="w-4 h-[1.5px] bg-[#FF5A1F]" />
            <span>LAYANAN</span>
            <span className="w-4 h-[1.5px] bg-[#FF5A1F]" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            APA YANG BISA SAYA BANTU
          </h2>
          <p className="text-sm sm:text-base text-[#A3A3A3]">
            Keahlian digital menyeluruh mulai dari alur pengguna awal dan desain visual hingga kode produksi berkinerja tinggi.
          </p>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative rounded-3xl bg-[#141414] hover:bg-[#181818] border border-[#242424] hover:border-[#FF5A1F]/40 p-7 sm:p-9 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top-right gradient highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,_rgba(255,90,31,0.12)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="space-y-5">
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-[#1c1c1c] border border-[#2d2d2d] group-hover:border-[#FF5A1F]/40 transition-colors">
                    {SERVICE_ICONS[service.number]}
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-[#333333] group-hover:text-[#FF5A1F]/60 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-white font-display">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#A3A3A3] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables checklist */}
                <div className="space-y-2 pt-2 border-t border-[#202020]">
                  <div className="text-[11px] font-mono text-[#737373] uppercase tracking-wider">
                    OUTPUT & FITUR UTAMA
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#D4D4D4]">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 mt-6 border-t border-[#1f1f1f]">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#A3A3A3] group-hover:text-[#FF5A1F] transition-colors"
                >
                  <span>Diskusikan Layanan Ini</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
