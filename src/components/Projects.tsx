import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Eye, X, Laptop, Tablet, Smartphone, Maximize2 } from 'lucide-react';
import { PORTFOLIO_DATA, ProjectItem } from '../data/portfolio';

export const Projects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const [livePreviewProject, setLivePreviewProject] = useState<ProjectItem | null>(null);
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

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

  const handleImageError = (projectId: string) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };

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
              Kumpulan proyek pilihan yang dibangun dengan perpaduan kreativitas, rekayasa web modern, dan desain bersih.
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
          {filteredProjects.map((project) => {
            const hasError = imageErrors[project.id];

            return (
              <div
                key={project.id}
                className="group rounded-3xl bg-[#141414] border border-[#242424] hover:border-[#FF5A1F]/50 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF5A1F]/10 hover:-translate-y-1"
              >
                {/* Thumbnail Container with Image Zoom */}
                <div
                  onClick={() => setActiveProjectModal(project)}
                  className="relative aspect-[4/3] overflow-hidden bg-[#0c0c0c] cursor-pointer"
                >
                  {!hasError ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(project.id)}
                    />
                  ) : (
                    /* High-Fidelity Styled Fallback Container */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#1a110e] to-[#0d0705] text-center space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 flex items-center justify-center text-[#FF5A1F]">
                        <Eye className="w-6 h-6" />
                      </div>
                      <div className="text-sm font-bold text-white font-display">
                        {project.title}
                      </div>
                      <div className="text-xs text-[#A3A3A3] font-mono">
                        {project.category}
                      </div>
                    </div>
                  )}

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
                      onClick={() => setLivePreviewProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#FF5A1F] transition-colors cursor-pointer group/btn"
                    >
                      <span>Pratinjau Langsung</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
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
            );
          })}
        </div>
      </div>

      {/* Interactive In-App Live Preview Sandbox Modal */}
      {livePreviewProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-5xl h-[90vh] bg-[#121212] border border-[#2e2e2e] rounded-3xl flex flex-col overflow-hidden shadow-2xl">
            {/* Browser Header Bar */}
            <div className="px-5 py-3.5 bg-[#171717] border-b border-[#262626] flex items-center justify-between gap-4">
              {/* Traffic Lights & Title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0e0e0e] border border-[#242424] text-xs font-mono text-[#8C8C8C]">
                  <span className="text-[#FF5A1F]">https://</span>
                  <span>fajar-jay.vercel.app/demo/{livePreviewProject.id}</span>
                </div>
              </div>

              {/* Viewport Switcher (Desktop / Tablet / Mobile) */}
              <div className="flex items-center gap-1 p-1 bg-[#0e0e0e] border border-[#242424] rounded-xl">
                <button
                  onClick={() => setViewportMode('desktop')}
                  className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                    viewportMode === 'desktop' ? 'bg-[#262626] text-white' : 'text-[#737373] hover:text-white'
                  }`}
                  title="Desktop View (100%)"
                >
                  <Laptop className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewportMode('tablet')}
                  className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                    viewportMode === 'tablet' ? 'bg-[#262626] text-white' : 'text-[#737373] hover:text-white'
                  }`}
                  title="Tablet View (768px)"
                >
                  <Tablet className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewportMode('mobile')}
                  className={`p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                    viewportMode === 'mobile' ? 'bg-[#262626] text-white' : 'text-[#737373] hover:text-white'
                  }`}
                  title="Mobile View (390px)"
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setLivePreviewProject(null)}
                className="p-1.5 rounded-full bg-[#222222] text-[#A3A3A3] hover:text-white transition-colors cursor-pointer"
                aria-label="Tutup preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Live Viewport Area */}
            <div className="flex-1 bg-[#090909] overflow-y-auto flex items-start justify-center p-4 sm:p-6">
              <div
                className={`transition-all duration-300 rounded-2xl overflow-hidden border border-[#292929] bg-[#141414] shadow-2xl ${
                  viewportMode === 'desktop'
                    ? 'w-full'
                    : viewportMode === 'tablet'
                    ? 'w-[768px] max-w-full'
                    : 'w-[390px] max-w-full'
                }`}
              >
                {/* Embedded High-Resolution Project Showcase Canvas */}
                <div className="relative">
                  <img
                    src={livePreviewProject.image}
                    alt={livePreviewProject.title}
                    className="w-full h-auto object-cover"
                  />

                  {/* Top Bar inside simulated UI */}
                  <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between text-xs text-white">
                    <span className="font-bold tracking-wider font-mono text-[#FF5A1F]">
                      LIVE INTERACTIVE SANDBOX
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 font-mono text-[11px]">
                      {livePreviewProject.category}
                    </span>
                  </div>
                </div>

                {/* Interactive Details Strip */}
                <div className="p-6 bg-[#141414] border-t border-[#242424] space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h4 className="text-xl font-bold text-white font-display">
                        {livePreviewProject.title}
                      </h4>
                      <p className="text-xs text-[#A3A3A3] mt-1">
                        {livePreviewProject.longDescription || livePreviewProject.description}
                      </p>
                    </div>

                    <a
                      href={livePreviewProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#202020] hover:bg-[#282828] text-white text-xs font-semibold whitespace-nowrap border border-[#333333] transition-colors self-start sm:self-auto"
                    >
                      <Github className="w-4 h-4" />
                      <span>Kode di GitHub</span>
                    </a>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#202020]">
                    {livePreviewProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1 rounded-lg bg-[#0e0e0e] text-[#D4D4D4] border border-[#262626]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                onError={() => handleImageError(activeProjectModal.id)}
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
              Catatan: Didesain dan dikurasi khusus untuk portofolio Fajar Ramadhan (JAY). Terintegrasi dengan build Vercel.
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

              <button
                onClick={() => {
                  const target = activeProjectModal;
                  setActiveProjectModal(null);
                  setLivePreviewProject(target);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] text-white text-xs font-bold transition-all shadow-md shadow-[#FF5A1F]/20 cursor-pointer"
              >
                <span>Buka Pratinjau Interaktif</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
