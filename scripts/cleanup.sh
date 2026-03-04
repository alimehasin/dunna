#!/usr/bin/env bash

# Exit immediately if a command exits with a non-zero status
set -e

# Skip .git and avoid descending into dirs we delete (-prune after each rm)
skip_git='-path ./.git -prune -o'

# --- Build / output directories (root + workspaces) ---
# Main package: dist (bun + tsc). Docs: dist (Astro). Next/Nuxt/other stacks:
find . $skip_git -type d \( \
  -name 'dist' \
  -o -name '.next' \
  -o -name 'out' \
  -o -name '.nuxt' \
  -o -name '.astro' \
  -o -name '.vuepress' \
  -o -name '.docusaurus' \
  \) -exec rm -rf {} \; -prune 2>/dev/null || true

# --- Cache / tool directories ---
find . $skip_git -type d \( \
  -name '.turbo' \
  -o -name '.cache' \
  -o -name '.stylelintcache' \
  -o -name '.parcel-cache' \
  -o -name '.rpt2_cache' \
  -o -name '.rts2_cache_cjs' \
  -o -name '.rts2_cache_es' \
  -o -name '.rts2_cache_umd' \
  -o -name '.fusebox' \
  -o -name '.grunt' \
  -o -name '.temp' \
  -o -name '.serverless' \
  -o -name '.dynamodb' \
  \) -exec rm -rf {} \; -prune 2>/dev/null || true

# --- Coverage / diagnostics ---
find . $skip_git -type d \( \
  -name 'coverage' \
  -o -name '.nyc_output' \
  -o -name 'lib-cov' \
  \) -exec rm -rf {} \; -prune 2>/dev/null || true

# --- Single files (caches, backups, TS incremental) ---
find . $skip_git -type f \( \
  -name '*.tsbuildinfo' \
  -o -name '.eslintcache' \
  -o -name '.stylelintcache' \
  -o -name '.env.bak' \
  \) -exec rm -f {} \; 2>/dev/null || true
