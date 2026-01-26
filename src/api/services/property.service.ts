import { apiClient } from '../client';
import { 
  Property, 
  PropertyFilters, 
  PaginatedResponse,
  CreatePropertyDTO,
  UpdatePropertyDTO 
} from '@/types/property';
// ADD THIS IMPORT
import { mockProperties } from '../mockdata'; // Import mock data

class PropertyService {
  private readonly basePath = '/properties';

  // Get all properties with filters - returns PaginatedResponse
  async getAll(filters?: PropertyFilters): Promise<PaginatedResponse<Property>> {
    try {
      // For development, return mock data
      if (import.meta.env.DEV) {
        return this.filterMockData(filters);
      }

      const response = await apiClient.get<PaginatedResponse<Property>>(this.basePath, {
        params: filters
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching properties:', error);
      // Return mock data in case of error for development
      return this.filterMockData(filters);
    }
  }

  // Get property by ID
  async getById(id: string): Promise<Property> {
    try {
      // For development, return mock data
      if (import.meta.env.DEV) {
        const property = mockProperties.find((p: Property) => p.id === id);
        if (!property) throw new Error('Property not found');
        return property;
      }

      const response = await apiClient.get<Property>(`${this.basePath}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching property ${id}:`, error);
      throw error;
    }
  }

  // Create new property
  async create(propertyData: CreatePropertyDTO): Promise<Property> {
    const response = await apiClient.post<Property>(this.basePath, propertyData);
    return response.data;
  }

  // Update property
  async update(id: string, propertyData: UpdatePropertyDTO): Promise<Property> {
    const response = await apiClient.put<Property>(`${this.basePath}/${id}`, propertyData);
    return response.data;
  }

  // Delete property
  async delete(id: string): Promise<void> {
    await apiClient.delete(`${this.basePath}/${id}`);
  }

  // Toggle favorite status
  async toggleFavorite(id: string): Promise<Property> {
    const response = await apiClient.patch<Property>(`${this.basePath}/${id}/favorite`);
    return response.data;
  }

  // Get similar properties
  async getSimilar(id: string, limit: number = 4): Promise<Property[]> {
    try {
      // For development, return mock data
      if (import.meta.env.DEV) {
        return mockProperties
          .filter((p: Property) => p.id !== id)
          .slice(0, limit);
      }

      const response = await apiClient.get<Property[]>(`${this.basePath}/${id}/similar`, {
        params: { limit }
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching similar properties for ${id}:`, error);
      // Return mock data in case of error
      return mockProperties
        .filter((p: Property) => p.id !== id)
        .slice(0, limit);
    }
  }

  // Get featured properties
  async getFeatured(): Promise<Property[]> {
    try {
      // For development, return mock data
      if (import.meta.env.DEV) {
        return mockProperties.filter((p: Property) => p.isFeatured);
      }

      const response = await apiClient.get<Property[]>(`${this.basePath}/featured`);
      return response.data;
    } catch (error) {
      console.error('Error fetching featured properties:', error);
      return mockProperties.filter((p: Property) => p.isFeatured);
    }
  }

  // Search properties
  async search(query: string, filters?: PropertyFilters): Promise<Property[]> {
    try {
      // For development, return mock data
      if (import.meta.env.DEV) {
        return this.searchMockData(query, filters);
      }

      const response = await apiClient.get<Property[]>(`${this.basePath}/search`, {
        params: { q: query, ...filters }
      });
      return response.data;
    } catch (error) {
      console.error('Error searching properties:', error);
      return this.searchMockData(query, filters);
    }
  }

  // Filter mock data for development - returns PaginatedResponse
  private filterMockData(filters?: PropertyFilters): PaginatedResponse<Property> {
    let filtered = [...mockProperties];

    if (filters) {
      if (filters.type) {
        filtered = filtered.filter((p: Property) => p.type === filters!.type);
      }
      if (filters.status) {
        filtered = filtered.filter((p: Property) => p.status === filters!.status);
      }
      if (filters.minPrice) {
        filtered = filtered.filter((p: Property) => p.price >= filters!.minPrice!);
      }
      if (filters.maxPrice) {
        filtered = filtered.filter((p: Property) => p.price <= filters!.maxPrice!);
      }
      if (filters.bedrooms) {
        filtered = filtered.filter((p: Property) => p.bedrooms >= filters!.bedrooms!);
      }
      if (filters.bathrooms) {
        filtered = filtered.filter((p: Property) => p.bathrooms >= filters!.bathrooms!);
      }
      if (filters.minSqft) {
        filtered = filtered.filter((p: Property) => p.squareFeet >= filters!.minSqft!);
      }
      if (filters.maxSqft) {
        filtered = filtered.filter((p: Property) => p.squareFeet <= filters!.maxSqft!);
      }
      if (filters.location) {
        filtered = filtered.filter((p: Property) => 
          p.location.city.toLowerCase().includes(filters!.location!.toLowerCase()) ||
          p.location.state.toLowerCase().includes(filters!.location!.toLowerCase())
        );
      }
      if (filters.city) {
        filtered = filtered.filter((p: Property) => 
          p.location.city.toLowerCase().includes(filters!.city!.toLowerCase())
        );
      }
      if (filters.state) {
        filtered = filtered.filter((p: Property) => 
          p.location.state.toLowerCase().includes(filters!.state!.toLowerCase())
        );
      }
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

  // Search mock data
  private searchMockData(query: string, filters?: PropertyFilters): Property[] {
    let results = [...mockProperties];

    // Apply search query
    if (query) {
      const searchTerms = query.toLowerCase().split(' ');
      results = results.filter((property: Property) => {
        const searchText = `
          ${property.title.toLowerCase()}
          ${property.description.toLowerCase()}
          ${property.location.address.toLowerCase()}
          ${property.location.city.toLowerCase()}
          ${property.location.state.toLowerCase()}
          ${property.type.toLowerCase()}
        `;
        return searchTerms.some(term => searchText.includes(term));
      });
    }

    // Apply filters
    if (filters) {
      if (filters.type) {
        results = results.filter((p: Property) => p.type === filters!.type);
      }
      if (filters.minPrice) {
        results = results.filter((p: Property) => p.price >= filters!.minPrice!);
      }
      if (filters.maxPrice) {
        results = results.filter((p: Property) => p.price <= filters!.maxPrice!);
      }
    }

    return results;
  }
}

export const propertyService = new PropertyService();