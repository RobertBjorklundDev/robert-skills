---
name: hono-api
description: Use when building or changing an HTTP API in TypeScript/Node with Hono.
---

# Hono API
## Rules
- Define routes with schema validation (zod / @hono/zod-openapi) so the OpenAPI spec is generated from code.
- Handler: validate -> call service -> map result to status code. No DB calls in handlers.
- Consistent error shape: `{ error: { code, message } }`.
- Integration-test every route (see testing-policy).
## Example
```ts
app.openapi(createCvRoute, async (c) => {
  const body = c.req.valid('json');
  const cv = await cvService.create(body);
  return c.json(cv, 201);
});
```
