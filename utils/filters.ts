import type { Product, ProductFilters } from '@/types';

export const filterProducts = (products: Product[], filters: ProductFilters): Product[] => {
  return products.filter((product) => {
    // Price range filter
    if (filters.priceRange) {
      const minPrice = Math.min(...product.variants.map((v) => v.price));
      const maxPrice = Math.max(...product.variants.map((v) => v.price));
      if (minPrice > filters.priceRange[1] || maxPrice < filters.priceRange[0]) {
        return false;
      }
    }

    // Material filter
    if (filters.materials && filters.materials.length > 0) {
      if (!filters.materials.some((m) => product.material.toLowerCase().includes(m.toLowerCase()))) {
        return false;
      }
    }

    // Weight filter (using GSM ranges)
    if (filters.weights && filters.weights.length > 0) {
      const weightRanges: Record<string, [number, number]> = {
        light: [0, 150],
        medium: [150, 300],
        heavy: [300, Infinity],
      };
      const productWeight = product.gsm;
      const matches = filters.weights.some((weight) => {
        const [min, max] = weightRanges[weight] || [0, Infinity];
        return productWeight >= min && productWeight < max;
      });
      if (!matches) return false;
    }

    // Width filter
    if (filters.widths && filters.widths.length > 0) {
      if (!filters.widths.some((w) => Math.abs(product.width - w) < 5)) {
        return false;
      }
    }

    // Color filter
    if (filters.colors && filters.colors.length > 0) {
      const productColors = product.colorways.map((c) => c.name.toLowerCase());
      if (!filters.colors.some((color) => productColors.includes(color.toLowerCase()))) {
        return false;
      }
    }

    // Pattern filter (from tags)
    if (filters.patterns && filters.patterns.length > 0) {
      const productPatterns = product.tags.map((t) => t.toLowerCase());
      if (!filters.patterns.some((pattern) => productPatterns.includes(pattern.toLowerCase()))) {
        return false;
      }
    }

    // Availability filter
    if (filters.availability && filters.availability.length > 0) {
      const productAvailability = product.availability;
      if (!filters.availability.includes(productAvailability)) {
        return false;
      }
    }

    // Certification filter
    if (filters.certifications && filters.certifications.length > 0) {
      if (
        !product.certifications ||
        !filters.certifications.some((cert) => product.certifications?.includes(cert))
      ) {
        return false;
      }
    }

    return true;
  });
};

export const sortProducts = (
  products: Product[],
  sortBy: string
): Product[] => {
  const sorted = [...products];

  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => {
        const aPrice = Math.min(...a.variants.map((v) => v.price));
        const bPrice = Math.min(...b.variants.map((v) => v.price));
        return aPrice - bPrice;
      });

    case 'price-high':
      return sorted.sort((a, b) => {
        const aPrice = Math.max(...a.variants.map((v) => v.price));
        const bPrice = Math.max(...b.variants.map((v) => v.price));
        return bPrice - aPrice;
      });

    case 'name-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));

    case 'name-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title));

    case 'newest':
      return sorted.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });

    case 'oldest':
      return sorted.sort((a, b) => {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      });

    default:
      return sorted;
  }
};

