<svelte:options runes={true} />

<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	// Project data - this could come from an API or data file
	const featuredProjects = [
		{
			id: 'carevo-logistics',
			title: 'CarEvo Lot Logistics',
			slug: 'lot-logistics-web-application',
			client: 'CarEvo',
			description:
				"Vehicle tracking system for CarEvo's lot team to monitor service appointments and vendor trips",
			image: '/images/Product_example.png',
			tags: ['Web Application', 'Logistics', 'Tracking System']
		},
		{
			id: 'eztripr',
			title: 'EZTripr Trip Tracker',
			slug: 'eztripr-trip-tracker',
			client: 'Granny Go Go',
			description:
				'Medical patient trip tracking application for Granny Go Go drivers across Vancouver Island',
			image: '/images/eztripr.png',
			tags: ['Healthcare', 'Transportation', 'Tracking System']
		}
	];

	// Function to handle image loading errors
	function handleImageError(event: Event, fallbackText: string) {
		const target = event.target as HTMLImageElement;
		target.src = `https://placehold.co/800x450/e2e8f0/475569?text=${encodeURIComponent(fallbackText)}`;
	}
</script>

<!-- Featured Projects Section -->
<section id="featured-projects" class="py-20 px-4 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16 animate-on-scroll">
			<h2 class="inline-block text-4xl md:text-5xl font-bold relative">
				<span class="relative z-10 text-gray-900">Featured Projects</span>
				<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
				></span>
			</h2>
			<p class="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
				Explore our recent work and discover how we've helped businesses transform their digital
				presence
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
			{#each featuredProjects as project, i}
				<ProjectCard {project} delay={i * 200} {handleImageError} />
			{/each}
		</div>
	</div>
</section>
