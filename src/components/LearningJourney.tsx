import React, { useState } from 'react';
import {
  Sparkles,
  Brain,
  Code2,
  Gamepad2,
  Smartphone,
  Palette,
  CloudUpload,
  CheckCircle2,
  Clock,
  Compass,
  FileCode,
  ArrowUpRight,
  Eye,
  X,
  Github,
  ChevronDown,
  ChevronUp,
  Target,
  Wrench,
  BookOpen,
} from 'lucide-react';
import { PORTFOLIO_DATA, ShowcaseWorkItem, ProjectStatusType } from '../data/portfolio';

// Icon mapping for timeline chapters
const TIMELINE_ICONS: Record<string, React.ReactNode> = {
  '01': <Brain className="w-5 h-5 text-[#FF5A1F]" />,
  '02': <Code2 className="w-5 h-5 text-[#FF5A1F]" />,
  '03': <Gamepad2 className="w-5 h-5 text-[#FF5A1F]" />,
  '04': <Smartphone className="w-5 h-5 text-[#FF5A1F]" />,
  '05': <Palette className="w-5 h-5 text-[#FF5A1F]" />,
  '06': <CloudUpload className="w-5 h-5 text-[#FF5A1F]" />,
};

// Status badge styling helper
const getStatusBadge = (status: ProjectStatusType) => {
  switch (status) {
    case 'Completed':
      return {
        label: 'Completed',
        bg: 'bg-emerald-950/60 text-emerald-400 border-emerald-800/80',
        dot: 'bg-emerald-400',
        description: 'Karya sudah selesai dan diuji.',
      };
    case 'Prototype':
      return {
        label: 'Prototype',
        bg: 'bg-amber-950/60 text-amber-400 border-amber-800/80',
        dot: 'bg-amber-400',
        description: 'Prototipe sudah dibuat dan berfungsi.',
      };
    case 'Prompt Created':
      return {
        label: 'Prompt Created',
        bg: 'bg-purple-950/60 text-purple-400 border-purple-800/80',
        dot: 'bg-purple-400',
        description: 'Konsep & prompt sudah dirancang terstruktur.',
      };
    case 'In Progress':
      return {
        label: 'In Progress',
        bg: 'bg-blue-950/60 text-blue-400 border-blue-800/80',
        dot: 'bg-blue-400',
        description: 'Proses pengerjaan sedang berlangsung.',
      };
    case 'Learning':
    default:
      return {
        label: 'Learning',
        bg: 'bg-zinc-800/80 text-zinc-300 border-zinc-700',
        dot: 'bg-zinc-400',
        description: 'Materi yang sedang aktif dipelajari.',
      };
  }
};

