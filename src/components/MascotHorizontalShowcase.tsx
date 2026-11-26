import React from 'react';
import surchiCoinsImg from '../assets/images/surchi_coins_notext_1794751408945.jpg';
import surchiRocketImg from '../assets/images/surchi_rocket_notext_1794751407920.jpg';

interface MascotItem {
  id: string;
  image: string;
}

const MASCOT_ITEMS: MascotItem[] = [
  {
    id: 'coins-mascot',
    image: surchiCoinsImg,
  },
  {
    id: 'cool-smirk',
    image: '/images/surchi_cool_smirk.jpg',
  },
  {
    id: 'moon-rocket',
    image: surchiRocketImg,
  },
];

export const MascotHorizontalShowcase: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-2 sm:my-3 lg:my-4 z-10 select-none">
      
      {/* 
        Responsive Showcase Container:
        - Mobile (< 768px): Fluid horizontal scroll track preserving touch swipe
        - Tablet (>= 768px) & Desktop (>= 1024px): 3-column side-by-side grid with consistent dimensions and balanced spacing
      */}
      <div
        className="flex items-center justify-start sm:justify-center md:grid md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible scrollbar-none py-2 px-2 md:px-0 md:justify-items-center"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {MASCOT_ITEMS.map((item) => (
          <div
            key={item.id}
            className="shrink-0 w-[180px] sm:w-[220px] md:w-full md:max-w-[220px] lg:max-w-[260px] xl:max-w-[290px] aspect-square flex items-center justify-center"
          >
            <img
              src={item.image}
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain object-center select-none pointer-events-none hover:scale-105 transition-transform duration-300 drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
              style={{
                maskImage: 'radial-gradient(ellipse 96% 96% at center, black 92%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 96% 96% at center, black 92%, transparent 100%)',
                transform: 'translateZ(0)',
              }}
              loading="eager"
              fetchPriority="high"
            />
          </div>
        ))}
      </div>

    </div>
  );
};
