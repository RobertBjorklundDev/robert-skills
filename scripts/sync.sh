#!/usr/bin/env bash
# Copy core skills plus one outcome path (and domains) into a target
# project's .cursor/skills and .claude/skills.
set -euo pipefail

function usage() {
  echo "usage: sync.sh <path> <target>" >&2
  echo "  path: prototype | new-app | existing-app" >&2
  echo "  example: sync.sh prototype /path/to/project" >&2
  exit 1
}

if [[ $# -ne 2 ]]; then
  usage
fi

path="$1"
target="$2"

if [[ "$path" != "prototype" && "$path" != "new-app" && "$path" != "existing-app" ]]; then
  echo "unknown path: $path" >&2
  usage
fi

if [[ ! -d "$target" ]]; then
  echo "target is not a directory: $target" >&2
  exit 1
fi

root="$(cd "$(dirname "$0")/.." && pwd)"

if [[ ! -d "$root/paths/$path" ]]; then
  echo "missing path folder: $root/paths/$path" >&2
  exit 1
fi

function sync_into() {
  local dest="$1"
  mkdir -p "$dest"
  rm -rf "$dest/core" "$dest/paths" "$dest/domains" "$dest/AGENTS.md"
  cp -R "$root/core" "$dest/core"
  mkdir -p "$dest/paths"
  cp -R "$root/paths/$path" "$dest/paths/$path"
  if [[ -d "$root/domains" ]]; then
    cp -R "$root/domains" "$dest/domains"
  fi
  cp "$root/AGENTS.md" "$dest/AGENTS.md"
}

for dest in "$target/.cursor/skills" "$target/.claude/skills"; do
  sync_into "$dest"
done

echo "Synced core + paths/$path into $target"
