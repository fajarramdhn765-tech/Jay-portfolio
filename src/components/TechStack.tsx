import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolio';

// Verified clean official SVG logos
const TECH_LOGOS: Record<string, { icon: React.ReactNode; color: string }> = {
  HTML5: {
    color: '#E34F26',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.4L12 24l-8.6-2.6L1.5 0zm17.5 4.3H5.1l.4 4.5h12.9l-.4 4.8-6 1.7-6-1.7-.3-3.2H3.5l.5 5.5 8 2.2 8-2.2 1-11.4z" />
      </svg>
    ),
  },
  CSS3: {
    color: '#1572B6',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21l-1.9 21.4L12 24l-8.6-2.6L1.5 0zm17.5 4.3H5.1l.4 4.5h12.9l-.4 4.8-6 1.7-6-1.7-.3-3.2H3.5l.5 5.5 8 2.2 8-2.2 1-11.4z" />
      </svg>
    ),
  },
  JavaScript: {
    color: '#F7DF1E',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-.885 1.05-.75 2.805.345 3.735.945.81 2.22 1.065 3.09 1.47.45.21.72.435.825.765.21.615-.12 1.17-.87 1.395-.885.255-1.995-.06-2.49-.945l-1.8 1.11c.42.825.96 1.38 1.635 1.71 1.2.585 3.51.69 4.785-.285.81-.615 1.26-1.485 1.17-2.61v-.06zm-8.835-7.8h-2.19v6.525c0 1.245-.045 2.16-.945 2.655-.495.27-1.125.3-1.785.12-.51-.15-.855-.405-1.14-.765-.24-.315-.36-.675-.435-1.08l1.965-.96c.09.285.24.525.435.675.24.195.54.21.795.12.3-.12.435-.42.435-.915V10.476z" />
      </svg>
    ),
  },
  TypeScript: {
    color: '#3178C6',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.274 15.655v-7.8h-2.52V6.24h7.56v1.615h-2.52v7.8h-2.52zm7.042-4.143c.48.24.84.58 1.08 1.02.24.44.36.96.36 1.56 0 .68-.14 1.27-.42 1.77-.28.5-.68.89-1.2 1.17-.52.28-1.14.42-1.86.42-.8 0-1.5-.18-2.1-.54-.6-.36-1.04-.88-1.32-1.56l1.98-1.08c.16.4.38.7.66.9.28.2.62.3 1.02.3.4 0 .72-.1.96-.3.24-.2.36-.48.36-.84 0-.3-.1-.54-.3-.72-.2-.18-.54-.34-1.02-.48l-.72-.21c-.8-.24-1.42-.58-1.86-1.02-.44-.44-.66-1.02-.66-1.74 0-.64.14-1.2.42-1.68.28-.48.68-.86 1.2-1.14.52-.28 1.12-.42 1.8-.42.72 0 1.34.16 1.86.48.52.32.9.76 1.14 1.32l-1.92 1.02c-.14-.34-.34-.58-.6-.72-.26-.14-.56-.21-.9-.21-.34 0-.62.08-.84.24-.22.16-.33.38-.33.66 0 .24.08.44.24.58.16.14.44.26.84.38l.72.21c.96.28 1.68.64 2.16 1.08z" />
      </svg>
    ),
  },
  React: {
    color: '#61DAFB',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9.07a2.93 2.93 0 1 0 0 5.86 2.93 2.93 0 0 0 0-5.86zm0-7.07C7.4 2 3.32 4.41 1.63 7.85c-1.7 3.44-.95 7.42 1.94 10.15 2.89 2.73 7.15 3.65 10.95 2.37 3.8-1.28 6.55-4.48 7.08-8.24.53-3.76-1.21-7.44-4.47-9.45C15.42 2.2 13.72 2 12 2zm0 1.8c1.44 0 2.88.17 4.3.52 2.76 1.7 4.24 4.8 3.79 7.97-.45 3.17-2.77 5.87-5.97 6.95-3.2 1.08-6.79.31-9.23-1.99C2.45 14.95 1.82 11.6 3.25 8.7 4.68 5.8 8.14 3.8 12 3.8z" />
      </svg>
    ),
  },
  'Next.js': {
    color: '#FFFFFF',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.572 0a11.572 11.572 0 0 0-8.182 19.754l13.6-17.585A11.52 11.52 0 0 0 11.572 0zm6.812 3.435L7.26 18.064A11.572 11.572 0 0 0 23.144 11.57c0-3.07-1.196-5.87-3.144-7.947l-.616-.188zM4.12 6.51A11.53 11.53 0 0 0 0 11.572c0 5.378 3.67 9.897 8.647 11.163L4.12 6.51z" />
      </svg>
    ),
  },
  'Tailwind CSS': {
    color: '#06B6D4',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    ),
  },
  GitHub: {
    color: '#F0F6FC',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  'Node.js': {
    color: '#339933',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 10.7l3.6 2.1v4.2l-3.6 2.1-3.6-2.1v-4.2l3.6-2.1zm8.7-5l-8-4.7c-.4-.2-.9-.2-1.3 0l-8 4.7c-.4.2-.7.7-.7 1.2v9.4c0 .5.3.9.7 1.2l8 4.7c.2.1.4.2.7.2.2 0 .5-.1.7-.2l8-4.7c.4-.2.7-.7.7-1.2V6.9c0-.5-.3-.9-.7-1.2z" />
      </svg>
    ),
  },
  Figma: {
    color: '#F24E1E',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4zm0-16V0H4C1.8 0 0 1.8 0 4s1.8 4 4 4h4zm0 8V8H4c-2.2 0-4 1.8-4 4s1.8 4 4 4h4zm8-8h-4V0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4zm0 8h-4V8h4c2.2 0 4 1.8 4 4s-1.8 4-4 4z" />
      </svg>
    ),
  },
};

export const TechStack: React.FC = () => {
  const { techStack } = PORTFOLIO_DATA;
  // Duplicate for smooth seamless infinite marquee loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="py-12 sm:py-16 border-y border-[#1f1f1f] bg-[#0c0c0c]/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-xs sm:text-sm font-semibold tracking-widest text-[#A3A3A3] uppercase font-mono">
          ALAT & TEKNOLOGI YANG SAYA GUNAKAN
        </h3>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-4 sm:gap-6 animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
          {duplicatedStack.map((tech, idx) => {
            const logoData = TECH_LOGOS[tech.name] || {
              color: '#FF5A1F',
              icon: (
                <span className="font-bold font-mono text-sm text-[#FF5A1F]">
                  {tech.name.slice(0, 2)}
                </span>
              ),
            };

            return (
              <div
                key={`${tech.name}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#141414] hover:bg-[#1c1c1c] border border-[#242424] hover:border-[#FF5A1F]/40 transition-all duration-300 group cursor-default shadow-sm"
              >
                <div
                  className="transition-transform group-hover:scale-110 flex items-center justify-center"
                  style={{ color: logoData.color }}
                >
                  {logoData.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-white group-hover:text-[#FF5A1F] transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                  <span className="text-[11px] text-[#737373] font-mono whitespace-nowrap">
                    {tech.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_35s_linear_infinite\\] {
            animation: none !important;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
};
