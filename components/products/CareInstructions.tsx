'use client';

import React from 'react';
import type { Product } from '@/types';

interface CareInstructionsProps {
  product: Product;
}

export const CareInstructions: React.FC<CareInstructionsProps> = ({ product }) => {
  const careSymbols: Record<string, { label: string; emoji: string }> = {
    'machine-wash': { label: 'Machine Wash', emoji: '🔄' },
    'hand-wash': { label: 'Hand Wash', emoji: '✋' },
    'dry-clean': { label: 'Dry Clean Only', emoji: '🧼' },
    'bleach': { label: 'Bleach Allowed', emoji: '🧪' },
    'no-bleach': { label: 'No Bleach', emoji: '❌' },
    'tumble-dry': { label: 'Tumble Dry', emoji: '🌀' },
    'line-dry': { label: 'Line Dry', emoji: '☀️' },
    'iron': { label: 'Iron', emoji: '🔥' },
    'no-iron': { label: 'No Iron', emoji: '🚫' },
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-serif font-semibold">Care Instructions</h3>
      {product.care && product.care.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {product.care.map((care) => {
            const symbol = careSymbols[care.toLowerCase()] || { label: care, emoji: '📋' };
            return (
              <div
                key={care}
                className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-xl text-sm"
              >
                <span>{symbol.emoji}</span>
                <span>{symbol.label}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-neutral-500">Care instructions not available.</p>
      )}
    </div>
  );
};

