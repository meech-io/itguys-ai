#!/usr/bin/env bash
lsof -ti :3000 | xargs kill -9 2>/dev/null
cd "$(dirname "$0")" && bun dev
