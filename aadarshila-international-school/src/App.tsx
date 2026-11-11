import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#F4F6F8] text-[#18243A] selection:bg-[#214F91] selection:text-white">
      {/* 1. Header Navigation Bar (Clean text, no logo, no enquiry CTA) */}
      <Navbar />

      {/* Main Content: Exactly 2 sections + Footer = 3 main sections */}
      <main>
        {/* Section 1: HOME / HERO (Clear natural photo, no heavy blue tint, no CTA) */}
        <HeroSection />

        {/* Section 2: ABOUT US (Left: text, Right: photo, Below: 4 static cards) */}
        <AboutSection />
      </main>

      {/* Section 3: FOOTER (Royal-blue, updated address, clean typography) */}
      <Footer />
    </div>
  );
}
