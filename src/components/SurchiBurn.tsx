import React from 'react';
import { SOCIAL_LINKS } from '../data/surchiData';

export const SurchiBurn: React.FC = () => {
  return (
    <section
      id="surchi-burn"
      className="relative w-full bg-[#0B1018] text-white py-20 sm:py-24 lg:py-28 border-b border-white/10 overflow-hidden"
    >
      {/* Subtle Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#1972ea]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Single Unified Container */}
        <div className="rounded-3xl bg-white/[0.03] border border-white/15 p-7 sm:p-10 lg:p-14 flex flex-col gap-8 lg:gap-10">
          
          {/* Header Block */}
          <div>
            <p className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase text-[#00F7FF] mb-3">
              🔒THE SURCHI BURN?
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white leading-[1.08] max-w-4xl [text-wrap:balance]">
              NOT BURNED. WAITING FOR HER SIGNAL.
            </h2>
          </div>

          {/* Hairline Divider */}
          <div className="w-full border-t border-white/10" />

          {/* Quote & Reserve Readout inside the same single container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start lg:items-center">
            
            {/* Quote & Attribution */}
            <div className="lg:col-span-7 space-y-5">
              <blockquote className="text-xl sm:text-2xl lg:text-[1.65rem] font-medium text-white/90 leading-relaxed">
                “We are not sure if that stays there forever or she wakes and burn or she pulls a Anatoly Yakovenko.”
              </blockquote>
              <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#00F7FF]">
                SURCHI, HELO
              </p>
            </div>

            {/* Balance & View Wallet Action */}
            <div className="lg:col-span-5 pt-6 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-10 space-y-6">
              <div className="space-y-1.5">
                <p className="text-3xl sm:text-4xl font-black tracking-tight text-white font-mono-data">
                  560,000 $SUR
                </p>
                <p className="text-2xl sm:text-3xl font-black tracking-tight text-[#00F7FF] font-mono-data">
                  $50,5000
                </p>
                <span className="block pt-1 text-xs font-mono font-bold uppercase tracking-[0.2em] text-white/60">
                  HER SUR + HER LP SHARE
                </span>
              </div>

              <a
                href={SOCIAL_LINKS.solscan}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider bg-white text-[#05070B] hover:bg-[#00F7FF] transition-all shadow-lg hover:scale-[1.02] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00F7FF] whitespace-nowrap shrink-0"
              >
                VIEW WALLET&gt;
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
