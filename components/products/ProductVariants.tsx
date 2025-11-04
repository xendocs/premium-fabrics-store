'use client';

import React from 'react';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import type { Product, ProductVariant, Colorway } from '@/types';

interface ProductVariantsProps {
  product: Product;
  selectedVariant: ProductVariant;
  onVariantSelect: (variant: ProductVariant) => void;
  selectedUnit: 'meter' | 'yard';
  onUnitSelect: (unit: 'meter' | 'yard') => void;
  selectedLength: number;
  onLengthSelect: (length: number) => void;
}

export const ProductVariants: React.FC<ProductVariantsProps> = ({
  product,
  selectedVariant,
  onVariantSelect,
  selectedUnit,
  onUnitSelect,
  selectedLength,
  onLengthSelect,
}) => {
  // Color Swatches
  const colorways = product.colorways || [];
  const currentColorway = selectedVariant?.colorway;

  // Weight variants
  const weightVariants = (product.variants || []).filter((v) => v.weight);
  const uniqueWeights = Array.from(new Set(weightVariants.map((v) => v.weight)));

  // Unit length options
  const unitOption = product.unitLengthOptions?.find((opt) => opt.unit === selectedUnit);
  const minLength = unitOption?.minLength || 0.5;
  const maxLength = unitOption?.maxLength || 10;
  const increment = unitOption?.increment || 0.5;

  return (
    <div className="space-y-4">
      {/* Weight Variants */}
      {uniqueWeights.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Weight (GSM): {selectedVariant?.weight || product.gsm}
          </label>
          <div className="flex flex-wrap gap-2">
            {uniqueWeights.map((weight) => {
              const variant = (product.variants || []).find((v) => v.weight === weight);
              const isSelected = selectedVariant?.weight === weight;
              return (
                <button
                  key={weight}
                  onClick={() => variant && onVariantSelect(variant)}
                  className={`
                    px-4 py-2 rounded-xl border-2 transition-all text-sm font-medium
                    ${isSelected ? 'border-primary-600 bg-primary-50 text-primary-700' : 'border-neutral-300 hover:border-neutral-400'}
                  `}
                >
                  {weight} GSM
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Unit Selector */}
      {product.unitLengthOptions && product.unitLengthOptions.length > 0 && (
        <div>
          <label className="block text-sm font-medium text-neutral-700 mb-2">Unit</label>
          <div className="flex gap-2">
            {product.unitLengthOptions.map((option) => (
              <button
                key={option.unit}
                onClick={() => onUnitSelect(option.unit)}
                className={`
                  px-4 py-2 rounded-xl border-2 transition-all text-sm font-medium
                  ${selectedUnit === option.unit
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-neutral-300 hover:border-neutral-400'}
                `}
              >
                {option.unit === 'meter' ? 'Meters' : 'Yards'}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Length Input */}
      {unitOption && (
        <div>
          <Input
            type="number"
            label={`Length (${selectedUnit === 'meter' ? 'meters' : 'yards'})`}
            value={selectedLength}
            onChange={(e) => {
              const value = parseFloat(e.target.value);
              if (!isNaN(value) && value >= minLength && value <= maxLength) {
                onLengthSelect(value);
              }
            }}
            min={minLength}
            max={maxLength}
            step={increment}
            helperText={`Between ${minLength} and ${maxLength} ${selectedUnit === 'meter' ? 'meters' : 'yards'}`}
          />
        </div>
      )}
    </div>
  );
};

