'use client';

import React from 'react';
import { ProductGrid } from './ProductGrid';

interface RelatedProductsProps {
  productId: string;
}

export const RelatedProducts: React.FC<RelatedProductsProps> = ({ productId }) => {
  // TODO: Fetch related products from API
  const relatedProducts: any[] = [];

  if (relatedProducts.length === 0) return null;

  return (
    <section>
      <h2 className="text-3xl font-serif font-semibold mb-8">You May Also Like</h2>
      <ProductGrid products={relatedProducts} />
    </section>
  );
};

