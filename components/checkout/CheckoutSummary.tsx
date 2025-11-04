'use client';

import React from 'react';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/utils/format';
import { Card } from '@/components/ui/Card';
import Image from 'next/image';

export const CheckoutSummary: React.FC = () => {
  const { cart } = useCartStore();

  return (
    <Card className="p-6 border border-neutral-200 shadow-sm">
      <h2 className="text-xl font-serif font-semibold mb-6 text-neutral-900">Order Summary</h2>

      {/* Cart Items */}
      <div className="space-y-4 max-h-80 overflow-y-auto mb-6 pr-2">
        {cart.items.map((item) => (
          <div key={`${item.variantId}-${item.unit}`} className="flex gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="flex-grow min-w-0">
              <h4 className="font-medium text-sm text-neutral-900 truncate">{item.title}</h4>
              <p className="text-xs text-neutral-500">
                {item.colorway?.name && `${item.colorway.name} • `}
                {item.length && `${item.length} ${item.unit}`}
              </p>
              <p className="text-sm font-medium mt-1" style={{ color: '#212533' }}>
                {formatPrice(item.price)} × {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="space-y-3 text-sm border-t border-neutral-200 pt-4">
        <div className="flex justify-between">
          <span className="text-neutral-600">Subtotal</span>
          <span className="font-medium">{formatPrice(cart.subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-600">Shipping</span>
          <span className="font-medium">
            {cart.shipping > 0 ? formatPrice(cart.shipping) : 'Calculated at checkout'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-600">Tax</span>
          <span className="font-medium">
            {cart.tax > 0 ? formatPrice(cart.tax) : 'Calculated at checkout'}
          </span>
        </div>
        {cart.discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span className="font-medium">-{formatPrice(cart.discount)}</span>
          </div>
        )}
      </div>

      <div className="border-t border-neutral-200 pt-4">
        <div className="flex justify-between text-xl font-bold" style={{ color: '#212533' }}>
          <span>Total</span>
          <span>{formatPrice(cart.total)}</span>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="mt-6 pt-6 border-t border-neutral-200">
        <div className="flex items-center justify-center gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Secure</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Verified</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Encrypted</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

