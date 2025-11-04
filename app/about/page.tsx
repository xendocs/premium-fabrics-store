'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/backgrounds/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-white drop-shadow-2xl mb-4"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 font-light tracking-wide drop-shadow-lg"
          >
            Crafting Excellence Since Generations
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-neutral-900">
              Our <span 
                className="bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, #c89116 0%, #8b6914 70%, #d4a944 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >Story</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              For over three generations, Premium Fabrics has been the trusted name in luxury textiles. 
              What began as a small family business in the heart of India has blossomed into a 
              premier destination for designers, boutiques, and fabric enthusiasts across the country.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our founder's passion for exceptional quality and timeless design continues to guide us 
              today. We source the finest materials from master weavers and renowned textile mills 
              around the world, ensuring that every fabric in our collection meets the highest standards 
              of craftsmanship and durability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-soft-lg"
          >
            <Image
              src="/images/collections/silk-luxe.jpg"
              alt="Our Story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-neutral-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-neutral-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on quality. Every fabric is carefully inspected to ensure it meets our exacting standards.',
                icon: '✨',
              },
              {
                title: 'Sustainable Practices',
                description: 'We prioritize eco-friendly materials and ethical sourcing, supporting artisans and sustainable production.',
                icon: '🌿',
              },
              {
                title: 'Customer Excellence',
                description: 'Your satisfaction is our priority. We provide expert guidance and support throughout your fabric journey.',
                icon: '❤️',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-soft-lg transition-all"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-neutral-900 mb-4">
            Our <span 
              className="bg-clip-text text-transparent font-bold"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #c89116 0%, #8b6914 70%, #d4a944 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >Journey</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Three generations of excellence in textiles
          </p>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              year: '1970',
              title: 'The Beginning',
              description: 'Founded as a small family-run textile shop in Mumbai, focusing on premium silk fabrics.',
              image: '/images/collections/silk-luxe.jpg',
            },
            {
              year: '1995',
              title: 'Expansion Era',
              description: 'Expanded our collection to include cotton, linen, and velvet. Opened branches in Delhi and Bangalore.',
              image: '/images/collections/organic-cotton.jpg',
            },
            {
              year: '2010',
              title: 'Going Digital',
              description: 'Launched our online store, making premium fabrics accessible across India with just a click.',
              image: '/images/collections/velvet-elegance.jpg',
            },
            {
              year: '2024',
              title: 'Today',
              description: 'Serving thousands of designers, boutiques, and fabric enthusiasts with 500+ premium fabric options.',
              image: '/images/collections/festive-weaves.jpg',
            },
          ].map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 !== 0 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="px-6 py-2 rounded-full text-white font-bold text-lg"
                    style={{ backgroundColor: '#252839' }}
                  >
                    {milestone.year}
                  </div>
                </div>
                <h3 className="text-3xl font-serif font-semibold text-neutral-900 mb-4">
                  {milestone.title}
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
              <div className={`relative h-80 rounded-2xl overflow-hidden shadow-soft-lg ${
                index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''
              }`}>
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Collection Showcase */}
      <section className="bg-neutral-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-neutral-900 mb-4">
              Our Collections
            </h2>
            <p className="text-lg text-neutral-600">
              Explore the finest fabrics from around the world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Silk Luxe',
                count: '150+ Fabrics',
                image: '/images/collections/silk-luxe.jpg',
              },
              {
                title: 'Organic Cotton',
                count: '200+ Fabrics',
                image: '/images/collections/organic-cotton.jpg',
              },
              {
                title: 'Velvet Elegance',
                count: '80+ Fabrics',
                image: '/images/collections/velvet-elegance.jpg',
              },
              {
                title: 'Festive Weaves',
                count: '120+ Fabrics',
                image: '/images/collections/festive-weaves.jpg',
              },
            ].map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-80 rounded-2xl overflow-hidden shadow-soft-lg hover:shadow-soft-xl transition-all cursor-pointer"
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-semibold mb-1">{collection.title}</h3>
                  <p className="text-white/80">{collection.count}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-neutral-900 mb-4">
            Why Choose Premium Fabrics
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Premium Quality',
              description: 'Handpicked fabrics from renowned mills worldwide',
              icon: '✨',
            },
            {
              title: 'Affordable Prices',
              description: 'Luxury fabrics at prices that fit your budget',
              icon: '💰',
            },
            {
              title: 'Fast Delivery',
              description: 'Quick shipping across India with careful packaging',
              icon: '🚚',
            },
            {
              title: 'Expert Support',
              description: '24/7 customer service to help with your projects',
              icon: '💬',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications & Trust */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-neutral-900 mb-4">
              Certified Excellence
            </h2>
            <p className="text-lg text-neutral-600">
              Our commitment to quality is recognized worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              'OEKO-TEX Standard 100',
              'GOTS Certified',
              'Handloom Mark',
              'ISO 9001:2015',
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-soft text-center"
              >
                <div 
                  className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                  style={{ backgroundColor: '#252839' }}
                >
                  ✓
                </div>
                <p className="text-sm font-semibold text-neutral-900">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="container-custom py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden shadow-soft-lg"
          >
            <Image
              src="/images/collections/velvet-elegance.jpg"
              alt="Our Expertise"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-base md:text-lg lg:text-xl text-white/90 font-light tracking-wider drop-shadow-lg">
                  Expert Knowledge • Personal Service • Quality Assurance
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-neutral-900">
              Expert <span 
                className="bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage: 'radial-gradient(circle at 50% 50%, #c89116 0%, #8b6914 70%, #d4a944 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >Guidance</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Our team of fabric specialists brings decades of combined experience in textiles. 
              We personally visit mills, inspect every batch, and ensure that only the finest 
              fabrics make it to our collection.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Whether you're a professional designer, boutique owner, or DIY enthusiast, 
              we provide personalized recommendations to help you choose the perfect fabric 
              for your unique vision.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-primary-50 rounded-xl">
                <div className="text-3xl font-bold text-neutral-900">500+</div>
                <div className="text-sm text-neutral-600">Premium Fabrics</div>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-xl">
                <div className="text-3xl font-bold text-neutral-900">50k+</div>
                <div className="text-sm text-neutral-600">Happy Customers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Global Sourcing */}
      <section className="bg-neutral-50 py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-neutral-900 mb-4">
              Sourced From the Best
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We partner with master weavers and premier mills across continents
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { country: 'Italy', specialty: 'Silk & Satin' },
              { country: 'India', specialty: 'Brocade & Weaves' },
              { country: 'Egypt', specialty: 'Premium Cotton' },
              { country: 'Belgium', specialty: 'Fine Linen' },
              { country: 'France', specialty: 'Luxury Fabrics' },
              { country: 'UK', specialty: 'Velvet' },
              { country: 'Australia', specialty: 'Merino Wool' },
              { country: 'Turkey', specialty: 'Textiles' },
            ].map((source, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-xl shadow-soft hover:shadow-soft-lg transition-all text-center"
              >
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-1">
                  {source.country}
                </h3>
                <p className="text-sm text-neutral-600">{source.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-96 rounded-3xl overflow-hidden shadow-soft-xl"
        >
          <Image
            src="/images/backgrounds/hero-bg.jpg"
            alt="Start Your Journey"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-white mb-6 drop-shadow-2xl">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl drop-shadow-lg">
              Explore our curated collection of premium fabrics and bring your creative vision to life
            </p>
            <Link href="/collections">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white text-white bg-transparent hover:bg-white/15 backdrop-blur-md transition-all duration-300 px-10 py-4 text-lg font-semibold rounded-2xl shadow-xl"
              >
                Browse Collections
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

