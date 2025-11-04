'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const BrandStory: React.FC = () => {
  return (
    <section className="container-custom py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] rounded-2xl overflow-hidden shadow-soft-lg group"
        >
          <Image
            src="/images/backgrounds/hero-bg.jpg"
            alt="Craftsmanship and Heritage"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
          
          {/* Elegant Text Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-3"
            >
              <h3 className="text-3xl lg:text-4xl font-serif font-light text-white drop-shadow-2xl leading-tight">
                Premium Quality
              </h3>
              <p className="text-xs md:text-sm lg:text-base text-white/80 font-light tracking-wider drop-shadow-md">
                Timeless • Heritage • Luxury Craftsmanship
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-neutral-900"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 text-neutral-900">
            Crafted with Heritage,
            <br />
            <span 
              className="bg-clip-text text-transparent font-bold"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #c89116 0%, #8b6914 70%, #d4a944 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Designed for Tomorrow
            </span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            For generations, we have curated the world's finest textiles, bringing together
            traditional craftsmanship and modern innovation. Our fabrics are sourced from
            renowned artisans across continents, each piece telling a story of heritage and
            excellence.
          </p>
          <p className="text-lg text-neutral-600 leading-relaxed">
            We believe in sustainable luxury—premium quality that respects both the environment
            and the skilled hands that create it. Every thread is selected with care, ensuring
            that your creations are not just beautiful, but built to last.
          </p>
          <div className="pt-4">
            <a
              href="/about"
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group"
            >
              Learn More About Us
              <svg
                className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform"
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
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

