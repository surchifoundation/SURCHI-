export const TOKEN_DETAILS = {
  ticker: '$SUR',
  name: 'SURCHI',
  blockchain: 'Solana',
  contractAddress: 'SURCHi1111111111111111111111111111111111111',
  totalSupply: '2,100,000 $SUR',
  tax: '0% / 0%',
  mintAuthority: 'Revoked',
  freezeAuthority: 'Revoked',
  liquidity: '100% Burnt',
  distribution: [
    { label: 'Fair Launch', percentage: '60%', amount: '1,260,000 $SUR', color: '#0052FF' },
    { label: 'Liquidity Pool', percentage: '30%', amount: '630,000 $SUR', color: '#00F7FF' },
    { label: 'Listing & Marketing', percentage: '10%', amount: '210,000 $SUR', color: '#FFB800' },
  ],
  explorerUrl: 'https://solscan.io/token/SURCHi1111111111111111111111111111111111111',
  swapUrl: 'https://raydium.io/swap/?inputMint=sol&outputMint=SURCHi1111111111111111111111111111111111111',
};

export const HOW_TO_BUY_STEPS = [
  {
    step: '01',
    title: 'Create a Solana Wallet',
    description: 'Download Phantom, Solflare, or your favorite Solana wallet from the app store or as a browser extension. Keep your seed phrase safe.',
  },
  {
    step: '02',
    title: 'Get Some SOL',
    description: 'Purchase SOL on Coinbase, Binance, or Kraken and send it over to your personal Solana wallet.',
  },
  {
    step: '03',
    title: 'Connect to Raydium or Jupiter',
    description: 'Open Raydium or Jupiter Exchange on your browser and connect your wallet with a single tap.',
  },
  {
    step: '04',
    title: 'Swap SOL for $SUR',
    description: 'Paste the official $SUR contract address, confirm your swap, and welcome to the SURCHI puppy pack!',
  },
];

export const MEME_GALLERY = [
  {
    title: 'SURCHI On Coinbase',
    category: 'Coinbase Mascot',
    image: '/images/surchi_coinbase.jpg',
  },
  {
    title: 'Deep Research (Sleeping ZZZ)',
    category: 'Origin Lore',
    image: '/images/surchi_reading_bedtime.jpg',
  },
  {
    title: 'PUP-1 Moon Rocket',
    category: 'Meme Rocket',
    image: '/images/surchi_moon_rocket.jpg',
  },
  {
    title: 'The Surchi Smirk',
    category: 'Paws In Pockets',
    image: '/images/surchi_cool_smirk.jpg',
  },
];

export const SOCIAL_LINKS = {
  website: 'https://surchi.xyz',
  x: 'https://x.com/surchi_xyz',
  discord: 'https://discord.gg/surchi',
  github: 'https://github.com/surchi-intelligence',
  solscan: 'https://solscan.io/token/SURCHi1111111111111111111111111111111111111',
  raydium: 'https://raydium.io/swap/?inputMint=sol&outputMint=SURCHi1111111111111111111111111111111111111',
  email: 'info@surchi.xyz',
};
