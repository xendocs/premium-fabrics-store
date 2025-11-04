'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { CheckCircleIcon, TruckIcon, EnvelopeIcon, PrinterIcon } from '@heroicons/react/24/outline';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setOrderNumber(searchParams.get('order') || `ORD-${Date.now().toString().slice(-8)}`);
    setEmail(searchParams.get('email') || 'your.email@example.com');
  }, [searchParams]);

  useEffect(() => {
    // Clear cart after successful order (if needed)
    // This would be done via your cart store
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-24 sm:pt-28 lg:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pb-12">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircleIcon className="h-16 w-16 text-green-600" />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-3">
            Order Confirmed!
          </h1>
          <p className="text-lg text-neutral-600 mb-2">
            Thank you for your purchase
          </p>
          <p className="text-sm text-neutral-500">
            Order #{orderNumber}
          </p>
        </motion.div>

        {/* Order Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-soft-lg border border-neutral-200 p-6 sm:p-8 mb-6"
        >
          <h2 className="text-xl font-serif font-semibold text-neutral-900 mb-6">What's Next?</h2>
          
          <div className="space-y-6">
            {/* Email Confirmation */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 mb-1">Order Confirmation Email</h3>
                <p className="text-sm text-neutral-600">
                  We've sent a confirmation email to <span className="font-medium text-neutral-900">{email}</span> with your order details and receipt.
                </p>
              </div>
            </div>

            {/* Shipping Update */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TruckIcon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 mb-1">Shipping Updates</h3>
                <p className="text-sm text-neutral-600">
                  Your order will be processed within 1-2 business days. You'll receive tracking information via email once shipped.
                </p>
              </div>
            </div>

            {/* Estimated Delivery */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 mb-1">Estimated Delivery</h3>
                <p className="text-sm text-neutral-600">
                  Your fabrics should arrive within <span className="font-medium text-neutral-900">3-5 business days</span> across India.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-soft-lg border border-neutral-200 p-6 sm:p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-serif font-semibold text-neutral-900">Order Summary</h2>
            <button className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium">
              <PrinterIcon className="h-4 w-4" />
              Print Receipt
            </button>
          </div>
          
          <div className="space-y-3 text-sm border-t border-neutral-200 pt-4">
            <div className="flex justify-between">
              <span className="text-neutral-600">Order Number</span>
              <span className="font-medium text-neutral-900">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Order Date</span>
              <span className="font-medium text-neutral-900">
                {new Date().toLocaleDateString('en-IN', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">Payment Method</span>
              <span className="font-medium text-neutral-900">Credit/Debit Card</span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/collections" className="flex-1">
            <Button 
              variant="primary" 
              className="w-full font-semibold py-3"
              style={{ 
                background: 'linear-gradient(to bottom, #3d4a68 0%, #2e3858 50%, #1f2740 100%)',
                boxShadow: '0 4px 12px rgba(46, 56, 88, 0.3)',
              }}
            >
              Continue Shopping
            </Button>
          </Link>
          <Link href="/" className="flex-1">
            <Button 
              variant="outline" 
              className="w-full font-semibold py-3 border-2"
            >
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-neutral-600 mb-4">
            Need help with your order?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
              Contact Support
            </Link>
            <span className="hidden sm:block text-neutral-300">•</span>
            <Link href="/shipping" className="text-primary-600 hover:text-primary-700 font-medium">
              Track Order
            </Link>
            <span className="hidden sm:block text-neutral-300">•</span>
            <Link href="/returns" className="text-primary-600 hover:text-primary-700 font-medium">
              Return Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white pt-32 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading...</p>
        </div>
      </div>
    }>
      <OrderSuccessContent />
    </Suspense>
  );
}

