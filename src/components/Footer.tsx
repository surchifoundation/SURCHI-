import React from 'react';
import { SOCIAL_LINKS, TOKEN_DETAILS } from '../data/surchiData';
import { Mail, ExternalLink, Send, Compass, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#05070B] text-white pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/public/assets/aistudio/surchi_logo_bb05a571.png"
                alt="SURCHI Logo"
                className="w-10 h-10 rounded-xl object-cover shadow-lg"
              />
              <span className="text-2xl font-black tracking-tight text-white uppercase">SURCHI</span>
            </div>
            
            <p className="text-xs sm:text-sm text-white/60 max-w-sm leading-relaxed">
              SURCHI ($SUR) — The iconic, glasses-wearing puppy in a hoodie on the Solana blockchain. No taxes, no fake roadmaps, just pure memes.
            </p>

            <div className="pt-2 text-xs font-mono text-white/50 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#00F7FF]" />
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-[#00F7FF] transition-colors">
                {SOCIAL_LINKS.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40">Navigation</h4>
            <ul className="space-y-2 text-sm font-medium text-white/70">
              <li>
                <a href="#about" className="hover:text-[#00F7FF] transition-colors">About SURCHI</a>
              </li>
              <li>
                <a href="#facts" className="hover:text-[#00F7FF] transition-colors">The Facts</a>
              </li>
              <li>
                <a href="#dogs-family" className="hover:text-[#00F7FF] transition-colors">Dogs Family</a>
              </li>
              <li>
                <a href="#how-to-buy" className="hover:text-[#00F7FF] transition-colors">How To Buy</a>
              </li>
              <li>
                <a href="#memes" className="hover:text-[#00F7FF] transition-colors">Meme Vault</a>
              </li>
              <li>
                <a href={TOKEN_DETAILS.swapUrl} target="_blank" rel="noreferrer" className="hover:text-[#00F7FF] transition-colors">
                  Buy on Raydium
                </a>
              </li>
            </ul>
          </div>

          {/* Horizontal Icon-Only Socials (Actual Brand Logos, Email Added, Website Removed) */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white/40">Socials</h4>
            <div className="flex flex-wrap items-center gap-4">
              {/* X (Twitter) - Pure Icon, No Container */}
              <a
                href={SOCIAL_LINKS.x}
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                title="X (Twitter)"
                className="text-white hover:text-[#00F7FF] transition-all hover:scale-125 active:scale-95 flex items-center justify-center cursor-pointer"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
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
                className="transition-all hover:scale-125 active:scale-95 flex items-center justify-center cursor-pointer"
              >
                <svg className="w-6 h-6 drop-shadow-[0_0_8px_rgba(20,241,149,0.5)]" viewBox="0 0 397.7 311.7" fill="none">
                  <defs>
                    <linearGradient id="solanaGradFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#9945FF" />
                      <stop offset="50%" stopColor="#14F195" />
                      <stop offset="100%" stopColor="#00F7FF" />
                    </linearGradient>
                  </defs>
                  <path 
                    fill="url(#solanaGradFooter)"
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
                className="text-[#5865F2] hover:text-white transition-all hover:scale-125 active:scale-95 flex items-center justify-center cursor-pointer"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
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
                className="transition-all hover:scale-125 active:scale-95 flex items-center justify-center cursor-pointer"
              >
                <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
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
                className="text-[#00F7FF] hover:text-white transition-all hover:scale-125 active:scale-95 flex items-center justify-center cursor-pointer"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 text-xs font-mono text-white/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} SURCHI Community. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Solana Blockchain</span>
              <span aria-hidden="true">·</span>
              <span>100% Community Driven</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
