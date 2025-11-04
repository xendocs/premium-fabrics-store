# Background Images

## Full-Screen Background Image Setup

### Image Specifications

**Recommended Image Properties:**
- **Format**: JPG (for photos), WebP (for better compression)
- **Dimensions**: 3840×2160px (4K) or 1920×1080px (Full HD)
- **Aspect Ratio**: 16:9
- **File Size**: Under 2MB for optimal loading
- **Naming**: `hero-bg.jpg` or `hero-bg.webp`

### Supported Formats
- `.jpg` / `.jpeg` - Best for photographs
- `.webp` - Best compression, smaller file size
- `.png` - Use only if transparency needed

### Current Setup

The background image is automatically applied to the entire site via:
1. **CSS Background** (`styles/globals.css`) - Fallback
2. **React Component** (`components/layout/BackgroundImage.tsx`) - Primary with Next.js Image optimization

### How to Add Your Image

1. Place your background image in this folder
2. Name it: `hero-bg.jpg` (or `hero-bg.webp`)
3. The system will automatically:
   - Apply it as a full-screen background
   - Add a subtle overlay for text readability
   - Optimize loading with Next.js Image component
   - Provide a fallback gradient if image fails to load

### Customization

To customize the background in `app/layout.tsx`:

```tsx
<BackgroundImage
  src="/images/backgrounds/your-image.jpg"
  overlay={true}
  overlayOpacity={0.15}  // 0-1, lower = more transparent
  overlayColor="rgba(250, 245, 240, 0.85)"  // Adjust color
/>
```

### Image Ideas

Perfect background images for a premium fabrics store:
- **Textured fabric close-up** - Silk, linen, or cotton texture
- **Rolling fabric bolts** - Elegant arrangement of fabric rolls
- **Luxury textiles** - High-end materials arranged artistically
- **Abstract fabric patterns** - Subtle, elegant patterns
- **Natural fibers** - Soft, organic textures

### Tips

- Keep images subtle so text remains readable
- Use warm, elegant color tones matching your brand
- Ensure images are high-quality but optimized
- Test on different screen sizes
- Consider dark mode variations if needed

### Performance

- Images are lazy-loaded and optimized automatically
- Next.js Image component provides automatic WebP conversion
- Background attachment is fixed for parallax-like effect
- Fallback ensures site still looks good if image fails

