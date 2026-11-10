---
name: react-state-local
description: Use when a React component needs client-side state. Prefer the URL, then `useState` or `useReducer`, including React Context inside one feature. Zustand only for client state shared across many features. Server data belongs to React Query.
---

# React local state

## Rules
- Put state in the URL when a refresh, a shared link, or the Back button should keep it (filters, tabs, selected id, pagination). Path params use the router. Search params use `react-state-url` (nuqs).
- Then pick the simplest client state that works:
  1. `useState` for simple, component-owned state.
  2. `useReducer` when state has several related fields or transitions. Keep the reducer as a pure function in `logic/` so it can be unit tested.
  3. Inside one feature, share that state with React Context. A small feature can use Context around `useState`. A feature whose components, including sub-features, share related state can use Context around `useReducer`. Put the provider on that feature, not on the app root.
  4. Keep values that change often (each keystroke) in the component that owns the input, so a feature Context does not re-render the whole tree on every change.
  5. Zustand only for client state shared across many features (for example a multi-step editor that spans features). One store per feature, in the feature's `state/` folder.
- Server data is never local state or Context. It comes from React Query (`react-api-orval-react-query`).

## Example

Bad:

```ts
const useProjectStore = create<ProjectStore>((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
}));
```

Good:

```ts
const { data: projects } = useListProjects();
const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
```
