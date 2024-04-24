<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let currentPage: number = 0;
	export let numberOfPages: number = 0;

	const dispatch = createEventDispatcher();
	$: dispatch('pageChange', { currentPage });

	const defaultStyles =
		'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300';
	const activeStyles = 'border-indigo-500 text-indigo-600';
	const prevNextStyles =
		'inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700';

	const previousPage = () => {
		if (currentPage === 0) return;
		if (currentPage > 1) dispatch('pageChange', { currentPage: currentPage - 1 });
	};

	const nextPage = () => {
		if (currentPage === 0) return;
		if (currentPage < numberOfPages) dispatch('pageChange', { currentPage: currentPage + 1 });
	};
</script>

<nav class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
	<div class="-mt-px flex w-0 flex-1">
		<button
			on:click={previousPage}
			disabled={currentPage === 1 || currentPage === 0}
			class:disabled={currentPage === 1}
			class={prevNextStyles}
		>
			<svg
				class="mr-3 h-5 w-5 text-gray-400"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
					clip-rule="evenodd"
				/>
			</svg>
			Previous
		</button>
	</div>
	<div class="hidden md:-mt-px md:flex">
		{#each new Array(numberOfPages) as _, index}
			<button
				on:click={() => {
					currentPage = index + 1;
				}}
				class={`inline-flex items-center border-t-2 ${index + 1 === currentPage ? activeStyles : defaultStyles} px-4 pt-4 text-sm font-medium transition-all duration-500`}
				aria-current={index + 1 === currentPage ? 'page' : undefined}
			>
				{index + 1}
			</button>
		{/each}
	</div>
	<div class="-mt-px flex w-0 flex-1 justify-end">
		<button
			on:click={nextPage}
			disabled={currentPage === numberOfPages + 1}
			class:disabled={currentPage === numberOfPages || currentPage === 0}
			class={prevNextStyles}
		>
			Next
			<svg
				class="ml-3 h-5 w-5 text-gray-400"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</nav>

<style>
	.disabled {
		pointer-events: none;
		cursor: default;
		opacity: 0.5;
	}
</style>
