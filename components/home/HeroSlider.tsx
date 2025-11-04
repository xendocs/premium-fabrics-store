'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  badge?: string;
}

const slides: HeroSlide[] = [
  {
    id: '1',
    title: 'Premium Luxury Fabrics',
    subtitle: 'Crafted for Excellence',
    description: 'Discover our curated collection of premium textiles sourced from around the world',
    image: '/images/backgrounds/hero-bg.jpg',
    ctaText: 'Shop Now',
    ctaLink: '/collections',
    badge: 'New Arrival',
  },
  {
    id: '2',
    title: 'Natural Fibers',
    subtitle: 'Sustainable Elegance',
    description: 'Organic cotton, silk, and wool fabrics for the conscious creator',
    image: '/images/backgrounds/hero-bg.jpg',
    ctaText: 'Explore Collections',
    ctaLink: '/collections',
    badge: 'Eco-Friendly',
  },
  {
    id: '3',
    title: 'Designer Materials',
    subtitle: 'Artisan Quality',
    description: 'Premium fabrics handpicked by textile experts for your next masterpiece',
    image: '/images/backgrounds/hero-bg.jpg',
    ctaText: 'Browse All',
    ctaLink: '/collections',
  },
];

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <Image
              src={currentSlide.image}
              alt={currentSlide.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom">
          <motion.div
            key={`content-${currentSlide.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl text-white space-y-6"
          >
            {currentSlide.badge && (
              <span className="inline-block px-4 py-1.5 bg-primary-600 text-white text-sm font-medium rounded-full">
                {currentSlide.badge}
              </span>
            )}
            <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
              {currentSlide.title}
            </h1>
            <p className="text-2xl lg:text-3xl font-light text-neutral-200">
              {currentSlide.subtitle}
            </p>
            <p className="text-lg text-neutral-300 max-w-xl">
              {currentSlide.description}
            </p>
            <div className="pt-4">
              <Link href={currentSlide.ctaLink}>
                <Button variant="primary" size="lg" className="bg-white text-primary-600 hover:bg-neutral-100">
                  {currentSlide.ctaText}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full text-white transition-all"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

