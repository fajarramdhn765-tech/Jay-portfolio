import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Beranda', href: '#home' },
    { label: 'Tentang', href: '#about' },
    { label: 'Karya & Belajar', href: '#projects' },
    { label: 'Layanan', href: '#services' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <footer className="bg-[#070707] border-t border-[#1a1a1a] py-14 sm:py-18 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#1f1f1f]">
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-white font-display tracking-tight">
                {personal.brandName}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
              <span className="text-sm text-[#737373] font-mono">/ {personal.name}</span>
            </div>
            <p className="text-xs text-[#A3A3A3] max-w-sm leading-relaxed">
              Creative Web Developer yang membangun pengalaman digital modern dan sinematik melalui kode bersih serta desain yang matang.
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#A3A3A3]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full bg-[#141414] hover:bg-[#202020] text-[#A3A3A3] hover:text-white border border-[#262626] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-[#141414] hover:bg-[#202020] text-[#A3A3A3] hover:text-white border border-[#262626] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 rounded-full bg-[#141414] hover:bg-[#202020] text-[#A3A3A3] hover:text-white border border-[#262626] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="p-2.5 rounded-full bg-[#141414] hover:bg-[#202020] text-[#A3A3A3] hover:text-white border border-[#262626] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Strip: Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#737373]">
          <div>
            © 2026 FAJAR RAMADHAN. Hak Cipta Dilindungi.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#A3A3A3] hover:text-[#FF5A1F] transition-colors cursor-pointer group"
          >
            <span>KEMBALI KE ATAS</span>
            <div className="p-1.5 rounded-full bg-[#171717] group-hover:bg-[#FF5A1F] group-hover:text-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
