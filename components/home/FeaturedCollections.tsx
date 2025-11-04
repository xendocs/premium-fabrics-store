'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Collection } from '@/types';

// Cache-busting timestamp - updates on each page load to force fresh images
const cacheBuster = Date.now();

const collections: Collection[] = [
  {
    id: '1',
    title: 'Silk Luxe',
    description: 'Luxurious silk fabrics in various weights and finishes',
    handle: 'silk-luxe',
    image: `/images/collections/silk-luxe.jpg?v=${cacheBuster}`,
  },
  {
    id: '2',
    title: 'Organic Cotton',
    description: 'High-quality cotton fabrics for everyday luxury',
    handle: 'organic-cotton',
    image: `/images/collections/organic-cotton.jpg?v=${cacheBuster}`,
  },
  {
    id: '3',
    title: 'Velvet Elegance',
    description: 'Premium velvet for timeless sophistication',
    handle: 'velvet-elegance',
    image: `/images/collections/velvet-elegance.jpg?v=${cacheBuster}`,
  },
  {
    id: '4',
    title: 'Festive Weaves',
    description: 'Exquisite patterns for special occasions',
    handle: 'festive-weaves',
    image: `/images/collections/festive-weaves.jpg?v=${cacheBuster}`,
  },
];

export const FeaturedCollections: React.FC = () => {
  return (
    <section className="container-custom py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-semibold mb-4 text-neutral-900">Shop by Collection</h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Explore our curated collections of premium fabrics, each selected for quality and elegance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/collections/${collection.handle}`}>
              <div className="group relative h-96 rounded-2xl overflow-hidden shadow-soft-lg hover:shadow-soft-xl transition-all duration-500 cursor-pointer">
                <Image
                  src={collection.image || '/placeholder.jpg'}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  unoptimized={process.env.NODE_ENV === 'development'}
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/80 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                  <h3 className="text-2xl font-serif font-semibold mb-2">{collection.title}</h3>
                  <p className="text-sm text-white/90 mb-4">{collection.description}</p>
                  <span className="inline-flex items-center text-sm font-medium text-white group-hover:text-primary-200 transition-colors">
                    Shop Now
                    <svg
                      className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

