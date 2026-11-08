import React from 'react';

interface MascotItem {
  id: string;
  image: string;
  alt: string;
}

const MASCOT_ITEMS: MascotItem[] = [
  {
    id: 'coinbase-mascot',
    image: '/images/surchi_coinbase.jpg',
    alt: 'Surchi Coinbase And Solana Mascot',
  },
  {
    id: 'cool-smirk',
    image: '/images/surchi_cool_smirk.jpg',
    alt: 'The Surchi Smirk Streetwear Mascot',
  },
  {
    id: 'moon-rocket',
    image: '/images/surchi_moon_rocket.jpg',
    alt: 'PUP-1 Moon Rocket Cosmic Pup',
  },
  {
    id: 'deep-research',
    image: '/images/surchi_reading_bedtime.jpg',
    alt: 'Deep Research Crypto Bedtime Stories',
  },
];

export const MascotHorizontalShowcase: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-2 sm:my-3 lg:my-4 z-10 select-none">
      
      {/* 
        Responsive Showcase Container:
        - Mobile (< 768px): Fluid horizontal scroll track preserving touch swipe
        - Tablet (>= 768px) & Desktop (>= 1024px): 4-column side-by-side grid with consistent dimensions and balanced spacing
      */}
      <div
        className="flex items-center justify-start sm:justify-center md:grid md:grid-cols-4 gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6 overflow-x-auto md:overflow-visible scrollbar-none py-2 px-2 md:px-0 md:justify-items-center"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {MASCOT_ITEMS.map((item) => (
          <div
            key={item.id}
            className="shrink-0 w-[170px] sm:w-[210px] md:w-full md:max-w-[170px] lg:max-w-[230px] xl:max-w-[260px] aspect-square flex items-center justify-center"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-contain object-center select-none pointer-events-none hover:scale-105 transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
              style={{
                maskImage: 'radial-gradient(ellipse 96% 96% at center, black 92%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 96% 96% at center, black 92%, transparent 100%)',
                transform: 'translateZ(0)',
              }}
              loading="eager"
            />
          </div>
        ))}
      </div>

    </div>
  );
};
