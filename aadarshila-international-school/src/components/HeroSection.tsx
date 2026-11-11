import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden"
    >
      {/* Background Image: Natural, Sharp, Without Blue Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_school_students_1794422385624.jpg"
          alt="Aadarshila International School students studying in campus"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Subtle, neutral scrim only at bottom to ensure text legibility while keeping image vibrant & clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      </div>

      {/* Hero Content Container: Existing 2-Column Composition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 pt-36 sm:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Trust Indicator & Main Heading */}
          <div className="lg:col-span-7 space-y-5">
            {/* Trust Indicator */}
            <div className="inline-flex items-center gap-3 bg-black/40 backdrop-blur-sm border border-white/25 rounded-full py-1.5 px-3.5 shadow-md">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                  AS
                </span>
                <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-amber-500 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                  RK
                </span>
                <span className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                  PN
                </span>
              </div>
              <span className="text-white text-xs sm:text-sm font-medium tracking-wide drop-shadow-sm">
                Building Brighter Futures Together
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.14] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              Education That <br className="hidden sm:inline" />
              Shapes Tomorrow&apos;s <br className="hidden sm:inline" />
              <span>Leaders</span>
            </h1>
          </div>

          {/* Right Column: One continuous paragraph in exactly 3 lines on desktop */}
          <div className="lg:col-span-5 lg:pb-3">
            <p className="w-full lg:max-w-[465px] text-sm sm:text-base text-white/95 leading-relaxed font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
              At Aadarshila International School, we nurture young minds through quality education, discipline, and strong cultural values, preparing every child for a brighter and successful future.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
