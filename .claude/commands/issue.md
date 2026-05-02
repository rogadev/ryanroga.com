---
description: Research and file high-quality GitHub issue(s) for work we can't address right now
argument-hint: <description of work to track>
---

# /issue — File a high-quality GitHub issue

The user has spotted work that needs tracking but can't be addressed in this session. Your job: research it against the actual codebase, decide if it's one issue or an epic with children, draft well-scoped bodies, confirm the plan with the user, then create them via `gh` CLI.

The body you write must let a future implementer — most likely another Claude Code agent, possibly a human web dev — pick the work up cold and execute without coming back to ask questions.

## Input

User request: $ARGUMENTS

If the request is too sparse to research effectively (e.g. a single ambiguous noun, no surface area), ask up to two crisp clarifying questions before doing anything else. Otherwise proceed silently to research.

## Phase 1 — Research before drafting

Do **not** start writing issue bodies until you've grounded yourself in the actual codebase. This is the single most important step — a body that names real files and references real patterns is worth 10x a generic one.

Required:

1. Read `CLAUDE.md`. Skim `docs/BRIEF.md` and `docs/PLAN.md` if the request touches design, IA, or anything in the migration plan.
2. Glob/Grep the codebase to locate where this work fits — the existing files that will change, similar patterns the new code should match, conventions to follow.
3. Concretely list: files to add, files to modify, files to remove. Use real paths.
4. Identify constraints that shape the work: framework versions, design rules (no shadows, hairline borders, one accent), Svelte 5 runes mode, Tailwind v4 `@theme` tokens, content-collection schemas, etc.
5. If the request touches an area you don't yet understand, dispatch an `Explore` subagent to map it before drafting. Don't fake fluency.

## Phase 2 — Decide: single issue or epic?

Treat it as an **epic** if any hold:

- Touches multiple subsystems (e.g. styling + content + routing).
- Has natural sequential phases (design → scaffold → wire up → polish).
- The user used words like "redesign", "refactor", "migrate", "build out", "rebuild", "overhaul".
- A single PR would be too large to review well (>~400 LOC across unrelated files).

Otherwise a **single issue** is correct. Bias toward fewer issues — split only when the work genuinely splits.

For an epic, plan the children first. Each child must be:

- Independently completable, reviewable, and shippable as one PR.
- Ordered so the next-up child is always obvious. Encode order with explicit `Blocked by #N` lines in each child body.
- Small. If a "child" is itself an epic, restructure.

## Phase 3 — Draft issue bodies into tmp/

Create `tmp/` if it doesn't exist (`mkdir -p tmp`). Write one markdown file per issue: `tmp/issue-1.md`, `tmp/issue-2.md`, etc. You'll delete these in Phase 6.

Use this template. Drop sections that don't apply — short and dense beats padded.

```
## Context
One short paragraph. Why this exists, what triggered it, the constraint or goal it serves.

## User story
As a [role], I want [outcome], so that [reason].

(For purely internal/infra work where there's no user-facing role, replace with a one-line "Goal:" instead. Don't force a fake user.)

## Scope
- **Add:** path/to/new-file.astro — one-line note
- **Modify:** path/to/existing.astro — what changes and why
- **Remove:** path/to/dead.svelte — why

## Approach
Bulleted notes on how to tackle it. Reference existing patterns by file path and line number where helpful (e.g. "follow the pattern in `src/components/BaseHead.astro:12`"). Not a full implementation — leave the implementer real decisions to make.

## Acceptance criteria
- [ ] Concrete, testable, observable bullets. A reviewer should be able to tick each one.
- [ ] No vague items like "looks good" — replace with "matches the spacing scale in `global.css` `@theme`".

## Tests
What confidence does this change need, and what's the cheapest test that gets us there? Use the testing pyramid honestly:

- **Unit** — pure functions, schema validators, content-collection guards.
- **Integration** — components rendered with real data, layout wiring.
- **E2E / visual** — page-level golden paths, build-time content rendering.

If the change genuinely doesn't need new automated tests (copy tweaks, design polish, content edits), say so explicitly: `Manual: verify in dev server (golden path: ..., edge case: ...)`. Don't pad with tests no one will write.

## Out of scope
What this issue is *not* doing. Catches scope creep at review time.

## Dependencies
Blocked by: #N (omit if none)
Blocks: #N (omit if none)
Part of: #EPIC (children only)
```

For the **epic body**, after `## Context` and `## Goal`, include an ordered task list of children:

```
## Children (execute in order)
- [ ] #N1 — short title
- [ ] #N2 — short title
- [ ] #N3 — short title
```

GitHub's task-list syntax auto-checks when the referenced issue closes. The epic stays open until every child closes.

## Phase 4 — Confirm before creating

Show the user a compact plan:

- 1 issue or N issues (and the epic if applicable).
- Each with proposed title and a one-line summary.
- The dependency chain if it's an epic (which child blocks which).
- **Proposed priority** for each (`p0` / `p1` / `p2` / `p3`). One phrase of reasoning.
- **Proposed type** for each (exactly one `type:` label). One phrase of reasoning.
- **Proposed area(s)** for each (one or more `area:` labels). Skip if work is genuinely cross-cutting and no area dominates.
- **Proposed phase** if the work belongs to a migration phase from `docs/PLAN.md` (`phase: 1`..`phase: 4`).
- Any meta labels (`breaking-change`, `release-notes`, `epic`).
- Any labels you'd need to create (should be rare — the taxonomy is intentionally complete).

### Priority rubric (paired with the GitHub `priority: p0..p3` labels)

- **p0 — critical**: production-down, security exposure, blocks every other commit. Drop everything.
- **p1 — high**: actively blocks current epic or visible to users in a way that matters. Next up after any p0.
- **p2 — medium** (default): real work worth doing, no urgency. Most issues land here.
- **p3 — low**: nice-to-have, polish, backlog candidate. Bias toward not filing at all unless the idea would be lost otherwise.

If unsure, pick `p2`. Don't inflate priorities.

### Type rubric (paired with the GitHub `type:` labels)

Pick **exactly one**. When two seem to fit, the more specific one wins (e.g. an a11y bug is `type: a11y`, a perf regression is `type: regression`).

- `type: bug` — something is broken; behavior diverges from intent.
- `type: feature` — net-new capability or surface (replaces the old `enhancement`).
- `type: docs` — README, CLAUDE.md, BRIEF, PLAN, code comments, JSDoc.
- `type: chore` — tooling, config, lint rules, deps bumps, repo housekeeping.
- `type: refactor` — internal restructuring with no behavior change.
- `type: test` — adds or improves automated tests.
- `type: perf` — measurable speed, bundle, or runtime improvement.
- `type: security` — vulnerability fix or hardening.
- `type: a11y` — accessibility fix or improvement (WCAG 2.2 AA is a hard bar — see CLAUDE.md).
- `type: regression` — used to work and no longer does. Distinct from `type: bug` because regressions imply a bisect/revert path.

### Area rubric (paired with the GitHub `area:` labels)

Pick the **smallest set** that's actually true — usually one, occasionally two. Don't sprinkle.

- `area: design-system` — `src/styles/global.css` `@theme` tokens, fonts, base components, color/spacing scales.
- `area: content` — content collections (`src/content.config.ts`), MDX, copy, `src/consts.ts`.
- `area: blog` — `src/pages/blog/`, blog post content, blog index.
- `area: work` — `src/pages/work/`, case studies, `src/content/work/`.
- `area: layout` — `src/layouts/`, `Header.astro`, `Footer.astro`, `MobileNav.svelte`, page shell.
- `area: infra` — `astro.config.mjs`, Vercel config, CI, build, scripts, `package.json`.
- `area: deps` — pure dependency updates (Dependabot, manual bumps).

