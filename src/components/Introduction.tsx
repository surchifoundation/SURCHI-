import React, { useRef, useEffect } from 'react';
import { setupContinuousAutoplay } from '../utils/videoAutoplay';

export const Introduction: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const cleanup = setupContinuousAutoplay(videoRef.current);
    return cleanup;
  }, []);

  return (
    <section id="about" className="relative w-full bg-[#05070B] text-white py-16 sm:py-24 lg:py-28 border-b border-white/10 overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-[#00F7FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#0052FF]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header Block */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pill */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#00F7FF] mb-3">
          <span>The Meme Origin & Lore</span>
          <span aria-hidden="true">·</span>
          <span>Official Backstory</span>
        </div>

        {/* Section Main Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-[1.08] text-white mb-2">
          🐶 MEET SURCHI
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#00F7FF] via-white to-[#0052FF] mb-6 sm:mb-8">
          Too Busy Studying To Care About Taxes.
        </p>
      </div>

      {/* Video Spanning Side by Side Across Website (Positioned Directly Above the Lore Story) */}
      <div className="relative w-full flex items-center justify-center select-none px-0 mt-4 mb-10 sm:mb-14 z-10 overflow-hidden">
        <div className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl aspect-[9/16] max-h-[75vh] sm:max-h-[82vh] relative overflow-hidden select-none flex items-center justify-center">
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

      {/* Complete Lore Story Content (Right Below the Side-by-Side Video) */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-6 text-base sm:text-lg text-white/85 leading-relaxed font-normal">
          
          <p className="text-lg sm:text-xl text-white font-medium">
            Every great crypto legend has a beginning. Some are born from billion-dollar ideas, some from revolutionary technology, and others from pure internet madness.
          </p>

          <p>
            But <strong className="text-[#00F7FF] font-bold">SURCHI</strong>? SURCHI was born from one very sleepy golden retriever who simply wanted to understand crypto but couldn't stay awake long enough to finish reading about it.
          </p>

          <p>
            It all started with a sleepy golden retriever puppy wearing oversized black glasses and a ridiculously cozy hoodie. Surrounded by crypto books, trading charts, blockchain research papers, and a laptop glowing with endless green and red candles, Surchi was determined to become the smartest dog in the crypto universe.
          </p>

          {/* Mission Callout Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-[#00F7FF]/30 my-6 shadow-[0_0_30px_rgba(0,247,255,0.06)]">
            <span className="text-xs font-mono font-bold tracking-wider text-[#00F7FF] uppercase block mb-1">
              The Pup Mission
            </span>
            <p className="text-lg sm:text-xl font-black uppercase tracking-tight text-white">
              He had one mission: Study everything. Understand nothing. Sleep through everything.
            </p>
          </div>

          <p>
            While other dogs were busy chasing balls, Surchi was chasing market trends. While other puppies were barking at strangers, Surchi was barking at resistance levels. He spent countless hours trying to understand Bitcoin, Ethereum, Solana, DeFi, NFTs, liquidity pools, tokenomics, smart contracts, and the mysterious world of memecoins.
          </p>

          <div className="border-l-2 border-[#00F7FF] pl-4 sm:pl-6 my-4 space-y-2 text-white/90">
            <p className="font-semibold text-white">
              Unfortunately, there was just one tiny problem.
            </p>
            <p className="text-xl sm:text-2xl font-black text-[#00F7FF] uppercase tracking-wide">
              Surchi kept falling asleep.
            </p>
            <p className="text-sm font-mono text-white/60 uppercase">
              Every single time.
            </p>
          </div>

          <p>
            One minute, he was reading a serious crypto research paper. The next minute, his glasses were sliding down his nose, his head was resting on an open book, and he was dreaming about a world where every candle was green, every dip was an opportunity, and every portfolio magically went to the moon.
          </p>

          <p>
            His favourite bedtime stories weren't fairy tales. They were whitepapers, blockchain explorers, and market analysis reports.
          </p>

          <p>
            His favourite bedtime activity? Opening 27 browser tabs, pretending to conduct professional research, and falling asleep before finishing the first paragraph.
          </p>

          <p>
            Soon, pictures of the adorable, exhausted crypto puppy began spreading across the internet. Traders, degens, hodlers, and professional chart watchers instantly connected with him.
          </p>

          <p className="text-lg sm:text-xl text-white font-semibold">
            Everyone knew that feeling.
          </p>

          <p>
            The sleepless nights watching charts. The endless DYOR. The complicated tokenomics. The sudden market crashes. The endless promises of the next 100x. And, of course, the universal experience of being too busy studying crypto to remember anything else.
          </p>

          <p>
            Surchi became more than just a cute sleepy puppy. He became a symbol of the everyday crypto community: curious, ambitious, slightly confused, permanently exhausted, but never giving up.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[#00F7FF] font-mono text-xs block mb-1">MARKET PHILOSOPHY #1</span>
              <p className="font-bold text-white text-base">He doesn't chase hype. He studies it.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-[#00F7FF] font-mono text-xs block mb-1">MARKET PHILOSOPHY #2</span>
              <p className="font-bold text-white text-base">He doesn't panic during every dip. He simply adjusts his glasses, opens another research tab, and takes a nap.</p>
            </div>
          </div>

          <p>
            And taxes? Well, Surchi is still trying to understand the difference between market capitalization and his homework.
          </p>

          {/* Mantra Highlight Banner */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0052FF]/20 via-[#00F7FF]/20 to-transparent border border-[#00F7FF]/30 my-6">
            <p className="text-lg sm:text-xl font-black uppercase text-white tracking-tight">
              Too busy studying to care about taxes. Too sleepy to panic. Too curious to quit.
            </p>
          </div>

          <p>
            Today, SURCHI represents the funny, unpredictable, and wonderfully chaotic side of internet crypto culture. A community built around a simple idea: sometimes the smartest move in the market is to laugh, relax, and enjoy the ride.
          </p>

          <p>
            No complicated personality. No pretending to know everything. Just one legendary golden retriever, a pair of oversized glasses, an endless supply of crypto books, and a dream bigger than the moon.
          </p>

          <p>
            Because in a market full of serious traders, complicated charts, and endless financial advice, sometimes all you need is a sleepy dog to remind you why you joined crypto in the first place.
          </p>

          {/* Meet SURCHI Closing Card */}
          <div className="pt-6 pb-2">
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-6">
              Meet SURCHI. The world's busiest sleepy crypto researcher.
            </h3>

            {/* 3 Core Pup Lore Mantras */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.04] border border-[#00F7FF]/30 hover:border-[#00F7FF] transition-colors">
                <span className="text-2xl select-none" role="img" aria-label="dog">🐶</span>
                <span className="font-black text-sm sm:text-base uppercase tracking-tight text-white">
                  Too Busy Studying To Care About Taxes.
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.04] border border-[#00F7FF]/30 hover:border-[#00F7FF] transition-colors">
                <span className="text-2xl select-none" role="img" aria-label="books">📚</span>
                <span className="font-black text-sm sm:text-base uppercase tracking-tight text-white">
                  DYOR? Surchi is already asleep.
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.04] border border-[#00F7FF]/30 hover:border-[#00F7FF] transition-colors">
                <span className="text-2xl select-none" role="img" aria-label="rocket">🚀</span>
                <span className="font-black text-sm sm:text-base uppercase tracking-tight text-white">
                  Study hard. Sleep harder. Meme forever.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4 Pup Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-16 sm:mt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          
          <div className="space-y-1.5 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00F7FF]/30 transition-colors">
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

          <div className="space-y-1.5 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00F7FF]/30 transition-colors">
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

          <div className="space-y-1.5 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00F7FF]/30 transition-colors">
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

          <div className="space-y-1.5 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#00F7FF]/30 transition-colors">
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

    </section>
  );
};
