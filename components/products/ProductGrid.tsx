'use client';

import React from 'react';
import { ProductCard } from './ProductCard';
import { Skeleton } from '@/components/ui/Skeleton';
import type { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  isLoading = false,
  onLoadMore,
  hasMore = false,
}) => {
  if (isLoading && products.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-80 w-full rounded-2xl" />
            <Skeleton className="h-6 w-3/4 rounded-lg" />
            <Skeleton className="h-4 w-1/2 rounded-lg" />
            <Skeleton className="h-5 w-1/3 rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0 && !isLoading) {
    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <svg className="w-20 h-20 mx-auto text-neutral-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
            No products found
          </h3>
          <p className="text-neutral-600 mb-6">
            Try adjusting your filters to see more products
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {hasMore && (
        <div className="text-center mt-12">
          <button
            onClick={onLoadMore}
            disabled={isLoading}
            className="px-8 py-3.5 text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium hover:scale-105"
            style={{ 
              background: 'linear-gradient(to bottom, #3d4a68 0%, #2e3858 50%, #1f2740 100%)',
              boxShadow: '0 4px 12px rgba(46, 56, 88, 0.3)',
            }}
          >
            {isLoading ? 'Loading...' : 'Load More Products'}
          </button>
        </div>
      )}
    </>
  );
};
