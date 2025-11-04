'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductFilters } from '@/components/filters/ProductFilters';
import { SortDropdown } from '@/components/filters/SortDropdown';
import { filterProducts, sortProducts } from '@/utils/filters';
import type { Product, ProductFilters as ProductFiltersType, SortOption } from '@/types';

const sortOptions: SortOption[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
  { value: 'newest', label: 'Newest First' },
];

// Collection metadata mapping
const collectionData: Record<string, {
  title: string;
  description: string;
  image: string;
  filterMaterial: string;
}> = {
  'silk-luxe': {
    title: 'Silk Luxe',
    description: 'Luxurious silk fabrics in various weights and finishes',
    image: '/images/collections/silk-luxe.jpg',
    filterMaterial: 'Silk',
  },
  'organic-cotton': {
    title: 'Organic Cotton',
    description: 'High-quality cotton fabrics for everyday luxury',
    image: '/images/collections/organic-cotton.jpg',
    filterMaterial: 'Cotton',
  },
  'velvet-elegance': {
    title: 'Velvet Elegance',
    description: 'Premium velvet for timeless sophistication',
    image: '/images/collections/velvet-elegance.jpg',
    filterMaterial: 'Velvet',
  },
  'festive-weaves': {
    title: 'Festive Weaves',
    description: 'Exquisite patterns for special occasions',
    image: '/images/collections/festive-weaves.jpg',
    filterMaterial: 'Silk Brocade',
  },
};

export default function CollectionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const collectionInfo = collectionData[slug];

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<ProductFiltersType>({});
  const [sortBy, setSortBy] = useState<string>('featured');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // Pre-filter by collection material
        if (collectionInfo) {
          setFilters({ materials: [collectionInfo.filterMaterial] });
        }
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [collectionInfo]);

  useEffect(() => {
    let filtered = filterProducts(products, filters);
    filtered = sortProducts(filtered, sortBy);
    setFilteredProducts(filtered);
  }, [products, filters, sortBy]);

  // Handle 404 for invalid collection slugs
  if (!collectionInfo) {
    return (
      <div className="min-h-screen bg-white pt-24 sm:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20 text-center">
          <h1 className="text-4xl font-serif font-bold text-neutral-900 mb-4">
            Collection Not Found
          </h1>
          <p className="text-neutral-600 mb-8">
            The collection you're looking for doesn't exist.
          </p>
          <a
            href="/collections"
            className="inline-block px-8 py-3 text-white rounded-xl transition-all duration-300 hover:scale-105"
            style={{ 
              background: 'linear-gradient(to bottom, #3d4a68 0%, #2e3858 50%, #1f2740 100%)',
              boxShadow: '0 4px 12px rgba(46, 56, 88, 0.3)',
            }}
          >
            View All Collections
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Collection Image */}
      <div className="relative h-64 sm:h-80 lg:h-96">
        <Image
          src={collectionInfo.image}
          alt={collectionInfo.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          unoptimized={process.env.NODE_ENV === 'development'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl">
              {collectionInfo.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-2xl mx-auto drop-shadow-lg">
              {collectionInfo.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-3">
            <ProductFilters 
              filters={filters} 
              onFiltersChange={setFilters} 
              products={products} 
            />
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-9">
            {/* Sort Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-200">
              <p className="text-sm text-neutral-600 font-medium">
                Showing <span className="text-neutral-900 font-semibold">{filteredProducts.length}</span> {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-neutral-600 hidden sm:inline">Sort by:</span>
                <SortDropdown 
                  options={sortOptions} 
                  value={sortBy} 
                  onChange={setSortBy} 
                />
              </div>
            </div>

            {/* Product Grid */}
            <ProductGrid products={filteredProducts} isLoading={isLoading} />

            {/* Back to All Collections */}
            <div className="mt-12 text-center">
              <a
                href="/collections"
                className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to All Collections
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

