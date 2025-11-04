'use client';

import React, { useState, useEffect } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Input } from '@/components/ui/Input';
import { useDebounce } from '@/hooks/useDebounce';
import { ProductSearch } from '@/utils/search';
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/utils/format';
import type { Product } from '@/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const debouncedQuery = useDebounce(query, 300);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch products on mount
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!debouncedQuery || debouncedQuery.length < 2) {
      setSearchResults([]);
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    const search = new ProductSearch(products);
    const results = search.search(debouncedQuery, 8);
    const autocompleteResults = search.autocomplete(debouncedQuery, 5);

    setSearchResults(results.map((r) => r.item));
    setSuggestions(autocompleteResults);
    setIsLoading(false);
  }, [debouncedQuery, products]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSearchResults([]);
      setSuggestions([]);
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      showCloseButton={true}
    >
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="Search for fabrics, materials, colors..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
          className="text-lg"
        />

        {isLoading && (
          <div className="text-center py-8 text-neutral-500">Searching...</div>
        )}

        {!isLoading && debouncedQuery && searchResults.length === 0 && (
          <div className="text-center py-8 text-neutral-500">
            No products found for "{debouncedQuery}"
          </div>
        )}

        {!isLoading && searchResults.length > 0 && (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {searchResults.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                onClick={onClose}
                className="flex items-center space-x-4 p-3 hover:bg-neutral-50 rounded-xl transition-colors"
              >
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={product.images[0]?.url || '/placeholder.jpg'}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="64px"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="font-medium text-neutral-900 truncate">{product.title}</h4>
                  <p className="text-sm text-neutral-500">{product.material}</p>
                  <p className="text-sm font-semibold text-primary-600">
                    {formatPrice(Math.min(...product.variants.map((v) => v.price)))}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!isLoading && suggestions.length > 0 && (
          <div className="border-t pt-4">
            <h5 className="text-sm font-medium text-neutral-700 mb-2">Suggestions</h5>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setQuery(suggestion)}
                  className="px-3 py-1.5 text-sm bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

