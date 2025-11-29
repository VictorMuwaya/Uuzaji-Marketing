import React from 'react';

// Inline SVG component to prevent loading errors and ensure crisper rendering
export const UuzajiIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M30 20 L30 65 C30 85 45 85 50 85 C45 85 30 85 30 65 L30 20" stroke="#0ea5e9" strokeWidth="12" strokeLinecap="round"/>
    <path d="M15 35 L30 15 L45 35" stroke="#0ea5e9" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M70 20 L70 65 C70 85 55 85 50 85 C55 85 70 85 70 65 L70 20" stroke="#f59e0b" strokeWidth="12" strokeLinecap="round"/>
    <path d="M55 35 L70 15 L85 35" stroke="#f59e0b" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear" x1="30" y1="85" x2="70" y2="85" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0ea5e9" />
        <stop offset="1" stopColor="#f59e0b" />
      </linearGradient>
    </defs>
    <path d="M30 65 C30 90 70 90 70 65" stroke="url(#paint0_linear)" strokeWidth="12" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ className = "h-10", showText = true, variant = 'light' }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="h-full aspect-square flex-shrink-0">
        <UuzajiIcon className="w-full h-full" />
      </div>

      {showText && (
        <div className="flex flex-col justify-center">
          <span className={`font-display font-bold text-2xl leading-none tracking-tight ${variant === 'light' ? 'text-white' : 'text-brand-dark'}`}>
            Uuzaji
          </span>
          <span className="text-[0.6rem] font-bold tracking-[0.2em] text-gray-400 uppercase leading-none mt-1">
            Marketing Agency
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
