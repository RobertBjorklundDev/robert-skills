---
name: prototype-typescript
description: Use when a time-boxed prototype is TypeScript/Node. Skip generated-client, migration, and locale ceremony unless that is the core.
---

# Prototype TypeScript

Lighter than `paths/new-app/typescript`. **This path OVERRIDES those skills where they conflict.** How it is built still matches Robert (schema-validated handlers, no database calls in the HTTP layer) when those layers exist.

## Rules
- Hono (or the stack the assignment names): validate -> call a function -> status code. No database calls in handlers.
- Error shape `{ error: { code, message } }` when you return JSON errors.
- Skip OpenAPI generation and orval/clients unless the assignment is about the contract.
- Skip Drizzle migration discipline unless schema change is the core. If you do use Drizzle, change the TypeScript schema and generate; do not hand-write broken SQL.
- Skip internationalization (i18n) locale files unless user-visible copy in multiple languages is the core. Hardcoded English is acceptable in a prototype UI.
- Integration-test only the core route (see `testing`).

## Example
```ts
app.post('/payments', async (c) => {
  const body = c.req.valid('json');
  const payment = await createPayment(body);
  return c.json(payment, 201);
});
```
