#!/usr/bin/env bash
# Copy all skills into a target project's .cursor/skills and .claude/skills
set -euo pipefail
target="${1:?usage: sync.sh /path/to/project}"
root="$(cd "$(dirname "$0")/.." && pwd)"
for dest in "$target/.cursor/skills" "$target/.claude/skills"; do
  mkdir -p "$dest"
  find "$root" -name SKILL.md -not -path '*/.git/*' | while read -r f; do
    d="$(dirname "$f")"; cp -r "$d" "$dest/$(basename "$d")"
  done
done
echo "Synced skills into $target"
