import React, { useRef, useEffect } from 'react';

export const Introduction: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section id="about" className="relative w-full bg-[#05070B] text-white py-20 md:py-32 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00F7FF] mb-3">
            <span>The Meme Origin & Lore</span>
            <span aria-hidden="true">·</span>
            <span>The Scholar Pup</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[1.05] text-white">
            Meet SURCHI. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F7FF] via-white to-[#0052FF]">
              Too Busy Studying To Care About Taxes.
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-normal">
            It all started with a sleepy golden retriever puppy wearing thick black glasses and a cozy hoodie, passed out cold while trying to read crypto bedtime stories. Surchi became an instant viral sensation—the mascot of every trader who tried to do their own research and fell asleep on page one.
          </p>
        </div>

      </div>

      {/* Full Stretched Lore Video (Edge-to-Edge across website on mobile, wide stretched showcase on desktop, no sound button, keeps playing continuously) */}
      <div className="w-full flex justify-center mb-16 sm:mb-24 px-0 sm:px-4">
        <div className="w-full max-w-[500px] sm:max-w-[580px] md:max-w-[680px] lg:max-w-[760px] aspect-[9/16] relative overflow-hidden select-none">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            className="w-full h-full object-cover object-center select-none pointer-events-none"
          >
            <source src="/assets/aistudio/InShot_20261031_214032618_63a3b783.mp4" type="video/mp4" />
            <source src="/public/assets/aistudio/InShot_20261031_214032618_63a3b783.mp4" type="video/mp4" />
            <source src="/videos/surchi_lore.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Pup Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
          
          <div className="space-y-2">
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-xs font-mono text-[#00F7FF] font-black">01.</span>
              <h3 className="text-lg font-black uppercase tracking-tight text-white">
                Scholar Pup
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Toshi has his cat on Base. Pepe has his frog on Ethereum. Solana has SURCHI: the chillest golden retriever puppy in black spectacles and a streetwear hoodie.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-xs font-mono text-[#00F7FF] font-black">02.</span>
              <h3 className="text-lg font-black uppercase tracking-tight text-white">
                Zero Taxes (0/0)
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              No developer taxes, no marketing cuts, and no surprises. Every token you buy is 100% yours. Trade freely and cleanly.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-xs font-mono text-[#00F7FF] font-black">03.</span>
              <h3 className="text-lg font-black uppercase tracking-tight text-white">
                Burnt LP & Mint
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              The LP is 100% burnt permanently and the mint authority is revoked on Solana. Nobody can ever mint more tokens or touch the liquidity.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-xs font-mono text-[#00F7FF] font-black">04.</span>
              <h3 className="text-lg font-black uppercase tracking-tight text-white">
                100% Community
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              SURCHI is entirely community-driven. No private VCs, no team vesting cliff, no fake tech roadmaps. Just pure memes and good vibes.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
