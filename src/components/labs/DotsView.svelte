<script lang="ts">
	import type { ModelScore, Provider } from '../../data/benchmarks';

	interface Props {
		models: ModelScore[];
		scaleMax: number;
		colorFor: (p: Provider) => string;
	}
	let { models, scaleMax, colorFor }: Props = $props();

	function leftPct(score: number): number {
		// Guard against a zero scaleMax (e.g. empty/all-zero data) — never emit NaN%.
		return scaleMax > 0 ? (score / scaleMax) * 100 : 0;
	}
</script>

<div class="plot" aria-hidden="true">
	<div class="axis">
		{#each models as m, i (m.label)}
			<div
				class="dot"
				class:tent={m.tentative}
				class:susp={m.suspended}
				class:below={i % 2 === 1}
				style="left: {leftPct(m.score)}%; --c: {colorFor(m.provider)};"
			>
				<span class="lbl"
					><span class="nm">{m.label}</span> <span class="v">{m.score}</span>{#if m.suspended}
						<span class="tag">suspended</span>{/if}</span
				>
				<span class="pt"></span>
			</div>
		{/each}
		<span class="cap">∞ ?</span>
	</div>
</div>

<style>
	.plot {
		padding: 3rem 0.5rem 3rem;
	}
	.axis {
		position: relative;
		height: 1px;
		background: var(--color-border-strong);
	}
	.cap {
		position: absolute;
		right: -0.25rem;
		top: -0.5rem;
		padding-left: 0.5rem;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--color-fg-subtle);
		background: var(--color-bg);
	}
	.dot {
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.dot .pt {
		display: block;
		width: 12px;
		height: 12px;
		margin: 0 auto;
		border-radius: 50%;
		background: var(--c);
		border: 2px solid var(--color-bg);
		box-shadow: 0 0 0 1px var(--c);
	}
	.dot.tent .pt {
		background: var(--color-bg);
	}
	/* Pulled from service: neutral point + ring, muted label — present, not reachable. */
	.dot.susp .pt {
		background: color-mix(in oklab, var(--color-fg) 22%, var(--color-bg));
		box-shadow: 0 0 0 1px var(--color-border-strong);
	}
	.dot.susp .lbl {
		color: var(--color-fg-muted);
	}
	.dot.susp .nm {
		text-decoration: line-through;
		text-decoration-thickness: 1px;
	}
	.dot .tag {
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--color-fg-subtle);
	}
	.dot .lbl {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		white-space: nowrap;
		font-family: var(--font-mono);
		font-size: var(--text-2xs);
		color: var(--color-fg);
	}
	.dot.below .lbl {
		bottom: auto;
		top: 1rem;
	}
	.dot .v {
		color: var(--color-fg-subtle);
	}
</style>
