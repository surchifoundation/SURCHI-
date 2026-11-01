import React from 'react';
import { HOW_TO_BUY_STEPS, TOKEN_DETAILS } from '../data/surchiData';
import { Wallet, Coins, ArrowRightLeft, CheckCircle2, ExternalLink } from 'lucide-react';

export const HowToBuy: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Wallet className="w-6 h-6 text-[#00F7FF]" />;
      case 1:
        return <Coins className="w-6 h-6 text-[#00FF99]" />;
      case 2:
        return <ArrowRightLeft className="w-6 h-6 text-[#0647FF]" />;
      case 3:
        return <CheckCircle2 className="w-6 h-6 text-[#00F7FF]" />;
      default:
        return <Wallet className="w-6 h-6 text-[#00F7FF]" />;
    }
  };

  return (
    <section id="how-to-buy" className="relative w-full bg-[#05070B] text-white py-20 md:py-32 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00F7FF] mb-3">
            <span>Simple Setup</span>
            <span aria-hidden="true">·</span>
            <span>Solana Native</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-white">
            How To Buy $SUR
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
            Ready to join the SURCHI movement? Follow these 4 easy steps to get $SUR in your wallet in under 2 minutes.
          </p>
        </div>

        {/* 4 Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_TO_BUY_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#0B1018] rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between hover:border-[#00F7FF]/50 transition-all shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-2xl font-black font-mono text-[#00F7FF]/40 group-hover:text-[#00F7FF] transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-black uppercase tracking-tight text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-white/40">
                Step {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>

        {/* Quick Swap CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#0647FF] border border-white/20 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-black uppercase text-white">
              Ready to Swap on Raydium?
            </h4>
            <p className="text-xs sm:text-sm text-white/85 mt-1">
              Have your SOL ready in Phantom or Solflare and swap directly for $SUR with zero tax.
            </p>
          </div>

          <a
            href={TOKEN_DETAILS.swapUrl}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider bg-white hover:bg-[#00F7FF] text-[#0647FF] hover:text-[#05070B] transition-all shadow-lg whitespace-nowrap flex items-center gap-2"
          >
            <span>Open Raydium Swap</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
