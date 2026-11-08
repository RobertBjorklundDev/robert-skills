---
name: ts-ui-i18n-locales
description: Use when adding or changing user-visible UI text, or reviewing a PR with hardcoded strings.
---

# i18n locales

Follow [`ts-code-style-exports`](ts-code-style-exports.md) for exports in TypeScript files that wrap the locale API.

## Rules
- Exports: `ts-code-style-exports` (end-of-file `export { a, b, type C }`; no default export unless a tool requires it).
- No hardcoded user-visible strings in components. Add a key to the locale JSON files.
- English is the fallback and must always have the key; other locales may lag but fall back to English.
- Name keys by where the text appears in the UI, following [`ts-ui-translation-keys`](ts-ui-translation-keys.md): `studio_chat__send-button`.
- Reviewers reject PRs that add hardcoded English strings.
## Example
`t('export__download-pdf')` with `en.json: { "export__download-pdf": "Download PDF" }`.