export const LearningJourney: React.FC = () => {
  const { learningJourney, showcaseWorks, learningPhilosophy } = PORTFOLIO_DATA;

  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [activeWorkModal, setActiveWorkModal] = useState<ShowcaseWorkItem | null>(null);
  const [expandedTimelineId, setExpandedTimelineId] = useState<string>('timeline-01');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const categories = [
    'Semua',
    'AI & Prompt Engineering',
    'Web Development',
    'Game Development',
    'Android Application',
    'Creative Design',
    'Deployment & PWA',
  ];

  const filteredWorks =
    activeCategory === 'Semua'
      ? showcaseWorks
      : showcaseWorks.filter((w) => w.category === activeCategory);

  const handleImageError = (workId: string) => {
    setImageErrors((prev) => ({ ...prev, [workId]: true }));
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#090909] relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-[radial-gradient(circle,_rgba(255,90,31,0.08)_0%,_transparent_70%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[400px] bg-[radial-gradient(circle,_rgba(241,43,25,0.06)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24 sm:space-y-32">
        {/* ========================================================================= */}
        {/* A. SECTION HEADER & NARRATIVE */}
        {/* ========================================================================= */}
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#FF5A1F] uppercase font-mono">
            <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
            <span>{learningJourney.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-display leading-[1.1]">
            {learningJourney.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#A3A3A3] leading-relaxed">
            {learningJourney.description}
          </p>

          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#171717] border border-[#292929] text-xs font-mono text-[#E5E5E5]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F]" />
            <span className="font-semibold">{learningJourney.tagline}</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* B. LEARNING TIMELINE */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#222222] pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#FF5A1F] uppercase tracking-wider">
                FASE EKSPLORASI & PENGEMBANGAN
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Tahapan Perjalanan Pembelajaran
              </h3>
            </div>
            <p className="text-xs text-[#737373] font-mono">
              6 FASE PEMBELAJARAN TERSTRUKTUR
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningJourney.timeline.map((item) => {
              const isExpanded = expandedTimelineId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => setExpandedTimelineId(isExpanded ? '' : item.id)}
                  className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                    isExpanded
                      ? 'bg-[#161616] border-[#FF5A1F]/60 shadow-xl shadow-[#FF5A1F]/10'
                      : 'bg-[#121212] hover:bg-[#161616] border-[#242424] hover:border-[#383838]'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top indicator & chapter number */}
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-[#1c1c1c] border border-[#2b2b2b] group-hover:border-[#FF5A1F]/40 transition-colors">
                        {TIMELINE_ICONS[item.number]}
                      </div>
                      <span className="text-xs font-mono font-bold text-[#FF5A1F] px-2.5 py-1 rounded-lg bg-[#1a110e] border border-[#38201a]">
                        FASE #{item.number}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-[#FF5A1F] transition-colors font-display">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#8C8C8C] mt-1 font-mono leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-[#A3A3A3] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Expandable details: Learnings & Exercises */}
                    {isExpanded && (
                      <div className="pt-4 border-t border-[#262626] space-y-4 text-xs animate-in fade-in duration-300">
                        <div className="space-y-2">
                          <span className="font-mono font-bold text-[#FF5A1F] uppercase tracking-wider block">
                            FOKUS MATERI DIPELAJARI:
                          </span>
                          <ul className="space-y-1.5 text-[#D4D4D4]">
                            {item.learnings.map((learn, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#FF5A1F] mt-0.5">•</span>
                                <span>{learn}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2 pt-2 border-t border-[#1f1f1f]">
                          <span className="font-mono font-bold text-white uppercase tracking-wider block">
                            KARYA & HASIL LATIHAN:
                          </span>
                          <ul className="space-y-1 text-[#8C8C8C] font-mono">
                            {item.exercises.map((ex, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                                <span>{ex}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Toggle hint at bottom */}
                  <div className="pt-4 mt-4 border-t border-[#1f1f1f] flex items-center justify-between text-[11px] font-mono text-[#737373]">
                    <span>{isExpanded ? 'Tutup Rincian' : 'Klik untuk Rincian Materi'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#FF5A1F]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 group-hover:text-white transition-colors" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* C. PROJECT SHOWCASE DESIGN (Galeri Karya Edukatif) */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#222222] pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#FF5A1F] uppercase tracking-wider">
                DOKUMENTASI KARYA & PROYEK
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
                Galeri Hasil Eksplorasi & Latihan
              </h3>
              <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-xl">
                Dokumentasi jujur dari ide prompt, rancangan antarmuka, prototipe game, hingga aplikasi web yang telah dibangun dan diuji.
              </p>
            </div>

            <div className="text-xs font-mono text-[#737373] self-start md:self-end">
              MENAMPILKAN {filteredWorks.length} DARI {showcaseWorks.length} KARYA
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredWorks.map((work) => {
              const statusBadge = getStatusBadge(work.status);
              const hasError = imageErrors[work.id];

              return (
                <div
                  key={work.id}
                  className="group rounded-3xl bg-[#141414] border border-[#242424] hover:border-[#FF5A1F]/50 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF5A1F]/10 hover:-translate-y-1"
                >
                  {/* Thumbnail Container */}
                  <div
                    onClick={() => setActiveWorkModal(work)}
                    className="relative aspect-[4/3] overflow-hidden bg-[#0c0c0c] cursor-pointer"
                  >
                    {!hasError ? (
                      <img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={() => handleImageError(work.id)}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#1a110e] text-center space-y-2">
                        <Eye className="w-6 h-6 text-[#FF5A1F]" />
                        <span className="text-xs text-white font-display font-bold">
                          {work.title}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent opacity-60" />

                    {/* Top Indicators: Number & Status Badge */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-[#090909]/80 backdrop-blur-md text-[#FF5A1F] font-mono font-semibold border border-[#292929]">
                        #{work.number}
                      </span>

                      {/* Honest Status Badge */}
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold border backdrop-blur-md ${statusBadge.bg}`}
                        title={statusBadge.description}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${statusBadge.dot}`} />
                        <span>{statusBadge.label}</span>
                      </span>
                    </div>

                    {/* Category Label Bottom of Thumbnail */}
                    <div className="absolute bottom-3 left-4">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#090909]/90 backdrop-blur-md text-[#D4D4D4] border border-[#2b2b2b]">
                        {work.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
                    <div className="space-y-3">
                      <h4
                        onClick={() => setActiveWorkModal(work)}
                        className="text-xl font-bold text-white group-hover:text-[#FF5A1F] transition-colors font-display cursor-pointer leading-snug"
                      >
                        {work.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#A3A3A3] line-clamp-2 leading-relaxed">
                        {work.description}
                      </p>

                      {/* Key Learnings List (Hal yang dipelajari) */}
                      <div className="pt-2 border-t border-[#1f1f1f] space-y-1.5">
                        <span className="text-[11px] font-mono font-bold text-[#FF5A1F] uppercase tracking-wider block">
                          HAL YANG DIPELAJARI:
                        </span>
                        <ul className="space-y-1 text-xs text-[#D4D4D4]">
                          {work.keyLearnings.slice(0, 2).map((learn, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 line-clamp-1">
                              <span className="text-[#FF5A1F] mt-0.5">•</span>
                              <span>{learn}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tools and Action Footer */}
                    <div className="space-y-4 pt-3 border-t border-[#1f1f1f]">
                      {/* Tools Used Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {work.tools.slice(0, 4).map((tool) => (
                          <span
                            key={tool}
                            className="text-[10px] font-mono text-[#8C8C8C] px-2 py-0.5 rounded bg-[#0e0e0e] border border-[#222222]"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Action Button: View Details */}
                      <div className="flex items-center justify-between pt-1">
                        <button
                          onClick={() => setActiveWorkModal(work)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#FF5A1F] transition-colors cursor-pointer group/btn"
                        >
                          <span>View Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </button>

                        {work.githubUrl && (
                          <a
                            href={work.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-[#737373] hover:text-white transition-colors"
                            title="Buka Repositori"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span className="text-[11px]">GitHub</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* E. MY LEARNING PHILOSOPHY */}
        {/* ========================================================================= */}
        <div className="rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#160d09] via-[#120a07] to-[#0c0806] border border-[#3b2319] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl space-y-12">
          {/* Subtle warm glow background */}
          <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-[radial-gradient(circle,_rgba(255,90,31,0.18)_0%,_transparent_70%)] blur-3xl pointer-events-none" />

          {/* Heading block */}
          <div className="space-y-4 max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#FF5A1F] uppercase font-mono">
              <span className="w-5 h-[1.5px] bg-[#FF5A1F]" />
              <span>{learningPhilosophy.kicker}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.15]">
              "{learningPhilosophy.headline}"
            </h3>

            <p className="text-sm sm:text-base text-[#C4C4C4] leading-relaxed">
              {learningPhilosophy.description}
            </p>
          </div>

          {/* Three Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 pt-4 border-t border-[#331d15]">
            {learningPhilosophy.principles.map((pr) => (
              <div
                key={pr.number}
                className="p-6 rounded-2xl bg-[#140e0b]/80 border border-[#3a2016] hover:border-[#FF5A1F]/50 transition-all space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#FF5A1F]">
                    PRINSIP #{pr.number}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#FF5A1F] group-hover:scale-125 transition-transform" />
                </div>

                <h4 className="text-xl font-bold text-white font-display group-hover:text-[#FF5A1F] transition-colors">
                  {pr.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* D. PROJECT DETAIL INTERACTION MODAL */}
      {/* ========================================================================= */}
      {activeWorkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-3xl max-h-[92vh] bg-[#141414] border border-[#2e2e2e] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setActiveWorkModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#202020] text-[#A3A3A3] hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header: Category & Status */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="text-[#FF5A1F] font-bold">KARYA #{activeWorkModal.number}</span>
                <span className="text-[#555]">•</span>
                <span className="text-[#D4D4D4]">{activeWorkModal.category}</span>
                <span className="text-[#555]">•</span>
                {(() => {
                  const badge = getStatusBadge(activeWorkModal.status);
                  return (
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${badge.bg}`}>
                      {badge.label}
                    </span>
                  );
                })()}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {activeWorkModal.title}
              </h3>
            </div>

            {/* Image Preview */}
            <div className="rounded-2xl overflow-hidden border border-[#292929] bg-[#0c0c0c] aspect-video">
              <img
                src={activeWorkModal.image}
                alt={activeWorkModal.title}
                className="w-full h-full object-cover"
                onError={() => handleImageError(activeWorkModal.id)}
              />
            </div>

            {/* Project Overview */}
            <div className="space-y-2 text-sm text-[#D4D4D4] leading-relaxed">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF5A1F] uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>PROJECT OVERVIEW</span>
              </div>
              <p>{activeWorkModal.detailedOverview}</p>
            </div>

            {/* Learning Objectives */}
            <div className="space-y-2 text-xs sm:text-sm pt-2 border-t border-[#222222]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider">
                <Target className="w-4 h-4 text-[#FF5A1F]" />
                <span>LEARNING OBJECTIVES (TUJUAN BELAJAR)</span>
              </div>
              <ul className="space-y-1.5 text-[#A3A3A3]">
                {activeWorkModal.learningObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#FF5A1F] mt-0.5">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Technologies */}
            <div className="space-y-2 pt-2 border-t border-[#222222]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-wider">
                <Wrench className="w-4 h-4 text-[#FF5A1F]" />
                <span>TOOLS & TECHNOLOGIES</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeWorkModal.tools.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-[#1f1f1f] text-[#E5E5E5] border border-[#2d2d2d]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Development Process (AI-Assisted with ChatGPT) */}
            <div className="space-y-2 text-xs sm:text-sm pt-2 border-t border-[#222222]">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF5A1F] uppercase tracking-wider">
                <Brain className="w-4 h-4" />
                <span>DEVELOPMENT PROCESS & CHATGPT COLLABORATION</span>
              </div>
              <p className="text-[#A3A3A3] leading-relaxed">
                {activeWorkModal.developmentProcess}
              </p>
            </div>

            {/* Optional Prompt Example */}
            {activeWorkModal.promptExample && (
              <div className="p-4 rounded-2xl bg-[#0d0d0d] border border-[#262626] space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-[#FF5A1F] font-bold uppercase">
                  <FileCode className="w-4 h-4" />
                  <span>CONTOH PROMPT CHATGPT YANG DISUSUN:</span>
                </div>
                <div className="text-[#8C8C8C] bg-[#141414] p-3 rounded-xl border border-[#222222] whitespace-pre-wrap leading-relaxed">
                  "{activeWorkModal.promptExample}"
                </div>
              </div>
            )}

            {/* Skills Gained */}
            <div className="space-y-2 pt-2 border-t border-[#222222]">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                SKILLS GAINED (KEMAMPUAN YANG DIPEROLEH):
              </span>
              <div className="flex flex-wrap gap-2">
                {activeWorkModal.skillsGained.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#161616] text-emerald-400 border border-emerald-900/50"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Modal Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#262626]">
              <div className="text-xs font-mono text-[#737373]">
                Status: <span className="text-white">{activeWorkModal.statusDescription}</span>
              </div>

              <div className="flex items-center gap-3">
                {activeWorkModal.githubUrl && (
                  <a
                    href={activeWorkModal.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#202020] hover:bg-[#282828] text-xs font-semibold text-white border border-[#333333] transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Repositori GitHub</span>
                  </a>
                )}
                <button
                  onClick={() => setActiveWorkModal(null)}
                  className="px-5 py-2 rounded-xl bg-[#FF5A1F] hover:bg-[#e04a12] text-xs font-bold text-white transition-colors cursor-pointer"
                >
                  Tutup Rincian
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
