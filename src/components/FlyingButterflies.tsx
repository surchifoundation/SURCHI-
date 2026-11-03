import React from 'react';

// Realistic, colorful butterfly species definitions (reduced by 20% in size)
interface Butterfly {
  id: string;
  species: 'monarch' | 'blue-morpho' | 'tiger-swallowtail' | 'emerald' | 'sunset-moth' | 'crimson-rose';
  width: number; // width in px (reduced by 20%)
  height: number;
  initialTop: string;
  initialLeft: string;
  flightClass: string;
  flapSpeed: string;
  delay: string;
}

const BUTTERFLIES: Butterfly[] = [
  {
    id: 'bf-monarch',
    species: 'monarch',
    width: 96,  // 120 * 0.8 = 96
    height: 76, // 95 * 0.8 = 76
    initialTop: '22%',
    initialLeft: '12%',
    flightClass: 'animate-flight-1',
    flapSpeed: '0.24s',
    delay: '0s',
  },
  {
    id: 'bf-morpho',
    species: 'blue-morpho',
    width: 108, // 135 * 0.8 = 108
    height: 84, // 105 * 0.8 = 84
    initialTop: '38%',
    initialLeft: '78%',
    flightClass: 'animate-flight-2',
    flapSpeed: '0.22s',
    delay: '1.2s',
  },
  {
    id: 'bf-tiger',
    species: 'tiger-swallowtail',
    width: 92,  // 115 * 0.8 = 92
    height: 78, // 98 * 0.8 = 78
    initialTop: '48%',
    initialLeft: '22%',
    flightClass: 'animate-flight-3',
    flapSpeed: '0.26s',
    delay: '2.5s',
  },
  {
    id: 'bf-emerald',
    species: 'emerald',
    width: 88,  // 110 * 0.8 = 88
    height: 74, // 92 * 0.8 = 74
    initialTop: '16%',
    initialLeft: '70%',
    flightClass: 'animate-flight-4',
    flapSpeed: '0.21s',
    delay: '0.8s',
  },
  {
    id: 'bf-sunset',
    species: 'sunset-moth',
    width: 100, // 125 * 0.8 = 100
    height: 80, // 100 * 0.8 = 80
    initialTop: '60%',
    initialLeft: '62%',
    flightClass: 'animate-flight-5',
    flapSpeed: '0.25s',
    delay: '3.4s',
  },
  {
    id: 'bf-crimson',
    species: 'crimson-rose',
    width: 84,  // 105 * 0.8 = 84
    height: 70, // 88 * 0.8 = 70
    initialTop: '28%',
    initialLeft: '44%',
    flightClass: 'animate-flight-6',
    flapSpeed: '0.23s',
    delay: '1.8s',
  },
];

