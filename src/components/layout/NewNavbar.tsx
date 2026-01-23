import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: [
        { name: 'Property Buying', path: '/services/buying' },
        { name: 'Property Selling', path: '/services/selling' },
        { name: 'Property Management', path: '/services/management' },
        { name: 'Investment Consultation', path: '/services/investment' },
      ]
    },
    { name: 'Listings', path: '/listings' },
    { name: 'Agents', path: '/agents' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar with contact info - Updated with new colors */}
      <div className="bg-primary text-white py-2 text-xs">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-1 md:mb-0">
            <div className="flex items-center">
              <Phone className="w-3 h-3 mr-1 text-accent" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-3 h-3 mr-1 text-accent" />
              <span>info@bluevisionrealtors.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1 text-accent" />
              <span>123 Bluevision Ave, New York</span>
            </div>
            <button className="bg-accent hover:bg-accent-dark text-white px-3 py-1 rounded text-xs font-medium transition-colors">
              Schedule Tour
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="py-3 bg-white">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Logo size="md" variant="dark" />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                        isActive(item.path) 
                          ? 'text-accent bg-accent/10 font-medium' 
                          : 'text-gray-700 hover:text-accent hover:bg-neutral-light'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown */}
                    {servicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral py-2"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:text-accent hover:bg-neutral-light transition-colors"
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
                        onClick={() => setServicesOpen(!servicesOpen)}
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
                              onClick={() => setIsOpen(false)}
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