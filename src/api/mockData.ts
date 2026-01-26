import type { Property } from '@/types/property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Luxury Villa',
    slug: 'modern-luxury-villa',
    description: 'Beautiful modern villa with stunning views',
    price: 1250000,
    type: 'villa',
    status: 'for_sale',
    location: {
      address: '123 Luxury Lane',
      city: 'Beverly Hills',
      state: 'CA',
      zipCode: '90210',
      coordinates: { lat: 34.0522, lng: -118.2437 },
    },
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 4500,
    lotSize: 10000, // Now valid since we added lotSize to Property interface
    yearBuilt: 2020,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
    ],
    broker: {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '(555) 123-4567',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786',
      company: 'Bluevision Realtors',
      rating: 4.8,
    },
    isFavorite: false,
    isFeatured: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
    specs: { // Now valid since we added specs to Property interface
      beds: 5,
      baths: 4,
      sqft: 4500,
      lotSize: 10000,
      yearBuilt: 2020,
      propertyType: 'villa'
    }
  },
  {
    id: '2',
    title: 'Downtown Penthouse',
    slug: 'downtown-penthouse',
    description: 'Luxurious penthouse in the heart of downtown',
    price: 850000,
    type: 'penthouse',
    status: 'for_sale',
    location: {
      address: '456 Skyline Ave',
      city: 'Nairobí',
      state: 'NY',
      zipCode: '10001',
      coordinates: { lat: 40.7128, lng: -74.0060 },
    },
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2800,
    lotSize: 0, // Apartments have no lot size
    yearBuilt: 2019,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
    ],
    broker: {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@example.com',
      phone: '(555) 987-6543',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      company: 'Bluevision Realtors',
      rating: 4.9,
    },
    isFavorite: true,
    isFeatured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
    specs: {
      beds: 3,
      baths: 3,
      sqft: 2800,
      lotSize: 0,
      yearBuilt: 2019,
      propertyType: 'penthouse'
    }
  },
  // Add more properties as needed
];

export const mockPaginatedResponse = {
  data: mockProperties,
  pagination: {
    page: 1,
    limit: 12,
    total: mockProperties.length,
    totalPages: 1
  }
};
