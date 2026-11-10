---
name: react-testing-playwright
description: Use when deciding what to test in a React app or writing its tests. The UI is tested end-to-end with Playwright through user flows; unit tests only for extracted core logic; no tests per component.
---

# React testing with Playwright

Matches the frontend rule in `general-testing`.

## Rules
- The UI is tested with Playwright end-to-end (E2E) tests that drive the full app in a browser through real user flows (sign in, create a project, change a setting).
- No component tests (no React Testing Library tests per component, no snapshot tests).
- Unit tests only for core logic extracted into `logic/` (`react-architecture-component-logic`): pure functions and reducers.
- One E2E test per important user flow, not per screen or per button. Cover the main path and the errors a user can actually hit.
- Find elements the way a user does: `getByRole`, `getByLabel`, then `getByText`. Use `data-testid` only when nothing else works.
- Tests must not depend on each other or on run order; each test sets up its own data.

## Example

```ts
test('user can rename a project from settings', async ({ page }) => {
  // Arrange
  await page.goto('/projects/demo-project/settings');

  // Act
  await page.getByLabel('Project name').fill('Renamed project');
  await page.getByRole('button', { name: 'Save changes' }).click();

  // Assert
  await expect(page.getByRole('heading', { name: 'Renamed project' })).toBeVisible();
});
```
