import React from 'react';

// Brand SVG Logos matching screenshots
const CoinbaseLogo = () => (
  <span className="font-sans font-bold text-lg sm:text-xl tracking-tight text-[#0052FF]">
    coinbase
  </span>
);

const BinanceAlphaLogo = () => (
  <div className="flex items-center gap-2">
    <svg className="w-5 h-5 text-[#F3BA2F]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3l3.09 3.09L7.91 13.27 4.82 10.18 12 3zm0 18l-3.09-3.09 7.18-7.18 3.09 3.09L12 21zm-7.18-7.18L1.73 10.73 4.82 7.64l3.09 3.09-3.09 3.09zm14.36 0l-3.09-3.09 3.09-3.09 3.09 3.09-3.09 3.09z" />
      <polygon points="12,7.5 15.5,11 12,14.5 8.5,11" />
    </svg>
    <div className="flex flex-col items-start leading-none">
      <span className="font-sans font-extrabold text-sm sm:text-base tracking-wider text-[#F3BA2F]">
        BINANCE
      </span>
      <span className="text-[9px] font-bold tracking-widest text-black self-end">
        ALPHA
      </span>
    </div>
  </div>
);

const BinanceFuturesLogo = () => (
  <div className="flex items-center gap-2">
    <svg className="w-5 h-5 text-[#F3BA2F]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3l3.09 3.09L7.91 13.27 4.82 10.18 12 3zm0 18l-3.09-3.09 7.18-7.18 3.09 3.09L12 21zm-7.18-7.18L1.73 10.73 4.82 7.64l3.09 3.09-3.09 3.09zm14.36 0l-3.09-3.09 3.09-3.09 3.09 3.09-3.09 3.09z" />
      <polygon points="12,7.5 15.5,11 12,14.5 8.5,11" />
    </svg>
    <div className="flex flex-col items-center leading-none">
      <span className="font-sans font-extrabold text-sm sm:text-base tracking-wider text-[#F3BA2F]">
        BINANCE
      </span>
      <span className="text-[9px] font-extrabold tracking-widest text-black mt-0.5">
        FUTURES
      </span>
    </div>
  </div>
);

const BybitLogo = () => (
  <div className="flex items-center font-black text-lg sm:text-xl tracking-tight">
    <span className="text-black">BYB</span>
    <span className="text-[#F7A600]">I</span>
    <span className="text-black">T</span>
  </div>
);

const BybitFuturesLogo = () => (
  <div className="flex flex-col items-center leading-none">
    <div className="flex items-center font-black text-base sm:text-lg tracking-tight">
      <span className="text-black">BYB</span>
      <span className="text-[#F7A600]">I</span>
      <span className="text-black">T</span>
    </div>
    <span className="text-[9px] font-extrabold tracking-widest text-black mt-0.5">
      FUTURES
    </span>
  </div>
);

const OkxLogo = () => (
  <div className="flex items-center gap-1 font-black tracking-widest text-lg sm:text-xl text-black">
    <div className="grid grid-cols-3 gap-0.5 w-4 h-4">
      <span className="bg-black rounded-[0.5px]"></span>
      <span className="bg-black rounded-[0.5px]"></span>
      <span className="bg-black rounded-[0.5px]"></span>
      <span className="bg-black rounded-[0.5px]"></span>
      <span className="bg-white rounded-[0.5px]"></span>
      <span className="bg-black rounded-[0.5px]"></span>
      <span className="bg-black rounded-[0.5px]"></span>
      <span className="bg-black rounded-[0.5px]"></span>
      <span className="bg-black rounded-[0.5px]"></span>
    </div>
    <span className="font-black text-lg tracking-tighter">OKX</span>
  </div>
);

const UpbitLogo = () => (
  <span className="font-sans font-black italic text-lg sm:text-xl text-[#093687] tracking-tight">
    Upbit
  </span>
);

const BithumbLogo = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-5 h-5 rounded-full bg-[#F37321] text-white flex items-center justify-center font-black text-xs">
      b
    </div>
    <span className="font-sans font-bold text-base sm:text-lg text-[#333333] tracking-tight">
      bithumb
    </span>
  </div>
);

const RevolutLogo = () => (
  <div className="flex items-center font-sans font-extrabold text-lg sm:text-xl text-black tracking-tight">
    <span>Revolut</span>
  </div>
);

