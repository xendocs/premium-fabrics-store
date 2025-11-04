'use client';

import React from 'react';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/utils/format';
import Image from 'next/image';
import { TrashIcon } from '@heroicons/react/24/outline';
import { QuantitySelector } from '@/components/products/QuantitySelector';
import Link from 'next/link';

export const CartItems: React.FC = () => {
  const { cart, updateQuantity, removeItem } = useCartStore();

  return (
    <div className="space-y-4">
      {cart.items.map((item) => (
        <div
          key={`${item.variantId}-${item.unit}`}
          className="bg-white rounded-2xl shadow-soft p-6 flex gap-6"
        >
          <Link href={`/products/${item.productId}`} className="flex-shrink-0">
            <div className="relative w-24 h-24 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
          </Link>
          <div className="flex-grow min-w-0 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-grow min-w-0">
                <Link href={`/products/${item.productId}`}>
                  <h3 className="font-medium text-neutral-900 hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-sm text-neutral-500 mt-1">
                  {item.colorway?.name && `${item.colorway.name} • `}
                  {item.length && `${item.length} ${item.unit}`}
                  {item.length && ` • SKU: ${item.sku}`}
                </p>
              </div>
              <button
                onClick={() => removeItem(item.variantId)}
                className="p-2 text-neutral-400 hover:text-red-600 transition-colors flex-shrink-0"
                aria-label="Remove item"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <QuantitySelector
                value={item.quantity}
                onChange={(qty) => updateQuantity(item.variantId, qty)}
                max={10}
              />
              <div className="text-right">
                <p className="text-lg font-semibold text-primary-600">
                  {formatPrice(item.price * item.quantity)}
                </p>
                {item.quantity > 1 && (
                  <p className="text-sm text-neutral-500">
                    {formatPrice(item.price)} each
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

