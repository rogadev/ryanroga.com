<script>
	import HeroSection from './HeroSection.svelte';
	import SkillsSection from './SkillsSection.svelte';
</script>

<svelte:head>
	<title>Roga.dev</title>
	<meta
		name="description"
		content="Ryan Paranich is a TypeScript/JavaScript web developer with a nack for small business SaaS, web apps, and AI integration."
	/>
</svelte:head>

<div class="flex flex-col bg-white">
	<HeroSection />
	<SkillsSection />
</div>
