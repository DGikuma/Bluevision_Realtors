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
  lotSize?: number; // ADD THIS
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
  specs?: { // ADD THIS
    beds: number;
    baths: number;
    sqft: number;
    lotSize: number;
    yearBuilt: number;
    propertyType: string;
  };
}

// Keep the rest of the interfaces the same