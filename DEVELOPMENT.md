# Development Guide

## Quick Start Commands

### For Development (Instant Hot Reload) ✅ RECOMMENDED
```bash
npm run dev
```
- ✅ **Instant hot reload** - Changes appear immediately
- ✅ **Fast refresh** - Updates without full page reload
- ✅ **Better error messages**
- ✅ **Source maps** for easier debugging
- 🌐 Opens at: http://localhost:3000

**Use this when:**
- Developing and testing changes
- Adding new features
- Updating images, CSS, or components
- You want to see changes instantly

---

### For Production Testing
```bash
# Step 1: Build the production version
npm run build

# Step 2: Start the production server
npm start
```
- ⚠️ **No hot reload** - Must rebuild to see changes
- ✅ Optimized and minified
- ✅ Better performance
- 🌐 Opens at: http://localhost:3000

**Use this when:**
- Testing the production build before deployment
- Checking final performance
- Validating the build works correctly

---

## Image Changes Not Showing?

If you change images and they don't update:

### Option 1: Hard Refresh Browser
- **Mac:** `Cmd + Shift + R`
- **Windows/Linux:** `Ctrl + Shift + R`

### Option 2: Clear Next.js Cache
```bash
rm -rf .next
npm run dev
```

### Option 3: Clear Browser Cache
1. Open DevTools (F12)
2. Right-click refresh button
3. Select "Empty Cache and Hard Reload"

---

## Current Setup ✅

Your images are located at:
```
/Users/sunny/fabrics/public/images/collections/
├── silk-luxe.jpg
├── organic-cotton.jpg
├── velvet-elegance.jpg
└── festive-weaves.jpg
```

When you replace any image:
1. Make sure you're using `npm run dev` (not `npm start`)
2. Save the new image with the exact same filename
3. Hard refresh your browser (Cmd+Shift+R)
4. Changes should appear instantly!

---

## Troubleshooting

### Images not updating in development mode?
```bash
# Stop the server (Ctrl+C in terminal)
rm -rf .next
npm run dev
```

### Port already in use?
```bash
# Kill any running Next.js servers
pkill -f "next dev"
pkill -f "next start"

# Start fresh
npm run dev
```

