---
name: react-architecture-stack
description: Use when starting, setting up, or adding a library to a React app. Lists Robert's React stack (TypeScript, pnpm, Prettier, orval + TanStack Query, shadcn/ui, Tailwind, React state before Zustand, Playwright) and which skill covers each part. The router choice is in general-architecture.
---

# React stack

React is always written in TypeScript, so the `ts-*` skills apply too. Do not add a library that overlaps one of these without asking Robert.

| Concern | Choice | Skill |
|---|---|---|
| Language | TypeScript | `ts-code-style-*` |
| Package manager | pnpm (`pnpm install`, `pnpm add`, commit `pnpm-lock.yaml`); never npm or yarn | |
| Formatting | Prettier | `ts-code-style-prettier` |
| API client | orval, generated from the OpenAPI spec | `react-api-orval-react-query`, `backend-ts-openapi-client` |
| Server state | TanStack Query (React Query), through the orval hooks | `react-api-orval-react-query` |
| Local state | URL first, then `useState` or `useReducer`, Context inside one feature; Zustand only across features | `react-state-local`, `react-state-url` |
| Routing | React Router for a lighter client. TanStack Start when `general-architecture` calls the frontend heavy | `react-routing-react-router` |
| Components | shadcn/ui, styled with Tailwind | `general-architecture` |
| Folders | Feature folders with nested sub-features | `react-structure-feature-folders` |
| Logic | Extracted from big components into `logic/` | `react-architecture-component-logic` |
| Tests | Playwright end-to-end (E2E); unit tests only for extracted logic | `react-testing-playwright` |
| UI text | Translation keys | `ts-ui-translation-keys`, `ts-ui-i18n-locales` |
