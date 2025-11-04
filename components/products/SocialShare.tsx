'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ShareIcon } from '@heroicons/react/24/outline';
import type { Product } from '@/types';

interface SocialShareProps {
  product: Product;
}

export const SocialShare: React.FC<SocialShareProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out ${product.title} at Premium Fabrics`;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: shareText,
          url: shareUrl,
        });
        setIsOpen(false);
      } catch (error) {
        // User cancelled share
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    setIsOpen(false);
  };

  const shareToTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    setIsOpen(false);
  };

  const shareToPinterest = () => {
    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareText)}&media=${encodeURIComponent(product.images[0]?.url || '')}`, '_blank');
    setIsOpen(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleShare}
        className="p-2.5 border-2 border-neutral-300 rounded-xl hover:border-primary-500 hover:bg-primary-50 transition-all"
        aria-label="Share product"
      >
        <ShareIcon className="h-6 w-6 text-neutral-600" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-soft-xl border border-neutral-200 py-2 z-50">
          <button
            onClick={shareToFacebook}
            className="w-full px-4 py-2.5 text-left text-sm hover:bg-neutral-50 transition-colors flex items-center gap-3"
          >
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">f</span>
            </div>
            <span className="text-neutral-700">Facebook</span>
          </button>
          <button
            onClick={shareToTwitter}
            className="w-full px-4 py-2.5 text-left text-sm hover:bg-neutral-50 transition-colors flex items-center gap-3"
          >
            <div className="w-5 h-5 rounded bg-sky-500 flex items-center justify-center">
              <span className="text-white text-xs font-bold">𝕏</span>
            </div>
            <span className="text-neutral-700">Twitter</span>
          </button>
          <button
            onClick={shareToPinterest}
            className="w-full px-4 py-2.5 text-left text-sm hover:bg-neutral-50 transition-colors flex items-center gap-3"
          >
            <div className="w-5 h-5 rounded bg-red-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="text-neutral-700">Pinterest</span>
          </button>
          <div className="border-t border-neutral-200 my-1"></div>
          <button
            onClick={copyLink}
            className="w-full px-4 py-2.5 text-left text-sm hover:bg-neutral-50 transition-colors flex items-center gap-3"
          >
            <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span className="text-neutral-700">Copy Link</span>
          </button>
        </div>
      )}
    </div>
  );
};

