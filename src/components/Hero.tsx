import React from 'react';
import { ArrowUpRight, Terminal, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface HeroProps {
  onOpenChat?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const { hero, personal } = PORTFOLIO_DATA;

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[550px] bg-[radial-gradient(ellipse_at_center,_rgba(255,90,31,0.22)_0%,_rgba(241,43,25,0.08)_45%,_transparent_75%)] blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Container Card with Cinematic Arch / Lighting */}
        <div className="relative rounded-3xl sm:rounded-[2.5rem] border border-[#292929] bg-gradient-to-b from-[#1c0f0a] via-[#120806] to-[#0d0d0d] p-6 sm:p-10 lg:p-14 overflow-hidden shadow-2xl">
          {/* Subtle atmospheric inner lighting mesh */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(circle,_rgba(255,90,31,0.35)_0%,_transparent_70%)] blur-2xl pointer-events-none opacity-80" />
          <div className="absolute -bottom-10 -left-10 w-[350px] h-[300px] bg-[radial-gradient(circle,_rgba(241,43,25,0.15)_0%,_transparent_70%)] blur-2xl pointer-events-none opacity-60" />

          {/* Top Hero Grid: Typography + Portrait + Supporting Copy */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10">
            {/* Left Column: Bold Headline & Persona Title */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#FF5A1F] uppercase font-mono">
                <span className="w-6 h-[1.5px] bg-[#FF5A1F]" />
                <span>{hero.kicker}</span>
              </div>

              <div className="space-y-1">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05] font-display">
                  <span className="block text-white">{personal.name.split(' ')[0]}</span>
                  <span className="block text-gradient-orange">{personal.name.split(' ')[1]}</span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#D4D4D4] pt-2 font-display">
                  {hero.title}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#A3A3A3] max-w-md leading-relaxed">
                {hero.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] hover:from-[#f04e13] hover:to-[#db200f] rounded-full transition-all shadow-lg shadow-[#FF5A1F]/25 hover:shadow-[#FF5A1F]/40 cursor-pointer"
                >
                  <span>{hero.ctaPrimary}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white/90 hover:text-white bg-[#171717] hover:bg-[#222222] border border-[#2e2e2e] hover:border-[#FF5A1F]/50 rounded-full transition-all cursor-pointer"
                >
                  <span>{hero.ctaSecondary}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#A3A3A3]" />
                </a>
              </div>
            </div>

            {/* Center Column: Portrait Visual */}
            <div className="lg:col-span-4 flex justify-center items-center my-4 lg:my-0">
              <div className="relative group w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
                {/* Glowing rim backdrop behind portrait */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#FF5A1F]/30 via-[#F12B19]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-80" />

                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#38201a] bg-[#120806]/80 aspect-[4/5] shadow-2xl flex items-center justify-center">
                  <img
                    src={personal.profileImage}
                    alt={`${personal.name} — ${personal.title}`}
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.src = '/assets/aistudio/file_0000000070bc8211be072aa7d2ee41ac_c1f329c1.png';
                    }}
                  />

                  {/* Gradient bottom scrim for cinematic framing */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0705] via-transparent to-transparent opacity-75 pointer-events-none" />

                  {/* Availability badge overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#090909]/80 backdrop-blur-md border border-[#2e2e2e] text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-white/90 font-medium">{personal.availability}</span>
                    </div>
                    <span className="text-[#A3A3A3] text-[11px] font-mono">{personal.location.split(' ')[0]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Quote & Philosophy */}
            <div className="lg:col-span-3 flex flex-col justify-between space-y-6 lg:pl-4">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#141414]/70 border border-[#262626] backdrop-blur-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF5A1F]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>FILOSOFI DESAIN</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-display leading-snug">
                  "{hero.quote}"
                </h2>
                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  {hero.quoteSub}
                </p>
              </div>

              {onOpenChat && (
                <div
                  onClick={onOpenChat}
                  className="p-5 rounded-2xl bg-gradient-to-br from-[#1a120e] to-[#120e0d] border border-[#3b2319] hover:border-[#FF5A1F] transition-all cursor-pointer group space-y-2 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#FF5A1F] uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <Sparkles className="w-3.5 h-3.5" />
                      Tanya AI JAY
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#A3A3A3] group-hover:text-[#FF5A1F] transition-colors" />
                  </div>
                  <p className="text-xs text-[#D4D4D4] leading-relaxed">
                    Butuh konsultasi teknologi atau estimasi kelayakan proyek? Diskusikan dengan asisten AI portofolio saya.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Expertise Strip (01 to 04) */}
          <div className="mt-10 pt-8 border-t border-[#292929]/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {hero.expertise.map((item) => (
              <div
                key={item.id}
                className="group p-3.5 sm:p-4 rounded-xl bg-[#121212]/60 hover:bg-[#1a1a1a] border border-transparent hover:border-[#2e2e2e] transition-all cursor-default"
              >
                <div className="text-xs font-mono text-[#FF5A1F] font-semibold mb-1">
                  #{item.id}
                </div>
                <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF5A1F] transition-colors font-display">
                  {item.title}
                </div>
                <div className="text-xs text-[#737373] mt-0.5 line-clamp-1">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
