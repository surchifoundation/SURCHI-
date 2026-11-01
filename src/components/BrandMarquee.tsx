import React from 'react';

export const BrandMarquee: React.FC = () => {
  const tickerItems = [
    'SURCHI ON COINBASE',
    '$SUR',
    'ZERO TAXES (0/0)',
    '100% COMMUNITY OWNED',
    'LP BURNT FOREVER',
    'MINT REVOKED',
    'THE SCHOLAR PUPPY',
    'TO THE MOON',
    'SURCHI PACK',
  ];

  return (
    <div className="relative w-full bg-[#05070B] border-y border-white/10 py-5 overflow-hidden select-none">
      {/* Edge Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#05070B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#05070B] to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-sm md:text-base font-black tracking-widest uppercase text-white/90 hover:text-[#00F7FF] transition-colors">
              {item}
            </span>
            <span className="text-[#0052FF] text-xs font-mono">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
