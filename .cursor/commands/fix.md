---
description: Systematically identify and fix errors, warnings, and issues in our SvelteKit (Svelte 5) application
---

# Fix Project Issues (SvelteKit)

You are an expert SvelteKit + Svelte 5 (runes) developer. Your task is to systematically identify and resolve all errors and warnings in this codebase.

## SvelteKit MCP Tools

Use the available Svelte MCP tools to shorten the “diagnose → fix → verify” loop, especially for Svelte 5 + SvelteKit API nuances.

- **`list-sections` (discovery)**: Use first when you're unsure which official doc section covers an error/warning (e.g. runes, `load`, actions, routing, forms).
- **`get-documentation` (authoritative reference)**: Pull the relevant sections once you know what to read; use it to confirm correct, non-deprecated APIs and edge cases.
- **`svelte-autofixer` (code-level sanity check)**: Run this on any `.svelte` file you edit that's involved in the failure before considering the fix “done” (common catches: invalid `{@const}` placement, legacy store usage, invalid bindings/props, markup issues).
- **`playground-link` (optional)**: Only for isolated repros/demos; **don't use** when we've already changed files in this repo (it's for quick verification outside the codebase).

Tip: If `pnpm check` fails with a Svelte-specific message, prefer validating behavior with docs/autofixer **before** reaching for workarounds like `as any` or disabling lint rules.

## Process

### 1. Auto-fix formatting + lint where possible
```bash
pnpm lint:fix
```
- **Analyze output carefully** — don't just run and move on
- This runs **Prettier write** + **ESLint --fix**; re-run if fixes cascade
- If anything remains, fix manually (don't “paper over” with `any` unless truly unavoidable)

### 2. Verify lint (clean check)
```bash
pnpm lint
```
- Ensures **Prettier check** + **ESLint** pass without errors

### 3. Run SvelteKit type + quality checks
```bash
pnpm check
```
- Runs `svelte-kit sync` and then `svelte-check` against `tsconfig.json`
- Fix all Svelte/TypeScript errors (component props, events, bindings, action data, etc.)

## Guidelines

- **Be concise but thorough** — fix root causes, not just symptoms
- **Use modern Svelte 5 patterns** — runes (`$state`, `$derived`, `$effect`) instead of legacy `$:` where applicable
- **Avoid deprecated SvelteKit APIs**
- **Prefer server-side guards** (`+layout.server.ts` / `+page.server.ts` + `redirect(...)`) for route protection
- **Keep PR-sized changes** — small, reviewable, and easy to validate

## Success Criteria

These commands must run without errors:
- `pnpm lint`
- `pnpm check`

If any command fails, investigate the specific errors and resolve them systematically.

## Common Issues to Watch For (SvelteKit + Svelte 5)

- **Deprecated `$app/stores`**: `page`, `navigating`, `updated` are deprecated → use `$app/state`
- **Deprecated `$app/paths` imports**: `base`, `assets`, `resolveRoute` are deprecated (and this project has no base path)
- **Routines/runes gotchas**:
  - `{@const ...}` must be an immediate child of a block/component — not free-floating
  - `<svelte:component>` is not needed in Svelte 5; dynamic components are the default
- **`await` in non-`async` functions**: e.g. `await goto(...)` inside `function onSubmit()` causes parse/lint failures — make the function `async`
- **SvelteKit ActionData inference**: `form` can be inferred as `{}`; explicitly type `form` in `+page.svelte` when needed
- **shadcn-svelte Select**: `bind:value` expects a `string`; if your form state stores `{ value, label }`, use **function bindings** + a hidden `<input>`
