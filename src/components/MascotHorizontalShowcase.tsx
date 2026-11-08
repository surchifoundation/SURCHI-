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
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4 sm:my-6 z-10 select-none">
      
      {/* Horizontal Display Track with Surchi Artwork - Highly Visible & Bold */}
      <div
        className="flex items-center justify-start lg:justify-center gap-6 sm:gap-8 overflow-x-auto scrollbar-none scroll-smooth py-6 px-4"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {MASCOT_ITEMS.map((item) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.alt}
            className="h-[300px] sm:h-[360px] md:h-[420px] lg:h-[460px] w-auto shrink-0 object-contain object-center select-none pointer-events-none hover:scale-105 transition-all duration-300 drop-shadow-[0_14px_28px_rgba(0,0,0,0.22)]"
            style={{
              maskImage: 'radial-gradient(ellipse 96% 96% at center, black 92%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 96% 96% at center, black 92%, transparent 100%)',
              transform: 'translateZ(0)',
            }}
            loading="lazy"
          />
        ))}
      </div>

    </div>
  );
};
