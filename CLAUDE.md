# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/business website for Ryan Roga (roga.dev), built with SvelteKit 2, Svelte 5, TypeScript, and Tailwind CSS. Deployed on Vercel. All pages are statically prerendered.

## Commands

- **Package manager**: pnpm (required)
- `pnpm dev` — Start dev server (localhost:5173)
- `pnpm build` — Production build
- `pnpm preview` — Preview production build
- `pnpm check` — Svelte type checking (svelte-kit sync + svelte-check)
- `pnpm lint` — Prettier + ESLint checks (read-only)
- `pnpm lint:fix` — Auto-fix lint issues
- `pnpm format` — Auto-format with Prettier
- `pnpm test` — Run Vitest in watch mode
- `pnpm test:run` — Run Vitest once (CI-friendly, passes with no tests)
- `pnpm ready` — Full pre-push check: format + lint fix + type check + test + build

Run a single test file: `pnpm vitest run src/path/to/file.test.ts`

## Architecture

- **Framework**: SvelteKit 2 with Svelte 5 runes mode
- **Adapter**: `adapter-vercel` when `VERCEL` env var is set (CI), `adapter-auto` otherwise (avoids Windows symlink issues locally)
- **Styling**: Tailwind CSS 3 with Poppins font; plugins: typography, forms, aspect-ratio
- **Analytics**: Custom lightweight tracking in `src/lib/analytics.ts` — GA4 in prod, console in dev. Uses `data-track` attributes. Initialized in root `+layout.svelte`.
- **Prerendering**: All pages prerendered (`+layout.server.ts` sets `prerender = true`, `trailingSlash = 'ignore'`). Vercel runtime config in `+layout.ts`.

### Homepage Pattern

The homepage (`src/routes/+page.svelte`) composes colocated section components (e.g., `HomeHero.svelte`, `ProblemsSolved.svelte`, `FAQ.svelte`) that live as siblings in `src/routes/`, not in `src/lib/components/`. These are single-use page sections, not reusable components.

### Reusable Components

`src/lib/components/` contains shared components. Subdirectories:
- `case-studies/` — Components for project case study pages (hero, results, tech stack, etc.)
- `archive/` — Legacy/deprecated components (old Navbar variants)

### Routes

- Service pages have sub-routes: `services/dashboards`, `services/integrations`, `services/maintenance`, etc.
- Project case studies: `projects/eztripr-trip-tracker`, `projects/lot-logistics-web-application`, `projects/copycleanse`, `projects/techcentral-telus`
- Contact page is fully client-side (no server action) — uses external booking link

### Svelte Actions

`src/lib/actions/scrollAnimation.ts` provides scroll-triggered animation via `initScrollAnimations()`.

## Svelte 5 Requirements (Critical)

This project uses Svelte 5 with runes. **Never use deprecated Svelte 4 patterns:**

- Use `$props()` not `export let`
- Use `$state()`, `$derived()`, `$effect()` not `$:` reactive statements
- Use `{@render children?.()}` not `<slot />`; named snippets not named slots
- Use `onclick={handler}` not `on:click={handler}`
- Use callback props (e.g., `onPageChange`) not `createEventDispatcher`
- Import `Snippet` type from `'svelte'` for content projection props
- Add `<svelte:options runes={true} />` when syntax is ambiguous

### Component Structure Order

1. Type imports -> 2. Regular imports -> 3. `$props()` -> 4. `$state()` -> 5. `$derived()` -> 6. `$effect()` -> 7. Functions -> 8. Template -> 9. Styles

## Conventions

- Components: PascalCase filenames (e.g., `BaseCard.svelte`)
- Routes: kebab-case directories with SvelteKit conventions (`+page.svelte`, `+layout.svelte`)
- Always use TypeScript; use `import type` for type-only imports
- Use `satisfies` for SvelteKit load functions (e.g., `satisfies PageServerLoad`)
- Fix Svelte deprecation warnings immediately — never suppress them
- Global styles: `app.postcss` and `styles.css` imported in root layout
