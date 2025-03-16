<script lang="ts">
	import { fly } from 'svelte/transition';

	export let project: {
		id: string;
		title: string;
		slug: string;
		client: string;
		description: string;
		image: string;
		tags: string[];
	};

	export let delay = 0;
	export let handleImageError: (event: Event, fallbackText: string) => void;
</script>

<!-- Wrap entire card in an anchor tag -->
<a
	href="/projects/{project.slug}"
	class="group relative bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col no-underline transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
>
	<!-- Image container with fixed aspect ratio -->
	<div class="relative w-full pt-[56.25%]">
		<!-- 16:9 aspect ratio -->
		<img
			src={project.image}
			alt={project.title}
			class="absolute top-0 left-0 w-full h-full object-cover object-left-top"
			on:error={(e) => handleImageError(e, project.title)}
		/>
		<!-- Gradient overlay with 100% opaque white at bottom -->
		<div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
	</div>

	<!-- Content container -->
	<div class="p-6 flex flex-col flex-grow bg-white">
		<div class="text-sm text-blue-600 font-medium mb-2">{project.client}</div>
		<h3 class="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
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
		<span class="text-blue-600 font-medium">View Case Study</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 text-blue-600 transform group-hover:translate-x-1 transition-transform"
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
	</div>
</a>
