<script lang="ts">
	import ProjectsHero from './ProjectsHero.svelte';
	import ProjectsApproach from './ProjectsApproach.svelte';
	import FeaturedProjectsSection from './FeaturedProjectsSection.svelte';
	import ProjectsCTA from './ProjectsCTA.svelte';

	// Animation setup
	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-in');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll('.animate-on-scroll').forEach((el) => {
			observer.observe(el);
		});
	});
</script>

<svelte:head>
	<title>Our Projects | Roga Web Development | Custom Web Solutions</title>
	<meta
		name="description"
		content="Explore our portfolio of custom web applications, business websites, and AI solutions that have helped businesses streamline operations and grow."
	/>
</svelte:head>

<ProjectsHero />
<ProjectsApproach />
<FeaturedProjectsSection />
<ProjectsCTA />

<style>
	:global(.animate-on-scroll) {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;
	}

	:global(.animate-on-scroll.animate-in) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
