# Premium Fabrics Store

A complete, production-ready, responsive online store for premium fabrics with an elegant, minimalist aesthetic and flawless UX.

## Tech Stack

- **Frontend**: Next.js 14 (React), TypeScript, Tailwind CSS
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Payments**: Stripe, Razorpay, PayPal
- **Image Optimization**: Next.js Image, Sharp

## Features

### Customer Features
- ✅ Responsive single-page application
- ✅ Home page with hero slider and animated microcopy
- ✅ Collections and category pages with filters
- ✅ Product listing grid with sorting and search
- ✅ Product detail page with:
  - Image gallery with zoom on hover
  - 360° view support
  - Color/fabric swatches
  - Variant selection (color, weight, length)
  - Quantity selector
  - Size/measurement guide
  - Care instructions
  - Certifications
  - Reviews and Q&A
  - Related products
  - Social sharing
- ✅ Persistent cart (localStorage + server sync)
- ✅ Slide-out mini-cart
- ✅ Full cart page with promo codes
- ✅ Checkout with multiple payment options
- ✅ Wishlist functionality
- ✅ Search with autocomplete

### Admin Features
- Product import/export (CSV)
- Inventory management
- Variant SKU mapping
- Bulk price/discount tools
- Order management
- Shipping rules configuration
- Returns/exchanges workflow
- Customer profiles with order history

### Design System
- Primary/Secondary/Neutral color palette
- Serif headline font (Playfair Display) + sans-serif body (Inter)
- Consistent spacing scale
- 2xl rounded corners
- Soft shadows
- Accessible color contrast
- Microinteractions (hover, focus, animations)

### UX Optimizations
- Fast first meaningful paint
- Lazy-loaded images
- Responsive image srcset
- WebP fallback support
- 2000-3000px master images
- 1200px product images
- Auto-generated alt text
- Optimized CDN delivery

### SEO & Accessibility
- Semantic HTML
- ARIA roles
- Keyboard navigation
- WCAG AA compliance
- Structured JSON-LD schema markup
- sitemap.xml
- robots.txt
- Meta tags per page
- Canonical links
- SSR for crawlability

### Internationalization
- Multi-currency support
- Currency switcher
- Regional shipping presets
- GST handling (India)
- VAT settings
- Tax automation hooks
- GDPR/CCPA cookie consent

### Marketing Features
- Product badges (bestseller, new, eco)
- Promotional banners
- Limited time offers countdown
- Exit intent popup (first-time discount)
- Email capture & automated flows
- Google Analytics + GA4
- Facebook/Meta pixel
- Customer review system

## Getting Started

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
DATABASE_URL=your_database_url
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app router pages
│   ├── api/               # API routes
│   ├── cart/              # Cart page
│   ├── checkout/          # Checkout page
│   ├── collections/       # Collections page
│   ├── products/          # Product pages
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── cart/             # Cart components
│   ├── checkout/        # Checkout components
│   ├── filters/         # Filter components
│   ├── home/            # Home page components
│   ├── layout/          # Layout components
│   ├── marketing/       # Marketing components
│   ├── products/        # Product components
│   ├── search/          # Search components
│   └── ui/              # UI primitives
├── lib/                  # Utilities and stores
├── hooks/                # Custom React hooks
├── types/                # TypeScript types
├── utils/                # Utility functions
└── styles/               # Global styles
```

## API Documentation

### Products

- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get product by ID
- `POST /api/products` - Create product (admin)
- `PUT /api/products/[id]` - Update product (admin)
- `DELETE /api/products/[id]` - Delete product (admin)

### Cart

- `POST /api/cart/sync` - Sync cart with server

### Checkout

- `POST /api/checkout` - Process checkout

## Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Accessibility tests
npm run test:accessibility
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- AWS Amplify
- Netlify
- Railway
- Render

## Future Features

- Wholesale portal with B2B pricing
- Loyalty program
- Advanced analytics dashboard
- Multi-vendor support
- Advanced search with AI recommendations
- Augmented reality fabric visualization

## License

MIT

## Support

For support, email info@premiumfabrics.com

