export const getImageUrl = (
  url: string,
  width?: number,
  format: 'webp' | 'avif' | 'jpg' = 'webp'
): string => {
  if (!url) return '/placeholder.jpg';
  
  // If using a CDN with image transformation
  if (url.includes('cdn') || url.includes('cloudinary') || url.includes('imgix')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}w=${width || 1200}&fm=${format}&q=85`;
  }
  
  return url;
};

export const getImageSrcSet = (url: string, widths: number[] = [640, 750, 828, 1080, 1200]): string => {
  return widths
    .map((width) => `${getImageUrl(url, width)} ${width}w`)
    .join(', ');
};

export const generateAltText = (productTitle: string, attributes?: {
  material?: string;
  color?: string;
  pattern?: string;
}): string => {
  const parts = [productTitle];
  if (attributes?.material) parts.push(attributes.material);
  if (attributes?.color) parts.push(attributes.color);
  if (attributes?.pattern) parts.push(attributes.pattern);
  return parts.join(' - ');
};

export const getProductImageFilename = (
  productTitle: string,
  variant?: string,
  index?: number
): string => {
  const base = productTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const variantPart = variant ? `-${variant.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : '';
  const indexPart = index !== undefined ? `-${index + 1}` : '';
  return `${base}${variantPart}${indexPart}.jpg`;
};

