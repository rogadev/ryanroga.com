<script lang="ts">
	import type { ModelScore, Provider } from '../../data/benchmarks';

	interface Props {
		/** Already filtered + sorted by the parent. */
		models: ModelScore[];
		/** maxVisibleScore * SCALE_HEADROOM. */
		scaleMax: number;
		/** Resolves a bar colour for a provider (accent when single-provider). */
		colorFor: (p: Provider) => string;
	}
	let { models, scaleMax, colorFor }: Props = $props();

	// Per-tentative-row animated score, keyed by model label. Holds the currently
	// displayed (possibly mid-excursion) score. Both the number and the bar width
	// derive from it, so they always move in lockstep.
	let anim = $state<Record<string, number>>({});

	function baseWidth(score: number): number {
		// Guard against a zero scaleMax (e.g. empty/all-zero data) — never emit NaN%.
		return scaleMax > 0 ? (score / scaleMax) * 100 : 0;
	}

	function animatedScore(m: ModelScore): number {
		return m.tentative ? (anim[m.label] ?? m.score) : m.score;
	}

	function displayValue(m: ModelScore): number {
		return Math.round(animatedScore(m));
	}

	function displayWidth(m: ModelScore): number {
		return baseWidth(animatedScore(m));
	}

	$effect(() => {
		const tentatives = models.filter((m) => m.tentative);
		if (tentatives.length === 0) {
			anim = {};
			return;
		}

		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce) {
			// Settle immediately; no motion.
			anim = Object.fromEntries(tentatives.map((m) => [m.label, m.score]));
			return;
		}

		// Each cycle: hold steady at the true score, then one smooth excursion that
		// rises above the value, dips below it, and returns to base — then hold again.
		const STEADY = 3500; // steady-state hold (ms)
		const ACTIVE = 2800; // duration of the up/down excursion (ms)
		const CYCLE = STEADY + ACTIVE;
		const AMPLITUDE = 5; // peak deviation, in schmeckles
		const t0 = performance.now();
		let raf = 0;

		function frame(now: number) {
			const next: Record<string, number> = {};
			tentatives.forEach((m, i) => {
				// Stagger phases so multiple tentatives don't move in lockstep.
				const el = (now - t0 + i * 1200) % CYCLE;
				let score = m.score;
				if (el >= STEADY) {
					const t = (el - STEADY) / ACTIVE; // 0..1 across the excursion
					// One full sine period: base → up → base → down → base.
					score = m.score + AMPLITUDE * Math.sin(2 * Math.PI * t);
				}
				next[m.label] = score;
			});
			anim = next;
			raf = requestAnimationFrame(frame);
		}
		raf = requestAnimationFrame(frame);
		return () => cancelAnimationFrame(raf);
	});
</script>

<div class="chart" aria-hidden="true">
	{#each models as m (m.label)}
		<div class="row">
			<span class="label">{m.label}</span>
			<div class="track">
				<div
					class="fill"
					class:tentative={m.tentative}
					style="width: {displayWidth(m)}%; --c: {colorFor(m.provider)};"
				>
					<span class="val">{displayValue(m)}&nbsp;◊</span>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.chart {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.row {
		display: grid;
		grid-template-columns: 5rem 1fr;
		align-items: center;
		gap: 0.875rem;
	}
	.label {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--color-fg);
	}
	.track {
		position: relative;
		height: 2rem;
		border: 1px solid var(--color-border);
		border-radius: var(--radius-sm);
		overflow: hidden;
		background: repeating-linear-gradient(
			45deg,
			color-mix(in oklab, var(--color-fg) 4%, var(--color-bg)) 0 6px,
			color-mix(in oklab, var(--color-fg) 8%, var(--color-bg)) 6px 12px
		);
	}
	.fill {
		position: absolute;
		inset: 0 auto 0 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 0.625rem;
		border-radius: calc(var(--radius-sm) - 1px) 0 0 calc(var(--radius-sm) - 1px);
		background: var(--c);
		will-change: width;
	}
	/* Settled bars animate width changes (e.g. on re-sort); tentative bars are driven frame-by-frame. */
	.fill:not(.tentative) {
		transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);
	}
	.fill.tentative {
		background: repeating-linear-gradient(
			45deg,
			var(--c) 0 9px,
			color-mix(in oklab, var(--c) 70%, #000) 9px 18px
		);
	}
	.val {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		font-weight: 600;
		/* White-on-accent meets contrast for the single (Anthropic) provider. NOTE:
		   when multiple providers are enabled, colorFor() returns lighter tints — revisit
		   this text colour for AA contrast before turning on OpenAI/Google. */
		color: var(--color-accent-fg);
	}
	@media (prefers-reduced-motion: reduce) {
		.fill:not(.tentative) {
			transition: none;
		}
	}
</style>
