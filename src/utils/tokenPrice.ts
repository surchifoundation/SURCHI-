import { useState, useEffect } from 'react';
import { TOKEN_DETAILS } from '../data/surchiData';

export function formatPrice(priceNum: number): string {
  if (!priceNum || isNaN(priceNum) || priceNum <= 0) return '';
  if (priceNum >= 1) {
    return `$${priceNum.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
  }
  if (priceNum >= 0.01) {
    return `$${priceNum.toFixed(4)}`;
  }
  if (priceNum >= 0.0001) {
    return `$${priceNum.toFixed(6)}`;
  }
  return `$${priceNum.toFixed(8)}`;
}

export function useLiveSurPrice(): { price: string | null } {
  const [price, setPrice] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchPrice() {
      try {
        const address = TOKEN_DETAILS.contractAddress;
        if (!address) return;

        // DexScreener multi-DEX API for real-time Solana prices
        const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${address}`);
        if (!res.ok) return;

        const data = await res.json();
        if (data && Array.isArray(data.pairs) && data.pairs.length > 0) {
          const validPairs = data.pairs.filter(
            (p: any) => p && p.priceUsd && !isNaN(parseFloat(p.priceUsd)) && parseFloat(p.priceUsd) > 0
          );
          if (validPairs.length > 0) {
            validPairs.sort(
              (a: any, b: any) => (b.liquidity?.usd || 0) - (a.liquidity?.usd || 0)
            );
            const num = parseFloat(validPairs[0].priceUsd);
            const formatted = formatPrice(num);
            if (isMounted && formatted) {
              setPrice(formatted);
            }
          }
        }
      } catch {
        // Silently fail - strictly no fake or placeholder price
      }
    }

    fetchPrice();

    // Auto-update price every 15 seconds once token launches
    const interval = setInterval(fetchPrice, 15000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return { price };
}
