---
description: Run pnpm check (SvelteKit sync + svelte-check), fix type/diagnostic issues with minimal diffs, and verify clean output.
---

## User Input

```text
$ARGUMENTS
```

If provided, treat `$ARGUMENTS` as optional **paths to focus investigation** (files/dirs/features). You may prioritize reading/fixing issues in those areas first, but you MUST still validate by running `pnpm check` at the end.

## Goal

Make `pnpm check` pass (no `svelte-check` diagnostics) with **minimal, high-quality diffs**.

## Rules (important)

- Use **pnpm** only.
- Prefer **small, targeted fixes** over broad refactors.
- Do **not** change runtime behavior unless the error indicates a real bug.
- If you touch schema/migrations, follow `AGENTS.md` (read/update `docs/database.md` as required).
- If you edit `.svelte` files, keep Svelte 5 conventions (no `<svelte:component>`; avoid invalid `{@const}` placement). If available in this environment, run the Svelte autofix workflow for touched components before finishing.
- For recurring Svelte issues we want to prevent, see `AGENTS.md` → **“Svelte: common lint/check gotchas”** (especially `await` in non-`async` handlers and invalid `{@const}` placement).

## Procedure (fast + reliable)

1. Run `pnpm check` and capture the full output.
2. Parse diagnostics and group by:
   - **TypeScript errors** (TSxxxx)
   - **Svelte diagnostics** (invalid props, bind types, component typing, etc.)
   - **Config/tooling issues** (tsconfig pathing, generated types missing, sync needed)
3. Fix issues with the smallest possible code changes:
   - **Typing/exports**: add/adjust types, narrow unions, fix incorrect imports/paths, remove unreachable/unused values only if required.
   - **Svelte props/events**: align prop names/types, add defaults, use correct bindings, fix invalid event typing.
   - **Generated types**: if errors indicate missing SvelteKit generated types, ensure the workflow relies on `pnpm check` (which already runs `svelte-kit sync`).
4. Re-run `pnpm check`.
5. Repeat steps 2–4 until `pnpm check` is clean.

## Output requirements

When finished, report:

- The **exact command(s)** you ran.
- A short list of **files changed** and **what was fixed** (1 line per file, high-signal).
- Confirmation: `pnpm check` passes.
