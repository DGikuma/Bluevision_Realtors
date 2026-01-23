import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'light' | 'dark';
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showText = true,
  variant = 'light'
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const textColor = variant === 'light' ? 'text-white' : 'text-primary';

  return (
    <Link to="/" className="flex items-center space-x-3">
      {/* Modern Logo with buildings and circular emblem */}
      <div className={`${sizeClasses[size]} relative`}>
        {/* Circular emblem background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-full"></div>
        
        {/* Building silhouettes */}
        <div className="absolute inset-2 flex items-end justify-center">
          <div className="flex items-end space-x-1">
            {/* Building 1 */}
            <div className="w-2 h-4 bg-white rounded-t"></div>
            {/* Building 2 (tallest) */}
            <div className="w-3 h-6 bg-white rounded-t"></div>
            {/* Building 3 */}
            <div className="w-2 h-3 bg-white rounded-t"></div>
          </div>
        </div>
        
        {/* Stripe element */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-accent rounded-full"></div>
        
        {/* Outer ring */}
        <div className="absolute inset-0 border-2 border-white rounded-full"></div>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizes[size]} font-poppins font-bold ${textColor} leading-tight`}>
            Bluevision
          </span>
          <span className={`${size === 'sm' ? 'text-xs' : 'text-sm'} font-medium ${variant === 'light' ? 'text-neutral' : 'text-neutral-dark'}`}>
            Realtors Ltd
          </span>
        </div>
      )}
    </Link>
  );
};

// Alternative horizontal logo
export const LogoHorizontal: React.FC<LogoProps> = ({ variant = 'light' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary';

  return (
    <Link to="/" className="flex items-center space-x-3">
      <div className="h-10 w-10 relative">
        {/* Circular emblem background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-full"></div>
        
        {/* Building silhouettes */}
        <div className="absolute inset-1 flex items-end justify-center">
          <div className="flex items-end space-x-0.5">
            <div className="w-1.5 h-3 bg-white rounded-t"></div>
            <div className="w-2 h-4 bg-white rounded-t"></div>
            <div className="w-1.5 h-2.5 bg-white rounded-t"></div>
          </div>
        </div>
        
        {/* Stripe element */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-accent rounded-full"></div>
        
        {/* Outer ring */}
        <div className="absolute inset-0 border border-white rounded-full"></div>
      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold text-white leading-tight">
          Bluevision Realtors
        </span>
        <span className="text-xs font-medium text-neutral">
          Premium Real Estate Solutions
        </span>
      </div>
    </Link>
  );
};

export default Logo;