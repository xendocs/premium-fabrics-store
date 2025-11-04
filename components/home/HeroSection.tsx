'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/backgrounds/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1a1a2e', // Fallback color
      }}
    >
      {/* Dark Overlay for Text Readability */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white drop-shadow-2xl leading-relaxed tracking-wide"
          >
            Where Every Thread
            <br />
            <span 
              className="font-normal italic bg-clip-text text-transparent"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #c89116 0%, #8b6914 70%, #d4a944 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Tells a Story
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg lg:text-xl text-white/90 font-light tracking-wider drop-shadow-md max-w-xl mx-auto"
          >
            Timeless Fabrics • Luxury Craftsmanship • Precision Excellence
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <Link href="/collections">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white bg-transparent hover:bg-white/15 backdrop-blur-md transition-all duration-300 px-10 py-4 text-lg font-semibold rounded-2xl shadow-xl"
                style={{ borderColor: '#ffffff', color: '#ffffff', backgroundColor: 'transparent' }}
              >
                Shop Now
              </motion.button>
            </Link>
            <Link href="/collections">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white bg-transparent hover:bg-white/15 backdrop-blur-md transition-all duration-300 px-10 py-4 text-lg font-semibold rounded-2xl shadow-xl"
                style={{ borderColor: '#ffffff', color: '#ffffff', backgroundColor: 'transparent' }}
              >
                View Collections
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2 text-white/90">
          <span className="text-sm font-medium drop-shadow-md">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center p-2 backdrop-blur-sm"
          >
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-white/80 rounded-full"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

