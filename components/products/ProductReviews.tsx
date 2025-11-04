'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';

interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  location: string;
  date: string;
  verified?: boolean;
}

interface ProductReviewsProps {
  productId: string;
}

// Product-specific reviews for each product
const productReviews: Record<string, Review[]> = {
  '1': [ // Luxe Silk Charmeuse
    {
      id: '1-1',
      customerName: 'Kavya Malhotra',
      rating: 5,
      comment: 'Absolutely stunning silk! The drape and sheen are perfect for my bridal collection. The champagne gold color is divine. Worth every rupee!',
      location: 'Delhi, NCR',
      date: '2024-10-15',
      verified: true,
    },
    {
      id: '1-2',
      customerName: 'Arjun Desai',
      rating: 5,
      comment: 'Excellent quality Italian silk. My boutique clients love the luxurious feel. Fast delivery to Mumbai. Highly recommended!',
      location: 'Mumbai, Maharashtra',
      date: '2024-10-20',
      verified: true,
    },
    {
      id: '1-3',
      customerName: 'Priya Nair',
      rating: 5,
      comment: 'Premium quality silk charmeuse. Perfect for evening gowns. The fabric flows beautifully and the color vibrancy is exceptional.',
      location: 'Bangalore, Karnataka',
      date: '2024-10-25',
      verified: true,
    },
    {
      id: '1-4',
      customerName: 'Rohit Kapoor',
      rating: 5,
      comment: 'Best silk fabric I\'ve purchased online. Authentic Italian quality. Great for luxury garment projects.',
      location: 'Pune, Maharashtra',
      date: '2024-10-28',
      verified: true,
    },
  ],
  '2': [ // Premium Organic Cotton
    {
      id: '2-1',
      customerName: 'Ananya Sharma',
      rating: 5,
      comment: 'Love the organic cotton! So soft and breathable. Perfect for my children\'s clothing line. GOTS certified is a big plus!',
      location: 'Ahmedabad, Gujarat',
      date: '2024-10-18',
      verified: true,
    },
    {
      id: '2-2',
      customerName: 'Vikram Singh',
      rating: 5,
      comment: 'Excellent quality cotton fabric. Pre-washed and minimal shrinkage. Great for sustainable fashion projects.',
      location: 'Jaipur, Rajasthan',
      date: '2024-10-22',
      verified: true,
    },
    {
      id: '2-3',
      customerName: 'Meera Iyer',
      rating: 5,
      comment: 'Superb organic cotton! The sage green color is exactly as shown. Perfect weight for summer dresses.',
      location: 'Chennai, Tamil Nadu',
      date: '2024-10-26',
      verified: true,
    },
    {
      id: '2-4',
      customerName: 'Sanjay Gupta',
      rating: 5,
      comment: 'Best organic cotton fabric. Eco-friendly and comfortable. Using it for home textiles. Highly satisfied!',
      location: 'Kolkata, West Bengal',
      date: '2024-10-29',
      verified: true,
    },
  ],
  '3': [ // Royal Velvet
    {
      id: '3-1',
      customerName: 'Simran Kaur',
      rating: 5,
      comment: 'Luxurious velvet! The rich emerald green color is breathtaking. Perfect for my upholstery project. Premium French quality!',
      location: 'Chandigarh, Punjab',
      date: '2024-10-16',
      verified: true,
    },
    {
      id: '3-2',
      customerName: 'Aditya Reddy',
      rating: 5,
      comment: 'Outstanding velvet fabric. Dense pile and exceptional depth of color. Great for premium home décor.',
      location: 'Hyderabad, Telangana',
      date: '2024-10-21',
      verified: true,
    },
    {
      id: '3-3',
      customerName: 'Neha Patel',
      rating: 5,
      comment: 'Beautiful royal velvet! The texture is incredibly soft and the burgundy color is stunning. Perfect for festive wear.',
      location: 'Surat, Gujarat',
      date: '2024-10-27',
      verified: true,
    },
    {
      id: '3-4',
      customerName: 'Karan Mehta',
      rating: 5,
      comment: 'Premium quality velvet. The weight and drape are perfect for luxury cushions and curtains. Highly recommended!',
      location: 'Mumbai, Maharashtra',
      date: '2024-10-30',
      verified: true,
    },
  ],
  '4': [ // Heritage Jacquard Weave
    {
      id: '4-1',
      customerName: 'Rajesh Kumar',
      rating: 5,
      comment: 'Exquisite jacquard weave! Traditional motifs are beautifully crafted. Perfect for my daughter\'s wedding lehenga.',
      location: 'Varanasi, Uttar Pradesh',
      date: '2024-10-14',
      verified: true,
    },
    {
      id: '4-2',
      customerName: 'Lakshmi Menon',
      rating: 5,
      comment: 'Stunning traditional fabric! The gold and maroon combination is perfect for festive occasions. Handloom quality is authentic.',
      location: 'Kochi, Kerala',
      date: '2024-10-19',
      verified: true,
    },
    {
      id: '4-3',
      customerName: 'Amit Chopra',
      rating: 5,
      comment: 'Beautiful jacquard fabric. The intricate patterns and metallic work are exceptional. Great for sherwanis.',
      location: 'Ludhiana, Punjab',
      date: '2024-10-24',
      verified: true,
    },
    {
      id: '4-4',
      customerName: 'Divya Rao',
      rating: 5,
      comment: 'Premium heritage fabric. The craftsmanship is incredible. Perfect for ethnic wear. Supporting Indian weavers!',
      location: 'Mysore, Karnataka',
      date: '2024-10-28',
      verified: true,
    },
  ],
  '5': [ // Belgian Linen
    {
      id: '5-1',
      customerName: 'Pooja Agarwal',
      rating: 5,
      comment: 'Excellent Belgian linen! Natural texture is beautiful. Perfect for summer clothing. Breathable and comfortable.',
      location: 'Indore, Madhya Pradesh',
      date: '2024-10-17',
      verified: true,
    },
    {
      id: '5-2',
      customerName: 'Nikhil Joshi',
      rating: 5,
      comment: 'Premium quality linen. The natural beige color is elegant. Using it for table linens and curtains. Very satisfied!',
      location: 'Nashik, Maharashtra',
      date: '2024-10-23',
      verified: true,
    },
    {
      id: '5-3',
      customerName: 'Ritu Verma',
      rating: 5,
      comment: 'Love this Belgian linen! Gets softer with each wash. Perfect for sustainable fashion. OEKO-TEX certified!',
      location: 'Noida, Uttar Pradesh',
      date: '2024-10-26',
      verified: true,
    },
    {
      id: '5-4',
      customerName: 'Manish Bhatt',
      rating: 5,
      comment: 'Outstanding European linen. The slub texture adds character. Great for minimalist designs. Highly recommended!',
      location: 'Vadodara, Gujarat',
      date: '2024-10-29',
      verified: true,
    },
  ],
  '6': [ // Duchess Satin
    {
      id: '6-1',
      customerName: 'Sneha Deshmukh',
      rating: 5,
      comment: 'Perfect bridal satin! The ivory color is absolutely stunning. High-sheen finish photographs beautifully. Dream fabric!',
      location: 'Nagpur, Maharashtra',
      date: '2024-10-13',
      verified: true,
    },
    {
      id: '6-2',
      customerName: 'Rahul Saxena',
      rating: 5,
      comment: 'Excellent duchess satin for my boutique. The weight and drape are perfect for structured gowns. Very impressed!',
      location: 'Lucknow, Uttar Pradesh',
      date: '2024-10-20',
      verified: true,
    },
    {
      id: '6-3',
      customerName: 'Isha Bansal',
      rating: 5,
      comment: 'Luxurious satin fabric! The champagne color is elegant. Perfect for my bridal collection. Quality is outstanding!',
      location: 'Chandigarh, Punjab',
      date: '2024-10-25',
      verified: true,
    },
    {
      id: '6-4',
      customerName: 'Arun Kumar',
      rating: 5,
      comment: 'Premium quality satin. The sheen and smoothness are exceptional. Great for formal wear. Fast delivery!',
      location: 'Coimbatore, Tamil Nadu',
      date: '2024-10-28',
      verified: true,
    },
  ],
  '7': [ // Fine Merino Wool
    {
      id: '7-1',
      customerName: 'Deepak Malhotra',
      rating: 5,
      comment: 'Outstanding merino wool! Perfect for tailoring suits. The charcoal grey is classic. Temperature-regulating properties are amazing.',
      location: 'Delhi, NCR',
      date: '2024-10-12',
      verified: true,
    },
    {
      id: '7-2',
      customerName: 'Anjali Rao',
      rating: 5,
      comment: 'Excellent wool blend for winter wear. Soft and comfortable. No itchiness. Perfect for coats and blazers.',
      location: 'Shimla, Himachal Pradesh',
      date: '2024-10-19',
      verified: true,
    },
    {
      id: '7-3',
      customerName: 'Sameer Khanna',
      rating: 5,
      comment: 'Premium Scottish wool. The quality is superb. Using it for bespoke tailoring. Woolmark certified!',
      location: 'Gurgaon, Haryana',
      date: '2024-10-24',
      verified: true,
    },
    {
      id: '7-4',
      customerName: 'Nisha Pandey',
      rating: 5,
      comment: 'Best merino wool fabric. Natural elasticity ensures garments hold shape. Perfect for formal wear. Very happy!',
      location: 'Kanpur, Uttar Pradesh',
      date: '2024-10-27',
      verified: true,
    },
  ],
  '8': [ // Golden Brocade
    {
      id: '8-1',
      customerName: 'Sunita Jain',
      rating: 5,
      comment: 'Magnificent golden brocade! The zari work is authentic and beautiful. Perfect for my daughter\'s wedding outfit. Absolutely stunning!',
      location: 'Jaipur, Rajasthan',
      date: '2024-10-11',
      verified: true,
    },
    {
      id: '8-2',
      customerName: 'Harish Bhatia',
      rating: 5,
      comment: 'Exceptional brocade fabric! The metallic patterns shimmer beautifully. Great for festive sherwanis. Handloom quality is evident.',
      location: 'Amritsar, Punjab',
      date: '2024-10-18',
      verified: true,
    },
    {
      id: '8-3',
      customerName: 'Rekha Pillai',
      rating: 5,
      comment: 'Gorgeous golden brocade! The craftsmanship is outstanding. Perfect for Diwali celebrations and weddings. Rich and opulent!',
      location: 'Trivandrum, Kerala',
      date: '2024-10-23',
      verified: true,
    },
    {
      id: '8-4',
      customerName: 'Vijay Sharma',
      rating: 5,
      comment: 'Premium brocade fabric. The traditional patterns are exquisite. Supporting Indian artisans. Perfect for ceremonial wear!',
      location: 'Udaipur, Rajasthan',
      date: '2024-10-29',
      verified: true,
    },
  ],
};

export const ProductReviews: React.FC<ProductReviewsProps> = ({ productId }) => {
  const reviews = productReviews[productId] || [];

  return (
    <section id="reviews" className="space-y-8">
      <div>
        <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-neutral-900 mb-2">Customer Reviews</h2>
        <p className="text-neutral-600">See what our customers are saying about this product</p>
      </div>
      {reviews.length === 0 ? (
        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-12 text-center">
          <svg className="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <p className="text-lg font-medium text-neutral-900 mb-2">No reviews yet</p>
          <p className="text-neutral-600">Be the first to review this product!</p>
        </div>
      ) : (
        <>
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
                  <Card className="p-6 bg-white hover:shadow-soft-xl transition-all h-full border border-neutral-200">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg"
                        style={{ backgroundColor: '#252839' }}
                      >
                        {review.customerName.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-neutral-900">{review.customerName}</h4>
                          {review.verified && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                              ✓ Verified
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-neutral-500">{review.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-neutral-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-neutral-700 leading-relaxed mb-3">{review.comment}</p>
                    <p className="text-xs text-neutral-400">{new Date(review.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
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
            className="flex justify-center mt-4"
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
        </>
      )}
    </section>
  );
};

