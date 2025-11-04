# 🚀 Deploy Premium Fabrics Store to Netlify

Complete guide to deploy your beautiful fabric store to Netlify!

## 📋 Prerequisites

✅ Netlify account (free) - [Sign up here](https://app.netlify.com/signup)
✅ GitHub account (optional, but recommended)
✅ Your project ready to deploy

---

## 🎯 Method 1: Deploy via GitHub (RECOMMENDED)

### Step 1: Push Your Code to GitHub

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name: `premium-fabrics-store` (or your choice)
   - Make it Public or Private
   - Don't initialize with README (already have one)
   - Click "Create repository"

2. **Push your code** (run in terminal):
```bash
cd /Users/sunny/fabrics
git init
git add .
git commit -m "Initial commit - Premium Fabrics Store"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/premium-fabrics-store.git
git push -u origin main
```

### Step 2: Deploy to Netlify

1. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com
   - Click "Add new site" → "Import an existing project"

2. **Connect to GitHub**
   - Click "GitHub"
   - Authorize Netlify to access your repositories
   - Select `premium-fabrics-store` repository

3. **Configure Build Settings**
   ```
   Build command:    npm run build
   Publish directory: .next
   ```

4. **Click "Deploy site"**
   - Netlify will automatically detect Next.js
   - Build process starts immediately
   - Wait 2-3 minutes for deployment

5. **Your site is live!** 🎉
   - URL: `random-name-12345.netlify.app`
   - Click "Domain settings" to change site name
   - Example: `premium-fabrics.netlify.app`

---

## 🎯 Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

### Step 3: Initialize & Deploy

```bash
cd /Users/sunny/fabrics
netlify init
# Follow the prompts:
# - Create & configure a new site
# - Select your team
# - Site name: premium-fabrics (or your choice)

netlify deploy --prod
```

---

## 🎯 Method 3: Drag & Drop (Quick Test)

### Step 1: Build Your Site

```bash
cd /Users/sunny/fabrics
npm run build
```

### Step 2: Deploy via Drag & Drop

1. Go to https://app.netlify.com/drop
2. Drag and drop the `.next` folder
3. Your site goes live instantly!
4. Note: This is for testing only, use GitHub method for production

---

## ⚙️ Environment Variables (Optional)

If you need to add environment variables later:

1. Go to Netlify Dashboard
2. Select your site
3. Go to "Site settings" → "Environment variables"
4. Add variables:
   ```
   NEXT_PUBLIC_SITE_URL = https://your-site-name.netlify.app
   ```

---

## 🔧 Custom Domain Setup (Optional)

### Use Netlify Subdomain (Free)

1. Go to "Domain settings"
2. Click "Options" → "Edit site name"
3. Change to: `premium-fabrics.netlify.app`
4. Save

### Use Custom Domain

1. Buy domain from Namecheap, GoDaddy, etc.
2. Go to "Domain settings" → "Add custom domain"
3. Enter your domain: `premiumfabrics.com`
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)
6. SSL certificate auto-generated ✅

---

## 🚀 Automatic Deployments

✅ Every push to `main` branch → Automatic deploy
✅ Pull requests → Deploy previews
✅ Rollback to previous versions anytime
✅ Build logs for debugging

---

## 📱 What's Deployed

✅ Full Next.js application
✅ All pages and routes
✅ API routes
✅ Images and assets
✅ Optimized for performance
✅ SSL certificate (HTTPS)
✅ CDN distribution globally
✅ Serverless functions

---

## 🎨 Post-Deployment Checklist

✅ Test all pages work
✅ Test product pages
✅ Test collections
✅ Test cart functionality
✅ Test checkout flow
✅ Test wishlist
✅ Test on mobile devices
✅ Check page load speed
✅ Verify SEO meta tags

---

## 🐛 Troubleshooting

### Build Failed?

**Check build logs:**
- Go to "Deploys" tab
- Click failed deploy
- Read error messages
- Common issues:
  - Missing dependencies: Run `npm install`
  - Node version: Use Node 18+ (specified in netlify.toml)
  - Build errors: Fix locally first, then redeploy

### Images Not Loading?

- Check image paths are correct
- Ensure images are in `public` folder
- Use relative paths: `/images/...`

### API Routes Not Working?

- Netlify automatically handles Next.js API routes
- Check function logs in Netlify dashboard
- Verify API route code works locally

---

## 📊 Monitoring

**Netlify Analytics (Optional):**
- Go to "Analytics" tab
- See visitor stats
- Page views
- Top pages
- Traffic sources

**Free Plan Includes:**
- 100GB bandwidth/month
- 300 build minutes/month
- Automatic HTTPS
- Continuous deployment
- Instant rollbacks

---

## 🎉 Your Site is Live!

Share your beautiful fabric store:
```
https://your-site-name.netlify.app
```

**Next Steps:**
1. Share with customers
2. Add to social media
3. Set up Google Analytics
4. Configure SEO
5. Add sitemap
6. Monitor performance

---

## 💡 Tips

✅ Always test locally before deploying
✅ Use environment variables for sensitive data
✅ Enable "Branch deploys" for testing
✅ Set up deploy notifications (Slack, Email)
✅ Monitor build times
✅ Use Netlify Forms for contact page
✅ Enable deploy previews for PRs

---

## 📞 Support

**Netlify Support:**
- Docs: https://docs.netlify.com
- Community: https://answers.netlify.com
- Status: https://www.netlifystatus.com

**Your App Support:**
- Check DEPLOYMENT.md (this file)
- Review build logs
- Test locally first
- Check Next.js docs

---

## 🎊 Congratulations!

Your Premium Fabrics Store is now live on the internet! 🚀

Share it with the world! ✨
