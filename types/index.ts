export interface Product {
  id: string;
  sku: string;
  title: string;
  description: string;
  vendor: string;
  collection: string;
  material: string;
  gsm: number;
  width: number;
  colorways: Colorway[];
  care: string[];
  countryOfOrigin: string;
  unitLengthOptions: UnitLength[];
  price: number;
  compareAtPrice?: number;
  wholesalePriceTiers?: WholesalePriceTier[];
  images: ProductImage[];
  variants: ProductVariant[];
  tags: string[];
  certifications?: string[];
  fabricComposition?: FabricComposition;
  drapeNotes?: string;
  availability: 'in_stock' | 'low_stock' | 'out_of_stock' | 'pre_order';
  stockQuantity: number;
  badge?: 'bestseller' | 'new' | 'eco';
  seoTitle?: string;
  seoDescription?: string;
  createdAt: string;
  updatedAt: string;
  reviews?: {
    averageRating: number;
    count: number;
    items?: Review[];
  };
}

export interface Review {
  id: string;
  productId: string;
  customerName: string;
  rating: number;
  title?: string;
  comment?: string;
  verified: boolean;
  createdAt: string;
}

export interface Colorway {
  id: string;
  name: string;
  hex: string;
  image?: string;
}

export interface UnitLength {
  unit: 'meter' | 'yard';
  minLength: number;
  maxLength?: number;
  increment: number;
}

export interface WholesalePriceTier {
  minQuantity: number;
  price: number;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  masterUrl?: string;
  thumbnailUrl?: string;
  variantId?: string;
}

export interface ProductVariant {
  id: string;
  sku: string;
  title: string;
  colorway?: Colorway;
  weight?: string;
  length?: number;
  price: number;
  compareAtPrice?: number;
  stockQuantity: number;
  availability: 'in_stock' | 'low_stock' | 'out_of_stock';
  image?: ProductImage;
}

export interface FabricComposition {
  cotton?: number;
  silk?: number;
  wool?: number;
  polyester?: number;
  linen?: number;
  other?: { name: string; percentage: number }[];
}

export interface CartItem {
  productId: string;
  variantId: string;
  sku: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  unit: 'meter' | 'yard';
  length?: number;
  colorway?: Colorway;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  currency: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId?: string;
  email: string;
  shippingAddress: ShippingAddress;
  billingAddress: ShippingAddress;
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  total: number;
  currency: string;
  paymentMethod: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  fulfillmentStatus: 'unfulfilled' | 'partial' | 'fulfilled' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface Collection {
  id: string;
  title: string;
  description?: string;
  handle: string;
  image?: string;
  seoTitle?: string;
  seoDescription?: string;
}

export interface FilterOption {
  id: string;
  label: string;
  value: string;
  count?: number;
}

export interface ProductFilters {
  priceRange?: [number, number];
  materials?: string[];
  weights?: string[];
  widths?: number[];
  colors?: string[];
  patterns?: string[];
  availability?: string[];
  certifications?: string[];
}

export interface SortOption {
  value: string;
  label: string;
}

