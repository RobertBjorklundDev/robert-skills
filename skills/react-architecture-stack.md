---
name: react-architecture-stack
description: Use when starting, setting up, or adding a library to a React app. Lists Robert's React stack (TypeScript, pnpm, Prettier, TanStack Query, shadcn/ui, Tailwind, React state before Zustand, Playwright) and which skill covers each part. Pick React Router or TanStack Start skills from the routing row. The router choice is also in `general-architecture`.
---

# React stack

React is always written in TypeScript, so the `ts-*` skills apply too. Do not add a library that overlaps one of these without asking Robert.

| Concern | Choice | Skill |
|---|---|---|
| Language | TypeScript | `ts-code-style-*` |
| Package manager | pnpm (`pnpm install`, `pnpm add`, commit `pnpm-lock.yaml`); never npm or yarn | |
| Formatting | Prettier | `ts-code-style-prettier` |
| Routing (lighter client) | React Router in framework mode | `react-routing-react-router` |
| Routing (heavy client / SSR app) | TanStack Start + TanStack Router file routes | `react-routing-tanstack-router` |
| Folders (React Router) | Feature folders with nested sub-features | `react-structure-feature-folders` |
| Folders (TanStack Start) | `pages` / `widgets` / `entities` beside `routes` | `react-structure-pages-widgets-entities` |
| API + server state (React Router) | orval `react-query` hooks from OpenAPI | `react-api-orval-react-query`, `backend-ts-openapi-client` |
| API + server state (TanStack Start) | `createServerFn` BFF + hand-written React Query | `react-api-tanstack-start-server-functions`, `backend-ts-openapi-client` (types / `fetch` client only) |
| Local state | URL first, then `useState` or `useReducer`, Context inside one feature; Zustand only across features | `react-state-local` |
| URL search state | nuqs (React Router) or route `validateSearch` (TanStack Router) | `react-state-url`, `react-state-url-tanstack-router` |
| Components | shadcn/ui, styled with Tailwind | `general-architecture` |
| Complex components | Slotted compound components. The parent owns layout order | `react-architecture-slotted-components`, `react-architecture-slotted-component-base` |
| Logic | Extracted from big components into `logic/` | `react-architecture-component-logic` |
| Tests | Playwright end-to-end (E2E); unit tests only for extracted logic | `react-testing-playwright` |
| UI text | Translation keys | `ts-ui-translation-keys`, `ts-ui-i18n-locales` |

## Pick TanStack Start skills when

The frontend is its own application shell with many routes, server rendering, or auth/session work on the server (`general-architecture`). Use the React Router row when the UI is a lighter client over a separate HTTP API and the browser may call that API through orval hooks directly.