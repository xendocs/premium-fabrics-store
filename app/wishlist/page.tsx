'use client';

import React, { useState, useEffect } from 'react';
import { useWishlistStore, useCartStore } from '@/lib/store';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { formatPrice } from '@/utils/format';
import { toast } from 'react-hot-toast';
import type { Product, CartItem } from '@/types';
import { HeartIcon, ShoppingBagIcon, TrashIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';

export default function WishlistPage() {
  const { items: wishlistIds, remove } = useWishlistStore();
  const { addItem } = useCartStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        // Filter to only show wishlisted products
        const wishlistedProducts = data.filter((p: Product) => wishlistIds.includes(p.id));
        setProducts(wishlistedProducts);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [wishlistIds]);

  const handleRemoveFromWishlist = (productId: string) => {
    remove(productId);
    toast.success('Removed from wishlist');
    // Update products list
    setProducts(products.filter(p => p.id !== productId));
  };

  const handleAddToCart = (product: Product) => {
    if (!product.variants || product.variants.length === 0) {
      toast.error('Product not available');
      return;
    }

    const variant = product.variants[0];
    const cartItem: CartItem = {
      productId: product.id,
      variantId: variant.id,
      sku: variant.sku,
      title: product.title,
      image: product.images?.[0]?.url || '',
      price: variant.price,
      quantity: 1,
      unit: 'meter',
      length: 1,
      colorway: variant.colorway,
    };

    addItem(cartItem);
    toast.success('Added to cart!');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white pt-24 sm:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
          <div className="animate-pulse">
            <div className="h-12 bg-neutral-200 rounded-lg w-64 mb-4"></div>
            <div className="h-6 bg-neutral-200 rounded-lg w-96 mb-8"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-96 bg-neutral-200 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-24 sm:pt-28 lg:pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-20">
          <div className="text-center max-w-lg mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-neutral-100 flex items-center justify-center">
              <HeartOutlineIcon className="h-12 w-12 text-neutral-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mb-3">
              Your Wishlist is Empty
            </h1>
            <p className="text-neutral-600 mb-8 text-lg">
              Save your favorite fabrics to your wishlist and come back to them later!
            </p>
            <Link href="/collections">
              <button
                className="px-8 py-3.5 text-white rounded-xl transition-all duration-300 hover:scale-105 font-medium"
                style={{ 
                  background: 'linear-gradient(to bottom, #3d4a68 0%, #2e3858 50%, #1f2740 100%)',
                  boxShadow: '0 4px 12px rgba(46, 56, 88, 0.3)',
                }}
              >
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 sm:pt-28 lg:pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 lg:py-12">
        {/* Header */}
        <div className="mb-8 lg:mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c89116 0%, #8b6914 100%)' }}>
              <HeartIcon className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900">
              My Wishlist
            </h1>
          </div>
          <p className="text-base sm:text-lg text-neutral-600">
            {products.length} {products.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-soft-xl transition-all duration-300"
            >
              {/* Product Image */}
              <Link href={`/products/${product.id}`}>
                <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-100">
                  <Image
                    src={product.images?.[0]?.url || '/placeholder.jpg'}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>
              </Link>

              {/* Remove from Wishlist Button */}
              <button
                onClick={() => handleRemoveFromWishlist(product.id)}
                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-red-50 transition-all duration-300 z-10 group/remove"
                aria-label="Remove from wishlist"
              >
                <TrashIcon className="h-5 w-5 text-red-500 group-hover/remove:scale-110 transition-transform" />
              </button>

              {/* Product Info */}
              <div className="p-4">
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-semibold text-neutral-900 mb-1 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {product.title}
                  </h3>
                </Link>
                
                <p className="text-sm text-neutral-500 mb-3">
                  {product.material}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg font-semibold" style={{ color: '#212533' }}>
                    {formatPrice(product.variants[0]?.price || product.price)}
                  </span>
                  {product.variants[0]?.compareAtPrice && (
                    <span className="text-sm text-neutral-400 line-through">
                      {formatPrice(product.variants[0].compareAtPrice)}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full py-2.5 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] text-white"
                  style={{ 
                    background: 'linear-gradient(to bottom, #3d4a68 0%, #2e3858 50%, #1f2740 100%)',
                    boxShadow: '0 2px 8px rgba(46, 56, 88, 0.2)',
                  }}
                >
                  <ShoppingBagIcon className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <Link href="/collections">
            <button className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors font-medium">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

