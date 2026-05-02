# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/business website for Ryan Roga (roga.dev). Currently mid-redesign: Astro 6 with selective Svelte 5 islands, Tailwind CSS v4, MDX-driven blog. Deployed on Vercel as a static site.

The previous SvelteKit version is archived at `_references/old-svelte-site/` for content lift only — do not edit it. Design brief and migration plan live in `docs/BRIEF.md` and `docs/PLAN.md`; consult them before substantive changes.

## Commands

- **Package manager**: pnpm (required), Node ≥ 22.12
- `pnpm dev` — Start Astro dev server (localhost:4321)
- `pnpm build` — Static build to `dist/`
- `pnpm preview` — Preview the production build
- `pnpm check` — `astro check` (TypeScript + content schema validation)

When `pnpm install` aborts with `ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY`, prefix with `CI=true`. `sharp` and `esbuild` are allowlisted in `package.json` under `pnpm.onlyBuiltDependencies` so their post-install scripts run.

## Architecture

- **Framework**: Astro 6 (`astro.config.mjs`) — static output, Svelte 5 islands via `@astrojs/svelte`, MDX via `@astrojs/mdx`, sitemap via `@astrojs/sitemap`.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` (no `@astrojs/tailwind`, no `tailwind.config.js` — config lives in `src/styles/global.css` using `@theme`). Imported once via `BaseHead.astro` → `src/styles/global.css`.
- **Fonts**: Astro's built-in font system (`fontProviders.local`) declared in `astro.config.mjs`. Atkinson is the starter default; will be replaced with Geist or Inter during Phase 1 of the redesign.
- **Hosting**: Vercel, static-only. No adapter — Vercel auto-detects `dist/`. If we ever need image optimization at the edge or ISR, install `@astrojs/vercel`.
- **Content**: Blog and case-study posts as Astro content collections (see `src/content.config.ts`). MDX preferred for posts; plain `.md` is fine when no components are needed.

## Page composition

- **Pages**: `src/pages/*.astro` (routes are file-based; `index.astro`, `about.astro`, `blog/[...slug].astro`, etc.).
- **Layouts**: `src/layouts/` — currently `BlogPost.astro`. Add a `Base.astro` when the design system lands in Phase 1.
- **Components**: `src/components/` — `.astro` for static, `.svelte` only when interactivity is real (state, events, browser APIs). Default to Astro.
- **Svelte islands**: import the `.svelte` file in an `.astro` page and add a client directive (`client:load`, `client:idle`, `client:visible`). Without a directive, Svelte renders as static HTML — fine if you don't need hydration.

## Svelte 5 requirements (when writing islands)

This project uses Svelte 5 in runes mode. **Do not use Svelte 4 patterns:**

- `$props()` not `export let`
- `$state()`, `$derived()`, `$effect()` not `$:` reactive statements
- `{@render children?.()}` not `<slot />`; named snippets not named slots
- `onclick={handler}` not `on:click={handler}`
- Callback props (e.g. `onPageChange`) not `createEventDispatcher`
- Import `Snippet` type from `'svelte'` for content-projection props

### Component structure order

1. Type imports → 2. Regular imports → 3. `$props()` → 4. `$state()` → 5. `$derived()` → 6. `$effect()` → 7. Functions → 8. Template → 9. Styles

## Conventions

- Components: PascalCase filenames (`BaseCard.astro`, `IslandSmokeTest.svelte`).
- Routes: kebab-case directories.
- TypeScript everywhere; `import type` for type-only imports.
- Tailwind utilities preferred over custom CSS for layout/spacing/typography. Reach for tokens (`@theme` in `global.css`) before raw values once the design system lands.
- One accent color, restrained palette — see `docs/BRIEF.md` §3.3 for the rationale.
- No drop shadows; use 1px hairline borders for structure (brief §3.6).
- Real product screenshots, never abstract illustrations (brief §3.5).

## What lives where

- `docs/BRIEF.md` — design principles, IA, success criteria.
- `docs/PLAN.md` — phased migration plan with exit criteria per phase.
- `_references/old-svelte-site/` — read-only archive of the previous build.
- `_references/techcentral-showcase/` — pre-existing reference, untouched.


<!-- BEGIN BEADS INTEGRATION v:1 profile:minimal hash:ca08a54f -->
## Beads Issue Tracker

This project uses **bd (beads)** for issue tracking. Run `bd prime` to see full workflow context and commands.

### Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --claim  # Claim work
bd close <id>         # Complete work
```

### Rules

- Use `bd` for ALL task tracking — do NOT use TodoWrite, TaskCreate, or markdown TODO lists
- Run `bd prime` for detailed command reference and session close protocol
- Use `bd remember` for persistent knowledge — do NOT use MEMORY.md files

## Session Completion

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd dolt push
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds
<!-- END BEADS INTEGRATION -->
