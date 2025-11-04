'use client';

import React, { useEffect } from 'react';
import { useCartStore } from '@/lib/store';
import { CartItems } from '@/components/cart/CartItems';
import { CartSummary } from '@/components/cart/CartSummary';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function CartPage() {
  const { cart, syncWithServer } = useCartStore();

  useEffect(() => {
    syncWithServer();
  }, [syncWithServer]);

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-24 sm:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center py-20 space-y-6">
            <div className="w-24 h-24 mx-auto bg-neutral-100 rounded-full flex items-center justify-center mb-6">
              <ShoppingBagIcon className="h-12 w-12 text-neutral-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900">Your Cart is Empty</h1>
            <p className="text-neutral-600 max-w-md mx-auto text-lg">
              Looks like you haven't added anything to your cart yet. Start shopping to fill it up!
            </p>
            <div className="pt-4">
              <Link href="/collections">
                <Button variant="primary" size="lg" className="px-8 py-4">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-28 lg:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pb-12">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-2">Shopping Cart</h1>
          <p className="text-neutral-600">Review your items and proceed to checkout</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <CartItems />
          </div>
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32">
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

