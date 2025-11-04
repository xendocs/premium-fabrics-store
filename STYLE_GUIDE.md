# Style Guide

## Design System

### Colors

#### Primary Palette
- `primary-50` to `primary-950`: Warm earthy tones for primary actions and accents
- Primary actions: Buttons, links, badges
- Primary-600: Main brand color (#bf7b5a)

#### Secondary Palette
- `secondary-50` to `secondary-950`: Neutral grays for secondary elements
- Secondary actions, borders, backgrounds

#### Neutral Palette
- `neutral-50` to `neutral-950`: True neutrals for text and backgrounds
- Body text, cards, backgrounds

### Typography

#### Font Families
- **Serif (Headlines)**: Playfair Display
  - Used for: Page titles, section headings, hero text
  - Sizes: 2xl, 3xl, 4xl, 5xl, 6xl, 7xl
  - Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

- **Sans (Body)**: Inter
  - Used for: Body text, buttons, labels, UI elements
  - Sizes: xs, sm, base, lg, xl, 2xl
  - Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing Scale

- Base unit: 0.25rem (4px)
- Common spacings:
  - 1: 0.25rem (4px)
  - 2: 0.5rem (8px)
  - 3: 0.75rem (12px)
  - 4: 1rem (16px)
  - 6: 1.5rem (24px)
  - 8: 2rem (32px)
  - 12: 3rem (48px)
  - 16: 4rem (64px)
  - Custom: 18 (4.5rem), 88 (22rem), 128 (32rem)

### Border Radius

- `rounded-2xl`: 1rem (16px) - Standard cards, buttons, inputs
- `rounded-3xl`: 1.5rem (24px) - Large containers
- `rounded-4xl`: 2rem (32px) - Hero sections
- `rounded-full`: Circular elements (badges, avatars)

### Shadows

- `shadow-soft`: Subtle shadow for cards
- `shadow-soft-md`: Medium shadow for elevated elements
- `shadow-soft-lg`: Large shadow for modals and overlays

### Components

#### Buttons
- Primary: `bg-primary-600 text-white hover:bg-primary-700`
- Secondary: `bg-secondary-600 text-white hover:bg-secondary-700`
- Outline: `border-2 border-neutral-300 text-neutral-700`
- Ghost: `text-neutral-700 hover:bg-neutral-100`
- Sizes: sm, md, lg
- Rounded: 2xl

#### Cards
- Background: white
- Padding: p-4, p-6, or p-8
- Border radius: 2xl
- Shadow: shadow-soft
- Hover: shadow-soft-md, translate-y-1

#### Inputs
- Border: border-neutral-300
- Border radius: 2xl
- Focus: ring-2 ring-primary-500, border-primary-500
- Padding: px-4 py-2.5

#### Badges
- Rounded: full
- Padding: px-2.5 py-1 (md), px-2 py-0.5 (sm)
- Variants: default, primary, success, warning, danger

### Animations

- `fade-in`: Opacity transition
- `slide-up`: Slide from bottom with fade
- `slide-down`: Slide from top with fade
- `scale-in`: Scale from 0.95 to 1
- `shimmer`: Loading animation

### Accessibility

- Focus visible: ring-2 ring-primary-500 ring-offset-2
- Color contrast: WCAG AA compliant
- ARIA labels on interactive elements
- Keyboard navigation support
- Screen reader support

## Code Style

### Component Structure
```tsx
'use client'; // If using hooks

import React from 'react';
import { ... } from '@/components/...';

interface ComponentProps {
  // Props
}

export const Component: React.FC<ComponentProps> = ({ ... }) => {
  // Component logic
  
  return (
    // JSX
  );
};
```

### Naming Conventions
- Components: PascalCase (ProductCard.tsx)
- Files: PascalCase for components, camelCase for utilities
- CSS Classes: Use Tailwind utility classes
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE

### File Organization
```
components/
  ui/              # Primitive components
  products/        # Product-related components
  cart/            # Cart components
  checkout/        # Checkout components
  layout/          # Layout components
```

## Best Practices

1. **Responsive Design**: Mobile-first approach
2. **Performance**: Lazy load images, code splitting
3. **Accessibility**: Semantic HTML, ARIA labels
4. **SEO**: Meta tags, structured data
5. **Error Handling**: Graceful error states
6. **Loading States**: Skeleton loaders
7. **Type Safety**: TypeScript for all components

