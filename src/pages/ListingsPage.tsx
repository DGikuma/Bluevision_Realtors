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
  Warehouse
} from 'lucide-react';

const ListingsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    bedrooms: '',
    sortBy: 'featured'
  });

  const properties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      price: '$1,250,000',
      location: 'Beverly Hills, CA',
      type: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4500,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      featured: true,
      status: 'For Sale'
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      price: '$850,000',
      location: 'Manhattan, NY',
      type: 'Penthouse',
      bedrooms: 3,
      bathrooms: 3,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      featured: true,
      status: 'For Sale'
    },
    {
      id: 3,
      title: 'Waterfront Condo',
      price: '$650,000',
      location: 'Miami, FL',
      type: 'Condo',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1800,
      image: 'https://images.unsplash.com/photo-1448630360428-65456885c650',
      featured: false,
      status: 'For Sale'
    },
    {
      id: 4,
      title: 'Suburban Family Home',
      price: '$550,000',
      location: 'Austin, TX',
      type: 'House',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3200,
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
      featured: false,
      status: 'For Sale'
    },
    {
      id: 5,
      title: 'Urban Loft',
      price: '$1,100,000',
      location: 'Chicago, IL',
      type: 'Loft',
      bedrooms: 3,
      bathrooms: 2,
      sqft: 2200,
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233',
      featured: true,
      status: 'For Rent'
    },
    {
      id: 6,
      title: 'Beach House',
      price: '$2,500,000',
      location: 'Malibu, CA',
      type: 'Beach House',
      bedrooms: 6,
      bathrooms: 5,
      sqft: 5200,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      featured: true,
      status: 'For Sale'
    },
    {
      id: 7,
      title: 'Modern Apartment',
      price: '$450,000',
      location: 'Seattle, WA',
      type: 'Apartment',
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1400,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
      featured: false,
      status: 'For Sale'
    },
    {
      id: 8,
      title: 'Mountain Retreat',
      price: '$950,000',
      location: 'Denver, CO',
      type: 'Cabin',
      bedrooms: 4,
      bathrooms: 3,
      sqft: 3800,
      image: 'https://images.unsplash.com/photo-1430285561322-7808604715df',
      featured: false,
      status: 'For Sale'
    }
  ];

  const propertyTypes = [
    { icon: <Home className="w-5 h-5" />, label: 'All Types', value: '' },
    { icon: <Building className="w-5 h-5" />, label: 'Apartment', value: 'apartment' },
    { icon: <Home className="w-5 h-5" />, label: 'House', value: 'house' },
    { icon: <Warehouse className="w-5 h-5" />, label: 'Villa', value: 'villa' },
    { icon: <Building className="w-5 h-5" />, label: 'Condo', value: 'condo' },
  ];

  return (
    <div className="min-h-screen">
      <NewNavbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Premium Property Listings</h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover exclusive properties curated by our team of expert agents. 
              Find your dream home from our collection of premium listings.
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
                  placeholder="Search by location, property type, or features..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-600'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <button className="flex items-center border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-lg">
                <Filter className="w-5 h-5 mr-2" />
                Filters
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          {/* Property Type Filters */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-4">
              {propertyTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setFilters({...filters, type: type.value})}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                    filters.type === type.value
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-2">{type.icon}</span>
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Grid/List */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          {/* Stats */}
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">{properties.length} Properties Found</h2>
              <p className="text-gray-600">Showing 1-8 of {properties.length} results</p>
            </div>
            <select 
              value={filters.sortBy}
              onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Featured First</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {/* Properties */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {properties.map((property) => (
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
                    <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md">
                      <Heart className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        property.status === 'For Sale' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                      }`}>
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
                    
                    <div className="flex justify-between border-t border-gray-100 pt-4">
                      <div className="flex items-center">
                        <Bed className="w-5 h-5 text-gray-400 mr-2" />
                        <span>{property.bedrooms} beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="w-5 h-5 text-gray-400 mr-2" />
                        <span>{property.bathrooms} baths</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="w-5 h-5 text-gray-400 mr-2" />
                        <span>{property.sqft.toLocaleString()} sqft</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex justify-between items-center">
                      <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                        {property.type}
                      </span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {properties.map((property) => (
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
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            property.status === 'For Sale' ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                          }`}>
                            {property.status}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">
                        Beautiful property with amazing features and prime location. 
                        Perfect for families and investors alike.
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-6">
                          <div className="flex items-center">
                            <Bed className="w-5 h-5 text-gray-400 mr-2" />
                            <span className="font-medium">{property.bedrooms} Beds</span>
                          </div>
                          <div className="flex items-center">
                            <Bath className="w-5 h-5 text-gray-400 mr-2" />
                            <span className="font-medium">{property.bathrooms} Baths</span>
                          </div>
                          <div className="flex items-center">
                            <Square className="w-5 h-5 text-gray-400 mr-2" />
                            <span className="font-medium">{property.sqft.toLocaleString()} Sqft</span>
                          </div>
                          <span className="px-3 py-1 bg-gray-100 rounded-full font-medium">
                            {property.type}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <Heart className="w-5 h-5" />
                          </button>
                          <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <Share2 className="w-5 h-5" />
                          </button>
                          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium">
                            View Details
                          </button>
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
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">4</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team for personalized property recommendations based on your specific needs and preferences.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get Personalized Assistance
          </a>
        </div>
      </section>
    </div>
  );
};

export default ListingsPage;