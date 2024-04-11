#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
echo "GIT_TAG: $(git name-rev --name-only --tags HEAD)"

if [[ "$VERCEL_GIT_COMMIT_REF" == "main" && $(git name-rev --name-only --tags HEAD) == "undefined"  ]]; then
  # Don't build
  echo "🛑 - Production build cancelled (no tag)"
  exit 0;
fi

  echo "✅ - Build can proceed"
  exit 1;
