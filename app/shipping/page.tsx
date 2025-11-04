'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { TruckIcon, ClockIcon, MapPinIcon, CurrencyRupeeIcon } from '@heroicons/react/24/outline';

export default function ShippingPage() {
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
            Shipping Policy
          </motion.h1>
          <p className="text-xl text-neutral-600">
            Fast, reliable delivery across India
          </p>
        </div>
      </section>

      <div className="container-custom py-16">
        {/* Shipping Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <TruckIcon className="h-6 w-6" />,
              title: 'Free Shipping',
              description: 'On orders above ₹1,499',
            },
            {
              icon: <ClockIcon className="h-6 w-6" />,
              title: '3-5 Days',
              description: 'Delivery across India',
            },
            {
              icon: <MapPinIcon className="h-6 w-6" />,
              title: 'Pan-India',
              description: 'We deliver everywhere',
            },
            {
              icon: <CurrencyRupeeIcon className="h-6 w-6" />,
              title: 'Bulk Orders',
              description: 'Special rates available',
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full hover:shadow-soft-lg transition-all">
                <div 
                  className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: '#252839' }}
                >
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-neutral-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Detailed Information */}
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
              Shipping Charges
            </h2>
            <Card className="p-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                  <span className="font-medium text-neutral-900">Order Value</span>
                  <span className="font-medium text-neutral-900">Shipping Charge</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">Below ₹500</span>
                  <span className="font-semibold" style={{ color: '#212533' }}>₹99</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">₹500 - ₹999</span>
                  <span className="font-semibold" style={{ color: '#212533' }}>₹79</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">₹1,000 - ₹1,499</span>
                  <span className="font-semibold" style={{ color: '#212533' }}>₹49</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-600">₹1,500 and above</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
              Delivery Timeline
            </h2>
            <Card className="p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">Metro Cities</h3>
                  <p className="text-neutral-600">Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad</p>
                  <p className="font-semibold" style={{ color: '#212533' }}>3-4 Business Days</p>
                </div>
                <div className="border-t border-neutral-200 pt-4">
                  <h3 className="font-semibold text-neutral-900 mb-2">Other Cities</h3>
                  <p className="text-neutral-600">All other locations across India</p>
                  <p className="font-semibold" style={{ color: '#212533' }}>4-6 Business Days</p>
                </div>
                <div className="border-t border-neutral-200 pt-4">
                  <h3 className="font-semibold text-neutral-900 mb-2">Remote Areas</h3>
                  <p className="text-neutral-600">Hill stations and remote locations</p>
                  <p className="font-semibold" style={{ color: '#212533' }}>6-8 Business Days</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-light text-neutral-900 mb-6">
              Important Information
            </h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">Order Processing</h3>
                <p className="text-neutral-600">
                  Orders placed before 3:00 PM IST are processed the same day. Orders placed after 
                  3:00 PM will be processed the next business day.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">Tracking Your Order</h3>
                <p className="text-neutral-600">
                  Once your order is shipped, you'll receive a tracking number via email and SMS. 
                  You can track your shipment in real-time on our website or the courier's portal.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">Packaging</h3>
                <p className="text-neutral-600">
                  All fabrics are carefully rolled and packaged in protective covering to ensure 
                  they reach you in perfect condition. We use eco-friendly packaging materials.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">Bulk Orders</h3>
                <p className="text-neutral-600">
                  For bulk orders (10+ meters or 5+ products), please contact our customer service 
                  team for special shipping rates and faster delivery options.
                </p>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

