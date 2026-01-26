// src/hooks/useProperties.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { propertyService } from '@/api/services/property.service';

// Define types locally
interface Property {
  id: string;
  title: string;
  price: number;
  type: string;
  status: string;
  location: {
    address: string;
    city: string;
    state: string;
  };
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  images: string[];
}

interface PropertyFilters {
  type?: string;
  status?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  page?: number;
  limit?: number;
}

interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export const useProperties = (filters?: PropertyFilters) => {
  return useQuery<PaginatedResponse<Property>, Error>({
    queryKey: ['properties', filters],
    queryFn: () => propertyService.getAll(filters),
    staleTime: 5 * 60 * 1000,
  });
};

export const useProperty = (id: string) => {
  return useQuery<Property, Error>({
    queryKey: ['property', id],
    queryFn: () => propertyService.getById(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useToggleFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation<Property, Error, string>({
    mutationFn: (id: string) => propertyService.toggleFavorite(id),
    onSuccess: (updatedProperty) => {
      queryClient.setQueryData(['property', updatedProperty.id], updatedProperty);
      queryClient.invalidateQueries({ queryKey: ['properties'] });
    },
  });
};

export const useSimilarProperties = (id: string, limit: number = 4) => {
  return useQuery<Property[], Error>({
    queryKey: ['similarProperties', id],
    queryFn: () => propertyService.getSimilar(id, limit),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};
