---
name: ts-code-style-return-types
description: Use when writing TypeScript (TS) functions. Always declare explicit return types, including async functions and arrow functions.
---

# TypeScript return types

Applies everywhere (prototype, new app, existing app).

## Rules
- Always declare explicit return types on functions and methods, including `async` (`Promise<T>`) and exported arrow functions. Never rely on inferred return types.
- Enforce with the ESLint rule `@typescript-eslint/explicit-function-return-type`.

## Example

Bad:

```ts
const loadTransfer = async (id: string) => {
  return findTransfer(id);
};
```

Good:

```ts
function createTransfer(input: CreateTransferInput): Transfer {
  return bookTransfer(input);
}

async function loadTransfer(id: string): Promise<Transfer> {
  return findTransfer(id);
}
```
