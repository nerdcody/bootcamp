# Build Locally and Deploy to Google Cloud Run

This guide shows you how to build your Docker image locally and push it to Google Cloud.

## Prerequisites

1. **Docker** installed and running
   - Check: `docker --version`
   - Install: https://docs.docker.com/get-docker/

2. **Google Cloud SDK** installed
   - Check: `gcloud --version`
   - Install: https://cloud.google.com/sdk/docs/install

## Step 1: Set Up Google Cloud Project

```bash
# Login to Google Cloud
gcloud auth login

# Create or select a project
gcloud projects create bootcamp-website --name="Bootcamp Website"
gcloud config set project bootcamp-website

# Enable required APIs
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com

# Configure Docker to use gcloud as a credential helper
gcloud auth configure-docker
```

## Step 2: Build and Deploy

### Option A: Using the script (easiest)

```bash
./build-and-deploy.sh bootcamp-website
```

### Option B: Manual steps

```bash
# Set your project ID
export PROJECT_ID="bootcamp-website"
export IMAGE_NAME="gcr.io/$PROJECT_ID/bootcamp-website"

# Build the Docker image locally
docker build -t $IMAGE_NAME .

# Push to Google Container Registry
docker push $IMAGE_NAME

# Deploy to Cloud Run
gcloud run deploy bootcamp-website \
  --image $IMAGE_NAME \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --memory 512Mi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --port 8080
```

## Step 3: Get Your Website URL

After deployment, you'll see the URL in the output, or run:

```bash
gcloud run services describe bootcamp-website --region us-central1 --format 'value(status.url)'
```

## Testing Locally First (Optional)

Before pushing, you can test the Docker image locally:

```bash
# Build locally
docker build -t bootcamp-website .

# Run locally
docker run -p 8080:8080 bootcamp-website

# Visit http://localhost:8080
```

## Updating Your Website

After making changes, rebuild and redeploy:

```bash
./build-and-deploy.sh bootcamp-website
```

Or manually:

```bash
docker build -t gcr.io/bootcamp-website/bootcamp-website .
docker push gcr.io/bootcamp-website/bootcamp-website
gcloud run deploy bootcamp-website --image gcr.io/bootcamp-website/bootcamp-website --region us-central1
```

## Troubleshooting

### Docker build fails

- Make sure Docker is running: `docker ps`
- Check you're in the project root directory
- Verify `next.config.ts` has `output: "standalone"`

### Push fails with authentication error

```bash
gcloud auth configure-docker
gcloud auth login
```

### Deployment fails

- Check APIs are enabled: `gcloud services list --enabled`
- Verify billing is set up (required even for free tier)

### Image not found

- Make sure you've pushed the image: `docker push gcr.io/PROJECT_ID/bootcamp-website`
- Check the image exists: `gcloud container images list`
