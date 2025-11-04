'use client';

import React from 'react';
import { SimpleCheckoutForm } from '@/components/checkout/SimpleCheckoutForm';
import { CheckoutSummary } from '@/components/checkout/CheckoutSummary';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-28 lg:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-2">Checkout</h1>
          <p className="text-neutral-600">Complete your order securely</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <SimpleCheckoutForm />
          </div>
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32">
              <CheckoutSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

