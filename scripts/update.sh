#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# Remove deps and all build/cache artifacts (see cleanup.sh), then bump and reinstall
bash ./scripts/rmdeps.sh
bash ./scripts/cleanup.sh

# Bump dependency versions across root and workspaces
bunx npm-check-updates@latest --root -u

# Install updated dependencies
bun install
