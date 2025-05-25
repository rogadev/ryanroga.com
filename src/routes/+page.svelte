<svelte:options runes={true} />

<script>
	import HomeHero from './HomeHero.svelte';
	import SocialProof from './SocialProof.svelte';
	import Services from './Services.svelte';
	import Process from './Process.svelte';
	import TechStack from './TechStack.svelte';
	import CaseStudiesPreview from './CaseStudiesPreview.svelte';
	import WhyChooseUs from './WhyChooseUs.svelte';
	import FAQ from './FAQ.svelte';
	import FinalCTA from './FinalCTA.svelte';
</script>

<svelte:head>
	<title>Professional Web Development Services | Roga Web Development</title>
	<meta
		name="description"
		content="Transform your small business with custom web applications. Expert full-stack development in modern technologies. Proven results, scalable solutions."
	/>
	<meta
		name="keywords"
		content="web development, small business websites, custom web applications, SvelteKit, Vue.js, TypeScript, web developer"
	/>
	<meta
		property="og:title"
		content="Professional Web Development Services | Roga Web Development"
	/>
	<meta
		property="og:description"
		content="Transform your small business with custom web applications. Expert full-stack development in modern technologies."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://roga.dev" />
	<link rel="canonical" href="https://roga.dev" />
</svelte:head>

<HomeHero />
<SocialProof />
<Services />
<Process />
<TechStack />
<CaseStudiesPreview />
<WhyChooseUs />
<FAQ />
<FinalCTA />
