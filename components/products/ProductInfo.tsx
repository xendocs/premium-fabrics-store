'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProductVariants } from './ProductVariants';
import { QuantitySelector } from './QuantitySelector';
import { SocialShare } from './SocialShare';
import { useCartStore } from '@/lib/store';
import { formatPrice } from '@/utils/format';
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import type { Product, CartItem } from '@/types';
import {
  HeartIcon,
  ShareIcon,
  TruckIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useWishlistStore } from '@/lib/store';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { addItem } = useCartStore();
  const { isWishlisted, toggle } = useWishlistStore();
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [selectedUnit, setSelectedUnit] = useState<'meter' | 'yard'>('meter');
  const [selectedLength, setSelectedLength] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const wishlisted = isWishlisted(product.id);

  const selectedPrice = selectedVariant?.price || product.price;
  const compareAtPrice = selectedVariant?.compareAtPrice || product.compareAtPrice;
  const isInStock = selectedVariant?.availability === 'in_stock';
  const isLowStock = selectedVariant?.availability === 'low_stock';

  const handleAddToCart = () => {
    if (!selectedVariant || !product.variants || product.variants.length === 0) return;

    const cartItem: CartItem = {
      productId: product.id,
      variantId: selectedVariant.id,
      sku: selectedVariant.sku,
      title: product.title,
      image: selectedVariant.image?.url || product.images?.[0]?.url || '',
      price: selectedPrice,
      quantity,
      unit: selectedUnit,
      length: selectedLength,
      colorway: selectedVariant.colorway,
    };

    addItem(cartItem);
    toast.success('Added to cart successfully!');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Navigate to checkout
    window.location.href = '/checkout';
  };

  return (
    <div className="space-y-4">
      {/* Badge */}
      {product.badge && (
        <div className="mb-2">
          <Badge
            variant={
              product.badge === 'bestseller'
                ? 'success'
                : product.badge === 'new'
                ? 'primary'
                : 'success'
            }
          >
            {product.badge}
          </Badge>
        </div>
      )}

      {/* Title, Wishlist & Share */}
      <div className={`flex items-start justify-between gap-3 ${product.badge ? '' : '-mt-1'}`}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 leading-tight flex-1">
          {product.title}
        </h1>
        <div className="flex items-center gap-2 mt-2 flex-shrink-0">
          <button
            onClick={() => toggle(product.id)}
            className="p-2.5 border-2 border-neutral-300 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all"
            aria-label="Add to wishlist"
          >
            {wishlisted ? (
              <HeartSolidIcon className="h-6 w-6 text-red-500" />
            ) : (
              <HeartIcon className="h-6 w-6 text-neutral-600" />
            )}
          </button>
          <SocialShare product={product} />
        </div>
      </div>

      {/* Vendor & Collection */}
      <div className="flex items-center gap-4 text-sm text-neutral-600">
        <span>Vendor: {product.vendor}</span>
        {product.collection && (
          <>
            <span>•</span>
            <Link
              href={`/collections/${product.collection.toLowerCase()}`}
              className="hover:text-primary-600 transition-colors"
            >
              {product.collection}
            </Link>
          </>
        )}
      </div>

      {/* Price */}
      {selectedVariant && (
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold" style={{ color: '#212533' }}>
            {formatPrice(selectedPrice)}
          </span>
          {compareAtPrice && (
            <span className="text-xl text-neutral-400 line-through">
              {formatPrice(compareAtPrice)}
            </span>
          )}
        </div>
      )}

      {/* Stock Status */}
      <div className="flex items-center gap-2">
        {isInStock ? (
          <>
            <CheckCircleIcon className="h-5 w-5 text-green-500" />
            <span className="text-sm text-green-600 font-medium">In Stock</span>
          </>
        ) : isLowStock ? (
          <>
            <TruckIcon className="h-5 w-5 text-yellow-500" />
            <span className="text-sm text-yellow-600 font-medium">Low Stock</span>
          </>
        ) : (
          <>
            <CheckCircleIcon className="h-5 w-5 text-red-500" />
            <span className="text-sm text-red-600 font-medium">Out of Stock</span>
          </>
        )}
        {selectedVariant && (
          <span className="text-sm text-neutral-500">
            ({selectedVariant.stockQuantity} available)
          </span>
        )}
      </div>

      {/* Variants */}
      <ProductVariants
        product={product}
        selectedVariant={selectedVariant}
        onVariantSelect={setSelectedVariant}
        selectedUnit={selectedUnit}
        onUnitSelect={setSelectedUnit}
        selectedLength={selectedLength}
        onLengthSelect={setSelectedLength}
      />

      {/* Quantity */}
      <QuantitySelector value={quantity} onChange={setQuantity} max={selectedVariant?.stockQuantity || 10} />

      {/* Actions */}
      <div className="space-y-3 pt-3 border-t border-neutral-200">
        <Button
          className="w-full text-white hover:shadow-lg hover:scale-[1.01] transition-all duration-300 border border-white/20 font-medium text-sm py-3 px-6"
          style={{ 
            background: 'linear-gradient(to bottom, #3d4a68 0%, #2e3858 50%, #1f2740 100%)',
            boxShadow: '0 3px 10px rgba(46, 56, 88, 0.25)',
          }}
          onClick={handleAddToCart}
          disabled={!isInStock || !selectedVariant}
        >
          Add to Cart
        </Button>
        <Button
          className="w-full border-2 border-transparent hover:bg-transparent hover:border-neutral-900 hover:text-neutral-900 transition-all duration-300 font-medium text-sm py-3 px-6"
          style={{ 
            backgroundColor: '#252839',
            color: 'white',
          }}
          onClick={handleBuyNow}
          disabled={!isInStock || !selectedVariant}
        >
          Buy Now
        </Button>
      </div>

      {/* Shipping Info */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-5 sm:p-6 space-y-3 border border-primary-200">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <TruckIcon className="h-6 w-6" style={{ color: '#212533' }} />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-neutral-900 mb-1">Free Shipping on orders above ₹1,499</p>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Standard delivery in 3-5 business days across India. Track your order in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Product Description */}
      {product.description && (
        <div className="pt-6 border-t border-neutral-200">
          <h3 className="text-lg font-semibold text-neutral-900 mb-3">Product Description</h3>
          <p className="text-neutral-600 leading-relaxed">{product.description}</p>
        </div>
      )}

      {/* Product Features */}
      <div className="pt-6 border-t border-neutral-200">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Key Features</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
            <span className="text-sm text-neutral-700">Material: {product.material}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
            <span className="text-sm text-neutral-700">Width: {product.width}cm</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
            <span className="text-sm text-neutral-700">GSM: {product.gsm}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary-600"></div>
            <span className="text-sm text-neutral-700">Origin: {product.countryOfOrigin}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

