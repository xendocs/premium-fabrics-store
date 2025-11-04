'use client';

import React from 'react';
import { ProductCard } from '@/components/products/ProductCard';
import { motion } from 'framer-motion';
import type { Product } from '@/types';

interface FeaturedProductsCarouselProps {
  products: Product[];
}

export const FeaturedProductsCarousel: React.FC<FeaturedProductsCarouselProps> = ({
  products,
}) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-300 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span 
              className="px-4 py-2 bg-primary-100 rounded-full text-sm font-semibold tracking-wide uppercase"
              style={{ color: '#212533' }}
            >
              Curated Selection
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 text-neutral-900">
            Featured <span className="font-normal italic bg-clip-text text-transparent" style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #c89116 0%, #8b6914 70%, #d4a944 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Fabrics</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked collection of premium textiles • Each fabric tells its own story
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-8 scrollbar-hide -mx-4 px-4">
          <div className="flex gap-8 min-w-max">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-8"
        >
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
            <span>Scroll to explore more</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

