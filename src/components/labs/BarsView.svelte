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

	// Per-tentative-row animated state, keyed by model label.
	let anim = $state<Record<string, { value: number; offset: number }>>({});
	// Gate the initial grow transition.
	let mounted = $state(false);

	function baseWidth(score: number): number {
		// Guard against a zero scaleMax (e.g. empty/all-zero data) — never emit NaN%.
		return scaleMax > 0 ? (score / scaleMax) * 100 : 0;
	}

	function displayValue(m: ModelScore): number {
		return m.tentative ? (anim[m.label]?.value ?? m.score) : m.score;
	}

	function displayWidth(m: ModelScore): number {
		if (!mounted) return 0;
		const offset = m.tentative ? (anim[m.label]?.offset ?? 0) : 0;
		return baseWidth(m.score) + offset;
	}

	$effect(() => {
		mounted = true;
	});

	$effect(() => {
		const tentatives = models.filter((m) => m.tentative);
		if (tentatives.length === 0) {
			anim = {};
			return;
		}

		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduce) {
			// Settle immediately; no motion.
			anim = Object.fromEntries(tentatives.map((m) => [m.label, { value: m.score, offset: 0 }]));
			return;
		}

		const SCRAMBLE = 1400;
		const HOLD = 3500;
		const CYCLE = SCRAMBLE + HOLD;
		const t0 = performance.now();
		let raf = 0;

		function frame(now: number) {
			const next: Record<string, { value: number; offset: number }> = {};
			tentatives.forEach((m, i) => {
				// Stagger phases so multiple tentatives don't move in lockstep.
				const el = (now - t0 + i * 800) % CYCLE;
				const offset = Math.sin(el / 520) * 1.2; // gentle ±1.2% "breathing"
				let value = m.score;
				if (el < SCRAMBLE) {
					const p = el / SCRAMBLE;
					const spread = Math.round(16 * (1 - p));
					value = spread === 0 ? m.score : m.score + Math.floor(Math.sin(el / 45) * spread);
				}
				next[m.label] = { value, offset };
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
		background: repeating-linear-gradient(45deg, #141417 0 6px, #0e0e10 6px 12px);
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
	/* Settled bars grow on mount; tentative bars are driven frame-by-frame. */
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
		color: #fff;
	}
	@media (prefers-reduced-motion: reduce) {
		.fill:not(.tentative) {
			transition: none;
		}
	}
</style>
