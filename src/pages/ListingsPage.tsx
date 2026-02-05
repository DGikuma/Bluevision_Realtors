import React, { useState } from 'react';
import NewNavbar from '@/components/layout/NewNavbar';
import {
  Search,
  Filter,
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Share2,
  Grid,
  List,
  ChevronDown,
  Home,
  Building,
  Warehouse,
  Trees,
  Globe,
  Mountain
} from 'lucide-react';

import { Link } from 'react-router-dom';

const ListingsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    sortBy: 'featured'
  });
  const [searchQuery, setSearchQuery] = useState('');

  const properties = [
    {
      id: 1,
      title: 'Diaspora Village Malindi',
      price: 'Kes 2.5M',
      location: 'Malindi, Kenya',
      type: 'Gated Community',
      landSize: '5 acres',
      description: 'Fully Gated Community with Residential & Commercial Spaces',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      featured: true,
      status: 'For Sale'
    },
    {
      id: 2,
      title: 'Fahari Gardens Malindi',
      price: 'Kes 200,000',
      location: 'Malindi, Kenya',
      type: 'Serviced Plots',
      landSize: '50 × 100 ft',
      description: 'Fully Serviced Plots. Only 45 minutes from Malindi town.',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      featured: true,
      status: 'For Sale'
    },
    {
      id: 3,
      title: 'Fahari Gardens Malindi',
      price: 'Kes 600,000',
      location: 'Malindi, Kenya',
      type: 'Serviced Plots',
      landSize: '1 acre',
      description: 'Fully Serviced Plots. Only 45 minutes from Malindi town.',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      featured: false,
      status: 'For Sale'
    },
    {
      id: 4,
      title: 'Fahari Gardens Malindi',
      price: 'Kes 7M',
      location: 'Malindi, Kenya',
      type: 'Serviced Plots',
      landSize: '7 acres',
      description: 'Fully Serviced Plots. Only 45 minutes from Malindi town.',
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650',
      featured: false,
      status: 'For Sale'
    },
    {
      id: 5,
      title: 'Peakview Gardens Nanyuki',
      price: 'Kes 450,000',
      location: 'Nanyuki, Kenya',
      type: 'Gardens',
      landSize: '50 × 100 ft',
      description: 'Fully serviced plots with electricity. 9km from Batuk. Payable over 24 months.',
      image: 'https://images.unsplash.com/photo-1430285561322-7808604715df',
      featured: true,
      status: 'For Sale'
    }
  ];

  const propertyTypes = [
    { icon: <Home className="w-5 h-5" />, label: 'All Types', value: '' },
    { icon: <Trees className="w-5 h-5" />, label: 'Gated Community', value: 'Gated Community' },
    { icon: <Building className="w-5 h-5" />, label: 'Serviced Plots', value: 'Serviced Plots' },
    { icon: <Globe className="w-5 h-5" />, label: 'Village', value: 'Village' },
    { icon: <Mountain className="w-5 h-5" />, label: 'Gardens', value: 'Gardens' },
  ];

  // Filter properties based on selected filters and search query
  const filteredProperties = properties.filter(property => {
    // Filter by property type
    if (filters.type && property.type !== filters.type) return false;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.type.toLowerCase().includes(query) ||
        property.description.toLowerCase().includes(query)
      );
    }

    return true;
  });

  // Sort properties based on selected sort option
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price_asc':
        return parsePrice(a.price) - parsePrice(b.price);
      case 'price_desc':
        return parsePrice(b.price) - parsePrice(a.price);
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      case 'newest':
        // Assuming newer properties have higher IDs
        return b.id - a.id;
      default:
        return 0;
    }
  });

  // Helper function to parse price strings to numbers
  function parsePrice(priceStr: string): number {
    const match = priceStr.match(/Kes\s*([\d,.]+)(M|K)?/i);
    if (!match) return 0;

    let value = parseFloat(match[1].replace(/,/g, ''));
    const multiplier = match[2];

    if (multiplier === 'M' || multiplier === 'm') {
      value *= 1000000;
    } else if (multiplier === 'K' || multiplier === 'k') {
      value *= 1000;
    }

    return value;
  }

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      type: '',
      priceRange: '',
      sortBy: 'featured'
    });
    setSearchQuery('');
  };

  // Check if any filter is active
  const isAnyFilterActive = filters.type || searchQuery;

  return (
    <div className="min-h-screen">
      <NewNavbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Premium Land & Property Listings</h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover exclusive land parcels and properties in prime locations across Kenya.
              Find your perfect investment opportunity from our curated collection.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Search Bar */}
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by location, property type, or land size..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  aria-label="Search properties"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-600'}`}
                  aria-label="Grid view"
                  title="Grid view"
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-600'}`}
                  aria-label="List view"
                  title="List view"
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {isAnyFilterActive && (
                <button
                  onClick={clearFilters}
                  className="flex items-center border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm"
                  aria-label="Clear all filters"
                  title="Clear all filters"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Property Type Filters */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-4">
              {propertyTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setFilters({ ...filters, type: type.value })}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${filters.type === type.value
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  aria-label={`Filter by ${type.label}`}
                  title={`Filter by ${type.label}`}
                >
                  <span className="mr-2">{type.icon}</span>
                  {type.label}
                  {filters.type === type.value && (
                    <span className="ml-2 text-xs bg-white/20 px-1.5 py-0.5 rounded">
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {(filters.type || searchQuery) && (
            <div className="mt-4 flex items-center flex-wrap gap-2">
              <span className="text-sm text-gray-600">Active filters:</span>
              {filters.type && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  Type: {filters.type}
                  <button
                    onClick={() => setFilters({ ...filters, type: '' })}
                    className="ml-2 text-blue-800 hover:text-blue-900"
                    aria-label="Remove type filter"
                  >
                    ×
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery('')}
                    className="ml-2 text-blue-800 hover:text-blue-900"
                    aria-label="Remove search filter"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Property Grid/List */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {/* Stats */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">{sortedProperties.length} Properties Found</h2>
              <p className="text-gray-600">
                Showing 1-{sortedProperties.length} of {sortedProperties.length} results
                {isAnyFilterActive && ' (filtered)'}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
                aria-label="Sort properties by"
                title="Sort properties by"
              >
                <option value="featured">Featured First</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* No Results Message */}
          {sortedProperties.length === 0 && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No properties found</h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}

          {/* Properties */}
          {sortedProperties.length > 0 && (
            <>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                  {sortedProperties.map((property) => (
                    <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                      <div className="relative h-48">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-full object-cover"
                        />
                        {property.featured && (
                          <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Featured
                          </div>
                        )}
                        <button
                          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
                          aria-label={`Save ${property.title} as favorite`}
                          title="Save as favorite"
                        >
                          <Heart className="w-5 h-5 text-gray-400" />
                        </button>
                        <div className="absolute bottom-3 left-3">
                          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                            {property.status}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-bold">{property.title}</h3>
                          <span className="text-lg font-bold text-blue-600">{property.price}</span>
                        </div>

                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{property.location}</span>
                        </div>

                        <div className="mb-4">
                          <p className="text-gray-700 text-sm">{property.description}</p>
                        </div>

                        <div className="flex justify-between border-t border-gray-100 pt-4">
                          <div className="flex items-center">
                            <Square className="w-5 h-5 text-gray-400 mr-2" />
                            <span className="font-medium">{property.landSize}</span>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-between items-center">
                          <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                            {property.type}
                          </span>
                          <Link
                            to={`/listings/${property.id}`}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                            aria-label={`View details for ${property.title}`}
                            title={`View details for ${property.title}`}
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {sortedProperties.map((property) => (
                    <div key={property.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-64 h-48 relative flex-shrink-0">
                          <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          {property.featured && (
                            <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Featured
                            </div>
                          )}
                        </div>

                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-2xl font-bold mb-2">{property.title}</h3>
                              <div className="flex items-center text-gray-600 mb-3">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span>{property.location}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-blue-600 mb-2">{property.price}</div>
                              <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm font-semibold">
                                {property.status}
                              </span>
                            </div>
                          </div>

                          <p className="text-gray-700 mb-6">{property.description}</p>

                          <div className="flex justify-between items-center">
                            <div className="flex space-x-6">
                              <div className="flex items-center">
                                <Square className="w-5 h-5 text-gray-400 mr-2" />
                                <span className="font-medium">{property.landSize}</span>
                              </div>
                              <span className="px-3 py-1 bg-gray-100 rounded-full font-medium">
                                {property.type}
                              </span>
                            </div>

                            <div className="flex items-center space-x-3">
                              <button
                                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                aria-label={`Save ${property.title} as favorite`}
                                title="Save as favorite"
                              >
                                <Heart className="w-5 h-5" />
                              </button>
                              <button
                                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                aria-label={`Share ${property.title}`}
                                title="Share property"
                              >
                                <Share2 className="w-5 h-5" />
                              </button>
                              <Link
                                to={`/listings/${property.id}`}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium"
                                aria-label={`View details for ${property.title}`}
                                title={`View details for ${property.title}`}
                              >
                                View Details
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    aria-label="Previous page"
                    title="Previous page"
                  >
                    Previous
                  </button>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    aria-label="Page 1"
                    title="Page 1"
                  >
                    1
                  </button>
                  <button
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    aria-label="Next page"
                    title="Next page"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in Land Investment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team for detailed site visits, payment plans, and personalized investment advice.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            aria-label="Get investment consultation"
            title="Get investment consultation"
          >
            Get Investment Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default ListingsPage;