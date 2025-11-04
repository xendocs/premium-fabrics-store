'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function TermsPage() {
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
            Terms of Service
          </motion.h1>
          <p className="text-lg text-neutral-600">
            Last Updated: November 2, 2025
          </p>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
                Agreement to Terms
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Welcome to Premium Fabrics. By accessing or using our website and services, you agree 
                to be bound by these Terms of Service. Please read them carefully.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                If you do not agree with any part of these terms, you may not access our website or 
                use our services.
              </p>
            </Card>
          </motion.div>

          {/* Account Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
                Account Terms
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span className="text-neutral-600">
                    You must be at least 18 years old to use our services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span className="text-neutral-600">
                    You are responsible for maintaining the security of your account and password
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span className="text-neutral-600">
                    You must provide accurate, current, and complete information
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span className="text-neutral-600">
                    We reserve the right to suspend or terminate accounts that violate our terms
                  </span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Products and Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
                Products and Pricing
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span className="text-neutral-600">
                    All prices are in Indian Rupees (₹) unless otherwise stated
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span className="text-neutral-600">
                    Prices are subject to change without notice
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span className="text-neutral-600">
                    We strive for accurate product descriptions and images, but colors may vary slightly due to screen settings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span className="text-neutral-600">
                    We reserve the right to limit quantities and refuse service
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-neutral-900 mt-1">•</span>
                  <span className="text-neutral-600">
                    Product availability is subject to stock levels
                  </span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Orders and Payment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
                Orders and Payment
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  <strong className="text-neutral-900">Order Confirmation:</strong> You will receive 
                  an email confirmation once your order is placed. This does not guarantee acceptance 
                  of your order.
                </p>
                <p>
                  <strong className="text-neutral-900">Payment:</strong> All orders must be paid in 
                  full before shipment. We accept UPI, credit/debit cards, net banking, and digital wallets.
                </p>
                <p>
                  <strong className="text-neutral-900">Order Cancellation:</strong> Orders can be 
                  cancelled within 2 hours of placement. After processing begins, cancellation may 
                  not be possible.
                </p>
                <p>
                  <strong className="text-neutral-900">Refusal of Service:</strong> We reserve the 
                  right to refuse or cancel any order for any reason, including stock availability 
                  or pricing errors.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Shipping and Delivery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
                Shipping and Delivery
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Delivery timelines are estimates and not guarantees. While we strive for timely 
                delivery, we are not responsible for delays caused by courier services, natural 
                disasters, or other circumstances beyond our control.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                For detailed shipping information, please refer to our{' '}
                <Link href="/shipping" className="text-primary-600 hover:underline">
                  Shipping Policy
                </Link>.
              </p>
            </Card>
          </motion.div>

          {/* Returns and Refunds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
                Returns and Refunds
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We offer a 7-day return policy on eligible items. Returns must meet specific 
                conditions including being unused, unwashed, and in original packaging.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                For complete return guidelines, visit our{' '}
                <Link href="/returns" className="text-primary-600 hover:underline">
                  Returns & Exchanges
                </Link> page.
              </p>
            </Card>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
                Intellectual Property
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, images, and software, 
                is the property of Premium Fabrics and protected by copyright and trademark laws.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative works without our 
                express written permission.
              </p>
            </Card>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Premium Fabrics and its affiliates shall not be liable for any indirect, incidental, 
                special, or consequential damages arising from:
              </p>
              <ul className="space-y-2 text-neutral-600 ml-4">
                <li>• Use or inability to use our services</li>
                <li>• Errors or omissions in content</li>
                <li>• Unauthorized access to your account</li>
                <li>• Third-party conduct or content</li>
              </ul>
            </Card>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
                Governing Law
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms shall be subject to the exclusive jurisdiction 
                of the courts in Mumbai, Maharashtra.
              </p>
            </Card>
          </motion.div>

          {/* Changes to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                We reserve the right to update these Terms of Service at any time. Changes will be 
                posted on this page with an updated "Last Updated" date. Your continued use of our 
                services after changes constitutes acceptance of the new terms.
              </p>
            </Card>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <h3 className="text-2xl font-serif text-neutral-900 mb-4">
              Need Clarification?
            </h3>
            <p className="text-neutral-600 mb-6">
              Have questions about our terms? We're here to help.
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

