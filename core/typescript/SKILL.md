---
name: typescript
description: Use when writing TypeScript on any path. Named exports at the end of the file; no default exports unless a tool requires one.
---

# TypeScript conventions

Applies on every path (prototype, new-app, existing-app). Path skills do not override these export rules.

## Rules
- Exports go at the end of the file in a single `export { a, b, type C }` statement.
- Never inline `export const` or `export function` at the declaration.
- No default exports, unless a framework or tool genuinely requires one (for example some config files or route files). Then say why in a short comment.

## Example

Bad:

```ts
export const createPayment = async (input: CreatePaymentInput) => {
  return savePayment(input);
};

export function listPayments() {
  return findPayments();
}

export type Payment = {
  id: string;
};

export default createPayment;
```

Good:

```ts
async function createPayment(input: CreatePaymentInput) {
  return savePayment(input);
}

function listPayments() {
  return findPayments();
}

type Payment = {
  id: string;
};

export { createPayment, listPayments, type Payment };
```

Default export only when required:

```ts
// Next.js app router requires a default export for this route file.
export default function Page() {
  return null;
}
```
