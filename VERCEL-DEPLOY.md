# Deploy to Vercel (Free Tier)

Vercel is the easiest way to deploy Next.js applications. It's free and optimized for Next.js.

## Quick Deploy

### Option 1: Using Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy**:

   ```bash
   vercel
   ```

   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Choose your account
   - Link to existing project? **No**
   - Project name? `bootcamp-website` (or your preferred name)
   - Directory? `./` (current directory)
   - Override settings? **No**

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

### Option 2: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click **"Add New Project"**
3. Import your Git repository (GitHub/GitLab/Bitbucket)
   - Or drag and drop your project folder
4. Vercel will auto-detect Next.js
5. Click **"Deploy"**

### Option 3: One-Click Deploy

If your code is on GitHub:

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **"Deploy"**

## Environment Variables

If you need to set environment variables (like API keys):

1. Go to your project settings in Vercel dashboard
2. Navigate to **Settings → Environment Variables**
3. Add your variables:
   - `HOSTNAME=0.0.0.0` (usually not needed on Vercel)
   - Any other env vars you need

## Your Website URL

After deployment, Vercel will give you:

- **Preview URL**: `https://bootcamp-website-xxxxx.vercel.app`
- **Production URL**: `https://bootcamp-website.vercel.app` (or your custom domain)

## Free Tier Includes

- **Unlimited deployments**
- **100GB bandwidth per month**
- **Automatic HTTPS**
- **Global CDN**
- **Automatic deployments** from Git
- **Preview deployments** for every push

## Updating Your Website

After making changes:

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

Or just push to your Git repository - Vercel will auto-deploy!

## Troubleshooting

### Build fails

- Check that `next.config.ts` has `output: "standalone"` (we can remove this for Vercel)
- Ensure all dependencies are in `package.json`

### API routes not working

- Vercel automatically handles Next.js API routes
- Make sure your API routes are in `src/app/api/` directory

### Environment variables

- Set them in Vercel dashboard under Settings → Environment Variables
- Redeploy after adding new variables
