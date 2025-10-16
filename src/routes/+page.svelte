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
	<title>Custom Web Applications for Canadian Businesses | Roga Web Development</title>
	<meta
		name="description"
		content="Automate processes, improve customer experience, and grow revenue with custom web apps and conversion-focused websites. Fixed pricing, clear timelines, measurable outcomes."
	/>
	<meta
		name="keywords"
		content="custom web applications, Canadian business web development, conversion-focused websites, SvelteKit, Vue.js, TypeScript, process automation, SEO, e-commerce, small business software"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://roga.dev" />
	<meta
		property="og:title"
		content="Custom Web Applications for Canadian Businesses | Roga Web Development"
	/>
	<meta
		property="og:description"
		content="Automate processes, improve customer experience, and grow revenue with custom web apps and conversion-focused websites. Fixed pricing, clear timelines, measurable outcomes."
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
		content="Custom Web Applications for Canadian Businesses | Roga Web Development"
	/>
	<meta
		name="twitter:description"
		content="Automate processes, improve customer experience, and grow revenue with custom web apps and conversion-focused websites. Fixed pricing, clear timelines, measurable outcomes."
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
