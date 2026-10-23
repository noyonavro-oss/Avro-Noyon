import React, { useState } from 'react';

interface RealGrowthBadgeProps {
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const RealGrowthBadge: React.FC<RealGrowthBadgeProps> = ({
  onClick,
  className = '',
  size = 'md'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14'
  };

  const titleSizes = {
    sm: 'text-xs',
    md: 'text-sm sm:text-base',
    lg: 'text-base sm:text-lg'
  };

  const subtitleSizes = {
    sm: 'text-[10px]',
    md: 'text-xs sm:text-sm',
    lg: 'text-xs sm:text-base'
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center gap-3.5 p-2 sm:p-2.5 pr-4 sm:pr-5 rounded-2xl bg-surface-container-high/90 hover:bg-surface-container-highest backdrop-blur-xl border border-secondary/30 hover:border-secondary shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer group relative overflow-hidden select-none ${className}`}
      title="Next Growth BD - Real Growth for Your Business"
    >
      {/* Water shimmer effect behind badge on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-secondary-container/10 via-tertiary/10 to-transparent transition-opacity duration-300 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* SVG Icon matching the user's screenshot */}
      <div className={`${iconSizes[size]} rounded-full bg-gradient-to-br from-surface-container-lowest to-surface-container flex items-center justify-center border border-secondary/40 shadow-[0_0_15px_rgba(0,206,254,0.35)] shrink-0 group-hover:scale-105 group-hover:border-tertiary transition-all relative`}>
        {/* Glow halo */}
        <div className="absolute inset-0 rounded-full bg-secondary-container/20 blur-sm pointer-events-none" />

        <svg
          viewBox="0 0 32 32"
          className="w-6 h-6 text-secondary group-hover:text-tertiary transition-colors relative z-10"
          fill="currentColor"
        >
          {/* Ascending Chart Bars */}
          <rect x="5" y="20" width="3.5" height="7" rx="1" fill="currentColor" opacity="0.9" />
          <rect x="10.5" y="16" width="3.5" height="11" rx="1" fill="currentColor" opacity="0.95" />
          <rect x="16" y="12" width="3.5" height="15" rx="1" fill="currentColor" />
          <rect x="21.5" y="8" width="3.5" height="19" rx="1" fill="currentColor" />

          {/* Upward Growth Arrow */}
          <path
            d="M5 18 L13 10 L18 13 L25 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 4 L25.5 4 L25.5 9.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Text as in the user's screenshot */}
      <div className="flex flex-col text-left relative z-10 leading-tight">
        <span className={`font-headline-sm font-bold text-on-surface tracking-tight group-hover:text-secondary transition-colors ${titleSizes[size]}`}>
          Real Growth
        </span>
        <span className={`text-on-surface-variant font-medium ${subtitleSizes[size]}`}>
          for Your Business
        </span>
      </div>

      {/* Subtle indicator arrow */}
      <span className="material-symbols-outlined text-[16px] text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ml-1">
        arrow_forward
      </span>
    </div>
  );
};
