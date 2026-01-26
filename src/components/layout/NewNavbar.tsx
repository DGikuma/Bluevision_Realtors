import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

// Define types for navigation items
interface NavItem {
  name: string;
  path: string;
  dropdown?: SubNavItem[];
}

interface SubNavItem {
  name: string;
  path: string;
}

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Detect if it's mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Property Buying', path: '/services' },
        { name: 'Property Selling', path: '/services' },
        { name: 'Property Management', path: '/services' },
        { name: 'Investment Consultation', path: '/services' },
      ]
    },
    { name: 'Listings', path: '/listings' },
    { name: 'Agents', path: '/agents' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle Services click - different behavior for mobile/desktop
  const handleServicesClick = (e: React.MouseEvent) => {
    if (isMobile) {
      // On mobile, toggle dropdown
      setServicesOpen(!servicesOpen);
    } else {
      // On desktop, toggle dropdown on click
      e.preventDefault();
      setServicesOpen(!servicesOpen);
    }
  };

  // Handle Services hover (desktop only)
  const handleServicesHover = () => {
    if (!isMobile) {
      setServicesOpen(true);
    }
  };

  // Handle Services leave (desktop only)
  const handleServicesLeave = () => {
    if (!isMobile) {
      // Small delay to allow moving cursor to dropdown
      setTimeout(() => {
        if (dropdownRef.current && !dropdownRef.current.matches(':hover')) {
          setServicesOpen(false);
        }
      }, 200);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar with contact info */}
      

      {/* Main navigation */}
      <nav className="py-3 bg-white">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Logo size="md" variant="dark" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative" ref={item.name === 'Services' ? dropdownRef : null}>
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={handleServicesHover}
                    onMouseLeave={handleServicesLeave}
                  >
                    <div className="flex items-center">
                      <Link
                        to={item.path}
                        onClick={handleServicesClick}
                        className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                          isActive(item.path) || servicesOpen
                            ? 'text-accent bg-accent/10 font-medium' 
                            : 'text-gray-700 hover:text-accent hover:bg-neutral-light'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </Link>
                    </div>
                    
                    {/* Dropdown */}
                    {servicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral py-2 z-50"
                        onMouseEnter={handleServicesHover}
                        onMouseLeave={handleServicesLeave}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:text-accent hover:bg-neutral-light transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      isActive(item.path) 
                        ? 'text-accent bg-accent/10 font-medium' 
                        : 'text-gray-700 hover:text-accent hover:bg-neutral-light'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-neutral-light"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden container mt-2 pb-4 border-t border-neutral pt-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={handleServicesClick}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-accent hover:bg-neutral-light rounded-lg transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {servicesOpen && (
                        <div className="pl-6 space-y-2 mt-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-2 text-gray-600 hover:text-accent hover:bg-neutral-light rounded-lg transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setServicesOpen(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className="block px-4 py-3 text-gray-700 hover:text-accent hover:bg-neutral-light rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="block px-4 py-3 btn-primary text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NewNavbar;