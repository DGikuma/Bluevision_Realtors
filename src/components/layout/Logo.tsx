import React from 'react';
import { Link } from 'react-router-dom';

// Import your SVG as a regular image
import logoImage from '@/assets/images/logo.svg'; // or './logo.svg'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light';
  showSubtitle?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  variant = 'dark',
  showSubtitle = false // Set to false if subtitle is already in SVG
}) => {
  const sizeClasses = {
    sm: 'w-28 h-22',
    md: 'w-36 h-20',
    lg: 'w-48 h-12',
    xl: 'w-56 h-12',
  };

  return (
    <Link to="/" className="flex flex-col items-center no-underline hover:opacity-90 transition-opacity">
      {/* SVG as image */}
      <img 
        src={logoImage} 
        alt="BlueVision Realtors" 
        className={sizeClasses[size]}
      />
      
      {/* Only show subtitle if not in SVG and prop is true */}
      {showSubtitle && (
        <div className="mt-1 text-sm font-semibold tracking-widest text-blue-600 uppercase">
          REALTORS LTD
        </div>
      )}
    </Link>
  );
};

export default Logo;