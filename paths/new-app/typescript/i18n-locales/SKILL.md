---
name: i18n-locales
description: Use when adding or changing user-visible UI text, or reviewing a PR with hardcoded strings.
---

# i18n locales

Follow [`core/typescript`](../../../../core/typescript/SKILL.md) for exports in TypeScript files that wrap the locale API.

## Rules
- Exports: `core/typescript` (end-of-file `export { a, b, type C }`; no default export unless a tool requires it).
- No hardcoded user-visible strings in components. Add a key to the locale JSON files.
- English is the fallback and must always have the key; other locales may lag but fall back to English.
- Keys are namespaced by feature: `studio.chat.sendButton`.
- Reviewers reject PRs that add hardcoded English strings.
## Example
`t('export.downloadPdf')` with `en.json: { "export": { "downloadPdf": "Download PDF" } }`.
