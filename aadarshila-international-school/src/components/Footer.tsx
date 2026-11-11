import React from 'react';
import { Phone, Mail, MapPin, Youtube, Instagram, Facebook, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative bg-[#214F91] text-white pt-20 pb-12 overflow-hidden">
      {/* Huge Oversized Watermark School Name (Reference Image 2) */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-16 sm:bottom-12 flex justify-center items-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span className="text-[14vw] sm:text-[15vw] font-black tracking-widest text-white/[0.045] uppercase whitespace-nowrap leading-none">
          AADARSHILA
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Column 1: School Brand & Contact Information */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-tight">
                AADARSHILA
              </span>
              <span className="text-xs tracking-widest uppercase font-medium text-slate-200">
                INTERNATIONAL SCHOOL
              </span>
            </div>
            
            <p className="text-sm text-blue-100/80 leading-relaxed max-w-sm pt-1">
              Empowering students through quality education, moral discipline,
              and culturally rooted leadership for an interconnected world.
            </p>

            <div className="space-y-3.5 pt-2 text-sm">
              <a
                href="tel:08826435933"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium tracking-wide">088264 35933</span>
              </a>

              <a
                href="mailto:aadarshilainternational@gmail.com"
                className="flex items-center gap-3 text-blue-100 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium tracking-wide break-all">
                  aadarshilainternational@gmail.com
                </span>
              </a>

              {/* School Physical Address: Exactly Two Lines */}
              <div className="flex items-start gap-3 text-blue-100/90">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <address className="not-italic text-sm leading-relaxed">
                  Onkar Niketan, Naveen Nagar,<br />
                  Bihar 805110
                </address>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wide border-b border-white/15 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="text-blue-100/90 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <span className="text-blue-300">›</span>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="text-blue-100/90 hover:text-white hover:translate-x-1 transition-all inline-flex items-center gap-2"
                >
                  <span className="text-blue-300">›</span>
                  <span>About Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media Icons Only */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-lg font-semibold text-white tracking-wide border-b border-white/15 pb-2 inline-block">
              Connect With Us
            </h4>
            <p className="text-xs text-blue-100/80 leading-relaxed">
              Stay connected with our campus life, educational seminars, and student milestones.
            </p>

            {/* Horizontal Clean White Icons Only (No text labels) */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://www.youtube.com/@Aadharshilainternationalschool"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Thin Divider & Bottom Copyright / Developer Credit */}
        <div className="border-t border-white/15 pt-8 mt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/80">
          <p>© 2026 Aadarshila International School. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>
              Designed &amp; Developed by{' '}
              <span className="font-semibold text-white">theimranmohammad</span>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Scroll back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
