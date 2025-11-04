'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function CareGuidePage() {
  const fabricTypes = [
    {
      name: 'Silk',
      icon: '🧵',
      care: [
        'Dry clean only for best results',
        'Hand wash in cold water with mild detergent if necessary',
        'Never wring or twist - gently squeeze excess water',
        'Iron on low heat while slightly damp, inside out',
        'Store in breathable garment bags away from direct sunlight',
      ],
      donts: [
        'Do not machine wash or tumble dry',
        'Avoid bleach and harsh chemicals',
        'Do not expose to direct sunlight for extended periods',
      ],
    },
    {
      name: 'Cotton',
      icon: '🌱',
      care: [
        'Machine wash in cold or warm water',
        'Use mild detergent for colored cotton',
        'Tumble dry on low or line dry',
        'Iron on medium to high heat while slightly damp',
        'Store in a cool, dry place',
      ],
      donts: [
        'Avoid hot water for colored fabrics (may cause fading)',
        'Do not over-dry to prevent shrinkage',
        'Avoid bleach on colored cotton',
      ],
    },
    {
      name: 'Velvet',
      icon: '✨',
      care: [
        'Professional dry cleaning recommended',
        'Never iron directly - use steam only',
        'Brush gently with a soft velvet brush to restore pile',
        'Hang properly to avoid crushing the pile',
        'Store laying flat or hanging with proper support',
      ],
      donts: [
        'Do not machine wash',
        'Never apply direct heat or iron face',
        'Avoid folding to prevent permanent creases',
      ],
    },
    {
      name: 'Linen',
      icon: '🍃',
      care: [
        'Machine wash in cold to lukewarm water',
        'Use gentle cycle with mild detergent',
        'Line dry or tumble dry on low heat',
        'Iron on high heat while still slightly damp',
        'Store in a breathable cotton bag',
      ],
      donts: [
        'Avoid twisting or wringing',
        'Do not over-dry (embrace the natural wrinkles)',
        'Avoid harsh chemicals and bleach',
      ],
    },
    {
      name: 'Wool',
      icon: '🐑',
      care: [
        'Dry clean or hand wash in cold water',
        'Use wool-specific detergent',
        'Lay flat to dry - never hang when wet',
        'Steam iron on wool setting, never directly on fabric',
        'Store folded with moth repellent',
      ],
      donts: [
        'Never use hot water (causes shrinkage)',
        'Do not machine wash or tumble dry',
        'Avoid direct sunlight when drying',
      ],
    },
    {
      name: 'Brocade',
      icon: '👑',
      care: [
        'Dry clean only',
        'Store flat or rolled to prevent creases',
        'Use padded hangers if hanging',
        'Steam lightly if wrinkled, never iron directly',
        'Keep away from moisture and direct sunlight',
      ],
      donts: [
        'Never wash at home',
        'Do not iron metallic threads',
        'Avoid perfumes and sprays directly on fabric',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-light text-neutral-900 mb-4"
          >
            Fabric Care Guide
          </motion.h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Expert tips to keep your premium fabrics beautiful for years to come
          </p>
        </div>
      </section>

      <div className="container-custom py-16">
        {/* General Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="p-8 bg-white">
            <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-6">
              General Care Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Before First Use</h3>
                <p className="text-neutral-600 text-sm">
                  Always check the care label and test a small hidden area before full cleaning.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Storage</h3>
                <p className="text-neutral-600 text-sm">
                  Store in a cool, dry place away from direct sunlight. Use breathable covers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Stain Removal</h3>
                <p className="text-neutral-600 text-sm">
                  Treat stains immediately. Blot, don't rub. Consult professionals for delicate fabrics.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Fabric-Specific Care */}
        <div className="space-y-8">
          {fabricTypes.map((fabric, index) => (
            <motion.div
              key={fabric.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 bg-white hover:shadow-soft-lg transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{fabric.icon}</span>
                  <h2 className="text-3xl font-serif font-light text-neutral-900">
                    {fabric.name} Care
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Do's */}
                  <div>
                    <h3 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                      <span className="text-xl">✓</span> Care Instructions
                    </h3>
                    <ul className="space-y-3">
                      {fabric.care.map((instruction, i) => (
                        <li key={i} className="flex items-start gap-2 text-neutral-600">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Don'ts */}
                  <div>
                    <h3 className="font-semibold text-red-700 mb-4 flex items-center gap-2">
                      <span className="text-xl">✗</span> Avoid These
                    </h3>
                    <ul className="space-y-3">
                      {fabric.donts.map((dont, i) => (
                        <li key={i} className="flex items-start gap-2 text-neutral-600">
                          <span className="text-red-600 mt-1">•</span>
                          <span>{dont}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Need Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-primary-50 to-primary-100">
            <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
              Need Fabric Care Advice?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Our fabric experts are always happy to help with care questions or concerns.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 text-white font-semibold rounded-2xl shadow-xl transition-all duration-300 border border-white/20"
                style={{ 
                  background: 'linear-gradient(to bottom, #3d4a68 0%, #2e3858 50%, #1f2740 100%)',
                  boxShadow: '0 4px 12px rgba(46, 56, 88, 0.3)',
                }}
              >
                Ask an Expert
              </motion.button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

