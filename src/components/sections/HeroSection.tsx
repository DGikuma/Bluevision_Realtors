import React from 'react';
import { Search, Home, Shield, TrendingUp } from 'lucide-react';
import { LogoHorizontal } from '@/components/layout/Logo';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay - Updated colors */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90"></div>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your Vision, Our Blueprint
            <span className="block text-accent mt-2">Find Your Perfect Property</span>
          </h1>
          <p className="text-lg text-neutral mb-8">
            Bluevision Realtors connects you with premium properties and expert agents. 
            Experience seamless real estate transactions with our professional team.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-xl p-2 shadow-2xl mb-12">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-dark w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter location, neighborhood, or ZIP code"
                    className="w-full pl-12 pr-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-accent text-gray-800"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <select className="px-4 py-3 border border-neutral rounded-lg focus:ring-2 focus:ring-accent text-gray-800">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="commercial">Commercial</option>
                </select>
                <button className="btn-primary flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-xl mr-4 backdrop-blur-sm">
                <Home className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">1,500+</div>
                <div className="text-neutral">Properties Sold</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-xl mr-4 backdrop-blur-sm">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-neutral">Client Satisfaction</div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white/20 p-3 rounded-xl mr-4 backdrop-blur-sm">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold">15+ Years</div>
                <div className="text-neutral">Industry Experience</div>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center">
              <div className="mr-4">
                <LogoHorizontal variant="light" />
              </div>
              <div className="text-sm text-neutral">
                Trusted by thousands of clients since 2008
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;