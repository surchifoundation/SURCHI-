import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ArrowDown } from 'lucide-react';
import { TOKEN_DETAILS, SOCIAL_LINKS } from '../data/surchiData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TOKEN_DETAILS.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full bg-[#0158ff] text-white pt-4 sm:pt-6 lg:pt-8 pb-12 sm:pb-16 lg:pb-20 overflow-hidden flex flex-col items-center justify-between min-h-[92vh]">
      
      {/* Top Header Block: Wordmark & 'NOW ON coinbase' */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        
        {/* Massive Chunky Wordmark */}
        <h1 className="text-7xl sm:text-9xl md:text-[11rem] lg:text-[13rem] font-['Rubik_Mono_One',sans-serif] text-white tracking-normal uppercase leading-none select-none drop-shadow-sm">
          SURCHI
        </h1>

        {/* 'NOW ON coinbase' */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-1 sm:mt-3 select-none">
          <span className="text-sm sm:text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-white/95">
            NOW ON
          </span>
          <span className="text-2xl sm:text-4xl md:text-5xl font-black lowercase tracking-tighter text-white flex items-center gap-1.5">
            <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-[#0158ff] text-xs sm:text-base font-black">
              C
            </span>
            <span>coinbase</span>
          </span>
        </div>

      </div>

      {/* Mascot Photo - Spanning Side-by-Side of Website with Container Completely Removed */}
      <div className="relative w-full flex items-end justify-center select-none px-0 mt-3 sm:mt-6 z-10">
        <div className="w-full max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl aspect-[3/4] max-h-[70vh] sm:max-h-[78vh] relative overflow-hidden select-none flex items-end justify-center">
          <img
            src="/images/surchi_hero_toshi.jpg"
            alt="SURCHI Mascot"
            className="w-full h-full object-cover sm:object-contain object-bottom select-none pointer-events-none"
          />
        </div>
      </div>

      {/* Bottom Action Bar, Contract Address & Quick Metrics */}
      <div className="w-full max-w-4xl mx-auto px-4 mt-6 sm:mt-8 flex flex-col items-center gap-4 z-10">
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href={TOKEN_DETAILS.swapUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-black uppercase tracking-wider text-[#0158ff] bg-white hover:bg-white/95 transition-all rounded-full shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Buy $SUR</span>
            <ExternalLink className="w-4 h-4 text-[#0158ff]" />
          </a>

          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-black uppercase tracking-wider text-white bg-[#5865F2] hover:bg-[#4752C4] transition-all rounded-full shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
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

        {/* Quick Pillars Badge Strip */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-lg pt-1">
          <div className="bg-white/10 rounded-xl p-2.5 text-center border border-white/15">
            <span className="block text-[10px] font-mono text-white/70 uppercase">Buy/Sell Tax</span>
            <span className="block text-sm sm:text-base font-black text-white">0% / 0%</span>
          </div>
          <div className="bg-white/10 rounded-xl p-2.5 text-center border border-white/15">
            <span className="block text-[10px] font-mono text-white/70 uppercase">Liquidity</span>
            <span className="block text-sm sm:text-base font-black text-[#00F7FF]">100% Burnt</span>
          </div>
          <div className="bg-white/10 rounded-xl p-2.5 text-center border border-white/15">
            <span className="block text-[10px] font-mono text-white/70 uppercase">Mint Status</span>
            <span className="block text-sm sm:text-base font-black text-white">Revoked</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#about"
          className="text-white/80 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider pt-2"
        >
          <span>Explore Surchi</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>

      </div>

    </section>
  );
};
