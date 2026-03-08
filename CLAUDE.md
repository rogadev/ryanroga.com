# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/business website for Ryan Roga, built with SvelteKit 2, Svelte 5, TypeScript, and Tailwind CSS. Deployed on Vercel. All pages are prerendered by default.

## Commands

- **Package manager**: pnpm
- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm preview` — Preview production build
- `pnpm check` — Svelte type checking (svelte-kit sync + svelte-check)
- `pnpm lint` — Prettier + ESLint checks
- `pnpm format` — Auto-format with Prettier
- `pnpm test` — Run tests with Vitest

## Architecture

- **Framework**: SvelteKit 2 with Svelte 5 runes mode
- **Adapter**: `adapter-vercel` in production (Vercel CI), `adapter-auto` locally (avoids Windows symlink issues)
- **Styling**: Tailwind CSS with Poppins font, plugins: typography, forms, aspect-ratio
- **Email**: Resend SDK for contact form (env vars: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`)
- **Analytics**: Custom lightweight tracking in `src/lib/analytics.ts` (GA4 when available, console in dev). Uses `data-track` attributes on elements.
- **Prerendering**: All pages prerendered by default (`+layout.server.ts` sets `prerender = true`)

### Key Directories

- `src/lib/components/` — Reusable components (PascalCase naming). Subdirs: `case-studies/`, `archive/`
- `src/lib/actions/` — Svelte actions (e.g., `scrollAnimation.ts`)
- `src/routes/` — Pages: about, ai, contact, development, free-tools, internal-tools, privacy, projects, resume, services, terms. Homepage sections are colocated as route-level components (e.g., `HomeHero.svelte`, `Services.svelte`)
- `src/types/` — Custom type definitions
- `static/` — Images, logos, fonts (Poppins), icons

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

1. Type imports → 2. Regular imports → 3. `$props()` → 4. `$state()` → 5. `$derived()` → 6. `$effect()` → 7. Functions → 8. Template → 9. Styles

## Conventions

- Components: PascalCase filenames (e.g., `BaseCard.svelte`)
- Routes: kebab-case directories with SvelteKit conventions (`+page.svelte`, `+layout.svelte`)
- Always use TypeScript; use `import type` for type-only imports
- Use `satisfies` for SvelteKit load functions (e.g., `satisfies PageServerLoad`)
- Fix Svelte deprecation warnings immediately — never suppress them
