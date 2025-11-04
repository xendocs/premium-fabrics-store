'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqs: FAQItem[] = [
    {
      category: 'ordering',
      question: 'How do I place an order?',
      answer: 'Simply browse our collections, select your desired fabric, choose the quantity (in meters or yards), and add to cart. Follow the checkout process to complete your order. You can pay via UPI, credit/debit card, or net banking.',
    },
    {
      category: 'ordering',
      question: 'What is the minimum order quantity?',
      answer: 'For most fabrics, the minimum order is 0.5 meters (half meter). However, some specialty fabrics may have a minimum of 1 meter. The minimum quantity is displayed on each product page.',
    },
    {
      category: 'ordering',
      question: 'Can I order fabric samples?',
      answer: 'Yes! We offer sample swatches (10cm x 10cm) for ₹49 per fabric. You can order up to 5 samples at once. Sample charges are refundable if you place an order within 30 days.',
    },
    {
      category: 'shipping',
      question: 'How long does delivery take?',
      answer: 'Delivery typically takes 3-4 days for metro cities and 4-6 days for other locations. Remote areas may take 6-8 days. You\'ll receive tracking information once your order ships.',
    },
    {
      category: 'shipping',
      question: 'Do you offer free shipping?',
      answer: 'Yes! We offer free shipping on all orders above ₹1,499. For orders below this amount, standard shipping charges apply based on your location and order weight.',
    },
    {
      category: 'shipping',
      question: 'Do you ship internationally?',
      answer: 'Currently, we ship only within India. We are working on expanding to international shipping soon. Please contact us for bulk international orders.',
    },
    {
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 7-day return policy on all unused, unwashed fabrics in original packaging. Items must have tags intact and be returned with the invoice. Custom-cut or special orders are non-returnable.',
    },
    {
      category: 'returns',
      question: 'How do I initiate a return?',
      answer: 'Contact our customer service team via email or phone within 7 days of delivery. We\'ll provide you with a return authorization number and instructions. Keep your tracking number for the return shipment.',
    },
    {
      category: 'returns',
      question: 'When will I receive my refund?',
      answer: 'Refunds are processed within 5-7 business days after we receive and inspect the returned item. The amount will be credited to your original payment method.',
    },
    {
      category: 'products',
      question: 'Are the fabric colors accurate in photos?',
      answer: 'We make every effort to display colors accurately. However, colors may vary slightly due to screen settings and lighting. We recommend ordering samples for critical color matching.',
    },
    {
      category: 'products',
      question: 'What are the fabric care instructions?',
      answer: 'Each fabric has specific care requirements listed on the product page. For detailed instructions, visit our Fabric Care Guide. When in doubt, dry cleaning is the safest option for premium fabrics.',
    },
    {
      category: 'products',
      question: 'Do you offer bulk discounts?',
      answer: 'Yes! We offer special wholesale pricing for bulk orders (typically 20+ meters or orders above ₹10,000). Contact our sales team for a custom quote and volume discounts.',
    },
    {
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept UPI, credit/debit cards (Visa, Mastercard, Amex), net banking, PayPal, and digital wallets (Paytm, PhonePe, Google Pay). All payments are processed securely.',
    },
    {
      category: 'payment',
      question: 'Is it safe to use my credit card on your website?',
      answer: 'Absolutely! We use industry-standard SSL encryption and PCI-compliant payment gateways. Your payment information is never stored on our servers and is processed securely.',
    },
    {
      category: 'payment',
      question: 'Can I pay cash on delivery?',
      answer: 'Currently, we do not offer cash on delivery. All orders must be prepaid online. This helps us maintain competitive pricing and faster processing times.',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'ordering', name: 'Ordering' },
    { id: 'shipping', name: 'Shipping' },
    { id: 'returns', name: 'Returns' },
    { id: 'products', name: 'Products' },
    { id: 'payment', name: 'Payment' },
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

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
            Frequently Asked Questions
          </motion.h1>
          <p className="text-xl text-neutral-600">
            Find answers to common questions about our fabrics and services
          </p>
        </div>
      </section>

      <div className="container-custom py-16">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'text-white shadow-lg scale-105'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
              style={activeCategory === category.id ? {
                background: 'linear-gradient(to bottom, #3d4a68 0%, #2e3858 50%, #1f2740 100%)',
              } : {}}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          <AnimatePresence mode="wait">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer hover:shadow-soft-lg transition-all"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-neutral-900 pr-8">
                        {faq.question}
                      </h3>
                      <ChevronDownIcon 
                        className={`h-5 w-5 text-neutral-600 flex-shrink-0 transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-neutral-600 mt-4 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-12 bg-white">
            <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our customer service team is ready to help.
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
                Contact Support
              </motion.button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

