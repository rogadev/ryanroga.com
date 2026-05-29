# Labs · Benchmarks — "Scored in Schmeckles" — Design

**Author:** Ryan Roga (with Claude)
**Status:** Approved design · 2026-05-29
**Route:** `/labs/benchmarks` (unlisted)

---

## 1. Purpose

A hidden, shareable page where Ryan publishes his own hands-on ratings of coding
models, measured in **schmeckles** — a deliberately opaque unit (a *Rick and Morty*
reference). The absolute value is unknowable by design; the page is for *relative*
comparison. Visitors who get the joke find it funny; everyone else finds the
obscure unit funny and may go look it up. The lore stays vague on purpose.

Launches with one benchmark — **agentic coding**, Anthropic Opus models — but the
data model and interface are built to grow to other providers (OpenAI, Google) and,
later, a separate interface for IDEs.

## 2. Scope

**In scope (v1):**

- A single page at `/labs/benchmarks`, not linked from nav, shared by URL only.
- One dynamic model-comparison interface (provider filter, sort, view toggles).
- Seeded with the four Anthropic Opus agentic-coding scores.
- An optional, initially-empty Notes section for per-model commentary.

**Out of scope (v1):**

- A `/labs` index page (future home for other hidden toys).
- An IDE benchmark interface (planned later, separate).
- OpenAI / Google data (interface accommodates them; chips render disabled until data exists).
- Per-model notes content (field supported; none written at launch).

## 3. Route & discoverability

- File: `src/pages/labs/benchmarks.astro`, rendered through the existing `Base` layout.
- **Not** added to header or footer navigation.
- `<meta name="robots" content="noindex, nofollow">` so the page stays genuinely
  unlisted while remaining reachable by anyone with the link.
- No `/labs` index route is created in v1; visiting `/labs` falls through to the 404 page.

## 4. Data model

A typed data module at `src/data/benchmarks.ts`, following the `consts.ts` idiom
(no Astro content collection — overkill for a small hand-edited list).

```ts
export type Provider = 'anthropic' | 'openai' | 'google';

export interface ModelScore {
  provider: Provider;
  label: string;        // display name, e.g. "Opus 4.8"
  score: number;        // schmeckles
  releaseDate: string;  // ISO date, e.g. "2026-05-20" — powers the "Newest" sort
  tentative?: boolean;  // score still forming; rendered with striped fill + marker
  note?: string;        // optional rationale; surfaces in the Notes section
}

export const PROVIDERS: Record<Provider, { label: string; available: boolean }> = {
  anthropic: { label: 'Anthropic', available: true },
  openai:    { label: 'OpenAI',    available: false },
  google:    { label: 'Google',    available: false },
};

export const BENCHMARK_MODELS: ModelScore[] = [ /* seeded below */ ];
```

A provider's `available: false` renders its filter chip disabled ("soon"). Flipping
it to `true` once data is added requires no component changes.

### Seed data (v1)

Ryan's personal Opus agentic-coding benchmarks:

| Model    | Schmeckles | Tentative |
|----------|-----------:|-----------|
| Opus 4.5 | 80         | no        |
| Opus 4.6 | 85         | no        |
| Opus 4.7 | 52         | no        |
| Opus 4.8 | 91         | yes       |

**Release dates — placeholders pending Ryan's confirmation** (needed for "Newest"
sort; correct before merge):

| Model    | Placeholder release date |
|----------|--------------------------|
| Opus 4.5 | 2025-11-24               |
| Opus 4.6 | 2026-01-28               |
| Opus 4.7 | 2026-03-25               |
| Opus 4.8 | 2026-05-20               |

## 5. Interface — one Svelte 5 island

The page is static `.astro` shell + one `.svelte` island
(`src/components/labs/SchmeckleChart.svelte`) hydrated with `client:visible`.
An island is justified: provider filtering, sorting, and view switching are real
client-side state.

