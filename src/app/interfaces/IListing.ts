declare module IListing {

  export interface Category {
    id: number;
    category: string;
    status: string;
    created_at: string;
    updated_at: string;
  }

  export interface Type {
    id: number;
    type: string;
    status: string;
    created_at: string;
    updated_at: string;
  }

  export interface Brand {
    id: number;
    brand: string;
    status: string;
    created_at: string;
    updated_at: string;
  }

  export interface Feature {
    id: number;
    feature: string;
    listing_id: number;
    status: string;
    created_at: string;
    updated_at: string;
  }

  export interface Extra {
    id: number;
    type: string;
    name: string;
    rate: number;
    unit: string;
    listing_id: number;
    status: string;
    created_at: string;
    updated_at: string;
  }

  export interface ListingItem {
    id: number;
    name: string;
    description: string;
    image_url: string;
    category_id: number;
    type_id: number;
    brand_id: number;
    rate: number;
    status: string;
    created_at: string;
    updated_at: string;
  }

  export interface Detail {
    id: number;
    name: string;
    description: string;
    image_url: string;
    category_id: number;
    type_id: number;
    brand_id: number;
    rate: number;
    status: string;
    created_at: string;
    updated_at: string;
    category: Category;
    type: Type;
    brand: Brand;
    features: Feature[];
    extras: Extra[];
    isChecked: boolean;
  }

}