const KrakenLogo = () => (
  <div className="flex items-center gap-1.5 text-[#5841D8]">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 3.86 2.19 7.21 5.4 8.91.24-.76.5-1.56.78-2.39-1.99-1.33-3.18-3.64-3.18-6.52 0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.88-1.19 5.19-3.18 6.52.28.83.54 1.63.78 2.39C19.81 19.21 22 15.86 22 12c0-5.52-4.48-10-10-10zm-3 8a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
    <span className="font-sans font-bold text-base sm:text-lg lowercase tracking-tight">
      kraken
    </span>
  </div>
);

const KrakenFuturesLogo = () => (
  <div className="flex flex-col items-center leading-none">
    <div className="flex items-center gap-1.5 text-[#5841D8]">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 3.86 2.19 7.21 5.4 8.91.24-.76.5-1.56.78-2.39-1.99-1.33-3.18-3.64-3.18-6.52 0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.88-1.19 5.19-3.18 6.52.28.83.54 1.63.78 2.39C19.81 19.21 22 15.86 22 12c0-5.52-4.48-10-10-10zm-3 8a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
      </svg>
      <span className="font-sans font-bold text-base lowercase tracking-tight">
        kraken
      </span>
    </div>
    <span className="text-[9px] font-extrabold tracking-widest text-black mt-0.5">
      FUTURES
    </span>
  </div>
);

const BinanceUsLogo = () => (
  <div className="flex items-center gap-1.5 text-[#1e2026]">
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 3l3.09 3.09L7.91 13.27 4.82 10.18 12 3zm0 18l-3.09-3.09 7.18-7.18 3.09 3.09L12 21zm-7.18-7.18L1.73 10.73 4.82 7.64l3.09 3.09-3.09 3.09zm14.36 0l-3.09-3.09 3.09-3.09 3.09 3.09-3.09 3.09z" />
    </svg>
    <span className="font-sans font-black text-xs sm:text-sm tracking-wider uppercase">
      BINANCE.US
    </span>
  </div>
);

const BitgetLogo = () => (
  <div className="flex items-center gap-1.5 text-[#00C8D6]">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M8.5 4.5l-6 6 6 6 2-2-4-4 4-4-2-2zm7 0l-2 2 4 4-4 4 2 2 6-6-6-6z" />
    </svg>
    <span className="font-sans font-extrabold text-base sm:text-lg tracking-tight">
      Bitget
    </span>
  </div>
);

const BitgetFuturesLogo = () => (
  <div className="flex flex-col items-center leading-none">
    <div className="flex items-center gap-1.5 text-[#111111]">
      <svg className="w-4 h-4 fill-[#00C8D6]" viewBox="0 0 24 24">
        <path d="M8.5 4.5l-6 6 6 6 2-2-4-4 4-4-2-2zm7 0l-2 2 4 4-4 4 2 2 6-6-6-6z" />
      </svg>
      <span className="font-sans font-extrabold text-base tracking-tight">
        Bitget
      </span>
    </div>
    <span className="text-[9px] font-extrabold tracking-widest text-black mt-0.5">
      FUTURES
    </span>
  </div>
);

const GateIoLogo = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-5 h-5 rounded-full border-2 border-[#1754F5] flex items-center justify-center relative">
      <span className="w-1.5 h-1.5 bg-[#00D0B8] rounded-full absolute -top-0.5 right-0.5"></span>
    </div>
    <span className="font-sans font-bold text-base sm:text-lg text-[#1e2026] tracking-tight">
      Gate.io
    </span>
  </div>
);

const GateIoFuturesLogo = () => (
  <div className="flex flex-col items-center leading-none">
    <div className="flex items-center gap-1.5">
      <div className="w-4 h-4 rounded-full border-2 border-[#1754F5] flex items-center justify-center relative">
        <span className="w-1 h-1 bg-[#00D0B8] rounded-full absolute -top-0.5 right-0.5"></span>
      </div>
      <span className="font-sans font-bold text-base text-[#1e2026] tracking-tight">
        Gate.io
      </span>
    </div>
    <span className="text-[9px] font-extrabold tracking-widest text-black mt-0.5">
      FUTURES
    </span>
  </div>
);

