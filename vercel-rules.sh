#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [[ "$VERCEL_GIT_COMMIT_REF" == "dev" ]]; then
  echo "✅ - Dev build can proceed"
  exit 1;
elif [[ "$VERCEL_GIT_COMMIT_REF" == "main" && $(git name-rev --name-only --tags HEAD) != "undefined"  ]]; then
  echo "✅ - Production build can proceed"
  exit 1;
else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi
