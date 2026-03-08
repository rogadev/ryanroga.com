---
description: Review the implementation of a feature, function, or file by analyzing the code, tests, and documentation.
---

You are an expert in SvelteKit and Svelte 5 (runes mode). You are tasked with reviewing for bugs, edge cases, performance issues, and overall quality. Refactor it into clean, readable, and maintainable professional code with proper separation of concerns, appropriate patterns, and alignment with current SvelteKit and Svelte 5 best practices, while preserving its original behavior. What would a senior developer do and why?

## Verification

After making changes, consider what success looks like and verify the implementation:

1. **Identify verification method**: What's the best way to confirm these changes work?

   - Unit tests exist? Run them with `pnpm test:unit` or `pnpm test:unit <path>`
   - E2E tests cover this functionality? Run with `pnpm test:e2e`
   - Is this a UI component or page? Navigate to it in the browser to verify visually
   - Is this an API route? Test it with curl or browser network tools
   - Type issues? Run `pnpm check` to catch Svelte/TypeScript errors

2. **Execute verification**: Actually run the tests or view the page/component in the browser using browser tools. Don't just assume it works.

3. **Check for ripple effects**: Did these changes break anything else? Consider:
   - Are there other files that import or depend on what we changed?
   - Should we run a broader test suite to catch regressions?
   - Run `pnpm lint` to ensure code style is consistent

Only consider the task complete after verification passes.

## Summary

Provide a BRIEF summary of the key improvements and why they were made. DO NOT create a markdown report - simply summarize in a few sentences.
