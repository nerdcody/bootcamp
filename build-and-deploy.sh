#!/bin/bash

# Build locally and deploy to Google Cloud Run
# Usage: ./build-and-deploy.sh [project-id]

set -e

PROJECT_ID=${1:-$(gcloud config get-value project 2>/dev/null)}

if [ -z "$PROJECT_ID" ]; then
  echo "❌ Error: No project ID provided"
  echo "Usage: ./build-and-deploy.sh [project-id]"
  echo "Or set default: gcloud config set project YOUR_PROJECT_ID"
  exit 1
fi

IMAGE_NAME="gcr.io/$PROJECT_ID/bootcamp-website"
REGION="us-central1"
SERVICE_NAME="bootcamp-website"

echo "🔨 Building Docker image locally..."
docker build -t $IMAGE_NAME .

echo "📤 Pushing image to Google Container Registry..."
docker push $IMAGE_NAME

echo "🚀 Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image $IMAGE_NAME \
  --region $REGION \
  --platform managed \
  --allow-unauthenticated \
  --memory 1Gi \
  --cpu 1 \
  --min-instances 0 \
  --max-instances 10 \
  --port 8080 \
  --timeout 300 \
  --set-env-vars HOSTNAME=0.0.0.0

echo ""
echo "✅ Deployment complete!"
echo "🌐 Your website URL:"
gcloud run services describe $SERVICE_NAME --region $REGION --format 'value(status.url)'
