import type { Product, Collection } from '@/types';

export const generateProductSchema = (product: Product) => {
  const offers = product.variants.map((variant) => ({
    '@type': 'Offer',
    price: variant.price,
    priceCurrency: 'USD',
    availability: `https://schema.org/${
      variant.availability === 'in_stock'
        ? 'InStock'
        : variant.availability === 'low_stock'
        ? 'LimitedAvailability'
        : 'OutOfStock'
    }`,
    itemCondition: 'https://schema.org/NewCondition',
    sku: variant.sku,
  }));

  const aggregateRating = product.reviews
    ? {
        '@type': 'AggregateRating',
        ratingValue: product.reviews.averageRating,
        reviewCount: product.reviews.count,
      }
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: product.images.map((img) => img.url),
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.vendor,
    },
    offers: {
      '@type': 'AggregateOffer',
      offerCount: offers.length,
      lowPrice: Math.min(...product.variants.map((v) => v.price)),
      highPrice: Math.max(...product.variants.map((v) => v.price)),
      priceCurrency: 'USD',
      offers,
    },
    ...(aggregateRating && { aggregateRating }),
    ...(product.material && { material: product.material }),
    ...(product.countryOfOrigin && { countryOfOrigin: product.countryOfOrigin }),
  };
};

export const generateCollectionSchema = (collection: Collection, products: Product[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collection.title,
    description: collection.description,
    ...(collection.image && { image: collection.image }),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.title,
          url: `/products/${product.id}`,
          image: product.images[0]?.url,
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: Math.min(...product.variants.map((v) => v.price)),
            priceCurrency: 'USD',
          },
        },
      })),
    },
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

