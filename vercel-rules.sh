#!/bin/bash

echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"
# echo "GIT_TAG: $(git name-rev --name-only --tags HEAD)"
# echo "GIT_TAGS: $(git tag --list)"
# echo "GIT DIFF: $(git diff --name-only HEAD..dev)"

if [[ "$VERCEL_GIT_COMMIT_REF" == "dev" ]]; then
  echo "✅ - Dev build can proceed"
  exit 1;
elif [[ "$VERCEL_GIT_COMMIT_REF" == "main" && "$VERCEL_GIT_COMMIT_MESSAGE" == *"chore(release):"* ]]; then
  echo "✅ - Production build can proceed"
  exit 1;
else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi
