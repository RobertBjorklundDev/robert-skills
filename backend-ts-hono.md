---
name: backend-ts-hono
description: Use when building or changing an HTTP API in TypeScript/Node with Hono.
---

# Hono API

Follow [`ts-code-style-exports`](ts-code-style-exports.md) for exports.

## Rules
- Exports: `ts-code-style-exports` (end-of-file `export { a, b, type C }`; no default export unless a tool requires it).
- Define routes with schema validation (zod / @hono/zod-openapi) so the OpenAPI spec is generated from code.
- Handler: validate -> call service -> map result to status code. No DB calls in handlers.
- Consistent error shape: `{ error: { code, message } }`.
- Integration-test every route (`general-testing`).
## Example
```ts
app.openapi(createCvRoute, async (c) => {
  const body = c.req.valid('json');
  const cv = await cvService.create(body);
  return c.json(cv, 201);
});
```
