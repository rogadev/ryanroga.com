<script lang="ts">
	import ProjectPagination from './ProjectPagination.svelte';
	import CarEvoLogistics from './CarEvoLogistics.svelte';
	import CarEvoCustomer from './CarEvoCustomer.svelte';
	import { fade } from 'svelte/transition';

	interface PageChangeEventDetail {
		currentPage: number;
	}

	const projects = [CarEvoLogistics, CarEvoCustomer];
	const numberOfPages = projects.length;

	let currentPage = 1;

	function handlePageChange(event: CustomEvent<PageChangeEventDetail>) {
		currentPage = event.detail.currentPage;
	}
</script>

<svelte:head>
	<title>Projects | Roga.dev</title>
	<meta
		name="description"
		content="Find a list of all my JavaScript/TypeScript projects. Projects in production, development, and in need of fundraising. Support me on GitHub."
	/>
</svelte:head>

<div>
	<ProjectPagination {currentPage} {numberOfPages} on:pageChange={handlePageChange} />
</div>

<div>
	{#if currentPage > 0 && currentPage <= projects.length}
		<div transition:fade={{ duration: 500 }}>
			<svelte:component this={projects[currentPage - 1]} />
		</div>
	{/if}
	{#if currentPage === 0}
		<p class="text-lg m-8 text-center">Page not found</p>
	{/if}
</div>
