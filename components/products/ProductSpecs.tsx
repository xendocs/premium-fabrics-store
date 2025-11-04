'use client';

import React from 'react';
import type { Product } from '@/types';

interface ProductSpecsProps {
  product: Product;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({ product }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-serif font-semibold">Specifications</h3>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <dt className="text-sm font-medium text-neutral-500">Material</dt>
          <dd className="text-base font-medium text-neutral-900">{product.material}</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-neutral-500">GSM (Weight)</dt>
          <dd className="text-base font-medium text-neutral-900">{product.gsm} g/m²</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-neutral-500">Width</dt>
          <dd className="text-base font-medium text-neutral-900">{product.width} cm</dd>
        </div>
        <div>
          <dt className="text-sm font-medium text-neutral-500">Country of Origin</dt>
          <dd className="text-base font-medium text-neutral-900">{product.countryOfOrigin}</dd>
        </div>
        {product.fabricComposition && (
          <>
            {product.fabricComposition.cotton && (
              <div>
                <dt className="text-sm font-medium text-neutral-500">Cotton</dt>
                <dd className="text-base font-medium text-neutral-900">
                  {product.fabricComposition.cotton}%
                </dd>
              </div>
            )}
            {product.fabricComposition.silk && (
              <div>
                <dt className="text-sm font-medium text-neutral-500">Silk</dt>
                <dd className="text-base font-medium text-neutral-900">
                  {product.fabricComposition.silk}%
                </dd>
              </div>
            )}
            {product.fabricComposition.wool && (
              <div>
                <dt className="text-sm font-medium text-neutral-500">Wool</dt>
                <dd className="text-base font-medium text-neutral-900">
                  {product.fabricComposition.wool}%
                </dd>
              </div>
            )}
          </>
        )}
        {product.certifications && product.certifications.length > 0 && (
          <div>
            <dt className="text-sm font-medium text-neutral-500">Certifications</dt>
            <dd className="text-base font-medium text-neutral-900">
              {product.certifications.join(', ')}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
};

