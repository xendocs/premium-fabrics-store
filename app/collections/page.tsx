'use client';

import React, { useState, useEffect } from 'react';
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

export default function CollectionsPage() {
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
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    let filtered = filterProducts(products, filters);
    filtered = sortProducts(filtered, sortBy);
    setFilteredProducts(filtered);
  }, [products, filters, sortBy]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Spacing */}
      <div className="pt-24 sm:pt-28 lg:pt-32 pb-8 border-b border-neutral-200 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-2">
            All Collections
          </h1>
          <p className="text-base sm:text-lg text-neutral-600">
            Explore our complete collection of premium fabrics and textiles
          </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
