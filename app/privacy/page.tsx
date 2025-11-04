'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export default function PrivacyPage() {
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
            Privacy Policy
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
                Introduction
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                At Premium Fabrics ("we," "our," or "us"), we are committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or make a purchase from us.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                By using our website, you consent to the data practices described in this policy.
              </p>
            </Card>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
                Information We Collect
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Personal Information
                  </h3>
                  <p className="text-neutral-600 mb-2">
                    When you place an order or create an account, we collect:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-neutral-600 ml-4">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Billing and shipping addresses</li>
                    <li>Payment information (processed securely through payment gateways)</li>
                    <li>Order history and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Automatically Collected Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-neutral-600 ml-4">
                    <li>IP address and browser type</li>
                    <li>Device information and operating system</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* How We Use Your Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
                How We Use Your Information
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-neutral-600">Process and fulfill your orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-neutral-600">Send order confirmations and shipping updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-neutral-600">Respond to customer service requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-neutral-600">Send promotional emails (with your consent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-neutral-600">Improve our website and customer experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <span className="text-neutral-600">Prevent fraud and enhance security</span>
                </li>
              </ul>
            </Card>
          </motion.div>

          {/* Data Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
                Data Security
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="space-y-2 text-neutral-600 ml-4">
                <li>• SSL encryption for all data transmission</li>
                <li>• Secure payment processing through PCI-compliant gateways</li>
                <li>• Regular security audits and updates</li>
                <li>• Restricted access to personal data</li>
                <li>• Secure data storage with backup systems</li>
              </ul>
            </Card>
          </motion.div>

          {/* Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We use cookies to enhance your browsing experience. Cookies help us:
              </p>
              <ul className="space-y-2 text-neutral-600 ml-4 mb-4">
                <li>• Remember your cart items and preferences</li>
                <li>• Analyze site traffic and usage patterns</li>
                <li>• Personalize content and recommendations</li>
                <li>• Provide targeted marketing (with your consent)</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed">
                You can control cookie settings through your browser preferences.
              </p>
            </Card>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
                Your Rights
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-neutral-600 ml-4">
                <li>• Access your personal data</li>
                <li>• Request correction of inaccurate data</li>
                <li>• Request deletion of your data</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Withdraw consent at any time</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-4">
                To exercise these rights, please contact us at privacy@premiumfabrics.com
              </p>
            </Card>
          </motion.div>

          {/* Third-Party Disclosure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-white">
              <h2 className="text-3xl font-serif font-light text-neutral-900 mb-4">
                Third-Party Disclosure
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                We do not sell, trade, or transfer your personal information to third parties except:
              </p>
              <ul className="space-y-2 text-neutral-600 ml-4">
                <li>• Trusted service providers who assist in operating our website and conducting business</li>
                <li>• Payment processors for secure transaction processing</li>
                <li>• Shipping partners for order delivery</li>
                <li>• Legal requirements or to protect our rights</li>
              </ul>
              <p className="text-neutral-600 leading-relaxed mt-4">
                All third parties are contractually obligated to keep your information confidential.
              </p>
            </Card>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200">
              <div className="text-center">
                <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
                  Questions About Privacy?
                </h2>
                <p className="text-neutral-600 mb-6">
                  Contact our privacy team for any concerns or questions
                </p>
                <div className="space-y-2 text-neutral-700">
                  <p>Email: privacy@premiumfabrics.com</p>
                  <p>Phone: +91 98765 43210</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

