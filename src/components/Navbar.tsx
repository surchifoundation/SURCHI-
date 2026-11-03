import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/surchiData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0158ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Brand Wordmark (Always visible on left) */}
        <a
          href="#"
          className="text-2xl sm:text-3xl font-['Rubik_Mono_One',sans-serif] tracking-wider text-white hover:text-white/80 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>SURCHI</span>
        </a>

        {/* Tablet & Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8 text-xs lg:text-sm font-black tracking-wider uppercase text-white">
          <a
            href="#about"
            className="hover:text-[#00F7FF] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            About
          </a>
          <a
            href="#facts"
            className="hover:text-[#00F7FF] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            The Facts
          </a>
          <a
            href="#how-to-buy"
            className="hover:text-[#00F7FF] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            How to Buy
          </a>
          <a
            href="#exchanges"
            className="hover:text-[#00F7FF] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Exchanges
          </a>
          <a
            href="#view-surchi"
            className="hover:text-[#00F7FF] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Charts
          </a>
          <a
            href="#dogs-family"
            className="hover:text-[#00F7FF] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Dogs Family
          </a>
          <a
            href="#memes"
            className="hover:text-[#00F7FF] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Memes
          </a>
          <a
            href="#community"
            className="hover:text-[#00F7FF] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Community
          </a>
        </nav>

        {/* Tablet & Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 shadow-sm"
          >
            <svg className="w-4 h-4 lg:w-5 lg:h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noreferrer"
            className="px-4 lg:px-6 py-2 lg:py-2.5 text-xs font-black uppercase tracking-wider text-[#1972ea] bg-white hover:bg-white/90 transition-all rounded-full shadow-md whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
          >
            <svg className="w-4 h-4 fill-[#1972ea]" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>Discord</span>
          </a>
        </div>

        {/* Mobile Hamburger Button (Right aligned) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white focus:outline-none flex flex-col items-center justify-center gap-1.5 cursor-pointer rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <div className="flex flex-col items-center gap-1.5 py-1">
                <span className="w-7 h-0.5 bg-white rounded-full block" />
                <span className="w-7 h-0.5 bg-white rounded-full block" />
                <span className="w-7 h-0.5 bg-white rounded-full block" />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0158ff] border-t border-white/20 px-6 py-8 space-y-6 text-center shadow-2xl">
          <div className="flex flex-col space-y-4 text-xl font-['Rubik_Mono_One',sans-serif] tracking-wider uppercase text-white">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white/80 transition-colors"
            >
              About
            </a>
            <a
              href="#facts"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white/80 transition-colors"
            >
              The Facts
            </a>
            <a
              href="#how-to-buy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white/80 transition-colors"
            >
              How to Buy
            </a>
            <a
              href="#exchanges"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white/80 transition-colors"
            >
              Exchanges
            </a>
            <a
              href="#view-surchi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#00F7FF] transition-colors"
            >
              View SURCHI At
            </a>
            <a
              href="#dogs-family"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white/80 transition-colors"
            >
              Dogs Family
            </a>
            <a
              href="#memes"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white/80 transition-colors"
            >
              Memes
            </a>
            <a
              href="#community"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-white/80 transition-colors"
            >
              Community
            </a>
          </div>

          <div className="pt-4 max-w-xs mx-auto flex flex-col gap-3">
            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 text-center font-black tracking-wider uppercase text-[#1972ea] bg-white hover:bg-white/90 transition-all rounded-full shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-[#1972ea]" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
              <span>Join Discord</span>
            </a>

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-center font-black tracking-wider uppercase text-white bg-black/25 hover:bg-black/40 border border-white/20 transition-all rounded-full shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
