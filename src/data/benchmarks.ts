/**
 * Data for the /labs/benchmarks page. Hand-edited; intentionally a plain typed
 * module (not a content collection) to match the src/consts.ts idiom.
 */

export type Provider = 'anthropic' | 'openai' | 'google';

export interface ModelScore {
	/** Which vendor ships the model — drives the provider filter + colour key. */
	provider: Provider;
	/** Display name, e.g. "Opus 4.8". */
	label: string;
	/** Score in schmeckles. Unit of indeterminate worth; compare relatively. */
	score: number;
	/** ISO date (YYYY-MM-DD). Powers the "Newest" sort. */
	releaseDate: string;
	/** Score still forming — rendered with stripes + the tentative animation. */
	tentative?: boolean;
	/** Optional rationale; surfaces in the page's Notes section. */
	note?: string;
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
 * NOTE: releaseDate values are PLACEHOLDERS pending confirmation — correct before merge.
 */
export const BENCHMARK_MODELS: ModelScore[] = [
	{ provider: 'anthropic', label: 'Opus 4.5', score: 80, releaseDate: '2025-11-24' },
	{ provider: 'anthropic', label: 'Opus 4.6', score: 85, releaseDate: '2026-01-28' },
	{ provider: 'anthropic', label: 'Opus 4.7', score: 52, releaseDate: '2026-03-25' },
	{
		provider: 'anthropic',
		label: 'Opus 4.8',
		score: 91,
		releaseDate: '2026-05-20',
		tentative: true,
	},
];
