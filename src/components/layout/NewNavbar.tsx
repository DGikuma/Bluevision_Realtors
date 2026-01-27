import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

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
    setServicesOpen(false);
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
        { name: 'Mortgage Assistance', path: '/services' },
        { name: 'Legal Support', path: '/services' },
      ]
    },
    { name: 'Listings', path: '/listings' },
    { name: 'Agents', path: '/agents' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Handle Services click - DIFFERENT FOR DESKTOP AND MOBILE
  const handleServicesClick = (e: React.MouseEvent) => {
    if (isMobile) {
      // On mobile, toggle dropdown
      e.preventDefault();
      setServicesOpen(!servicesOpen);
    } else {
      // On desktop, navigate to services page
      navigate('/services');
      setServicesOpen(false);
    }
  };

  // Handle Services hover (desktop only) - OPEN DROPDOWN
  const handleServicesHover = () => {
    if (!isMobile) {
      setServicesOpen(true);
    }
  };

  // Handle Services leave (desktop only)
  const handleServicesLeave = () => {
    if (!isMobile) {
      setTimeout(() => {
        if (dropdownRef.current && !dropdownRef.current.matches(':hover')) {
          setServicesOpen(false);
        }
      }, 200);
    }
  };

  // Handle dropdown item click
  const handleDropdownClick = (path: string) => {
    navigate(path);
    setServicesOpen(false);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  // Handle mobile navigation item click
  const handleMobileNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2 text-xs">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-1 md:mb-0">
            <div className="flex items-center">
              <Phone className="w-3 h-3 mr-1 text-accent" />
              <span>+254 711-387-303</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-3 h-3 mr-1 text-accent" />
              <span> info.bluevisionrealtors@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1 text-accent" />
              <span>Equity Bank Building  | 1st Floor  | Kilimani</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-2 bg-white">
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
                    {/* Clickable Services link that navigates to /services */}
                    <Link
                      to="/services"
                      onClick={handleServicesClick}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg transition-colors cursor-pointer hover:text-accent`}
                      style={{
                        backgroundColor: isActive('/services') || servicesOpen ? 'rgba(var(--accent), 0.1)' : 'transparent',
                        color: isActive('/services') || servicesOpen ? 'var(--accent)' : 'rgb(55, 65, 81)',
                        fontWeight: isActive('/services') || servicesOpen ? '500' : '400'
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                    </Link>
                    
                    {/* Dropdown - only shown on hover */}
                    {servicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral py-2 z-50"
                        onMouseEnter={handleServicesHover}
                        onMouseLeave={handleServicesLeave}
                      >
                        {item.dropdown.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleDropdownClick(subItem.path)}
                            className="block w-full px-4 py-2 text-gray-700 hover:text-accent hover:bg-neutral-light transition-colors text-left"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-1.5 rounded-lg transition-colors hover:text-accent`} 
                    style={{
                      backgroundColor: isActive(item.path) ? 'rgba(var(--accent), 0.1)' : 'transparent',
                      color: isActive(item.path) ? 'var(--accent)' : 'rgb(55, 65, 81)',
                      fontWeight: isActive(item.path) ? '500' : '400'
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="px-4 py-2 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-colors" 
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-neutral-light transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden container mt-2 pb-4 border-t border-neutral pt-4">
            <div className="space-y-2" ref={mobileDropdownRef}>
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => handleMobileNavClick('/services')}
                        className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-accent hover:bg-neutral-light rounded-lg transition-colors text-left"
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setServicesOpen(!servicesOpen);
                          }}
                        />
                      </button>
                      {servicesOpen && (
                        <div className="pl-6 space-y-2 mt-2">
                          {item.dropdown.map((subItem) => (
                            <button
                              key={subItem.name}
                              onClick={() => handleDropdownClick(subItem.path)}
                              className="block w-full px-4 py-2 text-gray-600 hover:text-accent hover:bg-neutral-light rounded-lg transition-colors text-left"
                            >
                              {subItem.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleMobileNavClick(item.path)}
                      className="block w-full px-4 py-3 text-gray-700 hover:text-accent hover:bg-neutral-light rounded-lg transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={() => handleMobileNavClick('/contact')}
                className="block w-full px-4 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-medium transition-colors text-center mt-4"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NewNavbar;