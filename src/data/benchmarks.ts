/**
 * Data for the /labs/benchmarks page. Hand-edited; intentionally a plain typed
 * module (not a content collection) to match the src/consts.ts idiom.
 */

export type Provider = 'anthropic' | 'openai' | 'google';

/**
 * A single dated observation about a model. A model accumulates these over time;
 * the Notes section renders them newest-first. Add via the writing-benchmark-notes
 * skill rather than hand-editing, so the voice stays consistent.
 */
export interface ModelNote {
	/** ISO date (YYYY-MM-DD) the note was written. Drives newest-first ordering. */
	date: string;
	/** The note itself — a concise, measured assessment. */
	body: string;
}

export interface ModelScore {
	/** Which vendor ships the model — drives the provider filter + colour key. */
	provider: Provider;
	/** Display name, e.g. "Opus 4.8". Must be unique across BENCHMARK_MODELS (used as render/animation key). */
	label: string;
	/** Score in schmeckles. Unit of indeterminate worth; compare relatively. */
	score: number;
	/** ISO date (YYYY-MM-DD). Powers the "Newest" sort. */
	releaseDate: string;
	/** Score still forming — rendered with stripes + the tentative animation. */
	tentative?: boolean;
	/** Dated commentary; surfaces in the page's Notes section, newest-first. */
	notes?: ModelNote[];
}

export interface ProviderMeta {
	label: string;
	/** When false, the filter chip renders disabled ("soon"). */
	available: boolean;
}

export const PROVIDERS: Record<Provider, ProviderMeta> = {
	anthropic: { label: 'Anthropic', available: true },
	openai: { label: 'OpenAI', available: false },
	google: { label: 'Google', available: false },
};

/** Headroom multiplier so the top bar never fills the full track (room to grow). */
export const SCALE_HEADROOM = 1.1;

/**
 * Ryan's personal agentic-coding ratings.
 * releaseDate values are the models' official Anthropic announcement dates.
 */
export const BENCHMARK_MODELS: ModelScore[] = [
	{ provider: 'anthropic', label: 'Opus 4.5', score: 80, releaseDate: '2025-11-24' },
	{ provider: 'anthropic', label: 'Opus 4.6', score: 85, releaseDate: '2026-02-05' },
	{ provider: 'anthropic', label: 'Opus 4.7', score: 52, releaseDate: '2026-04-16' },
	{
		provider: 'anthropic',
		label: 'Opus 4.8',
		score: 91,
		releaseDate: '2026-05-28',
		tentative: true,
		notes: [
			{
				date: '2026-05-29',
				body: 'Opus 4.8 pairs well with Claude Code’s new Dynamic Workflow: the harness lets it write a small orchestration script that fans subagents out in parallel, pipes results between stages, has some generate while others judge, then synthesizes. I’d been approximating this by hand with commands and skills, so spawning one from inside a skill is the part I value most. The one cost: “workflow” is now a loaded keyword, and I keep escaping a word I use all day.',
			},
		],
	},
];
