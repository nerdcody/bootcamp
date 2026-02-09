# Deploy to Google Cloud Run (Free Tier)

This guide will help you deploy your Next.js bootcamp website to Google Cloud Run for free.

## Prerequisites

1. **Google Cloud Account** - Sign up at [cloud.google.com](https://cloud.google.com)
2. **Google Cloud SDK (gcloud)** - Install from [cloud.google.com/sdk](https://cloud.google.com/sdk/docs/install)

## Step 1: Install Google Cloud SDK

### macOS

```bash
brew install google-cloud-sdk
```

### Linux/Windows

Download from: https://cloud.google.com/sdk/docs/install

## Step 2: Authenticate and Set Up Project

```bash
# Login to Google Cloud
gcloud auth login

# Create a new project (or use existing)
gcloud projects create bootcamp-website --name="Bootcamp Website"

# Set the project as active
gcloud config set project bootcamp-website

# Enable required APIs
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

## Step 3: Deploy Using Cloud Build (Recommended)

```bash
# Submit build to Cloud Build
gcloud builds submit --config cloudbuild.yaml
```

This will:

- Build your Docker image
- Push it to Container Registry
- Deploy to Cloud Run
- Give you a public URL

## Step 4: Manual Deployment (Alternative)

If you prefer manual steps:

```bash
# Build the Docker image
docker build -t gcr.io/bootcamp-website/bootcamp-website .

# Push to Container Registry
docker push gcr.io/bootcamp-website/bootcamp-website

# Deploy to Cloud Run
gcloud run deploy bootcamp-website \
  --image gcr.io/bootcamp-website/bootcamp-website \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10
```

## Step 5: Get Your Website URL

After deployment, you'll get a URL like:

```
https://bootcamp-website-xxxxx-uc.a.run.app
```

## Free Tier Limits

Google Cloud Run Free Tier includes:

- **2 million requests per month** (free)
- **360,000 GB-seconds of memory** (free)
- **180,000 vCPU-seconds** (free)
- **1 GB egress per day** (free)

Your website will scale to zero when not in use, so you only pay for what you use beyond the free tier.

## Updating Your Website

To update your website after making changes:

```bash
# Rebuild and redeploy
gcloud builds submit --config cloudbuild.yaml
```

Or manually:

```bash
docker build -t gcr.io/bootcamp-website/bootcamp-website .
docker push gcr.io/bootcamp-website/bootcamp-website
gcloud run deploy bootcamp-website --image gcr.io/bootcamp-website/bootcamp-website --region us-central1
```

## Troubleshooting

### Build fails

- Make sure all dependencies are in `package.json`
- Check that `next.config.ts` has `output: "standalone"`

### Deployment fails

- Ensure APIs are enabled: `gcloud services enable cloudbuild.googleapis.com run.googleapis.com`
- Check your billing account is set up (free tier still requires billing account)

### Website not loading

- Check Cloud Run logs: `gcloud run services logs read bootcamp-website --region us-central1`
- Verify the service is running: `gcloud run services list`

## Cost Optimization

- Set `--min-instances 0` to scale to zero (already in cloudbuild.yaml)
- Use `--memory 512Mi` (minimum for Next.js)
- Use `--cpu 1` (minimum)
- Monitor usage in Google Cloud Console
