#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# Remove deps (node_modules, lockfiles) and all build/cache artifacts (see cleanup.sh)
bash ./scripts/rmdeps.sh
bash ./scripts/cleanup.sh

# Install dependencies from scratch
bun install
