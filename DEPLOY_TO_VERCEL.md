# Deploy to Vercel

## Quick Deploy (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```
   This will open your browser to authenticate.

3. **Deploy**:
   ```bash
   vercel --prod
   ```
   Follow the prompts to link/create your project.

## Alternative: Deploy via Vercel Dashboard

1. Go to https://vercel.com
2. Click "Add New Project"
3. Import your Git repository (GitHub: Tokyonomaku/talk-flow-rebrand)
4. Vercel will auto-detect Vite and configure everything
5. Click "Deploy"

## Project Configuration

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

The app is already configured with `vercel.json` for optimal deployment.