// SVG Renderer for Left & Right Wings of Each Real Butterfly Species
const ButterflyWings: React.FC<{ species: Butterfly['species']; isRight?: boolean }> = ({ species, isRight = false }) => {
  const transform = isRight ? 'scaleX(-1)' : 'none';

  switch (species) {
    case 'monarch':
      // Real Monarch: Vibrant fiery orange, intricate black veins, double row of white margin dots
      return (
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full overflow-visible"
          style={{ transform, transformOrigin: 'right center' }}
        >
          <defs>
            <linearGradient id={`monarch-orange-${isRight ? 'r' : 'l'}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFAA00" />
              <stop offset="40%" stopColor="#FF6600" />
              <stop offset="100%" stopColor="#E63900" />
            </linearGradient>
          </defs>
          {/* Forewing base */}
          <path
            d="M 100 65 Q 90 20 70 8 Q 40 -2 15 12 Q 2 24 8 45 Q 18 68 45 76 Q 80 82 100 65 Z"
            fill={`url(#monarch-orange-${isRight ? 'r' : 'l'})`}
          />
          {/* Hindwing base */}
          <path
            d="M 100 65 Q 85 85 65 105 Q 40 120 25 108 Q 12 96 20 78 Q 30 65 65 65 Z"
            fill={`url(#monarch-orange-${isRight ? 'r' : 'l'})`}
          />
          {/* Black Outer Borders */}
          <path
            d="M 15 12 Q 2 24 8 45 Q 18 68 45 76 L 42 70 Q 20 62 14 42 Q 10 26 22 18 Z"
            fill="#121212"
          />
          <path
            d="M 65 105 Q 40 120 25 108 Q 12 96 20 78 L 26 82 Q 18 96 30 104 Q 45 110 65 98 Z"
            fill="#121212"
          />
          {/* Black Vein Lines */}
          <path
            d="M 100 65 Q 70 45 35 30 M 100 65 Q 60 55 25 48 M 100 65 Q 75 30 55 15 M 100 65 Q 70 80 40 95 M 100 65 Q 80 90 55 105"
            stroke="#121212"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
          {/* White Border Spots */}
          <circle cx="12" cy="22" r="1.6" fill="#FFFFFF" />
          <circle cx="9" cy="32" r="1.6" fill="#FFFFFF" />
          <circle cx="10" cy="42" r="1.6" fill="#FFFFFF" />
          <circle cx="14" cy="52" r="1.6" fill="#FFFFFF" />
          <circle cx="22" cy="62" r="1.6" fill="#FFFFFF" />
          <circle cx="32" cy="71" r="1.6" fill="#FFFFFF" />
          <circle cx="18" cy="85" r="1.4" fill="#FFFFFF" />
          <circle cx="22" cy="98" r="1.4" fill="#FFFFFF" />
          <circle cx="35" cy="107" r="1.4" fill="#FFFFFF" />
          <circle cx="50" cy="105" r="1.4" fill="#FFFFFF" />
        </svg>
      );

    case 'blue-morpho':
      // Real Blue Morpho: Luminous cobalt & iridescent cyan, deep black borders, shimmering
      return (
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full overflow-visible"
          style={{ transform, transformOrigin: 'right center' }}
        >
          <defs>
            <linearGradient id={`morpho-blue-${isRight ? 'r' : 'l'}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFFF" />
              <stop offset="30%" stopColor="#0099FF" />
              <stop offset="70%" stopColor="#0044FF" />
              <stop offset="100%" stopColor="#05103A" />
            </linearGradient>
            <radialGradient id={`morpho-glow-${isRight ? 'r' : 'l'}`} cx="60%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E0FFFF" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#00D4FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0044FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Forewing base */}
          <path
            d="M 100 65 Q 92 18 72 6 Q 42 -4 14 10 Q 0 24 6 48 Q 16 72 45 78 Q 80 84 100 65 Z"
            fill={`url(#morpho-blue-${isRight ? 'r' : 'l'})`}
          />
          {/* Hindwing base */}
          <path
            d="M 100 65 Q 88 88 68 108 Q 42 122 24 108 Q 10 94 18 76 Q 30 64 65 65 Z"
            fill={`url(#morpho-blue-${isRight ? 'r' : 'l'})`}
          />
          {/* Iridescent shimmer overlay */}
          <path
            d="M 100 65 Q 85 28 65 18 Q 40 10 25 24 Q 16 38 24 55 Q 35 68 65 70 Z"
            fill={`url(#morpho-glow-${isRight ? 'r' : 'l'})`}
          />
          {/* Deep Black Margin */}
          <path
            d="M 14 10 Q 0 24 6 48 Q 16 72 45 78 L 40 72 Q 18 64 12 44 Q 8 26 22 16 Z"
            fill="#050814"
          />
          <path
            d="M 68 108 Q 42 122 24 108 Q 10 94 18 76 L 24 80 Q 16 94 28 102 Q 45 112 66 102 Z"
            fill="#050814"
          />
          {/* Subtle wing veins */}
          <path
            d="M 100 65 Q 70 42 32 28 M 100 65 Q 60 52 24 45 M 100 65 Q 72 26 50 12 M 100 65 Q 68 82 38 96 M 100 65 Q 80 92 52 106"
            stroke="#050E28"
            strokeWidth="1.8"
            fill="none"
            opacity="0.85"
          />
          {/* White margin specs */}
          <circle cx="8" cy="22" r="1.5" fill="#FFFFFF" />
          <circle cx="7" cy="34" r="1.5" fill="#FFFFFF" />
          <circle cx="10" cy="46" r="1.5" fill="#FFFFFF" />
          <circle cx="16" cy="88" r="1.3" fill="#FFFFFF" />
          <circle cx="28" cy="104" r="1.3" fill="#FFFFFF" />
        </svg>
      );

    case 'tiger-swallowtail':
      // Real Tiger Swallowtail: Golden yellow with bold black tiger stripes and scalloped tails
      return (
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full overflow-visible"
          style={{ transform, transformOrigin: 'right center' }}
        >
          <defs>
            <linearGradient id={`tiger-gold-${isRight ? 'r' : 'l'}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF066" />
              <stop offset="40%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#FFA000" />
            </linearGradient>
          </defs>
          {/* Forewing */}
          <path
            d="M 100 65 Q 90 18 68 6 Q 38 -2 12 12 Q 2 25 8 46 Q 18 68 45 76 Q 80 82 100 65 Z"
            fill={`url(#tiger-gold-${isRight ? 'r' : 'l'})`}
          />
          {/* Hindwing with scalloped Swallowtail */}
          <path
            d="M 100 65 Q 85 85 65 102 Q 52 112 40 124 Q 34 116 30 102 Q 16 94 22 76 Q 32 64 65 65 Z"
            fill={`url(#tiger-gold-${isRight ? 'r' : 'l'})`}
          />
          {/* Black Tiger Stripes */}
          <path d="M 60 10 Q 55 25 75 45 L 80 42 Q 62 22 66 8 Z" fill="#181818" />
          <path d="M 45 15 Q 40 35 60 55 L 64 52 Q 46 32 50 12 Z" fill="#181818" />
          <path d="M 30 20 Q 25 45 42 65 L 46 62 Q 32 42 36 18 Z" fill="#181818" />
          {/* Black Outer Border with blue lunules */}
          <path
            d="M 12 12 Q 2 25 8 46 Q 18 68 45 76 L 40 70 Q 18 62 12 44 Q 8 26 20 16 Z"
            fill="#181818"
          />
          <path
            d="M 65 102 Q 52 112 40 124 Q 34 116 30 102 Q 16 94 22 76 L 28 80 Q 22 92 32 98 Q 42 108 58 98 Z"
            fill="#181818"
          />
          {/* Blue and orange submarginal crescent spots */}
          <circle cx="28" cy="88" r="2" fill="#00C8FF" />
          <circle cx="36" cy="98" r="2" fill="#00C8FF" />
          <circle cx="48" cy="106" r="2.2" fill="#FF5500" />
          <circle cx="12" cy="28" r="1.4" fill="#FFFFFF" />
          <circle cx="16" cy="48" r="1.4" fill="#FFFFFF" />
        </svg>
      );

    case 'emerald':
      // Real Emerald Swallowtail: Velvet black with radiant emerald green band and swallowtails
      return (
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full overflow-visible"
          style={{ transform, transformOrigin: 'right center' }}
        >
          <defs>
            <linearGradient id={`emerald-glow-${isRight ? 'r' : 'l'}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FF88" />
              <stop offset="50%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#00B862" />
            </linearGradient>
          </defs>
          {/* Forewing base - deep velvet black */}
          <path
            d="M 100 65 Q 90 18 70 6 Q 40 -2 14 12 Q 2 24 8 46 Q 18 68 46 76 Q 80 82 100 65 Z"
            fill="#08140E"
          />
          {/* Hindwing with Swallowtail tip */}
          <path
            d="M 100 65 Q 85 86 65 104 Q 52 114 42 125 Q 36 116 32 102 Q 16 94 22 76 Q 32 64 65 65 Z"
            fill="#08140E"
          />
          {/* Radiant Emerald Green Transverse Band */}
          <path
            d="M 75 14 Q 48 38 35 70 L 44 74 Q 58 42 82 18 Z"
            fill={`url(#emerald-glow-${isRight ? 'r' : 'l'})`}
            filter="drop-shadow(0 0 5px rgba(0,255,136,0.6))"
          />
          <path
            d="M 78 72 Q 52 86 38 106 L 45 110 Q 60 92 84 76 Z"
            fill={`url(#emerald-glow-${isRight ? 'r' : 'l'})`}
            filter="drop-shadow(0 0 5px rgba(0,255,136,0.6))"
          />
          {/* Emerald margin dust */}
          <circle cx="28" cy="86" r="1.8" fill="#00FF88" />
          <circle cx="35" cy="98" r="1.8" fill="#00FF88" />
          <circle cx="48" cy="116" r="2.2" fill="#00FF88" />
        </svg>
      );

    case 'sunset-moth':
      // Real Madagascan Sunset Moth: Fiery rainbow magenta, gold, violet & electric cyan streaks
      return (
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full overflow-visible"
          style={{ transform, transformOrigin: 'right center' }}
        >
          <defs>
            <linearGradient id={`sunset-grad-${isRight ? 'r' : 'l'}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF007F" />
              <stop offset="35%" stopColor="#FF7700" />
              <stop offset="70%" stopColor="#00F5D4" />
              <stop offset="100%" stopColor="#7B2CBF" />
            </linearGradient>
          </defs>
          {/* Forewing */}
          <path
            d="M 100 65 Q 92 18 72 6 Q 42 -4 14 10 Q 0 24 6 48 Q 16 72 45 78 Q 80 84 100 65 Z"
            fill="#100C1A"
          />
          {/* Hindwing with scalloped tails */}
          <path
            d="M 100 65 Q 86 86 66 106 Q 50 118 42 126 Q 34 116 28 104 Q 14 94 20 76 Q 32 64 65 65 Z"
            fill="#100C1A"
          />
          {/* Brilliant rainbow iridescent bands */}
          <path
            d="M 78 12 Q 45 35 25 65 L 34 70 Q 55 40 85 18 Z"
            fill={`url(#sunset-grad-${isRight ? 'r' : 'l'})`}
          />
          <path
            d="M 65 18 Q 38 45 18 68 L 24 72 Q 46 48 72 24 Z"
            fill={`url(#sunset-grad-${isRight ? 'r' : 'l'})`}
          />
          <path
            d="M 80 75 Q 55 90 35 112 L 42 116 Q 62 95 86 78 Z"
            fill={`url(#sunset-grad-${isRight ? 'r' : 'l'})`}
          />
          {/* White fringed tail tips */}
          <circle cx="42" cy="124" r="2.2" fill="#FFFFFF" />
          <circle cx="30" cy="106" r="1.8" fill="#FFFFFF" />
          <circle cx="16" cy="88" r="1.8" fill="#FFFFFF" />
        </svg>
      );

    case 'crimson-rose':
      // Real Crimson Rose: Deep crimson scarlet & white patches on velvety black
      return (
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full overflow-visible"
          style={{ transform, transformOrigin: 'right center' }}
        >
          <defs>
            <linearGradient id={`crimson-red-${isRight ? 'r' : 'l'}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF1E56" />
              <stop offset="100%" stopColor="#C70039" />
            </linearGradient>
          </defs>
          {/* Forewing */}
          <path
            d="M 100 65 Q 90 18 68 6 Q 38 -2 12 12 Q 2 25 8 46 Q 18 68 45 76 Q 80 82 100 65 Z"
            fill="#151214"
          />
          {/* Hindwing with swallowtail extension */}
          <path
            d="M 100 65 Q 85 86 66 104 Q 52 114 42 124 Q 36 116 30 102 Q 16 94 22 76 Q 32 64 65 65 Z"
            fill="#151214"
          />
          {/* White rays on forewing */}
          <path d="M 60 12 Q 40 32 26 55 L 30 58 Q 45 36 65 15 Z" fill="#F0F0F0" opacity="0.8" />
          <path d="M 50 18 Q 32 40 20 62 L 24 64 Q 37 42 54 20 Z" fill="#F0F0F0" opacity="0.8" />
          {/* Deep Crimson Scarlet Spots on Hindwing */}
          <path
            d="M 75 78 C 65 88 50 96 42 106 C 48 108 58 102 68 94 C 76 86 82 80 75 78 Z"
            fill={`url(#crimson-red-${isRight ? 'r' : 'l'})`}
          />
          <circle cx="34" cy="94" r="3.2" fill="#FF1E56" />
          <circle cx="44" cy="106" r="3.2" fill="#FF1E56" />
          <circle cx="56" cy="112" r="3" fill="#FF1E56" />
          <circle cx="42" cy="123" r="2.2" fill="#FFFFFF" />
        </svg>
      );
  }
};

export const FlyingButterflies: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-20 select-none">
      
      {/* Dynamic 3D Wing Flapping & Smooth Floating Motion Keyframes */}
      <style>{`
        @keyframes flapWingLeft {
          0%, 100% {
            transform: rotateY(0deg) rotateZ(0deg);
          }
          50% {
            transform: rotateY(68deg) rotateZ(-4deg);
          }
        }

        @keyframes flapWingRight {
          0%, 100% {
            transform: rotateY(0deg) rotateZ(0deg);
          }
          50% {
            transform: rotateY(-68deg) rotateZ(4deg);
          }
        }

        @keyframes realisticFlight1 {
          0% { transform: translate(0px, 0px) rotate(12deg) scale(1); }
          20% { transform: translate(140px, -60px) rotate(22deg) scale(1.08); }
          45% { transform: translate(320px, 10px) rotate(6deg) scale(0.96); }
          70% { transform: translate(180px, 95px) rotate(-16deg) scale(1.04); }
          100% { transform: translate(0px, 0px) rotate(12deg) scale(1); }
        }

        @keyframes realisticFlight2 {
          0% { transform: translate(0px, 0px) rotate(-18deg) scale(1); }
          25% { transform: translate(-180px, 75px) rotate(-32deg) scale(0.94); }
          55% { transform: translate(-360px, -25px) rotate(-8deg) scale(1.1); }
          80% { transform: translate(-190px, -85px) rotate(14deg) scale(1.02); }
          100% { transform: translate(0px, 0px) rotate(-18deg) scale(1); }
        }

        @keyframes realisticFlight3 {
          0% { transform: translate(0px, 0px) rotate(24deg) scale(0.95); }
          30% { transform: translate(210px, -95px) rotate(38deg) scale(1.12); }
          60% { transform: translate(390px, -20px) rotate(12deg) scale(1); }
          85% { transform: translate(220px, 50px) rotate(-14deg) scale(0.92); }
          100% { transform: translate(0px, 0px) rotate(24deg) scale(0.95); }
        }

        @keyframes realisticFlight4 {
          0% { transform: translate(0px, 0px) rotate(-14deg) scale(1); }
          35% { transform: translate(-220px, 80px) rotate(-28deg) scale(1.15); }
          70% { transform: translate(-110px, 160px) rotate(8deg) scale(0.94); }
          100% { transform: translate(0px, 0px) rotate(-14deg) scale(1); }
        }

        @keyframes realisticFlight5 {
          0% { transform: translate(0px, 0px) rotate(14deg) scale(1); }
          30% { transform: translate(-140px, -110px) rotate(-18deg) scale(1.06); }
          65% { transform: translate(-280px, 35px) rotate(22deg) scale(0.92); }
          100% { transform: translate(0px, 0px) rotate(14deg) scale(1); }
        }

        @keyframes realisticFlight6 {
          0% { transform: translate(0px, 0px) rotate(28deg) scale(1); }
          35% { transform: translate(170px, 85px) rotate(16deg) scale(0.94); }
          70% { transform: translate(290px, -50px) rotate(-22deg) scale(1.1); }
          100% { transform: translate(0px, 0px) rotate(28deg) scale(1); }
        }

        .animate-flight-1 {
          animation: realisticFlight1 16s ease-in-out infinite;
        }
        .animate-flight-2 {
          animation: realisticFlight2 19s ease-in-out infinite;
        }
        .animate-flight-3 {
          animation: realisticFlight3 21s ease-in-out infinite;
        }
        .animate-flight-4 {
          animation: realisticFlight4 14s ease-in-out infinite;
        }
        .animate-flight-5 {
          animation: realisticFlight5 18s ease-in-out infinite;
        }
        .animate-flight-6 {
          animation: realisticFlight6 20s ease-in-out infinite;
        }
      `}</style>

      {/* Render the 6 Majestic Realistic Butterflies (Reduced 20% in Size) */}
      {BUTTERFLIES.map((bf) => (
        <div
          key={bf.id}
          className={`absolute ${bf.flightClass}`}
          style={{
            top: bf.initialTop,
            left: bf.initialLeft,
            animationDelay: bf.delay,
            perspective: '700px',
            transformStyle: 'preserve-3d',
            filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.3))',
          }}
        >
          <div
            className="relative flex items-center justify-center"
            style={{ width: `${bf.width}px`, height: `${bf.height}px` }}
          >
            {/* Left Wing (Realistic Flapping with 3D transform) */}
            <div
              className="absolute right-1/2 top-0 h-full w-[49%]"
              style={{
                transformOrigin: 'right center',
                animation: `flapWingLeft ${bf.flapSpeed} ease-in-out infinite alternate`,
              }}
            >
              <ButterflyWings species={bf.species} isRight={false} />
            </div>

            {/* Slender Real Butterfly Body with Antennae & Thorax */}
            <div className="absolute z-30 w-[10%] h-[72%] flex flex-col items-center justify-center">
              {/* Antennae with delicate sensory tips */}
              <div className="flex justify-between w-full h-[28%] -mb-1">
                <div className="w-[1.5px] h-full bg-[#111827] rounded-full transform -rotate-28 origin-bottom flex flex-col justify-start items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111827] -mt-0.5"></div>
                </div>
                <div className="w-[1.5px] h-full bg-[#111827] rounded-full transform rotate-28 origin-bottom flex flex-col justify-start items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#111827] -mt-0.5"></div>
                </div>
              </div>

              {/* Head */}
              <div className="w-2.5 h-2.5 bg-[#1F2937] rounded-full shadow-sm"></div>

              {/* Thorax */}
              <div className="w-2 h-4 bg-[#111827] rounded-full my-0.5"></div>

              {/* Segmented Abdomen */}
              <div className="w-1.5 h-6 bg-[#1F2937] rounded-full shadow-inner"></div>
            </div>

            {/* Right Wing (Realistic Flapping with 3D transform) */}
            <div
              className="absolute left-1/2 top-0 h-full w-[49%]"
              style={{
                transformOrigin: 'left center',
                animation: `flapWingRight ${bf.flapSpeed} ease-in-out infinite alternate`,
              }}
            >
              <ButterflyWings species={bf.species} isRight={true} />
            </div>

          </div>
        </div>
      ))}

    </div>
  );
};
