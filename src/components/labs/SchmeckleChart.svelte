<script lang="ts">
	import type { ModelScore, Provider, ProviderMeta } from '../../data/benchmarks';
	import { SCALE_HEADROOM } from '../../data/benchmarks';
	import BarsView from './BarsView.svelte';
	import DotsView from './DotsView.svelte';
	import { SvelteSet } from 'svelte/reactivity';

	interface Props {
		models: ModelScore[];
		providers: Record<Provider, ProviderMeta>;
	}
	let { models, providers }: Props = $props();

	const providerKeys = Object.keys(providers) as Provider[];
	const availableKeys = providerKeys.filter((p) => providers[p].available);

	// Provider colour key — tints of the single accent hue (honours "one accent").
	const PROVIDER_TINT: Record<Provider, string> = {
		anthropic: 'var(--color-accent)',
		openai: '#8b94ff',
		google: '#c0c4ff',
	};

	const selected = new SvelteSet<Provider>(availableKeys);
	let sort = $state<'score' | 'newest'>('score');
	let view = $state<'bars' | 'dots'>('bars');

	function toggleProvider(p: Provider) {
		if (!providers[p].available) return;
		if (selected.has(p)) selected.delete(p);
		else selected.add(p);
	}

	const visible = $derived(
		models
			.filter((m) => selected.has(m.provider))
			.toSorted((a, b) =>
				sort === 'score' ? b.score - a.score : b.releaseDate.localeCompare(a.releaseDate),
			),
	);

	const scaleMax = $derived(
		visible.length ? Math.max(...visible.map((m) => m.score)) * SCALE_HEADROOM : 1,
	);

	const multiProvider = $derived(visible.some((m) => m.provider !== visible[0].provider));

	function colorFor(p: Provider): string {
		return multiProvider ? PROVIDER_TINT[p] : 'var(--color-accent)';
	}
</script>

<div class="wrap">
	<!-- Controls -->
	<div class="controls">
		<div class="group" role="group" aria-label="Filter by provider">
			<span class="glabel">Provider</span>
			{#each providerKeys as p (p)}
				<button
					type="button"
					class="chip"
					class:on={selected.has(p)}
					aria-pressed={selected.has(p)}
					disabled={!providers[p].available}
					onclick={() => toggleProvider(p)}
				>
					{providers[p].label}{providers[p].available ? '' : ' · soon'}
				</button>
			{/each}
		</div>

		<div class="group" role="group" aria-label="Sort order">
			<span class="glabel">Sort</span>
			<div class="seg">
				<button
					type="button"
					class:on={sort === 'score'}
					aria-pressed={sort === 'score'}
					onclick={() => (sort = 'score')}>Score</button
				>
				<button
					type="button"
					class:on={sort === 'newest'}
					aria-pressed={sort === 'newest'}
					onclick={() => (sort = 'newest')}>Newest</button
				>
			</div>
		</div>

		<div class="group" role="group" aria-label="Chart view">
			<span class="glabel">View</span>
			<div class="seg">
				<button
					type="button"
					class:on={view === 'bars'}
					aria-pressed={view === 'bars'}
					onclick={() => (view = 'bars')}>Bars</button
				>
				<button
					type="button"
					class:on={view === 'dots'}
					aria-pressed={view === 'dots'}
					onclick={() => (view = 'dots')}>Dots</button
				>
			</div>
		</div>
	</div>

	<!-- Accessible source of truth (screen readers). Visual chart below is aria-hidden. -->
	<table class="sr-only">
		<caption>AI coding models ranked by schmeckle score. Higher is better.</caption>
		<thead>
			<tr><th>Model</th><th>Provider</th><th>Schmeckles</th><th>Status</th></tr>
		</thead>
		<tbody>
			{#each visible as m (m.label)}
				<tr>
					<td>{m.label}</td>
					<td>{providers[m.provider].label}</td>
					<td>{m.score}</td>
					<td>{m.tentative ? 'Tentative — score still forming' : 'Settled'}</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<!-- Visual chart -->
	<div class="view">
		{#if visible.length === 0}
			<p class="empty">No models selected.</p>
		{:else if view === 'bars'}
			<BarsView models={visible} {scaleMax} {colorFor} />
		{:else}
			<DotsView models={visible} {scaleMax} {colorFor} />
		{/if}
	</div>

	<!-- Legend -->
	<div class="legend">
		<span class="item"><span class="dia">◊</span> = schmeckles</span>
		<span class="item"><span class="sw solid"></span> settled score</span>
		<span class="item"><span class="sw striped"></span> tentative — still forming an opinion</span>
		{#if multiProvider}
			{#each providerKeys.filter((p) => selected.has(p)) as p (p)}
				<span class="item"
					><span class="sw" style="background: {PROVIDER_TINT[p]}"></span>
					{providers[p].label}</span
				>
			{/each}
		{/if}
	</div>
</div>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
	.controls {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
		align-items: center;
		padding-bottom: 1.25rem;
		border-bottom: 1px solid var(--color-border);
	}
	.group {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.glabel {
		font-family: var(--font-mono);
		font-size: var(--text-2xs);
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-fg-subtle);
	}
	.chip {
		min-height: 2.75rem; /* 44px touch target */
		display: inline-flex;
		align-items: center;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		padding: 0 0.75rem;
		border-radius: 999px;
		border: 1px solid var(--color-border-strong);
		color: var(--color-fg-muted);
		background: transparent;
		cursor: pointer;
	}
	.chip.on {
		background: color-mix(in oklab, var(--color-accent) 18%, transparent);
		border-color: var(--color-accent);
		color: var(--color-fg);
	}
	.chip:disabled {
		opacity: 0.45;
		cursor: not-allowed;
	}
	.seg {
		display: inline-flex;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-md);
		overflow: hidden;
	}
	.seg button {
		min-height: 2.75rem;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		padding: 0 0.75rem;
		background: transparent;
		color: var(--color-fg-muted);
		border: 0;
		cursor: pointer;
	}
	.seg button.on {
		background: var(--color-bg-elevated);
		color: var(--color-fg);
	}
	.view {
		margin: 1.5rem 0 0;
	}
	.empty {
		padding: 2rem 0;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--color-fg-subtle);
	}
	.legend {
		display: flex;
		flex-wrap: wrap;
		gap: 1.125rem;
		margin-top: 1.125rem;
		padding-top: 1rem;
		border-top: 1px solid var(--color-border);
		font-family: var(--font-mono);
		font-size: var(--text-2xs);
		color: var(--color-fg-subtle);
	}
	.item {
		display: inline-flex;
		align-items: center;
		gap: 0.4375rem;
	}
	.dia {
		color: var(--color-fg);
	}
	.sw {
		width: 22px;
		height: 12px;
		border-radius: var(--radius-xs);
		flex: none;
	}
	.sw.solid {
		background: var(--color-accent);
	}
	.sw.striped {
		background: repeating-linear-gradient(
			45deg,
			var(--color-accent) 0 5px,
			color-mix(in oklab, var(--color-accent) 70%, #000) 5px 10px
		);
	}
</style>
