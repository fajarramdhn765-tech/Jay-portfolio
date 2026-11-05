import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'design' | 'tools'>('all');

  const filteredSkills =
    activeTab === 'all'
      ? skills
      : skills.filter((s) => s.category === activeTab || (activeTab === 'frontend' && s.category === 'core'));

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#090909] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#FF5A1F] uppercase font-mono">
              <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
              <span>KEAHLIAN SAYA</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Kompetensi Teknis & Alat Kerja
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] max-w-xl">
              Dikuasai dengan standar teknologi industri modern untuk menghasilkan website yang cepat, aman, dan memikat.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 p-1 bg-[#141414] border border-[#242424] rounded-xl self-start md:self-end">
            {(
              [
                { id: 'all', label: 'Semua Bidang' },
                { id: 'frontend', label: 'Kode & Framework' },
                { id: 'design', label: 'UI & Desain' },
                { id: 'tools', label: 'Alat Dev' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#222222] text-white shadow-sm'
                    : 'text-[#A3A3A3] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-[#141414] border border-[#242424] hover:border-[#2e2e2e] transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white font-display">
                    {skill.name}
                  </h3>
                  <span className="text-[11px] font-mono text-[#737373] uppercase">
                    Tingkat: {skill.level}
                  </span>
                </div>
                <div className="text-sm font-bold font-mono text-white tabular-nums">
                  {skill.percentage}%
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-[#1f1f1f] overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Technical Philosophy Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#121212] border border-[#222222] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A3A3A3]">
          <div>
            <span className="text-[#FF5A1F] font-bold">METRIK KEMAMPUAN:</span> Dikonfigurasi melalui file data terpusat di <code className="text-white">src/data/portfolio.ts</code>.
          </div>
          <div className="text-white/80">
            Terus diperbarui mengikuti perkembangan standar React 19 & Next.js.
          </div>
        </div>
      </div>
    </section>
  );
};
