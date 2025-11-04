'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import type { Product, ProductFilters as ProductFiltersType } from '@/types';

interface ProductFiltersProps {
  filters: ProductFiltersType;
  onFiltersChange: (filters: ProductFiltersType) => void;
  products: Product[];
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFiltersChange,
  products,
}) => {
  const [priceRange, setPriceRange] = useState<[number, number]>(
    filters.priceRange || [0, 1000]
  );

  // Extract unique values for filters
  const materials = Array.from(new Set(products.map((p) => p.material)));
  const colors = Array.from(
    new Set(products.flatMap((p) => p.colorways.map((c) => c.name)))
  );
  const widths = Array.from(new Set(products.map((p) => p.width)));

  const handlePriceChange = (index: 0 | 1, value: number) => {
    const newRange: [number, number] = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
    onFiltersChange({ ...filters, priceRange: newRange });
  };

  const toggleFilter = (key: keyof ProductFiltersType, value: string) => {
    const current = filters[key] as string[] | undefined;
    const newValue = current?.includes(value)
      ? current.filter((v) => v !== value)
      : [...(current || []), value];
    onFiltersChange({ ...filters, [key]: newValue });
  };

  const clearFilters = () => {
    onFiltersChange({});
    setPriceRange([0, 1000]);
  };

  return (
    <div className="lg:sticky lg:top-24">
      <Card className="p-5 sm:p-6 border border-neutral-200 shadow-sm">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-neutral-200">
          <h2 className="text-lg font-serif font-semibold text-neutral-900">Filters</h2>
          <button
            onClick={clearFilters}
            className="text-sm font-medium transition-colors px-3 py-1.5 rounded-lg hover:bg-primary-50"
            style={{ color: '#c89116' }}
          >
            Clear All
          </button>
        </div>

        <div className="space-y-5">
          {/* Price Range */}
          <div>
            <label className="block text-sm font-semibold text-neutral-900 mb-3">
              Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
            </label>
            <div className="space-y-2.5">
              <input
                type="number"
                placeholder="Min Price"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(0, parseFloat(e.target.value) || 0)}
                min={0}
                className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900 text-sm"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(1, parseFloat(e.target.value) || 1000)}
                min={0}
                className="w-full px-3 py-2.5 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 bg-white text-neutral-900 text-sm"
              />
            </div>
          </div>

          {/* Materials */}
          {materials.length > 0 && (
            <div className="pt-4 border-t border-neutral-200">
              <label className="block text-sm font-semibold text-neutral-900 mb-3">
                Materials
              </label>
              <div className="space-y-2.5 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                {materials.map((material) => (
                  <label 
                    key={material} 
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.materials?.includes(material) || false}
                      onChange={() => toggleFilter('materials', material)}
                      className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors">
                      {material}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Colors */}
          {colors.length > 0 && (
            <div className="pt-4 border-t border-neutral-200">
              <label className="block text-sm font-semibold text-neutral-900 mb-3">
                Colors
              </label>
              <div className="space-y-2.5 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                {colors.map((color) => (
                  <label 
                    key={color} 
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.colors?.includes(color) || false}
                      onChange={() => toggleFilter('colors', color)}
                      className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors">
                      {color}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Widths */}
          {widths.length > 0 && (
            <div className="pt-4 border-t border-neutral-200">
              <label className="block text-sm font-semibold text-neutral-900 mb-3">
                Width (cm)
              </label>
              <div className="space-y-2.5 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                {widths.map((width) => (
                  <label 
                    key={width} 
                    className="flex items-center gap-2.5 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={filters.widths?.includes(width) || false}
                      onChange={() => toggleFilter('widths', width.toString())}
                      className="w-4 h-4 rounded border-neutral-300 text-primary-600 focus:ring-primary-500 focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-sm text-neutral-700 group-hover:text-neutral-900 transition-colors">
                      {width} cm
                    </span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
