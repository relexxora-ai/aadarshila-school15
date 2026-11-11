import React from 'react';

const SCHOOL_CARDS = [
  {
    id: 'profil-sekolah',
    title: 'Profil Sekolah',
    subtitle: 'Institutional Overview',
    image: '/src/assets/images/card_profil_sekolah_1794422385654.jpg',
    alt: 'Aadarshila International School modern architecture campus',
    shortDesc: 'A nurturing environment dedicated to academic excellence, discipline, and Indian values.',
  },
  {
    id: 'guru-staf',
    title: 'Guru & Staf',
    subtitle: 'Educators & Mentors',
    image: '/src/assets/images/card_guru_staf_1794422386708.jpg',
    alt: 'Aadarshila International School dedicated teachers and academic staff',
    shortDesc: 'Passionate and experienced educators committed to guiding every student’s journey.',
  },
  {
    id: 'fasilitas',
    title: 'Fasilitas',
    subtitle: 'Campus Infrastructure',
    image: '/src/assets/images/card_fasilitas_1794422387303.jpg',
    alt: 'Modern smart classroom and learning facilities at Aadarshila International School',
    shortDesc: 'Modern smart classrooms, specialized science labs, and expansive learning spaces.',
  },
  {
    id: 'ekstrakurikuler',
    title: 'Ekstrakurikuler',
    subtitle: 'Co-Curricular & Sports',
    image: '/src/assets/images/card_ekstrakurikuler_1794422388499.jpg',
    alt: 'Indian students participating in school sports, arts, and extracurricular clubs',
    shortDesc: 'Vibrant clubs, athletics, arts, and cultural events for all-around excellence.',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F4F6F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Two-Column About Us Layout: Text on Left, Realistic Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading and Introduction Text (Left Aligned, Clean Typography) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#214F91] block">
              About Us
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold text-[#18243A] tracking-tight leading-snug">
              Shaping Confident, Knowledgeable &amp; Disciplined Individuals
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                At Aadarshila International School, we believe that preparing
                children for the future begins with meaningful education today.
              </p>
              <p>
                Our mission is to bridge the gaps in society by providing students
                with quality education, knowledge, discipline, and strong cultural
                values.
              </p>
              <p>
                With a dedicated faculty team and a commitment to holistic
                development, we strive to bring positive transformation to every
                student&apos;s learning journey.
              </p>
            </div>
          </div>

          {/* Right Column: Large Realistic School Photograph */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-white">
              <img
                src="/src/assets/images/about_school_learning_1794423488321.jpg"
                alt="Aadarshila International School students and teacher engaged in classroom learning"
                className="w-full h-[340px] sm:h-[420px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

        {/* Four Cards Grid: Directly Below About Us Two-Column Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8">
            {SCHOOL_CARDS.map((card) => (
              <div
                key={card.id}
                className="group relative h-[420px] sm:h-[460px] lg:h-[480px] rounded-2xl overflow-hidden shadow-md transition-all duration-300 bg-slate-900 border border-slate-200/50"
              >
                {/* Background Image (Subtle hover zoom preserved) */}
                <img
                  src={card.image}
                  alt={card.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Dark Gradient Scrim (Bottom to Top) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Card Information Overlay: Static Visual Card */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-left">
                  {/* Category / Subtitle */}
                  <span className="text-xs uppercase tracking-wider font-medium text-blue-200/90 mb-1">
                    {card.subtitle}
                  </span>

                  {/* White Bold Title */}
                  <h3 className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                    {card.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs sm:text-sm text-slate-200/90 mt-2 line-clamp-2 leading-relaxed font-normal">
                    {card.shortDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
