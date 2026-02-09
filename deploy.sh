#!/bin/bash

# Quick deploy script for Google Cloud Run
# Usage: ./deploy.sh [project-id]

set -e

PROJECT_ID=${1:-$(gcloud config get-value project 2>/dev/null)}

if [ -z "$PROJECT_ID" ]; then
  echo "❌ Error: No project ID provided"
  echo "Usage: ./deploy.sh [project-id]"
  echo "Or set default: gcloud config set project YOUR_PROJECT_ID"
  exit 1
fi

echo "🚀 Deploying to Google Cloud Run..."
echo "📦 Project ID: $PROJECT_ID"

# Update cloudbuild.yaml with project ID
sed -i.bak "s/\$PROJECT_ID/$PROJECT_ID/g" cloudbuild.yaml

# Submit build
gcloud builds submit --config cloudbuild.yaml

# Restore original cloudbuild.yaml
mv cloudbuild.yaml.bak cloudbuild.yaml

echo "✅ Deployment complete!"
echo "🌐 Your website should be live at:"
gcloud run services describe bootcamp-website --region us-central1 --format 'value(status.url)'
