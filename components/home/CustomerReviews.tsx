'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

interface Review {
  id: string;
  customerName: string;
  avatar?: string;
  rating: number;
  comment: string;
  location?: string;
}

const reviews: Review[] = [
  {
    id: '1',
    customerName: 'Priya Sharma',
    rating: 5,
    comment:
      'The silk fabric quality is exceptional! Perfect for my designer saree collection. Fast delivery to Mumbai and excellent customer service.',
    location: 'Mumbai, Maharashtra',
  },
  {
    id: '2',
    customerName: 'Rajesh Kumar',
    rating: 5,
    comment:
      'Outstanding fabric quality at such affordable prices. The velvet I ordered is perfect for my boutique. Highly recommended!',
    location: 'Delhi, NCR',
  },
  {
    id: '3',
    customerName: 'Ananya Patel',
    rating: 5,
    comment:
      'Beautiful organic cotton fabric! The texture and color are exactly as shown. Great for sustainable fashion projects.',
    location: 'Ahmedabad, Gujarat',
  },
  {
    id: '4',
    customerName: 'Vikram Singh',
    rating: 5,
    comment:
      'Premium quality brocade for my sister\'s wedding outfit. The intricate patterns and rich colors are stunning. Worth every rupee!',
    location: 'Jaipur, Rajasthan',
  },
  {
    id: '5',
    customerName: 'Kavya Reddy',
    rating: 5,
    comment:
      'Excellent linen fabric for summer wear. Breathable and comfortable. The customer service team was very helpful with my bulk order.',
    location: 'Hyderabad, Telangana',
  },
  {
    id: '6',
    customerName: 'Arjun Menon',
    rating: 5,
    comment:
      'The wool suiting fabric is top-notch! Perfect for tailoring premium suits. Fast shipping to Bangalore and great packaging.',
    location: 'Bangalore, Karnataka',
  },
  {
    id: '7',
    customerName: 'Meera Iyer',
    rating: 5,
    comment:
      'Absolutely in love with the silk charmeuse! The drape and sheen are perfect for my fashion design studio. Will order again!',
    location: 'Chennai, Tamil Nadu',
  },
  {
    id: '8',
    customerName: 'Sanjay Gupta',
    rating: 5,
    comment:
      'Best fabric store online! The festive weaves collection is incredible. Perfect for ethnic wear. Timely delivery to Kolkata.',
    location: 'Kolkata, West Bengal',
  },
];

export const CustomerReviews: React.FC = () => {
  return (
    <section className="container-custom py-20 bg-neutral-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-serif font-semibold mb-4 text-neutral-900">
          What Our Customers Say
        </h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Trusted by designers and creators worldwide
        </p>
      </motion.div>

      <div className="overflow-x-auto pb-8 scrollbar-hide -mx-4 px-4">
        <div className="flex gap-6 min-w-max">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-80"
            >
              <Card className="p-6 bg-white hover:shadow-soft-xl transition-all h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: '#252839' }}
                  >
                    {review.customerName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">{review.customerName}</h4>
                    {review.location && (
                      <p className="text-sm text-neutral-500">{review.location}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-700 leading-relaxed">{review.comment}</p>
              </Card>
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
        className="flex justify-center mt-6"
      >
        <div className="flex items-center gap-2 text-neutral-400 text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
          <span>Scroll to see more reviews</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

