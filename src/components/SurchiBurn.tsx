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
        
        {/* Header Block */}
        <div className="mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase text-[#00F7FF] mb-3">
            🔒THE SURCHI BURN?
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white leading-[1.08] max-w-4xl [text-wrap:balance]">
            NOT BURNED. WAITING FOR HER SIGNAL.
          </h2>
        </div>

        {/* Two-Column Editorial Quote & Reserve Wallet Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Quote & Signal Narrative */}
          <div className="lg:col-span-7 rounded-3xl bg-white/[0.03] border border-white/15 p-7 sm:p-10 flex flex-col justify-between gap-8">
            <blockquote className="text-xl sm:text-2xl lg:text-[1.65rem] font-medium text-white/90 leading-relaxed">
              “We are not sure if that stays there forever or she wakes and burn or she pulls a Anatoly Yakovenko.”
            </blockquote>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#00F7FF]">
                SURCHI, HELO
              </span>
            </div>
          </div>

          {/* Wallet Balance & Action Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#05070B] border border-[#00F7FF]/25 p-7 sm:p-10 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <span className="block text-xs font-mono font-bold uppercase tracking-[0.2em] text-white/60">
                HER SUR + HER LP SHARE
              </span>

              <div className="space-y-1.5">
                <p className="text-3xl sm:text-4xl font-black tracking-tight text-white font-mono-data">
                  560,000 $SUR
                </p>
                <p className="text-2xl sm:text-3xl font-black tracking-tight text-[#00F7FF] font-mono-data">
                  $50,5000
                </p>
              </div>
            </div>

            <div>
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
