import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#173E78]/90 backdrop-blur-md shadow-lg py-4 border-b border-white/10'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity: Clean Text Only (No logo, No emblem, No tagline) */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg group"
          >
            <span className="text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
              AADARSHILA
            </span>
            <span className="text-[10px] sm:text-xs tracking-widest uppercase font-medium text-slate-200">
              INTERNATIONAL SCHOOL
            </span>
          </a>

          {/* Desktop Navigation Links: Home and About Us only */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <button
              onClick={() => scrollTo('home')}
              className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white hover:after:w-full after:transition-all after:duration-200"
            >
              About Us
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu: Home and About Us only */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#173E78]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 shadow-xl">
          <button
            onClick={() => scrollTo('home')}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            About Us
          </button>
        </div>
      )}
    </header>
  );
};
