<script lang="ts">
	import { fly } from 'svelte/transition';

	let {
		project,
		delay = 0,
		handleImageError
	}: {
		project: {
			id: string;
			title: string;
			slug: string | null;
			externalUrl?: string;
			notice?: string;
			client: string;
			description: string;
			image: string;
			tags: string[];
		};
		delay?: number;
		handleImageError: (event: Event, fallbackText: string) => void;
	} = $props();

	// Determine the href - use external URL if no slug, otherwise internal link
	// If no slug and no external URL, it's a disabled card
	const href = project.slug ? `/projects/${project.slug}` : project.externalUrl ?? '#';
	const isExternal = !project.slug && project.externalUrl;
	const isDisabled = !project.slug && !project.externalUrl;
</script>

<!-- Wrap entire card in an anchor tag or div depending on disabled state -->
{#if isDisabled}
	<div
		class="group relative bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col cursor-default"
		in:fly={{ y: 50, duration: 600, delay }}
	>
		<!-- Image container with fixed aspect ratio -->
		<div class="relative w-full pt-[56.25%]">
			<!-- 16:9 aspect ratio -->
			<img
				src={project.image}
				alt={project.title}
				class="absolute top-0 left-0 w-full h-full object-contain object-center p-4 bg-gray-50"
				width="800"
				height="450"
				loading="lazy"
				onerror={(e) => handleImageError(e, project.title)}
			/>
			<!-- Gradient overlay with 100% opaque white at bottom -->
			<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
		</div>

		<!-- Content container -->
		<div class="p-6 flex flex-col flex-grow bg-white">
			<div class="text-sm text-sky-600 font-medium mb-2">{project.client}</div>
			<h3 class="text-2xl font-bold mb-3 text-gray-900">
				{project.title}
			</h3>
			<p class="text-gray-700 mb-4">{project.description}</p>

			<!-- Notice badge -->
			{#if project.notice}
				<div class="mb-4">
					<span class="inline-flex items-center gap-2 px-3 py-2 bg-amber-50 text-amber-800 text-sm font-medium rounded-lg border border-amber-200">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						{project.notice}
					</span>
				</div>
			{/if}

			<div class="flex flex-wrap gap-2 mt-auto pt-4">
				{#each project.tags as tag}
					<span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
						>{tag}</span
					>
				{/each}
			</div>
		</div>

		<div class="px-6 py-4 border-t border-gray-100 flex justify-between items-center text-gray-400">
			<span class="font-medium">Under Development</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
				/>
			</svg>
		</div>
	</div>
{:else}
	<a
		{href}
		target={isExternal ? '_blank' : undefined}
		rel={isExternal ? 'noopener noreferrer' : undefined}
		class="group relative bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col no-underline transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
		in:fly={{ y: 50, duration: 600, delay }}
	>
		<!-- Image container with fixed aspect ratio -->
		<div class="relative w-full pt-[56.25%]">
			<!-- 16:9 aspect ratio -->
			<img
				src={project.image}
				alt={project.title}
				class="absolute top-0 left-0 w-full h-full object-contain object-center p-4 bg-gray-50"
				width="800"
				height="450"
				loading="lazy"
				onerror={(e) => handleImageError(e, project.title)}
			/>
			<!-- Gradient overlay with 100% opaque white at bottom -->
			<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
		</div>

		<!-- Content container -->
		<div class="p-6 flex flex-col flex-grow bg-white">
			<div class="text-sm text-sky-600 font-medium mb-2">{project.client}</div>
			<h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-sky-600 transition-colors">
				{project.title}
			</h3>
			<p class="text-gray-700 mb-4">{project.description}</p>

			<div class="flex flex-wrap gap-2 mt-auto pt-4">
				{#each project.tags as tag}
					<span class="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
						>{tag}</span
					>
				{/each}
			</div>
		</div>

		<div class="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
			<span class="text-sky-600 font-medium">
				{isExternal ? 'View Live Site' : 'View Case Study'}
			</span>
			{#if isExternal}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-sky-600 transform group-hover:translate-x-1 transition-transform"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
					/>
				</svg>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 text-sky-600 transform group-hover:translate-x-1 transition-transform"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/>
				</svg>
			{/if}
		</div>
	</a>
{/if}
