'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-light text-neutral-900 mb-4"
          >
            Returns & Exchanges
          </motion.h1>
          <p className="text-xl text-neutral-600">
            Your satisfaction is our priority
          </p>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Return Policy Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
              <div className="text-center">
                <div className="text-5xl mb-4">✓</div>
                <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-3">
                  7-Day Easy Returns
                </h2>
                <p className="text-lg text-neutral-600">
                  Don't love it? Return it within 7 days of delivery for a full refund or exchange.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Return Eligibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
              Eligibility Criteria
            </h2>
            <Card className="p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="text-neutral-900 font-medium">Unused & Unwashed</p>
                    <p className="text-neutral-600 text-sm">Fabric must be in original condition</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="text-neutral-900 font-medium">Original Packaging</p>
                    <p className="text-neutral-600 text-sm">With tags and labels intact</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="text-neutral-900 font-medium">Within 7 Days</p>
                    <p className="text-neutral-600 text-sm">From the date of delivery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <p className="text-neutral-900 font-medium">Original Invoice</p>
                    <p className="text-neutral-600 text-sm">Please include invoice with the return</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* How to Return */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
              How to Return or Exchange
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Initiate Return Request',
                  description: 'Contact our customer service via email or phone within 7 days of delivery.',
                },
                {
                  step: '2',
                  title: 'Get Return Authorization',
                  description: 'Our team will provide you with a return authorization number and return address.',
                },
                {
                  step: '3',
                  title: 'Pack Securely',
                  description: 'Pack the fabric in its original packaging with all tags, labels, and invoice.',
                },
                {
                  step: '4',
                  title: 'Ship the Package',
                  description: 'Ship the package to the provided address. Keep the tracking number safe.',
                },
                {
                  step: '5',
                  title: 'Get Your Refund',
                  description: 'Once we receive and inspect the fabric, your refund will be processed within 5-7 business days.',
                },
              ].map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-soft-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                      style={{ backgroundColor: '#252839' }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                      <p className="text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Refund Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
              Refund Information
            </h2>
            <Card className="p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Processing Time</h3>
                  <p className="text-neutral-600">
                    Refunds are processed within 5-7 business days after we receive and inspect the returned item.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Refund Method</h3>
                  <p className="text-neutral-600">
                    Refunds will be credited to your original payment method (bank account, UPI, or credit/debit card).
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Return Shipping Cost</h3>
                  <p className="text-neutral-600">
                    For damaged or defective items, we cover the return shipping. For other returns, 
                    customers are responsible for return shipping costs.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Non-Returnable Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
              Non-Returnable Items
            </h2>
            <Card className="p-8 bg-red-50 border border-red-200">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span className="text-neutral-700">Cut or altered fabrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span className="text-neutral-700">Washed or used fabrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span className="text-neutral-700">Fabrics without original packaging or tags</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span className="text-neutral-700">Custom-ordered or special request fabrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">✗</span>
                  <span className="text-neutral-700">Items purchased during clearance sales</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              Have Questions About Returns?
            </h3>
            <p className="text-neutral-600 mb-6">
              Our customer service team is here to help
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
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

