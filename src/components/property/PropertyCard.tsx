import React from 'react';
import { Property } from '@/types/property';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onFavoriteToggle?: (id: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ 
  property, 
  onFavoriteToggle 
}) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(property.price);

  // Use direct properties instead of specs
  const bedrooms = property.bedrooms; // Changed from property.specs?.beds
  const bathrooms = property.bathrooms; // Changed from property.specs?.baths
  const squareFeet = property.squareFeet; // Changed from property.specs?.sqft

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.images[0] || '/default-property.jpg'}
          alt={property.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            property.status === 'for_sale' 
              ? 'bg-green-600 text-white' 
              : property.status === 'for_rent'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-600 text-white'
          }`}>
            {property.status.replace('_', ' ')}
          </span>
        </div>
        <button
          onClick={() => onFavoriteToggle?.(property.id)}
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Heart className={`w-5 h-5 ${property.isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{formattedPrice}</h3>
          <span className="text-sm text-gray-500 capitalize">{property.type}</span>
        </div>
        
        <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">{property.title}</h4>
        
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm line-clamp-1">{property.location.address}</span>
        </div>

        {/* Property Features */}
        <div className="flex justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center">
            <Bed className="w-5 h-5 text-gray-400 mr-2" />
            <span className="text-gray-700">{bedrooms} {bedrooms === 1 ? 'bed' : 'beds'}</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-5 h-5 text-gray-400 mr-2" />
            <span className="text-gray-700">{bathrooms} {bathrooms === 1 ? 'bath' : 'baths'}</span>
          </div>
          <div className="flex items-center">
            <Square className="w-5 h-5 text-gray-400 mr-2" />
            <span className="text-gray-700">{squareFeet.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={property.broker?.avatar || '/default-avatar.png'}
              alt={property.broker?.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <p className="text-sm font-medium">{property.broker?.name || 'No broker'}</p>
              <p className="text-xs text-gray-500">{property.broker?.company || ''}</p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
