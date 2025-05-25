<svelte:options runes={true} />

<script>
	import HomeHero from './HomeHero.svelte';
	import SocialProof from './SocialProof.svelte';
	import Services from './Services.svelte';
	import Process from './Process.svelte';
	import TechStack from './TechStack.svelte';
	import ClientLogos from './ClientLogos.svelte';
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

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://roga.dev" />
	<meta
		property="og:title"
		content="Professional Web Development Services | Roga Web Development"
	/>
	<meta
		property="og:description"
		content="Transform your small business with custom web applications. Expert full-stack development in modern technologies."
	/>
	<meta property="og:image" content="https://roga.dev/images/roga_dev_site_image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Roga Web Development - Professional Web Development Services"
	/>
	<meta property="og:site_name" content="Roga Web Development" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://roga.dev" />
	<meta
		name="twitter:title"
		content="Professional Web Development Services | Roga Web Development"
	/>
	<meta
		name="twitter:description"
		content="Transform your small business with custom web applications. Expert full-stack development in modern technologies."
	/>
	<meta name="twitter:image" content="https://roga.dev/images/roga_dev_site_image.png" />
	<meta
		name="twitter:image:alt"
		content="Roga Web Development - Professional Web Development Services"
	/>

	<!-- Additional Meta Tags -->
	<meta name="author" content="Ryan Roga" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://roga.dev" />

	<!-- Favicon and Apple Touch Icon -->
	<link rel="apple-touch-icon" href="/images/roga_dev_site_image.png" />
</svelte:head>

<HomeHero />
<SocialProof />
<Services />
<Process />
<TechStack />
<ClientLogos />
<CaseStudiesPreview />
<WhyChooseUs />
<FAQ />
<FinalCTA />
