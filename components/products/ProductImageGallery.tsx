'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useImageZoom } from '@/hooks/useImageZoom';
import { getImageUrl, getImageSrcSet } from '@/utils/images';
import { motion, AnimatePresence } from 'framer-motion';
import type { Product } from '@/types';

interface ProductImageGalleryProps {
  product: Product;
}

export const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ product }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { zoom, position, imgRef, handleMouseMove, handleMouseEnter, handleMouseLeave } =
    useImageZoom();

  const images = product.images || [];
  const selectedImage = images[selectedIndex] || images[0];

  if (!selectedImage) {
    return <div className="h-[600px] w-full bg-neutral-100 rounded-2xl" />;
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div
        className="relative h-[600px] w-full rounded-2xl overflow-hidden bg-neutral-100 cursor-zoom-in"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {zoom ? (
          <div
            className="absolute inset-0 bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${getImageUrl(selectedImage.url, 2000)})`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              transform: 'scale(2)',
            }}
          />
        ) : (
          <Image
            ref={imgRef}
            src={getImageUrl(selectedImage.url, 1200)}
            alt={selectedImage.alt || product.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        )}
        {zoom && (
          <div
            className="absolute w-32 h-32 border-2 border-white rounded-full pointer-events-none"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all ${
                index === selectedIndex
                  ? 'border-primary-600 ring-2 ring-primary-200'
                  : 'border-transparent hover:border-neutral-300'
              }`}
            >
              <Image
                src={getImageUrl(image.url, 200)}
                alt={image.alt || `${product.title} - ${index + 1}`}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      )}

      {/* 360° View Button */}
      {product.images.length > 5 && (
        <button className="w-full px-4 py-3 bg-neutral-100 hover:bg-neutral-200 rounded-2xl transition-colors text-sm font-medium">
          View 360° Rotation
        </button>
      )}
    </div>
  );
};