If the request is genuinely cross-cutting (e.g. "rename a token used in 30 files"), prefer the area where the work originates (`design-system` for the rename) rather than tagging every downstream area.

### Status at creation time

Default new issues to **`status: needs-triage`** unless the user explicitly says otherwise. Don't apply `status: in-progress` (owned by `/next`), `status: needs-review` (PR-side, set when a PR opens), or `status: blocked` (apply only when there's a real blocker named in the body).

Wait for explicit confirmation. Do not run `gh issue create` until the user says go.

## Phase 5 — Create via gh CLI

1. Verify auth: `gh auth status` — bail with a clear message if not authenticated.

2. The repo has a stable five-axis taxonomy. **Reuse it. Don't invent.** Run `gh label list --limit 100` if you need to verify a name.

   - **Priority (always apply exactly one):** `priority: p0`, `priority: p1`, `priority: p2`, `priority: p3`.
   - **Type (always apply exactly one):** `type: bug`, `type: feature`, `type: docs`, `type: chore`, `type: refactor`, `type: test`, `type: perf`, `type: security`, `type: a11y`, `type: regression`.
   - **Area (apply one or more, skip only for cross-cutting work):** `area: design-system`, `area: content`, `area: blog`, `area: work`, `area: layout`, `area: infra`, `area: deps`.
   - **Status (apply at most one; default `status: needs-triage` at creation):** `status: needs-triage`, `status: needs-info`, `status: ready`, `status: blocked`, `status: needs-review`, `status: in-progress`.
   - **Phase (apply if it maps to `docs/PLAN.md`):** `phase: 1`, `phase: 2`, `phase: 3`, `phase: 4`.
   - **Meta:** `epic` (epics only), `breaking-change`, `release-notes`.
   - **Community:** `good first issue`, `help wanted`, `wontfix`, `duplicate`, `invalid`, `question`.

   Only create a new label if it's genuinely missing AND the user confirms. The taxonomy is intentionally complete — if you're reaching for a new label, you're probably mis-classifying.

3. **Order matters for epics:** create children **first**, capture each returned issue number, then create the epic with the task list referencing the real numbers. After the epic exists, edit each child body to add `Part of #EPIC` and concrete `Blocked by #N` references — the bodies you wrote in Phase 3 used placeholders.

4. Create with body files. Every issue gets **exactly one** priority label and **exactly one** type label. Areas, phase, and status are added as applicable. Epics also get the `epic` label:
   ```
   gh issue create \
     --title "..." \
     --body-file tmp/issue-N.md \
     --label "priority: p2,type: feature,area: design-system,status: needs-triage,phase: 1"

   gh issue create \
     --title "..." \
     --body-file tmp/epic.md \
     --label "priority: p1,type: feature,area: design-system,epic,status: needs-triage,phase: 1"
   ```
   Capture stdout — it returns the issue URL/number.

5. Edit follow-ups (filling in real numbers) with:
   ```
   gh issue edit N --body-file tmp/issue-N.md
   ```

If `gh issue create` fails, stop and surface the error — don't try to recover by hand. Half-created epics are worse than none.

## Phase 6 — Cleanup and report

- Delete every file you wrote in `tmp/`. Leave the directory itself in place if it has unrelated contents; remove it if empty.
- Report back to the user: bullet list of created issues with `#N — title — URL`, plus any labels you had to create.

## Quality bar (re-read before submitting)

- A future agent could pick this up cold and execute it. If they'd need to ask "where does this go?" or "what does done look like?", the body isn't done.
- File paths are real and current — verify with Read or Glob if uncertain.
- No padding. No "this issue describes work to..." preamble. Get to the point.
- Don't prescribe implementation details an implementer should decide. Describe the *what* and the *why*; leave room for *how*.
- Don't invent labels that don't exist unless you deliberately created them in Phase 5.
- The acceptance criteria are the contract. If a bullet isn't checkable, rewrite it.
