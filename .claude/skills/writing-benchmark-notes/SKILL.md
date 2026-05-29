---
name: writing-benchmark-notes
description: Use when Ryan gives a rough, offhand, or stream-of-consciousness opinion about an AI coding model (e.g. "Opus 4.8 is great because…", "jot this down about 4.7") and wants it captured on the /labs/benchmarks page. Also use for "add a note about <model>", "write this up for the benchmarks page", or refining an existing model note.
metadata:
  version: 1.0.0
---

# Writing Benchmark Notes

Turn Ryan's raw, loose opinion about a coding model into one tight, measured note appended to the model's dated log on `/labs/benchmarks`.

He talks; you craft. Ryan supplies an unpolished take — possibly rambling, with asides and tangents. You distill it into a concise, professional assessment and add it to the data file. You are an editor, not a co-author: capture *his* stance faithfully, just sharper.

## Where notes live

`src/data/benchmarks.ts`. Each model in `BENCHMARK_MODELS` carries an optional `notes` array of `ModelNote` (`{ date, body }`). The page (`src/pages/labs/benchmarks.astro`) renders them per model, **newest-first** — sorting happens at render time, so insertion order in the data file is irrelevant. Append; don't reorder.

```ts
{
  provider: 'anthropic',
  label: 'Opus 4.8',
  score: 91,
  releaseDate: '2026-05-28',
  tentative: true,
  notes: [
    { date: '2026-05-29', body: 'A measured, concise assessment in Ryan’s voice.' },
  ],
},
```

Match the model by its exact `label` (e.g. `'Opus 4.8'`). If the model has no `notes` key yet, add one.

## The voice

Notes are the serious counterweight to the page's playful schmeckles framing. They read as a measured technical assessment — **not** marketing, not a joke.

- **First person, hands-on.** "I reach for…", "In practice I found…". This is Ryan's lived experience with the tool.
- **Strictly professional and neutral.** No jokes, no hype, no exclamation points. The schmeckles bit carries the humor elsewhere; the notes stay dry and credible.
- **Concise.** Aim for 1–3 sentences, ~80 words or fewer. One note makes one point. If the raw take has several distinct ideas, keep the strongest one (plus at most one supporting caveat) rather than cramming them all.
- **Plain language.** "use" not "utilize", "fast" not "performant". No buzzwords ("streamline", "synergy", "game-changer").
- **Honest, including caveats.** If Ryan voiced a gripe or limitation, keep it — a balanced note is more credible than a rave. Don't sand off his reservations.
- **Faithful.** Never add claims, numbers, or benchmarks he didn't make. If his take is vague, the note stays correspondingly modest. Don't invent specificity.

### Hard rule: never "engineer"

Never describe Ryan or his work as "engineering" or call him an "engineer" — it's a protected professional title in BC/Canada (Engineers and Geoscientists BC) and using it without a P.Eng. is a regulatory violation, not a style choice. Use **developer**, **build**, **work**, or a role-specific term. This holds even when Ryan says it himself in his rough take — quietly rephrase.

## Process

1. **Identify the model.** Find the exact `label` in `BENCHMARK_MODELS`. Confirm it exists; if not, ask which model.
2. **Extract the substance.** Read past the filler. What is the one claim worth keeping? What's the supporting detail? What caveat, if any?
3. **Draft** 1–3 sentences in the voice above.
4. **Read it back against the checklist** (below). Revise.
5. **Append** a `{ date, body }` entry to that model's `notes` array. Use today's date in ISO `YYYY-MM-DD`.
6. **Verify:** `pnpm check` then `pnpm build`. Both must pass.
7. **Show Ryan the final note** and where it landed. He gets the last word on his own opinion — offer to adjust tone or trim.

## Pre-commit checklist

- [ ] 1–3 sentences, ≤ ~60 words, one core point.
- [ ] First person, measured, neutral — no hype, no jokes, no `!`.
- [ ] No buzzwords; plain words throughout.
- [ ] Only claims Ryan actually made; caveats preserved.
- [ ] The word "engineer"/"engineering" appears nowhere.
- [ ] Date is today, ISO format; entry added to the correct model by `label`.

## Worked example

**Ryan's raw take (verbatim-ish):**

> 4.8 works really well with a new Claude Code feature they call "Dynamic Workflow" — the harness lets Claude write a small orchestration script that spawns subagents, fans them out in parallel, pipes results between stages, has some generate and others judge/verify, then synthesizes. I love the concept. I've been doing this myself with commands and later skills. I like being able to spawn a dynamic workflow inside a skill. One thing I don't like: I now have to escape the word "workflow" all the time, because I use it constantly in normal development.

**Crafted note:**

> Opus 4.8 is the first model I trust to drive a Dynamic Workflow — the harness lets it write its own orchestration script: fan subagents out in parallel, pipe results between stages, split generators from verifiers, then synthesize. I'd been approximating this by hand with commands and skills, so having it spawn one from inside a skill is the real unlock. The one cost: "workflow" is now a loaded keyword, and I keep escaping a word I use all day.

Why it works: keeps his genuine enthusiasm but states it flatly; preserves the real caveat (the keyword collision) for balance; no hype words; first-person and hands-on; no "engineer".

## Common mistakes

| Mistake | Fix |
|---------|-----|
| Marketing gloss ("game-changing", "seamless") | Strip it. State what it does plainly. |
| Cramming every aside from the raw take | One note, one point. Drop the weaker idea. |
| Dropping his caveat to make it a clean rave | Keep the reservation — balance reads as credible. |
| Inventing specificity he didn't give | Stay as concrete as his actual take, no more. |
| Reordering the `notes` array to put newest first | The page sorts by date. Just append. |
| Letting "engineer" through because he said it | Rephrase silently — it's a regulatory rule. |
