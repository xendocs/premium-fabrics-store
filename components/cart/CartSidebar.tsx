'use client';

import React from 'react';
import { useCartStore, useUIStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { formatPrice } from '@/utils/format';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const CartSidebar: React.FC = () => {
  const { cart, removeItem, updateQuantity } = useCartStore();
  const { isCartOpen, closeCart } = useUIStore();

  const handleQuantityChange = (variantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(variantId);
    } else {
      updateQuantity(variantId, quantity);
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-soft-lg z-50 flex flex-col"
          >
            <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
              <h2 className="text-xl font-serif font-semibold">Shopping Cart</h2>
              <button
                onClick={closeCart}
                className="p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
                aria-label="Close cart"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-6">
              {cart.items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-neutral-500 mb-4">Your cart is empty</p>
                  <Button onClick={closeCart} variant="primary">
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.items.map((item) => (
                    <div key={`${item.variantId}-${item.unit}`} className="flex space-x-4">
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover rounded-xl"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-medium text-sm text-neutral-900 truncate">
                          {item.title}
                        </h4>
                        <p className="text-xs text-neutral-500">
                          {item.colorway?.name || ''} {item.length && `• ${item.length} ${item.unit}`}
                        </p>
                        <p className="text-sm font-semibold text-primary-600 mt-1">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item.variantId)}
                          className="p-1 text-neutral-400 hover:text-red-600 transition-colors"
                          aria-label="Remove item"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.variantId, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.variantId, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.items.length > 0 && (
              <div className="p-6 border-t border-neutral-200 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-600">Subtotal</span>
                  <span className="font-semibold">{formatPrice(cart.subtotal)}</span>
                </div>
                {cart.shipping > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Shipping</span>
                    <span className="font-semibold">{formatPrice(cart.shipping)}</span>
                  </div>
                )}
                {cart.tax > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-600">Tax</span>
                    <span className="font-semibold">{formatPrice(cart.tax)}</span>
                  </div>
                )}
                {cart.discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount</span>
                    <span className="font-semibold">-{formatPrice(cart.discount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-semibold pt-2 border-t border-neutral-200">
                  <span>Total</span>
                  <span>{formatPrice(cart.total)}</span>
                </div>
                <div className="pt-4">
                  <Link href="/cart" onClick={closeCart} className="block mb-3">
                    <Button variant="primary" className="w-full">
                      View Cart
                    </Button>
                  </Link>
                  <Link href="/checkout" onClick={closeCart} className="block">
                    <Button variant="outline" className="w-full">
                      Checkout
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