const MexcLogo = () => (
  <div className="flex items-center gap-1.5">
    <div className="flex items-center -space-x-1">
      <div className="w-4 h-4 bg-[#1F75FE] rounded-sm transform rotate-45"></div>
      <div className="w-4 h-4 bg-[#00C8D6] rounded-sm transform rotate-45"></div>
    </div>
    <span className="font-sans font-black text-base sm:text-lg text-black tracking-tight">
      MEXC
    </span>
  </div>
);

const MexcFuturesLogo = () => (
  <div className="flex flex-col items-center leading-none">
    <div className="flex items-center gap-1.5">
      <div className="flex items-center -space-x-1">
        <div className="w-3.5 h-3.5 bg-[#1F75FE] rounded-sm transform rotate-45"></div>
        <div className="w-3.5 h-3.5 bg-[#00C8D6] rounded-sm transform rotate-45"></div>
      </div>
      <span className="font-sans font-black text-base text-black tracking-tight">
        MEXC
      </span>
    </div>
    <span className="text-[9px] font-extrabold tracking-widest text-black mt-0.5">
      FUTURES
    </span>
  </div>
);

const CryptoComLogo = () => (
  <div className="flex items-center gap-1.5">
    <div className="w-4.5 h-4.5 border-2 border-[#103F78] rounded-md flex items-center justify-center text-[10px] font-black text-[#103F78]">
      ⬡
    </div>
    <span className="font-sans font-bold text-sm sm:text-base text-[#103F78] tracking-tight">
      crypto.com
    </span>
  </div>
);

const KucoinLogo = () => (
  <div className="flex items-center gap-1.5 text-[#24AE8F]">
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M4 4h4v7l6-7h5l-7 7.5L20 20h-5l-7-8v8H4V4z" />
    </svg>
    <span className="font-sans font-extrabold text-base sm:text-lg tracking-wider">
      KUCOIN
    </span>
  </div>
);

const CoinbaseWalletLogo = () => (
  <div className="flex items-center gap-2">
    <div className="w-5 h-5 rounded-full bg-[#0052FF] flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-xs"></div>
    </div>
    <div className="flex flex-col items-start leading-none">
      <span className="font-sans font-bold text-[11px] text-black">coinbase</span>
      <span className="font-sans font-extrabold text-[13px] sm:text-sm text-[#0052FF] tracking-tight">
        WALLET
      </span>
    </div>
  </div>
);

const MatchaLogo = () => (
  <div className="flex items-center gap-1.5 text-[#05BE6A]">
    <div className="w-5 h-5 rounded-full border-2 border-[#05BE6A] flex items-center justify-center">
      <div className="w-2.5 h-2.5 bg-[#05BE6A] rounded-full"></div>
    </div>
    <span className="font-sans font-bold text-base sm:text-lg tracking-tight">
      matcha
    </span>
  </div>
);

const CoinbasePerpLogo = () => (
  <div className="flex flex-col items-center leading-none">
    <span className="font-sans font-bold text-base sm:text-lg text-[#0052FF] tracking-tight">
      coinbase
    </span>
    <span className="text-[9px] font-black tracking-wider text-black mt-0.5">
      SURCHI-PERP
    </span>
  </div>
);

const AsterFuturesLogo = () => (
  <div className="flex flex-col items-center leading-none">
    <div className="flex items-center gap-1.5 text-[#2B2B2B]">
      <svg className="w-4 h-4 fill-[#DEAC5D]" viewBox="0 0 24 24">
        <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5-6.5-5-6.5 5 2.5-7.5-6-4.5h7.5z" />
      </svg>
      <span className="font-sans font-extrabold text-base tracking-wider text-black">
        ASTER
      </span>
    </div>
    <span className="text-[9px] font-extrabold tracking-widest text-black mt-0.5">
      FUTURES
    </span>
  </div>
);

const HtxFuturesLogo = () => (
  <div className="flex flex-col items-center leading-none">
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        <span className="text-base text-black">🔥</span>
      </div>
      <span className="font-sans font-black text-base text-black tracking-tight">
        HTX
      </span>
    </div>
    <span className="text-[9px] font-extrabold tracking-widest text-black mt-0.5">
      FUTURES
    </span>
  </div>
);

