#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# Skip .git so we never remove versioned lockfiles or node_modules from history
skip_git='-path ./.git -prune -o'

rm -rf node_modules

# Remove node_modules in repo root and any workspace (e.g. docs/)
find . $skip_git -type d -name 'node_modules' -exec rm -rf {} \; -prune 2>/dev/null || true

# Remove lockfiles from repo root and workspaces (not from .git)
find . $skip_git -type f \( \
  -name 'bun.lock' \
  -o -name 'bun.lockb' \
  -o -name 'pnpm-lock.yaml' \
  -o -name 'package-lock.json' \
  -o -name 'yarn.lock' \
  \) -exec rm -f {} \; 2>/dev/null || true
