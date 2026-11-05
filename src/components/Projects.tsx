import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Eye, X } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolio';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = [
    'Semua',
    'Website E-Commerce',
    'Modern Dashboard UI',
    'Portofolio Personal',
    'Desain Landing Page',
    'Aplikasi Web',
    'Website Kreatif',
  ];

  const filteredProjects =
    selectedCategory === 'Semua'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#090909] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-[radial-gradient(circle,_rgba(255,90,31,0.08)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#FF5A1F] uppercase font-mono">
              <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
              <span>KARYA PILIHAN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Koleksi Kreasi Digital
            </h2>
            <p className="text-sm sm:text-base text-[#A3A3A3] max-w-xl">
              Kumpulan proyek pilihan yang dibangun dengan perpaduan kreativitas, rekayasa web modern, dan desain elegan.
            </p>
          </div>

          <div className="text-xs font-mono text-[#737373] self-start md:self-end">
            MENAMPILKAN {filteredProjects.length} DARI {projects.length} KARYA
          </div>
        </div>

        {/* Filter Tabs (Interactive Segmented Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] text-white shadow-md shadow-[#FF5A1F]/20'
                    : 'bg-[#141414] hover:bg-[#1f1f1f] text-[#A3A3A3] hover:text-white border border-[#262626]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#141414] border border-[#242424] hover:border-[#FF5A1F]/50 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF5A1F]/10 hover:-translate-y-1"
            >
              {/* Thumbnail Container with Image Zoom */}
              <div
                onClick={() => setActiveProjectModal(project)}
                className="relative aspect-[4/3] overflow-hidden bg-[#0c0c0c] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                  }}
                />

                {/* Subtle dark gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />

                {/* Top Number & Category Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-lg bg-[#090909]/80 backdrop-blur-md text-[#FF5A1F] font-semibold border border-[#292929]">
                    #{project.number}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#090909]/80 backdrop-blur-md text-[#D4D4D4] border border-[#292929]">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-bold shadow-xl">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Lihat Studi Kasus</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <h3
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xl font-bold text-white group-hover:text-[#FF5A1F] transition-colors font-display cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1f1f1f]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-[#8C8C8C] px-2 py-0.5 rounded-md bg-[#0e0e0e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions: Live Preview & Source Code */}
                <div className="flex items-center justify-between pt-3 gap-3">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#FF5A1F] transition-colors cursor-pointer"
                  >
                    <span>Pratinjau Langsung</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#737373] hover:text-white transition-colors"
                    title="Periksa Kode Sumber di GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Kode Sumber</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Project Case Study Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#141414] border border-[#2e2e2e] rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#202020] text-[#A3A3A3] hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Category & Title */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF5A1F]">
                <span>PROYEK #{activeProjectModal.number}</span>
                <span>·</span>
                <span>{activeProjectModal.category}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {activeProjectModal.title}
              </h3>
            </div>

            {/* Large Modal Image */}
            <div className="rounded-2xl overflow-hidden border border-[#292929] bg-[#0c0c0c] aspect-video">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Narrative description */}
            <div className="space-y-3 text-sm text-[#D4D4D4] leading-relaxed">
              <h4 className="text-xs font-mono font-bold uppercase text-[#FF5A1F] tracking-wider">
                IKHTISAR & ARSITEKTUR
              </h4>
              <p>{activeProjectModal.longDescription || activeProjectModal.description}</p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase text-[#737373] tracking-wider">
                TEKNOLOGI YANG DIGUNAKAN
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-[#1f1f1f] text-[#E5E5E5] border border-[#2d2d2d]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Notice about demo link */}
            <div className="p-3.5 rounded-xl bg-[#1c120c] border border-[#3d2417] text-xs text-[#E5A07A]">
              Catatan: Ini adalah studi kasus demo yang dikurasi untuk portofolio Fajar Ramadhan. Tautan demo dan repositori dapat disesuaikan pada file <code className="text-white font-mono">src/data/portfolio.ts</code>.
            </div>

            {/* Footer Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#262626]">
              <a
                href={activeProjectModal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1e1e1e] hover:bg-[#282828] border border-[#333333] text-xs font-semibold text-white transition-all"
              >
                <Github className="w-4 h-4" />
                <span>Lihat di GitHub</span>
              </a>

              <a
                href={activeProjectModal.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Pratinjau Demo untuk "${activeProjectModal.title}": Dalam lingkungan live terhubung ke: ${activeProjectModal.liveUrl}`);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] text-white text-xs font-bold transition-all shadow-md shadow-[#FF5A1F]/20 cursor-pointer"
              >
                <span>Buka Antarmuka Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