export const ExchangesAndFutures: React.FC = () => {
  const exchangesList = [
    {
      name: 'Coinbase',
      url: 'https://www.coinbase.com',
      component: <CoinbaseLogo />,
    },
    {
      name: 'Binance Alpha',
      url: 'https://www.binance.com',
      component: <BinanceAlphaLogo />,
    },
    {
      name: 'Bybit',
      url: 'https://www.bybit.com',
      component: <BybitLogo />,
    },
    {
      name: 'OKX',
      url: 'https://www.okx.com',
      component: <OkxLogo />,
    },
    {
      name: 'Upbit',
      url: 'https://upbit.com',
      component: <UpbitLogo />,
    },
    {
      name: 'Bithumb',
      url: 'https://www.bithumb.com',
      component: <BithumbLogo />,
    },
    {
      name: 'Revolut',
      url: 'https://www.revolut.com',
      component: <RevolutLogo />,
    },
    {
      name: 'Kraken',
      url: 'https://www.kraken.com',
      component: <KrakenLogo />,
    },
    {
      name: 'Binance.US',
      url: 'https://www.binance.us',
      component: <BinanceUsLogo />,
      customBg: 'bg-[#DCE0E6] hover:bg-[#cfd4dc]',
    },
    {
      name: 'Bitget',
      url: 'https://www.bitget.com',
      component: <BitgetLogo />,
    },
    {
      name: 'Gate.io',
      url: 'https://www.gate.io',
      component: <GateIoLogo />,
    },
    {
      name: 'MEXC',
      url: 'https://www.mexc.com',
      component: <MexcLogo />,
    },
    {
      name: 'Crypto.com',
      url: 'https://crypto.com',
      component: <CryptoComLogo />,
    },
    {
      name: 'KuCoin',
      url: 'https://www.kucoin.com',
      component: <KucoinLogo />,
    },
    {
      name: 'Coinbase Wallet',
      url: 'https://www.coinbase.com/wallet',
      component: <CoinbaseWalletLogo />,
    },
    {
      name: 'Matcha',
      url: 'https://matcha.xyz',
      component: <MatchaLogo />,
    },
  ];

  const futuresList = [
    {
      name: 'Coinbase SURCHI-PERP',
      url: 'https://www.coinbase.com/advanced-trade',
      component: <CoinbasePerpLogo />,
    },
    {
      name: 'Binance Futures',
      url: 'https://www.binance.com/en/futures',
      component: <BinanceFuturesLogo />,
    },
    {
      name: 'Bybit Futures',
      url: 'https://www.bybit.com/en/trade/usdt',
      component: <BybitFuturesLogo />,
    },
    {
      name: 'Aster Futures',
      url: 'https://aster.exchange',
      component: <AsterFuturesLogo />,
    },
    {
      name: 'Gate.io Futures',
      url: 'https://www.gate.io/futures',
      component: <GateIoFuturesLogo />,
    },
    {
      name: 'MEXC Futures',
      url: 'https://futures.mexc.com',
      component: <MexcFuturesLogo />,
    },
    {
      name: 'Bitget Futures',
      url: 'https://www.bitget.com/futures',
      component: <BitgetFuturesLogo />,
    },
    {
      name: 'Kraken Futures',
      url: 'https://pro.kraken.com',
      component: <KrakenFuturesLogo />,
    },
    {
      name: 'HTX Futures',
      url: 'https://www.htx.com/en-us/futures',
      component: <HtxFuturesLogo />,
    },
  ];

  return (
    <section id="exchanges" className="w-full bg-[#0E1118] py-16 sm:py-24 border-b border-white/10">
      <div className="max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-6">
        
        {/* Exchanges Sub-Section */}
        <div className="mb-14 sm:mb-20">
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Exchanges
            </h2>
            <div className="w-full border-b border-white/20 mt-3"></div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
            {exchangesList.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Trade on ${item.name}`}
                className={`h-[58px] sm:h-[66px] rounded-full ${
                  item.customBg || 'bg-white hover:bg-slate-100'
                } flex items-center justify-center px-4 shadow-md hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer select-none`}
              >
                {item.component}
              </a>
            ))}
          </div>
        </div>

        {/* Futures Sub-Section */}
        <div id="futures">
          <div className="mb-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Futures
            </h2>
            <div className="w-full border-b border-white/20 mt-3"></div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
            {futuresList.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Trade ${item.name}`}
                className="h-[58px] sm:h-[66px] rounded-full bg-white hover:bg-slate-100 flex items-center justify-center px-4 shadow-md hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer select-none"
              >
                {item.component}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
