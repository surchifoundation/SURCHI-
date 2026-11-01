import React, { useState } from 'react';
import { Sparkles, ExternalLink } from 'lucide-react';

interface DogCoin {
  id: string;
  name: string;
  ticker: string;
  chain: string;
  url: string;
  avatar: string;
  isSurchi?: boolean;
  accentColor: string;
}

const DOGS_FAMILY: DogCoin[] = [
  {
    id: 'doge',
    name: 'Dogecoin',
    ticker: 'DOGE',
    chain: 'Dogecoin blockchain',
    url: 'https://dogecoin.com',
    avatar: '/assets/coins/doge.png',
    accentColor: '#C2A633',
  },
  {
    id: 'shib',
    name: 'Shiba Inu',
    ticker: 'SHIB',
    chain: 'Ethereum',
    url: 'https://shib.io',
    avatar: '/assets/coins/shib.png',
    accentColor: '#FFA409',
  },
  {
    id: 'bonk',
    name: 'BONK',
    ticker: 'BONK',
    chain: 'Solana',
    url: 'https://bonkcoin.com',
    avatar: '/assets/coins/bonk.jpg',
    accentColor: '#F28822',
  },
  {
    id: 'floki',
    name: 'Floki',
    ticker: 'FLOKI',
    chain: 'Ethereum / BNB Chain',
    url: 'https://floki.com',
    avatar: '/assets/coins/floki.png',
    accentColor: '#0052FF',
  },
  {
    id: 'wif',
    name: 'dogwifhat',
    ticker: 'WIF',
    chain: 'Solana',
    url: 'https://dogwifcoin.org',
    avatar: '/assets/coins/wif.jpg',
    accentColor: '#FF69B4',
  },
  {
    id: 'babydoge',
    name: 'Baby Doge Coin',
    ticker: 'BABYDOGE',
    chain: 'BNB Chain',
    url: 'https://babydoge.com',
    avatar: '/assets/coins/babydoge.jpg',
    accentColor: '#00C3FF',
  },
  {
    id: 'neiro',
    name: 'Neiro',
    ticker: 'NEIRO',
    chain: 'Ethereum / Solana variants',
    url: 'https://neirocoin.xyz',
    avatar: '/assets/coins/neiro.png',
    accentColor: '#FF9900',
  },
  {
    id: 'samo',
    name: 'Samoyedcoin',
    ticker: 'SAMO',
    chain: 'Solana',
    url: 'https://samoyedcoin.com',
    avatar: '/assets/coins/samo.png',
    accentColor: '#5865F2',
  },
  {
    id: 'elon',
    name: 'Dogelon Mars',
    ticker: 'ELON',
    chain: 'Ethereum',
    url: 'https://dogelonmars.com',
    avatar: '/assets/coins/elon.png',
    accentColor: '#E02424',
  },
  {
    id: 'cheems',
    name: 'Cheems',
    ticker: 'CHEEMS',
    chain: 'BNB Chain',
    url: 'https://cheemstoken.com',
    avatar: '/assets/coins/cheems.png',
    accentColor: '#FFD700',
  },
  {
    id: 'surchi',
    name: 'SURCHI',
    ticker: 'SUR',
    chain: 'Solana',
    url: '#facts',
    avatar: '/assets/coins/surchi.png',
    isSurchi: true,
    accentColor: '#00F7FF',
  },
];

export const DogsFamily: React.FC = () => {
  const [hoveredCoin, setHoveredCoin] = useState<DogCoin | null>(null);

  return (
    <section 
      id="dogs-family" 
      className="relative w-full bg-[#05070B] text-white py-20 md:py-32 border-b border-white/10 overflow-hidden"
    >
      {/* Background Ambience Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1972ea]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00F7FF] mb-3">
            <Sparkles className="w-4 h-4 text-[#00F7FF]" />
            <span>The Meme Dynasty</span>
            <span aria-hidden="true">·</span>
            <span>All Dogs Go To Heaven</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-['Rubik_Mono_One',sans-serif] tracking-wider uppercase text-white leading-tight">
            DOGS FAMILY
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Click any bobble to explore the official kingdom of crypto dog culture.
          </p>
        </div>

        {/* Floating Bobble Icons - Pure Round Bobbles, No Outer Container Box */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto py-6">
          {DOGS_FAMILY.map((dog, idx) => {
            // Stagger animation timing for playful floating bubble motion
            const bobbleDelay = `${(idx % 6) * 0.4}s`;
            const bobbleDuration = `${3.2 + (idx % 3) * 0.6}s`;

            return (
              <div 
                key={dog.id} 
                className="relative flex flex-col items-center group"
                onMouseEnter={() => setHoveredCoin(dog)}
                onMouseLeave={() => setHoveredCoin(null)}
              >
                {/* Clickable Pure Round Bobble Icon */}
                <a
                  href={dog.url}
                  target={dog.isSurchi ? '_self' : '_blank'}
                  rel="noreferrer"
                  aria-label={`${dog.name} ($${dog.ticker}) - ${dog.chain}`}
                  style={{
                    animation: `bobbleFloat ${bobbleDuration} ease-in-out infinite alternate`,
                    animationDelay: bobbleDelay,
                  }}
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-300 transform group-hover:scale-125 select-none focus:outline-none ${
                    dog.isSurchi
                      ? 'ring-4 ring-[#00F7FF] ring-offset-4 ring-offset-[#05070B] shadow-[0_0_30px_rgba(0,247,255,0.7)]'
                      : 'shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]'
                  }`}
                >
                  {/* Outer Glow Halo on Hover */}
                  <div
                    className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-75 blur-md transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: dog.accentColor }}
                  />

                  {/* Bobble Sphere Disk */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-[#111624] p-1.5 border-2 border-white/20 group-hover:border-white transition-colors">
                    {/* Actual Coin Logo */}
                    <img
                      src={dog.avatar}
                      alt={dog.name}
                      className="w-full h-full rounded-full object-cover group-hover:rotate-6 transition-transform duration-300"
                    />

                    {/* Glossy 3D Bubble Reflection Highlight */}
                    <div className="absolute top-1 left-2 right-2 h-1/2 bg-gradient-to-b from-white/40 via-white/10 to-transparent rounded-t-full pointer-events-none" />
                  </div>

                  {/* Surchi Special Badge */}
                  {dog.isSurchi && (
                    <div className="absolute -top-2 bg-[#00F7FF] text-black font-black text-[9px] uppercase px-2 py-0.5 rounded-full shadow-md tracking-wider">
                      SURCHI
                    </div>
                  )}
                </a>

                {/* Floating Bobble Tooltip on Hover */}
                <div className="absolute -bottom-12 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-30 whitespace-nowrap">
                  <div className="bg-[#0B101C]/95 border border-white/25 px-3 py-1.5 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-1.5">
                    <span className="text-xs font-black text-white">{dog.name}</span>
                    <span className="text-[11px] font-mono font-bold text-[#00F7FF]">${dog.ticker}</span>
                    <span className="text-[10px] text-white/50">· {dog.chain}</span>
                    <ExternalLink className="w-3 h-3 text-white/50 ml-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Floating Bobble Keyframes */}
      <style>{`
        @keyframes bobbleFloat {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
          100% {
            transform: translateY(0px) rotate(-1deg);
          }
        }
      `}</style>
    </section>
  );
};