Runes mode (`$props`, `$state`, `$derived`). Structure follows the CLAUDE.md
component order. The island receives `BENCHMARK_MODELS` and `PROVIDERS` as props
from the `.astro` page so all data stays out of the client bundle's source of truth.

### Controls

- **Provider filter** — multi-select toggle chips. Anthropic on by default.
  Unavailable providers render disabled with a "soon" affix. Selecting multiple
  available providers combines them in one chart.
- **Sort** — segmented toggle: `Score` (descending) ↔ `Newest` (releaseDate descending).
- **View** — segmented toggle: `Bars` (primary, Direction A) ↔ `Dots` (Direction C).

### Bars view (primary)

- One ranked row per visible model: mono label + horizontal bar.
- Bars scale relative to the **highest currently-visible score** (so the leader
  fills the track; the open-ended right edge reinforces "unknown ceiling").
- Track is a low-contrast hatched "unknown zone".
- `tentative` models use a striped accent fill + a small "tentative" marker.
- Each bar shows its schmeckle value as mono text inside/after the fill.

### Dots view (alternative)

- Single horizontal axis with no fixed maximum; the axis trails off into "∞ ?".
- Each model is a dot positioned by score; providers are distinguished by color
  once more than one is visible (within the single-accent constraint — use accent
  + neutral tints, not a rainbow).
- Hollow dot = tentative.

### Empty / single states

- If a filter selection yields zero models, show an intentional empty state
  ("No models selected").
- The chart must read correctly with a single model visible.

## 6. Lore & notes

- **Dek:** one understated line, no explainer paragraph. The term "schmeckles"
  carries a subtle dotted underline (a `<abbr>`-style gloss) but links nowhere —
  curious visitors Google it. The `◊` glyph is used as the schmeckle symbol.
- **Notes section:** below the chart, separated by a hairline border. Renders the
  `note` of any model that has one, keyed to the model label. At launch no model has
  a note, so the section renders a single quiet placeholder line (it is always
  present, never omitted — keeps the layout stable as notes are added later).
- **Footer microcopy:** "scores are subjective & reflect my own hands-on use ·
  tentative = still forming an opinion".

## 7. Quality bars (hard requirements)

**Mobile-first**

- Base layout is single-column bars at 320px; control row wraps gracefully.
- All toggles / chips are ≥ 44×44px touch targets.

**Responsive**

- No horizontal scroll 320px → 1920px+. Bars use relative widths, never fixed px.
- Content constrained to a readable max-width within the `Base` container.

**Accessibility (WCAG 2.2 AA)**

- Toggles are real `<button>`s with `aria-pressed`; provider filter is a labeled
  group (`role="group"` + `aria-label`).
- Every bar exposes its value as text — state is never color-only. Tentative state
  is conveyed by the marker/text, not stripe color alone.
- Dots view provides an accessible fallback: each dot has an `aria-label`, and the
  underlying data is also available as a visually-hidden list (or a `<table>` the
  views render from) so screen-reader users get the full ranking.
- `prefers-reduced-motion`: bar-grow / dot-move transitions reduce to none.
- One `<h1>`; skip-to-main link inherited from `Base`. `lang` on `<html>` (Base).
- Focus rings visible on all controls (global `:focus-visible` ring applies).

**On-brand**

- No drop shadows; hairline (1px) borders for structure.
- Single accent (`--color-accent`); neutrals otherwise. Holds up with color off.
- Mono for labels, values, eyebrow — per the brief's "monospace as personality".

## 8. Files touched

- `src/pages/labs/benchmarks.astro` — new page (shell, head, noindex, data import).
- `src/data/benchmarks.ts` — new typed data module + seed data.
- `src/components/labs/SchmeckleChart.svelte` — new island (controls + both views).

No changes to nav, layouts, or global styles are required.

## 9. Open items

- **Release dates** for the four Opus models — placeholders seeded; Ryan to confirm
  before merge.
