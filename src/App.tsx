/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandMarquee } from './components/BrandMarquee';
import { Introduction } from './components/Introduction';
import { TokenInfo } from './components/TokenInfo';
import { HowToBuy } from './components/HowToBuy';
import { ExchangesAndFutures } from './components/ExchangesAndFutures';
import { ViewSurchiAt } from './components/ViewSurchiAt';
import { DogsFamily } from './components/DogsFamily';
import { CommunityCulture } from './components/CommunityCulture';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

export default function App() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-white flex flex-col selection:bg-[#00F7FF] selection:text-[#05070B]">
      {/* Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* Section A: Hero with Mascot */}
        <Hero />

        {/* Section B: Brand Marquee Ticker */}
        <BrandMarquee />

        {/* Section C: Who is SURCHI (Story & Lore) */}
        <Introduction />

        {/* Section D: Meme-o-nomics (Taxes, Supply, Burnt LP) */}
        <TokenInfo />

        {/* Section E: How to Buy $SUR */}
        <HowToBuy />

        {/* Section F: Exchanges & Futures Listings */}
        <ExchangesAndFutures />

        {/* Section G: View SURCHI At (CMC, CoinGecko, DEXTools, DEXScreener) */}
        <ViewSurchiAt />

        {/* Section H: Dogs Family (Meme Dynasty) */}
        <DogsFamily />

        {/* Section H: The SURCHI Meme Vault */}
        <CommunityCulture />

        {/* Section I: Final Call to Action */}
        <CallToAction onExploreTop={handleScrollToTop} />
      </main>

      {/* Footer & Entertainment Disclaimer */}
      <Footer />
    </div>
  );
}
