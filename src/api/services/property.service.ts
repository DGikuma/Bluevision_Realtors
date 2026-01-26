// src/api/services/property.service.ts
import { 
  Property, 
  PropertyFilters, 
  PaginatedResponse,
  CreatePropertyDTO,
  UpdatePropertyDTO 
} from '@/types/property';

// Local mock data - NO IMPORT NEEDED
const mockProperties: Property[] = [
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
    },
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 4500,
    yearBuilt: 2020,
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
    ],
    broker: {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '(555) 123-4567',
      company: 'Bluevision Realtors',
    },
    isFavorite: false,
    isFeatured: true,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-01',
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
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
    },
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2800,
    yearBuilt: 2019,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
    ],
    broker: {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@example.com',
      phone: '(555) 987-6543',
      company: 'Bluevision Realtors',
    },
    isFavorite: true,
    isFeatured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
  },
];

class PropertyService {
  private readonly basePath = '/properties';

  // Get all properties with filters
  async getAll(filters?: PropertyFilters): Promise<PaginatedResponse<Property>> {
    // Simplified - always return mock data for now
    let filtered = [...mockProperties];

    if (filters?.type) {
      filtered = filtered.filter(p => p.type === filters.type);
    }

    const page = filters?.page || 1;
    const limit = filters?.limit || 12;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    return {
      data: filtered.slice(startIndex, endIndex),
      pagination: {
        page,
        limit,
        total: filtered.length,
        totalPages: Math.ceil(filtered.length / limit)
      }
    };
  }

  // Get property by ID
  async getById(id: string): Promise<Property> {
    const property = mockProperties.find(p => p.id === id);
    if (!property) throw new Error('Property not found');
    return property;
  }

  // Create new property
  async create(propertyData: CreatePropertyDTO): Promise<Property> {
    // Mock implementation
    return {
      ...propertyData,
      id: Date.now().toString(),
      slug: propertyData.title.toLowerCase().replace(/\s+/g, '-'),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    } as Property;
  }

  // Update property
  async update(id: string, propertyData: UpdatePropertyDTO): Promise<Property> {
    // Mock implementation
    return {
      id,
      ...propertyData,
      updatedAt: new Date().toISOString(),
    } as Property;
  }

  // Delete property
  async delete(id: string): Promise<void> {
    // Mock implementation - do nothing
    console.log(`Delete property ${id}`);
  }

  // Toggle favorite status
  async toggleFavorite(id: string): Promise<Property> {
    const property = mockProperties.find(p => p.id === id);
    if (!property) throw new Error('Property not found');
    
    // Toggle favorite
    return {
      ...property,
      isFavorite: !property.isFavorite,
      updatedAt: new Date().toISOString(),
    };
  }

  // Get similar properties
  async getSimilar(id: string, limit: number = 4): Promise<Property[]> {
    return mockProperties
      .filter(p => p.id !== id)
      .slice(0, limit);
  }

  // Get featured properties
  async getFeatured(): Promise<Property[]> {
    return mockProperties.filter(p => p.isFeatured);
  }

  // Search properties
  async search(query: string, filters?: PropertyFilters): Promise<Property[]> {
    let results = mockProperties.filter(property => {
      const searchText = `
        ${property.title.toLowerCase()}
        ${property.description?.toLowerCase() || ''}
        ${property.location.address.toLowerCase()}
        ${property.location.city.toLowerCase()}
        ${property.location.state.toLowerCase()}
        ${property.type.toLowerCase()}
      `;
      return searchText.includes(query.toLowerCase());
    });

    if (filters?.type) {
      results = results.filter(p => p.type === filters.type);
    }

    return results;
  }
}

export const propertyService = new PropertyService();
