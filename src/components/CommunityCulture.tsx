import React, { useState, useRef, useEffect } from 'react';
import { SOCIAL_LINKS, TOKEN_DETAILS } from '../data/surchiData';
import { Download, Check, Mail } from 'lucide-react';

export const CommunityCulture: React.FC = () => {
  const [downloadedItem, setDownloadedItem] = useState<string | null>(null);
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
  ];

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.defaultMuted = true;
        video.muted = true;
        video.play().catch(() => {});
      }
    });
  }, []);

  const handleDownload = async (title: string, mediaUrl: string, isVideo = true) => {
    const ext = isVideo ? 'mp4' : 'jpg';
    const filename = `${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.${ext}`;

    try {
      // 1. Fetch media as Blob directly
      const response = await fetch(mediaUrl);
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();

      // 2. Create object URL for clean native download
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        window.URL.revokeObjectURL(blobUrl);
      }, 1500);

      setDownloadedItem(title);
      setTimeout(() => setDownloadedItem(null), 2500);
    } catch (err) {
      console.warn('Direct fetch download fallback:', err);
      const link = document.createElement('a');
      link.href = mediaUrl;
      link.download = filename;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadedItem(title);
      setTimeout(() => setDownloadedItem(null), 2500);
    }
  };

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

      {/* Featured Videos Only (Stretched Side-by-Side Across Website, Auto-playing continuously without controls) */}
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8 justify-items-center">
          {FEATURED_VIDEOS.map((video, idx) => (
            <div
              key={idx}
              className="w-full max-w-[450px] lg:max-w-none aspect-[9/16] relative overflow-hidden select-none group"
            >
              <video
                ref={(el) => {
                  videoRefs.current[idx] = el;
                }}
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                className="w-full h-full object-cover object-center select-none pointer-events-none"
              >
                <source src={video.src} type="video/mp4" />
                {video.altSources.map((sourceUrl, sIdx) => (
                  <source key={sIdx} src={sourceUrl} type="video/mp4" />
                ))}
              </video>

              {/* Floating Icon-Only Download Button */}
              <button
                onClick={() => handleDownload(video.title, video.src, true)}
                aria-label={`Download ${video.title} Video`}
                title={`Download ${video.title} Video`}
                className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white text-[#0052FF] hover:bg-[#00F7FF] hover:text-[#05070B] transition-all flex items-center justify-center cursor-pointer shadow-2xl hover:scale-110 active:scale-95 z-10"
              >
                {downloadedItem === video.title ? (
                  <Check className="w-5 h-5 text-[#0052FF]" />
                ) : (
                  <Download className="w-5 h-5" />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Icon-Only Socials with High-Visibility X, Solana, Discord, Raydium, Email */}
        <div id="community" className="flex flex-col items-center justify-center text-center pt-8 border-t border-white/10">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#00F7FF] mb-6">
            Official Community Channels
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            
            {/* X (Twitter) - Pure Icon, No Container */}
            <a
              href={SOCIAL_LINKS.x}
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              title="X (Twitter)"
              className="p-3 text-white hover:text-[#00F7FF] transition-all hover:scale-125 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-current drop-shadow-md" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Solana Explorer - Pure Icon, No Container */}
            <a
              href={SOCIAL_LINKS.solscan}
              target="_blank"
              rel="noreferrer"
              aria-label="Solana Explorer"
              title="Solana Explorer"
              className="p-3 transition-all hover:scale-125 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <svg className="w-9 h-9 sm:w-10 sm:h-10 drop-shadow-[0_0_12px_rgba(20,241,149,0.6)]" viewBox="0 0 397.7 311.7" fill="none">
                <defs>
                  <linearGradient id="solanaGradCC" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#9945FF" />
                    <stop offset="50%" stopColor="#14F195" />
                    <stop offset="100%" stopColor="#00F7FF" />
                  </linearGradient>
                </defs>
                <path 
                  fill="url(#solanaGradCC)"
                  d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7zM64.6 3.8C67 1.4 70.3 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8zm268.5 115.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" 
                />
              </svg>
            </a>

            {/* Discord - Pure Icon, No Container */}
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              title="Discord"
              className="p-3 text-[#5865F2] hover:text-white transition-all hover:scale-125 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <svg className="w-8 h-8 sm:w-9 sm:h-9 fill-current drop-shadow-md" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>

            {/* Raydium - Pure Icon, No Container */}
            <a
              href={TOKEN_DETAILS.swapUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Raydium Swap"
              title="Raydium Swap"
              className="p-3 transition-all hover:scale-125 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <svg className="w-9 h-9 sm:w-10 sm:h-10 drop-shadow-md" viewBox="0 0 32 32" fill="none">
                <path d="M6 10.5L16 4.5L26 10.5L16 16.5L6 10.5Z" fill="#39D0D8" />
                <path d="M6 16.5L16 10.5L26 16.5L16 22.5L6 16.5Z" fill="#586CE9" />
                <path d="M6 22.5L16 16.5L26 22.5L16 28.5L6 22.5Z" fill="#8735EB" />
              </svg>
            </a>

            {/* Email - Pure Icon, No Container */}
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              aria-label="Email Us"
              title={`Email Us (${SOCIAL_LINKS.email})`}
              className="p-3 text-[#00F7FF] hover:text-white transition-all hover:scale-125 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <Mail className="w-8 h-8 sm:w-9 sm:h-9 drop-shadow-md" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
