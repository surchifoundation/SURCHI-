import React from 'react';
import { TRACKING_LINKS } from '../data/surchiData';

// Brand SVG Logos for CoinMarketCap, CoinGecko, DEXTools, and DEXScreener
const CoinMarketCapLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
      <svg className="w-5 h-5 text-[#175AF6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.5c-1.3 0-2.4-.7-2.9-1.7l-1 1.7c-.5.8-1.5 1-2.3.5-.8-.5-1-1.5-.5-2.3l1.9-3.2c.4-.7 1.2-1.1 2-1.1s1.6.4 2 1.1l1 1.7c.3.5.9.8 1.5.8.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5c-.3 0-.5.1-.7.2l-.7-1.2c.5-.3 1-.4 1.6-.4 1.9 0 3.5 1.6 3.5 3.5s-1.6 3.7-3.9 3.5z" />
      </svg>
    </div>
    <div className="flex flex-col text-left leading-tight">
      <span className="font-sans font-black text-base sm:text-lg tracking-tight text-white">
        CoinMarketCap
      </span>
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/75">
        CMC Verified
      </span>
    </div>
  </div>
);

const CoinGeckoLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
      <svg className="w-5 h-5 text-[#8DC63F]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 3.31 1.61 6.24 4.09 8.04.28-.58.62-1.13 1.01-1.64-1.89-1.42-3.1-3.69-3.1-6.4 0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.71-1.21 4.98-3.1 6.4.39.51.73 1.06 1.01 1.64C20.39 18.24 22 15.31 22 12c0-5.52-4.48-10-10-10zm-3 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      </svg>
    </div>
    <div className="flex flex-col text-left leading-tight">
      <span className="font-sans font-black text-base sm:text-lg tracking-tight text-white">
        CoinGecko
      </span>
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/75">
        Global Analytics
      </span>
    </div>
  </div>
);

const DEXToolsLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
      <svg className="w-5 h-5 text-[#00A8FF]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.2l6.5 3.6-6.5 3.6-6.5-3.6L12 4.2zM5 8.7l6 3.3v6.8l-6-3.3V8.7zm14 6.8l-6 3.3V12l6-3.3v6.8z" />
      </svg>
    </div>
    <div className="flex flex-col text-left leading-tight">
      <span className="font-sans font-black text-base sm:text-lg tracking-tight text-white">
        DEXTools
      </span>
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/75">
        Live Pair Explorer
      </span>
    </div>
  </div>
);

const DEXScreenerLogo = () => (
  <div className="flex items-center gap-2.5">
    <div className="w-9 h-9 rounded-full bg-[#111827] border border-white/20 flex items-center justify-center shrink-0 shadow-md">
      <svg className="w-5 h-5 text-[#10B981]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 9l10 13 10-13L12 2zm0 3.5L18.5 10 12 18.5 5.5 10 12 5.5z" />
      </svg>
    </div>
    <div className="flex flex-col text-left leading-tight">
      <span className="font-sans font-black text-base sm:text-lg tracking-tight text-white">
        DEXScreener
      </span>
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/75">
        Real-Time Charts
      </span>
    </div>
  </div>
);

export const ViewSurchiAt: React.FC = () => {
  const platforms = [
    {
      name: 'CoinMarketCap',
      url: TRACKING_LINKS.coinmarketcap,
      component: <CoinMarketCapLogo />,
      description: 'Official token overview, historical data, and global market cap rankings.',
      badge: 'Market Cap',
    },
    {
      name: 'CoinGecko',
      url: TRACKING_LINKS.coingecko,
      component: <CoinGeckoLogo />,
      description: 'Independent crypto data, community sentiment, and verified coin metrics.',
      badge: 'Price Feed',
    },
    {
      name: 'DEXTools',
      url: TRACKING_LINKS.dextools,
      component: <DEXToolsLogo />,
      description: 'Real-time Solana liquidity pool data, DEXTScore, and transaction explorer.',
      badge: 'Pool Explorer',
    },
    {
      name: 'DEXScreener',
      url: TRACKING_LINKS.dexscreener,
      component: <DEXScreenerLogo />,
      description: 'Sub-second candle charts, liquidity tracking, and live Raydium order flow.',
      badge: 'Live Candles',
    },
  ];

  return (
    <section id="view-surchi" className="w-full bg-[#05070B] py-16 sm:py-24 border-b border-white/10 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00F7FF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header directly on Black Section Background */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#00F7FF] mb-3">
              <span>Real-Time Market Tracking</span>
              <span aria-hidden="true">·</span>
              <span>Solana DEX Data</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-['Rubik_Mono_One',sans-serif] tracking-tight uppercase text-white leading-tight">
              View SURCHI At
            </h2>
            <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed font-normal">
              Track live $SUR charts, market cap, liquidity, order books, and real-time Solana DEX volume on the top crypto analytics platforms.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-white/80 flex items-center gap-2 select-none">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Live Chart Sync</span>
            </div>
          </div>
        </div>

        {/* 4 Blue Platform Containers (DEXScreener, DEXTools, CoinGecko, CoinMarketCap) on Black Background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {platforms.map((platform, idx) => (
            <a
              key={idx}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`View SURCHI on ${platform.name}`}
              className="bg-[#0158ff] hover:bg-[#004edd] text-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-[0_12px_32px_rgba(1,88,255,0.4)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer border border-white/20 select-none group"
            >
              <div>
                {/* Brand Header (No Link Icons) */}
                <div className="mb-5">
                  {platform.component}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mt-2 font-normal">
                  {platform.description}
                </p>
              </div>

              {/* Bottom Container Footer (No Link Icons or Arrows) */}
              <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold">
                <span className="px-2.5 py-1 rounded-full bg-white/20 text-white text-[11px] font-mono">
                  {platform.badge}
                </span>
                <span className="text-white font-black tracking-wide uppercase text-[11px]">
                  View Chart
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
