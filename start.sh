#!/bin/sh
set -e

# Cloud Run sets PORT automatically, use it or default to 8080
export PORT=${PORT:-8080}
export HOSTNAME=${HOSTNAME:-0.0.0.0}

# Debug: Print environment (helps with troubleshooting)
echo "Starting Next.js server..."
echo "PORT=$PORT"
echo "HOSTNAME=$HOSTNAME"
echo "NODE_ENV=$NODE_ENV"

# Start the Next.js server
# Use exec to replace shell process with node
exec node server.js
