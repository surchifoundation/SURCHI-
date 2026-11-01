import React, { useRef, useEffect } from 'react';
import { setupContinuousAutoplay } from '../utils/videoAutoplay';

export const Introduction: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const cleanup = setupContinuousAutoplay(videoRef.current);
    return cleanup;
  }, []);

  return (
    <section id="about" className="relative w-full bg-[#05070B] text-white py-16 sm:py-24 lg:py-32 border-b border-white/10 overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#00F7FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#00F7FF] mb-3">
            <span>The Meme Origin & Lore</span>
            <span aria-hidden="true">·</span>
            <span>The Scholar Pup</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight uppercase leading-[1.05] text-white">
            Meet SURCHI. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F7FF] via-white to-[#0052FF]">
              Too Busy Studying To Care About Taxes.
            </span>
          </h2>
        </div>

        {/* Responsive Content Grid with Video Container Removed so it meets side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Text & Pillars Column */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-6 order-2 lg:order-1">
            <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
              It all started with a sleepy golden retriever puppy wearing thick black glasses and a cozy hoodie, passed out cold while trying to read crypto bedtime stories. Surchi became an instant viral sensation—the mascot of every trader who tried to do their own research and fell asleep on page one.
            </p>

            {/* 4 Pup Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 border-t border-white/10">
              
              <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00F7FF]/30 transition-colors">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs font-mono text-[#00F7FF] font-black">01.</span>
                  <h3 className="text-base font-black uppercase tracking-tight text-white">
                    Scholar Pup
                  </h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Toshi has his cat on Base. Pepe has his frog on Ethereum. Solana has SURCHI: the chillest golden retriever puppy in black spectacles and a streetwear hoodie.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00F7FF]/30 transition-colors">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs font-mono text-[#00F7FF] font-black">02.</span>
                  <h3 className="text-base font-black uppercase tracking-tight text-white">
                    Zero Taxes (0/0)
                  </h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  No developer taxes, no marketing cuts, and no surprises. Every token you buy is 100% yours. Trade freely and cleanly.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00F7FF]/30 transition-colors">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs font-mono text-[#00F7FF] font-black">03.</span>
                  <h3 className="text-base font-black uppercase tracking-tight text-white">
                    Burnt LP & Mint
                  </h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  The LP is 100% burnt permanently and the mint authority is revoked on Solana. Nobody can ever mint more tokens or touch the liquidity.
                </p>
              </div>

              <div className="space-y-1.5 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00F7FF]/30 transition-colors">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs font-mono text-[#00F7FF] font-black">04.</span>
                  <h3 className="text-base font-black uppercase tracking-tight text-white">
                    100% Community
                  </h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  SURCHI is entirely community-driven. No private VCs, no team vesting cliff, no fake tech roadmaps. Just pure memes and good vibes.
                </p>
              </div>

            </div>
          </div>

          {/* Lore Video: Container removed completely, meets side-by-side cleanly across layout */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center items-center order-1 lg:order-2 px-0">
            <div className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-[460px] aspect-[9/16] relative overflow-hidden select-none">
              <video
                ref={videoRef}
                src="/assets/aistudio/InShot_20261031_214032618_63a3b783.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
                {...({
                  'webkit-playsinline': 'true',
                  'x5-playsinline': 'true',
                  'x5-video-player-type': 'h5',
                  'x-webkit-airplay': 'deny',
                } as any)}
                className="w-full h-full object-cover object-center select-none pointer-events-none"
              >
                <source src="/assets/aistudio/InShot_20261031_214032618_63a3b783.mp4" type="video/mp4" />
                <source src="/videos/surchi_lore.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
