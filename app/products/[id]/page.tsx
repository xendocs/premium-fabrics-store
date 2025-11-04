'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { ProductDetail } from '@/components/products/ProductDetail';
import { ProductReviews } from '@/components/products/ProductReviews';
import { RelatedProducts } from '@/components/products/RelatedProducts';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;

  return (
    <div className="min-h-screen bg-white">
      {/* Product Detail Section - White Background */}
      <section className="bg-white pt-24 sm:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-8 lg:pb-12">
          <ProductDetail productId={productId} />
        </div>
      </section>

      {/* Product Specifications - Light Grey Background */}
      <section className="bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">Quality Assured</h3>
              </div>
              <p className="text-sm text-neutral-600">Premium materials tested for durability and comfort</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">Eco-Friendly</h3>
              </div>
              <p className="text-sm text-neutral-600">Sustainable sourcing and environmentally conscious</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">Fast Delivery</h3>
              </div>
              <p className="text-sm text-neutral-600">Quick shipping across India with order tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section - White Background */}
      <section className="bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-16">
          <ProductReviews productId={productId} />
        </div>
      </section>

      {/* Related Products - White Background */}
      <section className="bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 lg:py-16">
          <RelatedProducts productId={productId} />
        </div>
      </section>
    </div>
  );
}

