import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ArrowDown } from 'lucide-react';
import { TOKEN_DETAILS, SOCIAL_LINKS } from '../data/surchiData';
import { MascotHorizontalShowcase } from './MascotHorizontalShowcase';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TOKEN_DETAILS.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full bg-[#0158ff] text-white py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6">

      {/* Top Header Block: Wordmark & 'NOW ON coinbase' */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 select-none">
        
        {/* Massive Chunky Wordmark - Large, centered, and proportionally scaled */}
        <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[7.5rem] xl:text-[8.5rem] font-['Rubik_Mono_One',sans-serif] text-white tracking-normal uppercase leading-none select-none drop-shadow-sm">
          SURCHI
        </h1>

        {/* 'NOW ON coinbase' directly beneath the headline */}
        <div className="flex items-center justify-center gap-2 sm:gap-2.5 mt-2 sm:mt-3 select-none">
          <span className="text-xs sm:text-base md:text-lg lg:text-xl font-bold tracking-[0.2em] uppercase text-white/95">
            NOW ON
          </span>
          <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black lowercase tracking-tighter text-white flex items-center gap-1.5">
            <span className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center text-[#0158ff] text-[10px] sm:text-xs md:text-sm font-black shadow-sm">
              C
            </span>
            <span>coinbase</span>
          </span>
        </div>

      </div>

      {/* Horizontal Display of Pure Surchi Artwork (Zero Text) */}
      <MascotHorizontalShowcase />

      {/* Bottom Action Bar, Contract Address & Quick Metrics */}
      <div className="w-full max-w-xl mx-auto flex flex-col items-center gap-3.5 sm:gap-4 md:gap-4.5 z-10">
        
        {/* Action Buttons: BUY $SUR and JOIN DISCORD */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href={TOKEN_DETAILS.swapUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto min-w-[170px] sm:min-w-[190px] px-7 py-3.5 sm:py-4 text-sm sm:text-base font-black uppercase tracking-wider text-[#0158ff] bg-white hover:bg-white/95 transition-all rounded-full shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Buy $SUR</span>
            <ExternalLink className="w-4 h-4 text-[#0158ff]" />
          </a>

          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto min-w-[170px] sm:min-w-[190px] px-7 py-3.5 sm:py-4 text-sm sm:text-base font-black uppercase tracking-wider text-white bg-[#5865F2] hover:bg-[#4752C4] transition-all rounded-full shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>Join Discord</span>
          </a>
        </div>

        {/* Copyable Contract Address Strip */}
        <div className="w-full max-w-lg bg-black/30 backdrop-blur-md border border-white/20 rounded-2xl p-2 sm:p-2.5 flex items-center justify-between gap-2 text-white shadow-xl">
          <span className="font-mono text-xs sm:text-sm text-white font-bold truncate pl-2 select-all">
            {TOKEN_DETAILS.contractAddress}
          </span>
          <button
            onClick={handleCopy}
            className="px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider bg-white hover:bg-white/90 text-[#0158ff] transition-all shrink-0 flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#0158ff]" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Quick Pillars Badge Strip - Three information cards in one clean horizontal row */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 w-full max-w-lg">
          <div className="bg-white/10 rounded-xl p-2.5 sm:p-3 text-center border border-white/15 backdrop-blur-sm">
            <span className="block text-[10px] sm:text-xs font-mono text-white/70 uppercase">Buy/Sell Tax</span>
            <span className="block text-sm sm:text-base font-black text-white mt-0.5">0% / 0%</span>
          </div>
          <div className="bg-white/10 rounded-xl p-2.5 sm:p-3 text-center border border-white/15 backdrop-blur-sm">
            <span className="block text-[10px] sm:text-xs font-mono text-white/70 uppercase">Liquidity</span>
            <span className="block text-sm sm:text-base font-black text-[#00F7FF] mt-0.5">100% Burnt</span>
          </div>
          <div className="bg-white/10 rounded-xl p-2.5 sm:p-3 text-center border border-white/15 backdrop-blur-sm">
            <span className="block text-[10px] sm:text-xs font-mono text-white/70 uppercase">Mint Status</span>
            <span className="block text-sm sm:text-base font-black text-white mt-0.5">Revoked</span>
          </div>
        </div>

        {/* Position EXPLORE SURCHI beneath the information cards */}
        <a 
          href="#about"
          className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider pt-1 sm:pt-2 cursor-pointer"
        >
          <span>Explore Surchi</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>

      </div>

    </section>
  );
};
