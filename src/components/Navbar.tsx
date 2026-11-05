import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface NavbarProps {
  onOpenChat?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'projects', 'services', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#home', id: 'home' },
    { label: 'Tentang', href: '#about', id: 'about' },
    { label: 'Karya & Belajar', href: '#projects', id: 'projects' },
    { label: 'Layanan', href: '#services', id: 'services' },
    { label: 'Keahlian', href: '#skills', id: 'skills' },
    { label: 'Kontak', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090909]/90 backdrop-blur-md border-b border-[#292929] py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-1.5 text-xl sm:text-2xl font-extrabold tracking-tight text-white hover:text-[#FF5A1F] transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="font-display">{PORTFOLIO_DATA.personal.brandName}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] group-hover:scale-125 transition-transform" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A3A3A3]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors whitespace-nowrap relative py-1 hover:text-white ${
                    isActive ? 'text-white font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF5A1F] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & AI Assistant button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onOpenChat && (
              <button
                onClick={onOpenChat}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white/90 bg-[#171717] hover:bg-[#222222] border border-[#292929] rounded-full transition-all hover:border-[#FF5A1F]/50 whitespace-nowrap cursor-pointer"
                title="Buka obrolan dengan Asisten AI JAY"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FF5A1F]" />
                <span>Asisten AI</span>
              </button>
            )}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] hover:from-[#f04e13] hover:to-[#db200f] rounded-full transition-all shadow-lg shadow-[#FF5A1F]/20 hover:shadow-[#FF5A1F]/40 whitespace-nowrap"
            >
              <span>Ayo Bicara</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            {onOpenChat && (
              <button
                onClick={onOpenChat}
                className="p-2 text-[#FF5A1F] bg-[#171717] border border-[#292929] rounded-full"
                aria-label="Buka Asisten AI"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A3A3A3] hover:text-white focus:outline-none focus:ring-1 focus:ring-[#FF5A1F] rounded-lg"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#090909]/95 backdrop-blur-xl md:hidden pt-20 px-6 flex flex-col justify-between pb-10">
          <nav className="flex flex-col gap-5 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xl font-medium tracking-tight py-2 border-b border-[#1f1f1f] ${
                  activeSection === link.id ? 'text-[#FF5A1F] font-semibold' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#FF5A1F] to-[#F12B19] rounded-xl shadow-lg"
            >
              <span>Ayo Bicara</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            {onOpenChat && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenChat();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-white/90 bg-[#171717] border border-[#292929] rounded-xl"
              >
                <Sparkles className="w-4 h-4 text-[#FF5A1F]" />
                <span>Buka Asisten AI JAY</span>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};
