'use client';

import React, { useState } from 'react';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/utils/format';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const CartSummary: React.FC = () => {
  const { cart } = useCartStore();
  const [promoCode, setPromoCode] = useState('');
  const [promoError, setPromoError] = useState('');

  const handleApplyPromo = () => {
    // TODO: Validate and apply promo code
    setPromoError('Invalid promo code');
  };

  return (
    <Card className="p-6 space-y-6 sticky top-24">
      <h2 className="text-xl font-serif font-semibold">Order Summary</h2>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-neutral-600">Subtotal</span>
          <span className="font-medium">{formatPrice(cart.subtotal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-600">Estimated Shipping</span>
          <span className="font-medium">
            {cart.shipping > 0 ? formatPrice(cart.shipping) : 'Calculated at checkout'}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-600">Estimated Tax</span>
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
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Total</span>
          <span>{formatPrice(cart.total)}</span>
        </div>
      </div>

      <div className="space-y-3">
        <Input
          label="Promo Code"
          value={promoCode}
          onChange={(e) => {
            setPromoCode(e.target.value);
            setPromoError('');
          }}
          error={promoError}
          placeholder="Enter code"
        />
        <Button variant="outline" onClick={handleApplyPromo} className="w-full">
          Apply Code
        </Button>
      </div>

      <Link href="/checkout" className="block">
        <Button variant="primary" size="lg" className="w-full">
          Proceed to Checkout
        </Button>
      </Link>

      <Link href="/collections" className="block text-center text-sm text-primary-600 hover:text-primary-700 font-medium">
        Continue Shopping
      </Link>
    </Card>
  );
};

