---
description: Run pnpm lint, fix lint/prettier issues with minimal diffs, and verify clean output.
---

## User Input

```text
$ARGUMENTS
```

If provided, treat `$ARGUMENTS` as an optional **space-separated list of file/dir paths** to focus any `--fix/--write` commands. Regardless, you MUST still validate by running `pnpm lint` at the end.

## Goal

Make `pnpm lint` pass with **minimal, high-quality diffs**.

## Rules (important)
- Use **pnpm** only.
- Prefer **small, targeted fixes** over broad refactors or formatting the whole repo.
- Do **not** change behavior unless the lint error indicates a real bug.
- Treat ESLint configuration and rule settings as **policy**:
  - Fix code to comply with the existing rules by default.
  - **Do not** weaken rules, add ignores, or add `eslint-disable` / `@ts-ignore` unless it is clearly the best/correct option.
  - If you think a config/rule/ignore/disable is necessary, **stop and ask for human approval first**. Provide: the exact proposed change, why code-only fixes are insufficient, and at least one alternative.
- If you touch schema/migrations, follow `AGENTS.md` (read/update `docs/database.md` as required).
- If you edit `.svelte` files, keep Svelte 5 conventions (no `<svelte:component>`; avoid invalid `{@const}` placement). If available in this environment, run the Svelte autofix/check workflow before finishing.
- If Prettier fails to parse a `.svelte` file, check `AGENTS.md` → **“Svelte: common lint/check gotchas”** (common cause: `await` inside a non-`async` function, e.g. `await goto(...)`).

## Procedure (fast + reliable)
1. Run `pnpm lint` and capture the full output.
2. Classify failures:
   - **Prettier failures**: fix only the files mentioned.
     - Prefer: `pnpm exec prettier --write <file...>`
   - **ESLint failures**: fix only the files mentioned.
     - Prefer: `pnpm exec eslint <file...> --fix`
     - If a rule requires a manual fix, change the smallest code region that resolves the warning/error.
3. Re-run `pnpm lint`.
4. Repeat steps 2–3 until `pnpm lint` is clean.

## Output requirements
When finished, report:
- The **exact command(s)** you ran (especially any `--fix`/`--write` commands).
- A short list of **files changed** and **what was fixed** (1 line per file, high-signal).
- Confirmation: `pnpm lint` passes.
