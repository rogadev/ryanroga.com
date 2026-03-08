---
description: Code Review
---

# Code Review Instructions

Review the specified file(s) against these standards. Be concise. Flag issues with file:line references.

---

## Svelte 5 Runes

- Use `$state()` for reactive state, `$derived()` for computed values, `$effect()` for side effects
- Prefer `$derived()` over `$effect()` when computing values—effects are for side effects only
- Use `$props()` for component props, `$bindable()` for two-way binding
- Never use legacy reactive syntax (`$:`, `export let`)
- Keep `$effect()` minimal; avoid setting state inside effects when `$derived` suffices

---

## Remote Functions (SvelteKit 2.27+)

Remote functions live in `.remote.ts` files and are imported directly into components.

**Types:**
- `query()` — read operations, cacheable
- `command()` — write/mutation operations

**Forms:** Use Superforms (not remote `form()`). Define schemas in `$lib/schemas/`.

```ts
// src/lib/server/posts.remote.ts
import { query, command } from '$app/server';
import { z } from 'zod';

export const getPost = query(z.string(), async (slug) => {
  return await db.query.posts.findFirst({ where: eq(posts.slug, slug) });
});

export const deletePost = command(z.object({ id: z.string() }), async ({ id }) => {
  return await db.delete(posts).where(eq(posts.id, id));
});
```

**Review Checklist:**
- [ ] Queries used for reads, commands for mutations
- [ ] Zod schemas defined for validation
- [ ] Server-only code stays in `.remote.ts` or `$lib/server/`
- [ ] No database/env imports in universal code

---

## Page Loading Pattern

**Required behavior:** Navigation happens instantly → page renders with skeleton → data loads → content appears.

**Implementation with remote functions:**

```svelte
<!-- +page.svelte -->
<script>
  import { getItems } from '$lib/server/items.remote';
  
  let items = $state(null);
  let error = $state(null);
  let loading = $state(true);
  
  $effect(() => {
    loading = true;
    getItems()
      .then(data => { items = data; })
      .catch(err => { error = err; })
      .finally(() => { loading = false; });
  });
</script>

{#if loading}
  <ItemsSkeleton />
{:else if error}
  <ErrorState {error} retry={() => { /* re-trigger */ }} />
{:else}
  <ItemsList {items} />
{/if}
```

**Review Checklist:**
- [ ] No blocking `load()` functions for primary data—use remote functions client-side
- [ ] Skeleton shown during load (minimal layout shift)
- [ ] Error state handled with retry option
- [ ] Loading/error/success states all accounted for

---

## File Organization

**Component Location:**
- Global/reusable → `src/lib/components/`
- Route-specific → beside `+page.svelte` (e.g., `src/routes/dashboard/DashboardCard.svelte`)

**Server Code:**
- Remote functions → `src/lib/server/*.remote.ts`
- Database schema → `src/lib/server/db/schema.ts` (Drizzle)
- Utilities/helpers → `src/lib/server/`

**Shared Code:**
- Zod schemas → `src/lib/schemas/`
- Types → `src/lib/types/` or colocated
- Utilities → `src/lib/utils/`

---

## Forms (Superforms + Zod)

```svelte
<script>
  import { superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { createPlantSchema } from '$lib/schemas/plant';
  
  let { data } = $props();
  const { form, errors, enhance, submitting } = superForm(data.form, {
    validators: zodClient(createPlantSchema)
  });
</script>

<form method="POST" use:enhance>
  <!-- fields -->
  <button disabled={$submitting}>Save</button>
</form>
```

**Review Checklist:**
- [ ] Schema defined separately in `$lib/schemas/`
- [ ] Client-side validation with `zodClient` adapter
- [ ] `use:enhance` applied for progressive enhancement
- [ ] Submit button shows loading state via `$submitting`
- [ ] Errors displayed per-field via `$errors`

---

## Separation of Concerns

Flag files that violate these principles:

1. **+page.svelte** — UI rendering, state binding, event handlers
   - ❌ No direct database calls
   - ❌ No business logic beyond simple conditionals
   - ❌ No fetch calls (use remote functions)

2. **+page.server.ts / +layout.server.ts** — Use sparingly
   - ✅ Auth guards, redirects
   - ✅ SSR-critical data only
   - ❌ Not for data that should show loading states

3. **.remote.ts files** — Server logic
   - ✅ Database operations
   - ✅ External API calls
   - ✅ Business logic
   - ❌ No UI concerns

4. **Components** — Presentational + local state
   - Extract when: >150 lines, reused, or logically distinct
   - Props for data in, events for data out

---

## Code Quality Checks

- [ ] TypeScript strict mode respected
- [ ] No `any` types without justification
- [ ] Async errors handled (try/catch or .catch())
- [ ] No console.log in production code
- [ ] Accessibility: interactive elements have labels, images have alt
- [ ] No hardcoded secrets/URLs (use `$env/`)
- [ ] Reactivity is intentional—avoid unnecessary `$state` wrappers

---

## Styling & UI

**Stack:** Tailwind v4, bits-ui (headless), Lucide icons, svelte-sonner (toasts)

**Utilities:**
- `clsx()` or `tailwind-merge` for conditional classes
- `tailwind-variants` for component variants

```svelte
<script>
  import { tv } from 'tailwind-variants';
  
  const button = tv({
    base: 'rounded-lg font-medium',
    variants: {
      intent: { primary: 'bg-green-600 text-white', secondary: 'bg-gray-200' }
    }
  });
</script>

<button class={button({ intent: 'primary' })}>Save</button>
```

**Review Checklist:**
- [ ] Use bits-ui primitives for accessible components (dialogs, popovers, etc.)
- [ ] Icons from `@lucide/svelte`, not inline SVGs
- [ ] Toasts via `svelte-sonner`, not custom implementations
- [ ] No arbitrary Tailwind values when design token exists

---

## Anti-Patterns to Flag

```
❌ await in load() for data that needs loading skeleton
❌ $effect() that just computes a value (use $derived)
❌ Giant component files (>300 lines without extraction)
❌ Mixing server imports in client code
❌ export let (legacy Svelte 4 syntax)
❌ Inline styles when Tailwind class exists
❌ Untyped remote function responses
❌ Raw SQL instead of Drizzle query builder
❌ Manual toast implementation (use svelte-sonner)
❌ Custom modal/dialog (use bits-ui)
❌ Auth checks outside hooks.server.ts or layout.server.ts
```

---

## Review Output Format

```
## [filename]

### Issues
- **L42**: $effect used for derived computation—use $derived
- **L78-95**: Extract to component (repeated pattern)

### Suggestions  
- Consider adding error boundary for remote function call

### ✅ Good
- Clean separation of concerns
- Proper loading states
```
