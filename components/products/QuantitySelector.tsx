'use client';

import React from 'react';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
  min = 1,
  max = 10,
}) => {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-2">Quantity</label>
      <div className="flex items-center gap-3">
        <button
          onClick={handleDecrease}
          disabled={value <= min}
          className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded-xl hover:bg-neutral-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const newValue = parseInt(e.target.value);
            if (!isNaN(newValue) && newValue >= min && newValue <= max) {
              onChange(newValue);
            }
          }}
          min={min}
          max={max}
          className="w-20 text-center border border-neutral-300 rounded-xl py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
        <button
          onClick={handleIncrease}
          disabled={value >= max}
          className="w-10 h-10 flex items-center justify-center border border-neutral-300 rounded-xl hover:bg-neutral-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
};

