'use client';

import React, { useEffect, useState } from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedCollections } from '@/components/home/FeaturedCollections';
import { FeaturedProductsCarousel } from '@/components/home/FeaturedProductsCarousel';
import { BrandStory } from '@/components/home/BrandStory';
import { CustomerReviews } from '@/components/home/CustomerReviews';
import { NewsletterCTA } from '@/components/home/NewsletterCTA';
import type { Product } from '@/types';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data)) // Show all products
      .catch(console.error);
  }, []);

  return (
    <div className="bg-neutral-50">
      {/* Hero Section - Full Screen with Background Image */}
      <HeroSection />

      {/* Shop by Collection Section */}
      <FeaturedCollections />

      {/* Featured Products Carousel */}
      <FeaturedProductsCarousel products={products} />

      {/* Brand Story Section */}
      <BrandStory />

      {/* Customer Reviews Section */}
      <CustomerReviews />

      {/* Newsletter CTA Section */}
      <NewsletterCTA />
    </div>
  );
}

