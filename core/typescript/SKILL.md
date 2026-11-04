---
name: typescript
description: Use when writing TypeScript on any path. Named exports at the end of the file; no default exports unless a tool requires one. Functions with more than two parameters take a single named input object.
---

# TypeScript conventions

Applies on every path (prototype, new-app, existing-app). Path skills do not override these TypeScript conventions.

## Rules
- Exports go at the end of the file in a single `export { a, b, type C }` statement.
- Never inline `export const` or `export function` at the declaration.
- No default exports, unless a framework or tool genuinely requires one (for example some config files or route files). Then say why in a short comment.
- Functions with more than two parameters take a single named input object typed with its own type, so callers name every argument and order does not matter.
- Prefer a named input object even at two parameters when the args share a type and could be swapped (for example two account ids).

## Exports example

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

## Named input example

Bad:

```ts
function createTransfer(fromAccountId: string, toAccountId: string, amount: Decimal) {
  return bookTransfer(fromAccountId, toAccountId, amount);
}

createTransfer(toAccountId, fromAccountId, amount);
```

Good:

```ts
type CreateTransferInput = {
  fromAccountId: string;
  toAccountId: string;
  amount: Decimal;
};

function createTransfer(input: CreateTransferInput) {
  return bookTransfer(input);
}

createTransfer({ fromAccountId, toAccountId, amount });
```
