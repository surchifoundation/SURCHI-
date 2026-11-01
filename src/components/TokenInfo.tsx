import React, { useState } from 'react';
import { TOKEN_DETAILS, SOCIAL_LINKS } from '../data/surchiData';
import { Copy, Check, ExternalLink } from 'lucide-react';

export const TokenInfo: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(TOKEN_DETAILS.contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="facts" 
      className="relative w-full bg-[#1972ea] text-white py-20 sm:py-28 lg:py-32 border-b border-black/15 overflow-hidden"
    >
      {/* Anchor for backwards compatibility with #tokenomics links */}
      <span id="tokenomics" className="absolute -top-24 pointer-events-none" aria-hidden="true" />

      {/* Subtle Blueprint Radial Grid Pattern on Blue */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block matching User Reference */}
        <div className="mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-white/80 mb-3">
            THE FACTS
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase font-['Rubik_Mono_One',sans-serif]">
            Ticker SUR
          </h2>
          <p className="mt-4 text-base sm:text-xl text-white/90 font-medium max-w-2xl leading-relaxed">
            Verify the contract. Live figures live on Solana — no invented stats here.
          </p>
        </div>

        {/* Solid Line Divider Top */}
        <div className="w-full border-t border-white/40" />

        {/* 2-Column Grid with Thin Crisp Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/40 border-b border-white/40">
          
          {/* Row 1 Left: NAME */}
          <div className="py-6 sm:py-8 md:pr-10">
            <span className="block text-xs font-mono font-bold uppercase tracking-widest text-white/70 mb-2">
              NAME
            </span>
            <span className="block text-2xl sm:text-4xl font-black tracking-tight text-white">
              SURCHI
            </span>
          </div>

          {/* Row 1 Right: TICKER */}
          <div className="py-6 sm:py-8 md:pl-10">
            <span className="block text-xs font-mono font-bold uppercase tracking-widest text-white/70 mb-2">
              TICKER
            </span>
            <span className="block text-2xl sm:text-4xl font-black tracking-tight text-white">
              SUR
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/40 border-b border-white/40">
          {/* Row 2 Left: NETWORK */}
          <div className="py-6 sm:py-8 md:pr-10">
            <span className="block text-xs font-mono font-bold uppercase tracking-widest text-white/70 mb-2">
              NETWORK
            </span>
            <span className="block text-2xl sm:text-4xl font-black tracking-tight text-white">
              Solana
            </span>
          </div>

          {/* Row 2 Right: TOTAL SUPPLY */}
          <div className="py-6 sm:py-8 md:pl-10">
            <span className="block text-xs font-mono font-bold uppercase tracking-widest text-white/70 mb-2">
              TOTAL SUPPLY
            </span>
            <span className="block text-2xl sm:text-4xl font-black tracking-tight text-white">
              2,100,000 $SUR
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/40 border-b border-white/40">
          {/* Row 3 Left: LISTING */}
          <div className="py-6 sm:py-8 md:pr-10">
            <span className="block text-xs font-mono font-bold uppercase tracking-widest text-white/70 mb-2">
              LISTING
            </span>
            <span className="block text-2xl sm:text-3xl font-black tracking-tight text-white">
              Raydium / Coinbase
            </span>
          </div>

          {/* Row 3 Right: TAX & LIQUIDITY */}
          <div className="py-6 sm:py-8 md:pl-10">
            <span className="block text-xs font-mono font-bold uppercase tracking-widest text-white/70 mb-2">
              TAX & LIQUIDITY
            </span>
            <span className="block text-2xl sm:text-3xl font-black tracking-tight text-white">
              0% · 100% Burnt LP
            </span>
          </div>
        </div>

        {/* Bottom Contract Address Bar matching reference design */}
        <div className="py-8 sm:py-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="shrink-0">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-white/70">
              CONTRACT
            </span>
          </div>

          <div className="flex-1 max-w-xl text-left md:text-right">
            <p className="font-mono text-sm sm:text-base font-bold text-white break-all tracking-wide select-all">
              {TOKEN_DETAILS.contractAddress}
            </p>

            <div className="mt-4 flex items-center justify-start md:justify-end gap-3">
              <button
                onClick={handleCopy}
                className="px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider bg-white hover:bg-white/90 text-[#1972ea] transition-all flex items-center gap-2 cursor-pointer shadow-md active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#1972ea]" />
                    <span>Copied Address</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Contract</span>
                  </>
                )}
              </button>

              <a
                href={SOCIAL_LINKS.solscan}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider bg-white/20 hover:bg-white/30 text-white transition-all flex items-center gap-1.5 backdrop-blur-sm"
              >
                <span>Solscan</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
