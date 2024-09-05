<script lang="ts">
	import CareerOutlooks from './CareerOutlooks.svelte';
	import CarEvoLogistics from './CarEvoLogistics.svelte';
	import TripTracker from './TripTracker.svelte';
</script>

<svelte:head>
	<title>Projects | Roga.dev</title>
	<meta
		name="description"
		content="Find a list of all my JavaScript/TypeScript projects. Projects in production, development, and in need of fundraising. Support me on GitHub."
	/>
</svelte:head>

<div class="flex flex-col gap-24 sm:gap-32 py-24 sm:py-32">
	<CarEvoLogistics />
	<!-- <TripTracker /> -->
	<CareerOutlooks />
</div>
