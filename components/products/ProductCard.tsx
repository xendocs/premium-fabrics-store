'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatPrice } from '@/utils/format';
import { useWishlistStore } from '@/lib/store';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isWishlisted, toggle } = useWishlistStore();
  const wishlisted = isWishlisted(product.id);

  const minPrice = Math.min(...product.variants.map((v) => v.price));
  const maxPrice = Math.max(...product.variants.map((v) => v.price));
  const hasVariants = minPrice !== maxPrice;
  const mainImage = product.images[0];

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(product.id);
  };

  return (
    <Link href={`/products/${product.id}`}>
      <Card hover className="group relative overflow-hidden">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10">
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

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-soft transition-all"
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {wishlisted ? (
            <HeartSolidIcon className="h-5 w-5 text-red-500" />
          ) : (
            <HeartIcon className="h-5 w-5 text-neutral-600" />
          )}
        </button>

        {/* Image */}
        <div className="relative h-80 w-full overflow-hidden bg-neutral-100">
          {mainImage ? (
            <Image
              src={mainImage.url}
              alt={mainImage.alt || product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-neutral-400">
              No Image
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h3 className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors">
            {product.title.length > 50 ? `${product.title.slice(0, 50)}...` : product.title}
          </h3>
          <p className="text-sm text-neutral-500">{product.material}</p>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold" style={{ color: '#212533' }}>
                {hasVariants ? `${formatPrice(minPrice)} - ${formatPrice(maxPrice)}` : formatPrice(minPrice)}
              </span>
              {product.variants[0]?.compareAtPrice && (
                <span className="text-sm text-neutral-400 line-through">
                  {formatPrice(product.variants[0].compareAtPrice)}
                </span>
              )}
            </div>
            {product.availability === 'low_stock' && (
              <Badge variant="warning" size="sm">
                Low Stock
              </Badge>
            )}
            {product.availability === 'out_of_stock' && (
              <Badge variant="danger" size="sm">
                Out of Stock
              </Badge>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
};

