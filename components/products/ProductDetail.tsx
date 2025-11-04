'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ProductImageGallery } from './ProductImageGallery';
import { ProductInfo } from './ProductInfo';
import { ProductSpecs } from './ProductSpecs';
import { CareInstructions } from './CareInstructions';
import { SizeGuide } from './SizeGuide';
import { Skeleton } from '@/components/ui/Skeleton';
import type { Product } from '@/types';

interface ProductDetailProps {
  productId: string;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [productId]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <Skeleton className="h-[600px] w-full rounded-2xl" />
        <div className="space-y-6">
          <Skeleton className="h-12 w-3/4 rounded-xl" />
          <Skeleton className="h-8 w-1/2 rounded-lg" />
          <Skeleton className="h-40 w-full rounded-xl" />
          <Skeleton className="h-16 w-full rounded-xl" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <div className="max-w-md mx-auto">
          <svg className="w-24 h-24 mx-auto text-neutral-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-3">Product Not Found</h2>
          <p className="text-neutral-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <a href="/collections" className="inline-block px-8 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors">
            Browse Collections
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      {/* Product Image Gallery - Left Column */}
      <div className="order-2 lg:order-1">
        <div className="lg:sticky lg:top-24">
          <ProductImageGallery product={product} />
        </div>
      </div>

      {/* Product Information - Right Column */}
      <div className="order-1 lg:order-2">
        <ProductInfo product={product} />
      </div>
    </div>
  );
};

