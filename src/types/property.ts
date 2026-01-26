// src/types/property.ts
export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  type: string;
  status: string;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  yearBuilt?: number;
  images: string[];
  broker?: {
    id: string;
    name: string;
    email: string;
    phone: string;
    avatar?: string;
    company: string;
    rating?: number;
  };
  isFavorite?: boolean;
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PropertyFilters {
  type?: string;
  status?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  minSqft?: number;
  maxSqft?: number;
  location?: string;
  city?: string;
  state?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  isFeatured?: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CreatePropertyDTO {
  title: string;
  description: string;
  price: number;
  type: string;
  status: string;
  location: {
    address: string;
    city: string;
    state: string;
    zipCode: string;
  };
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  images: string[];
}

export interface UpdatePropertyDTO extends Partial<CreatePropertyDTO> {
  isFavorite?: boolean;
}

// Re-export everything
export * from './property';
