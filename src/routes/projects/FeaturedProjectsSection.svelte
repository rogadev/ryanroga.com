<svelte:options runes={true} />

<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';

	// Project data - this could come from an API or data file
	const featuredProjects = [
		{
			id: 'techcentral-telus',
			title: 'TechCentral (TELUS)',
			slug: 'techcentral-telus',
			client: 'TELUS Communications',
			description:
				'Internal content delivery platform serving employees across Canada in English and French with unified search, preferences, and CMS preview workflows.',
			image: '/logos/TELUS_Logo.svg',
			tags: ['Internal Platform', 'Next.js 15', 'Bilingual', 'Enterprise']
		},
		{
			id: 'carevo-logistics',
			title: 'CarEvo Lot Logistics',
			slug: 'lot-logistics-web-application',
			client: 'CarEvo',
			description:
				"Vehicle tracking system that replaced spreadsheets with QR-based inventory management, achieving 99.9% visibility and 40% efficiency gains.",
			image: '/images/Product_example.png',
			tags: ['Internal Tool', 'Vue.js', 'Supabase', 'Logistics']
		},
		{
			id: 'viu-career-outlooks',
			title: 'VIU Career Outlooks',
			slug: null, // no link - under renovation
			client: 'Vancouver Island University',
			description:
				'Educational platform connecting academic programs to real employment data, serving 10K+ students across BC.',
			notice: 'Currently undergoing revamp and improvements',
			image: '/logos/VIU-logo.png',
			tags: ['Educational Platform', 'SvelteKit', 'Data Integration']
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
				<span class="absolute -bottom-3 left-0 w-full h-3 bg-sky-500/30 transform -skew-x-3"
				></span>
			</h2>
			<p class="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
				Internal tools and web applications that teams rely on every day
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
			{#each featuredProjects as project, i}
				<ProjectCard {project} delay={i * 200} {handleImageError} />
			{/each}
		</div>
	</div>
</section>
