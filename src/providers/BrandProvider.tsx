import React from 'react';

interface BrandProviderProps {
  children: React.ReactNode;
}

export const BrandProvider: React.FC<BrandProviderProps> = ({ children }) => {
  // This component ensures consistent branding across the app
  return (
    <div className="brand-bluevision">
      {children}
    </div>
  );
};

// Brand utility hooks
export const useBrandColors = () => {
  return {
    primary: '#0A3D62',
    accent: '#F57C00',
    neutral: '#E5E7EB',
    white: '#FFFFFF'
  };
};