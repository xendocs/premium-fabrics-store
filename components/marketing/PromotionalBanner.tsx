'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';

export const PromotionalBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary-600 text-white py-3 relative">
      <div className="container-custom flex items-center justify-center gap-4">
        <p className="text-sm font-medium text-center">
          🎉 Limited Time: Get 15% off your first order! Use code{' '}
          <span className="font-bold">FIRST15</span>
        </p>
        <Link
          href="/collections"
          className="text-sm underline hover:no-underline font-medium"
        >
          Shop Now
        </Link>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Close banner"
        >
          <XMarkIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

