#!/usr/bin/env bash
set -euo pipefail

bundle exec jekyll serve --host 127.0.0.1 --port 4000 &
JEKYLL_PID=$!

cleanup() {
  kill "$JEKYLL_PID" >/dev/null 2>&1 || true
}

trap cleanup EXIT

sleep 5
npm run pdf
