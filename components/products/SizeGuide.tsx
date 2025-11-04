'use client';

import React from 'react';
import { Modal } from '@/components/ui/Modal';

export const SizeGuide: React.FC = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-serif font-semibold">Size Guide</h3>
      <button className="text-primary-600 hover:text-primary-700 font-medium underline">
        View Size Guide
      </button>
      <p className="text-sm text-neutral-500">
        Need help choosing the right size? Check our comprehensive size guide.
      </p>
    </div>
  );
};

