import React, { useRef, useEffect } from 'react';
import { SOCIAL_LINKS, TOKEN_DETAILS } from '../data/surchiData';
import { Mail } from 'lucide-react';
import { setupContinuousAutoplay } from '../utils/videoAutoplay';

export const CommunityCulture: React.FC = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const FEATURED_VIDEOS = [
    {
      title: 'SURCHI River Walk',
      src: '/assets/aistudio/InShot_20261031_220635396_791c5c19.mp4',
      altSources: ['/videos/surchi_walk.mp4'],
    },
    {
      title: 'SURCHI Park Walk',
      src: '/assets/aistudio/InShot_20261031_220830348_ddd7e932.mp4',
      altSources: ['/videos/surchi_park.mp4'],
    },
    {
      title: 'SURCHI Flower Meadow',
      src: '/assets/aistudio/InShot_20261101_004340859_2a5fc1d4.mp4',
      altSources: ['/videos/surchi_flowers.mp4'],
    },
    {
      title: 'SURCHI Ocean Cliff',
      src: '/assets/aistudio/InShot_20261101_202323031_65f39e4e.mp4',
      altSources: [],
    },
  ];

  useEffect(() => {
    const cleanups = videoRefs.current.map((video) => setupContinuousAutoplay(video));
    return () => {
      cleanups.forEach((cleanup) => cleanup && cleanup());
    };
  }, []);


  return (
    <section id="memes" className="relative w-full bg-[#0B1018] text-white py-20 md:py-32 border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#00F7FF] mb-3">
              <span>Community Artwork & Lore</span>
              <span aria-hidden="true">·</span>
              <span>100% Free For All</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight uppercase text-white">
              The SURCHI Meme Vault
            </h2>
            <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
              Memes are the heartbeat of the decentralized world. Grab the official high-res videos to spread the SURCHI vibe.
            </p>
          </div>

          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-[#5865F2] hover:bg-white hover:text-[#5865F2] text-white transition-all flex items-center gap-2 self-start md:self-auto cursor-pointer shadow-lg"
          >
            <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>Join Discord</span>
          </a>
        </div>

      </div>

      {/* Featured Videos (Spanning Side-by-Side Across Entire Website Just Like Header Section) */}
      <div className="relative w-full select-none px-0 mb-16 sm:mb-24 overflow-hidden">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-1 md:gap-2 lg:gap-3">
          {FEATURED_VIDEOS.map((video, idx) => (
            <div
              key={idx}
              className="w-full aspect-[9/16] max-h-[75vh] sm:max-h-[82vh] relative overflow-hidden select-none flex items-center justify-center"
            >
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                src={video.src}
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
                <source src={video.src} type="video/mp4" />
                {video.altSources.map((sourceUrl, sIdx) => (
                  <source key={sIdx} src={sourceUrl} type="video/mp4" />
                ))}
              </video>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Official Community Channels with Interactive Floating Glass Bubble Display */}
        <div id="community" className="flex flex-col items-center justify-center text-center pt-10 sm:pt-14 border-t border-white/10 relative">
          
          {/* Subtle Ambient Bubble Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-[#00F7FF]/10 blur-3xl rounded-full pointer-events-none" />

          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#00F7FF] mb-2.5 relative z-10">
            <span className="w-2 h-2 rounded-full bg-[#00F7FF] animate-pulse" />
            <span>Official Community Channels</span>
            <span className="w-2 h-2 rounded-full bg-[#00F7FF] animate-pulse" />
          </div>
          <p className="text-xs sm:text-sm text-white/75 max-w-md mb-8 sm:mb-10 relative z-10 font-normal">
            Float into the pack. Connect directly with the global SURCHI community across our verified channels.
          </p>
          
          {/* Social Icons Floating Bubble Cluster - Pure Bubbles, No Name Text */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 relative z-10">
            
            {/* Bubble 1: X (Twitter) */}
            <a
              href={SOCIAL_LINKS.x}
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              title="X (Twitter)"
              className="group transition-transform duration-300 active:scale-95 cursor-pointer animate-bubble-float"
              style={{ animationDelay: '0s' }}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-white/20 via-white/10 to-white/5 backdrop-blur-md border border-white/35 shadow-[0_10px_25px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-2 group-hover:border-white group-hover:shadow-[0_0_30px_rgba(255,255,255,0.7)]">
                {/* Bubble Specular Glare/Reflection */}
                <div className="absolute top-2 left-2.5 w-4 sm:w-5 h-2 sm:h-2.5 rounded-full bg-white/70 -rotate-45 blur-[0.5px] pointer-events-none" />
                <div className="absolute top-3.5 left-2 w-1.5 h-1.5 rounded-full bg-white/80 pointer-events-none" />
                <div className="absolute bottom-2 right-2.5 w-4 h-1.5 rounded-full bg-white/25 rotate-45 blur-[1px] pointer-events-none" />
                
                <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white transition-transform duration-300 group-hover:scale-110 drop-shadow-md" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </a>

            {/* Bubble 2: Solana Explorer */}
            <a
              href={SOCIAL_LINKS.solscan}
              target="_blank"
              rel="noreferrer"
              aria-label="Solana Explorer"
              title="Solana Explorer"
              className="group transition-transform duration-300 active:scale-95 cursor-pointer animate-bubble-float"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-white/20 via-white/10 to-white/5 backdrop-blur-md border border-white/35 shadow-[0_10px_25px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-2 group-hover:border-[#14F195] group-hover:shadow-[0_0_30px_rgba(20,241,149,0.7)]">
                {/* Bubble Specular Glare/Reflection */}
                <div className="absolute top-2 left-2.5 w-4 sm:w-5 h-2 sm:h-2.5 rounded-full bg-white/70 -rotate-45 blur-[0.5px] pointer-events-none" />
                <div className="absolute top-3.5 left-2 w-1.5 h-1.5 rounded-full bg-white/80 pointer-events-none" />
                <div className="absolute bottom-2 right-2.5 w-4 h-1.5 rounded-full bg-white/25 rotate-45 blur-[1px] pointer-events-none" />

                <svg className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(20,241,149,0.6)]" viewBox="0 0 397.7 311.7" fill="none">
                  <defs>
                    <linearGradient id="solanaGradBubble" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9945FF" />
                      <stop offset="50%" stopColor="#14F195" />
                      <stop offset="100%" stopColor="#00F7FF" />
                    </linearGradient>
                  </defs>
                  <path 
                    fill="url(#solanaGradBubble)"
                    d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7zM64.6 3.8C67 1.4 70.3 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8zm268.5 115.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" 
                  />
                </svg>
              </div>
            </a>

            {/* Bubble 3: Discord */}
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              title="Discord"
              className="group transition-transform duration-300 active:scale-95 cursor-pointer animate-bubble-float"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-white/20 via-white/10 to-white/5 backdrop-blur-md border border-white/35 shadow-[0_10px_25px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-2 group-hover:border-[#5865F2] group-hover:shadow-[0_0_30px_rgba(88,101,242,0.8)]">
                {/* Bubble Specular Glare/Reflection */}
                <div className="absolute top-2 left-2.5 w-4 sm:w-5 h-2 sm:h-2.5 rounded-full bg-white/70 -rotate-45 blur-[0.5px] pointer-events-none" />
                <div className="absolute top-3.5 left-2 w-1.5 h-1.5 rounded-full bg-white/80 pointer-events-none" />
                <div className="absolute bottom-2 right-2.5 w-4 h-1.5 rounded-full bg-white/25 rotate-45 blur-[1px] pointer-events-none" />

                <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-[#5865F2] group-hover:fill-white transition-all duration-300 group-hover:scale-110 drop-shadow-md" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </div>
            </a>

            {/* Bubble 4: GitHub */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="group transition-transform duration-300 active:scale-95 cursor-pointer animate-bubble-float"
              style={{ animationDelay: '1.2s' }}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-white/20 via-white/10 to-white/5 backdrop-blur-md border border-white/35 shadow-[0_10px_25px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-2 group-hover:border-[#00F7FF] group-hover:shadow-[0_0_30px_rgba(0,247,255,0.7)]">
                {/* Bubble Specular Glare/Reflection */}
                <div className="absolute top-2 left-2.5 w-4 sm:w-5 h-2 sm:h-2.5 rounded-full bg-white/70 -rotate-45 blur-[0.5px] pointer-events-none" />
                <div className="absolute top-3.5 left-2 w-1.5 h-1.5 rounded-full bg-white/80 pointer-events-none" />
                <div className="absolute bottom-2 right-2.5 w-4 h-1.5 rounded-full bg-white/25 rotate-45 blur-[1px] pointer-events-none" />

                <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white group-hover:fill-[#00F7FF] transition-all duration-300 group-hover:scale-110 drop-shadow-md" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </div>
            </a>

            {/* Bubble 5: Raydium */}
            <a
              href={TOKEN_DETAILS.swapUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Raydium Swap"
              title="Raydium Swap"
              className="group transition-transform duration-300 active:scale-95 cursor-pointer animate-bubble-float"
              style={{ animationDelay: '1.6s' }}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-white/20 via-white/10 to-white/5 backdrop-blur-md border border-white/35 shadow-[0_10px_25px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-2 group-hover:border-[#39D0D8] group-hover:shadow-[0_0_30px_rgba(57,208,216,0.7)]">
                {/* Bubble Specular Glare/Reflection */}
                <div className="absolute top-2 left-2.5 w-4 sm:w-5 h-2 sm:h-2.5 rounded-full bg-white/70 -rotate-45 blur-[0.5px] pointer-events-none" />
                <div className="absolute top-3.5 left-2 w-1.5 h-1.5 rounded-full bg-white/80 pointer-events-none" />
                <div className="absolute bottom-2 right-2.5 w-4 h-1.5 rounded-full bg-white/25 rotate-45 blur-[1px] pointer-events-none" />

                <svg className="w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-110 drop-shadow-md" viewBox="0 0 32 32" fill="none">
                  <path d="M6 10.5L16 4.5L26 10.5L16 16.5L6 10.5Z" fill="#39D0D8" />
                  <path d="M6 16.5L16 10.5L26 16.5L16 22.5L6 16.5Z" fill="#586CE9" />
                  <path d="M6 22.5L16 16.5L26 22.5L16 28.5L6 22.5Z" fill="#8735EB" />
                </svg>
              </div>
            </a>

            {/* Bubble 6: Email */}
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              aria-label="Email Us"
              title={`Email Us (${SOCIAL_LINKS.email})`}
              className="group transition-transform duration-300 active:scale-95 cursor-pointer animate-bubble-float"
              style={{ animationDelay: '2.0s' }}
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-b from-white/20 via-white/10 to-white/5 backdrop-blur-md border border-white/35 shadow-[0_10px_25px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover:scale-115 group-hover:-translate-y-2 group-hover:border-[#00F7FF] group-hover:shadow-[0_0_30px_rgba(0,247,255,0.8)]">
                {/* Bubble Specular Glare/Reflection */}
                <div className="absolute top-2 left-2.5 w-4 sm:w-5 h-2 sm:h-2.5 rounded-full bg-white/70 -rotate-45 blur-[0.5px] pointer-events-none" />
                <div className="absolute top-3.5 left-2 w-1.5 h-1.5 rounded-full bg-white/80 pointer-events-none" />
                <div className="absolute bottom-2 right-2.5 w-4 h-1.5 rounded-full bg-white/25 rotate-45 blur-[1px] pointer-events-none" />

                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-[#00F7FF] group-hover:text-white transition-all duration-300 group-hover:scale-110 drop-shadow-md" />
              </div>
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};
