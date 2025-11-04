import Fuse from 'fuse.js';
import type { Product } from '@/types';

export interface SearchResult {
  item: Product;
  score?: number;
}

export class ProductSearch {
  private fuse: Fuse<Product>;

  constructor(products: Product[]) {
    this.fuse = new Fuse(products, {
      keys: [
        { name: 'title', weight: 3 },
        { name: 'description', weight: 2 },
        { name: 'material', weight: 2 },
        { name: 'vendor', weight: 1 },
        { name: 'collection', weight: 1 },
        { name: 'tags', weight: 1 },
      ],
      threshold: 0.4,
      includeScore: true,
      minMatchCharLength: 2,
    });
  }

  search(query: string, limit: number = 20): SearchResult[] {
    if (!query || query.trim().length < 2) {
      return [];
    }

    const results = this.fuse.search(query, { limit });
    return results.map((result) => ({
      item: result.item,
      score: result.score,
    }));
  }

  autocomplete(query: string, limit: number = 5): string[] {
    const results = this.search(query, limit);
    const suggestions = new Set<string>();

    results.forEach((result) => {
      const title = result.item.title.toLowerCase();
      const queryLower = query.toLowerCase();

      // Extract matching phrases from title
      const words = title.split(' ');
      words.forEach((word, index) => {
        if (word.startsWith(queryLower)) {
          const phrase = words.slice(0, index + 1).join(' ');
          if (phrase.length > query.length) {
            suggestions.add(phrase);
          }
        }
      });

      // Also suggest collection names
      if (result.item.collection.toLowerCase().includes(queryLower)) {
        suggestions.add(result.item.collection);
      }
    });

    return Array.from(suggestions).slice(0, limit);
  }
}

