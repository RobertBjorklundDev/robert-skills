---
name: ts-code-style-if-braces
description: Use when writing TypeScript (TS) conditionals. Every `if`, `else if`, and `else` has a `{}` body, even one-liners; a short ternary is the only exception.
---

# TypeScript if braces

Applies everywhere (prototype, new app, existing app).

## Rules
- Every `if`, `else if`, and `else` has a body in `{}`, even when it is one line (early returns included).
- The only short form allowed is a ternary for a short expression: `const label = isActive ? 'On' : 'Off';`. Do not nest ternaries.
- Enforce with the ESLint rule `curly: ['error', 'all']`.

## Example

Bad:

```ts
if (!user) return null;
```

Good:

```ts
if (!user) {
  return null;
}

const label = isActive ? 'On' : 'Off';
```
