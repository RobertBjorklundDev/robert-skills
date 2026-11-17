---
name: react-structure-pages-widgets-entities
description: Use when creating or moving files in a TanStack Start app. Layers are `routes`, `pages`, `widgets`, `entities`, and `shared`, with `api` / `logic` / `state` / `ui` inside a slice. Not the React Router feature-folder layout — use `react-structure-feature-folders` for `app/features/` apps.
---

# TanStack Start folder layout (pages, widgets, entities)

Slices sit beside `src/routes`, not inside it. A folder under `routes/` becomes a URL segment, so screens do not live there.

## Layers

| Layer | Path | May import |
| --- | --- | --- |
| Routes | `src/routes` | pages, widgets, entities, shared |
| Pages | `src/pages/<slice>` | widgets, entities, shared, and its own slice |
| Widgets | `src/widgets/<slice>` | entities, shared, and its own slice |
| Entities | `src/entities/<name>` | shared, and its own slice |
| Shared | `src/shared` | shared only |

A page must not import another page. A widget must not import a page. An entity must not import a page or a widget.

There is no top-level `src/features` layer. Reused UI that is not entity data goes in `widgets/<slice>`.

## Inside a slice

Default layout when the screen owns data or saves:

```
pages/<slice>/
  api/       # queryOptions, mutations, page-only createServerFn wrappers
  logic/     # pure functions, no React
  state/     # hooks combining cache and local UI state
  ui/        # components that render and call hooks
```

- A large area inside one page may use `pages/<slice>/features/<name>/{api,logic,state,ui}`. That folder is still part of the page; it does not become a separate top-level feature.
- Small helpers may stay next to the component that uses them. Do not add a folder for a one-off helper.
- Entity-wide server functions and query key factories live in `entities/<name>/api/`. Page-only server functions live in that page's `api/` folder.
- `shared/ui` is the design-system kit only. No domain behavior there.

Route files stay thin shells (`react-routing-tanstack-router`). The page component lives in `pages/<slice>/ui`.

## Rules

- Folder and file names are kebab-case (`general-naming`).
- Create a subfolder only when it has a file.
- `createServerFn` handlers belong in `*.server.ts`. Client-reachable modules must not export helpers that import `*.server*` except through `createServerFn` entry points (`react-api-tanstack-start-server-functions`).