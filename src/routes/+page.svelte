<svelte:options runes={true} />

<script>
	import HomeHero from './HomeHero.svelte';
	import ClientLogos from './ClientLogos.svelte';
	import ProblemsSolved from './ProblemsSolved.svelte';
	import WhatIBuild from './WhatIBuild.svelte';
	import CaseStudiesPreview from './CaseStudiesPreview.svelte';
	import Process from './Process.svelte';
	import RiskReducers from './RiskReducers.svelte';
	import FAQ from './FAQ.svelte';
	import FinalCTA from './FinalCTA.svelte';
</script>

<svelte:head>
	<title>Custom Web Apps, SaaS & Business Websites | Roga Web Development</title>
	<meta
		name="description"
		content="Senior full-stack developer building custom web applications, SaaS platforms, internal tools, and business websites for growing companies across North America. Fixed pricing, you own the code."
	/>
	<meta
		name="keywords"
		content="custom web development, web application developer, SaaS development, business website, internal tools, workflow automation, full stack developer, freelance web developer, North America"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://roga.dev" />
	<meta
		property="og:title"
		content="Custom Web Apps, SaaS & Business Websites | Roga Web Development"
	/>
	<meta
		property="og:description"
		content="Full-stack developer building custom web applications, SaaS platforms, business websites, and internal tools. Transparent pricing. You own the code."
	/>
	<meta property="og:image" content="https://roga.dev/images/roga_dev_site_image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Roga Web Development - Custom Software & Web Development"
	/>
	<meta property="og:site_name" content="Roga Web Development" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://roga.dev" />
	<meta
		name="twitter:title"
		content="Custom Web Apps, SaaS & Business Websites | Roga Web Development"
	/>
	<meta
		name="twitter:description"
		content="Full-stack developer building custom web applications, SaaS platforms, business websites, and internal tools. Transparent pricing. You own the code."
	/>
	<meta name="twitter:image" content="https://roga.dev/images/roga_dev_site_image.png" />
	<meta
		name="twitter:image:alt"
		content="Roga Web Development - Custom Software & Web Development"
	/>

	<!-- Additional Meta Tags -->
	<meta name="author" content="Ryan Roga" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://roga.dev" />

	<!-- Favicon and Apple Touch Icon -->
	<link rel="apple-touch-icon" href="/images/roga_dev_site_image.png" />

	<!-- Structured Data: Organization -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "ProfessionalService",
			"name": "Roga Web Development",
			"description": "Full-stack web developer building custom web applications, SaaS platforms, business websites, and internal tools for growing businesses across North America",
			"url": "https://roga.dev",
			"logo": "https://roga.dev/logo/android-chrome-512x512.png",
			"image": "https://roga.dev/images/roga_dev_site_image.png",
			"founder": {
				"@type": "Person",
				"name": "Ryan Roga",
				"url": "https://roga.dev/about"
			},
			"areaServed": {
				"@type": "Place",
				"name": "North America"
			},
			"priceRange": "$$",
			"sameAs": ["https://github.com/rogadev", "https://www.linkedin.com/in/rogadev/"],
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Web Development Services",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Custom Web Applications & SaaS Development",
							"description": "Full-stack web applications and SaaS platforms with user authentication, database design, and payment processing"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Business Websites & E-Commerce",
							"description": "Fast, SEO-optimized business websites and online stores built to convert visitors into customers"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Internal Tools & Dashboards",
							"description": "Custom dashboards, admin panels, and operational tools that replace spreadsheets and manual processes"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Workflow Automation & Integrations",
							"description": "Process automation connecting your existing tools with custom integrations and automated workflows"
						}
					}
				]
			}
		}
	</script>

	<!-- Structured Data: FAQ -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "FAQPage",
			"mainEntity": [
				{
					"@type": "Question",
					"name": "How much does a custom web development project cost?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Business websites range from $2,500-$5,000. E-commerce stores from $5,000-$10,000. Custom web applications and SaaS platforms from $8,000-$25,000+. Fixed pricing is provided after a scoping call with no hourly billing surprises."
					}
				},
				{
					"@type": "Question",
					"name": "How long does it take to build a custom web application?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Business websites take 2-4 weeks. E-commerce stores take 4-8 weeks. Web application MVPs take 6-12 weeks. You see working software weekly throughout development."
					}
				},
				{
					"@type": "Question",
					"name": "Do you provide ongoing support after launch?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Yes. Every project includes 30 days of free support. Monthly maintenance plans are available starting at $249/month for ongoing updates, monitoring, security patches, and new features."
					}
				},
				{
					"@type": "Question",
					"name": "Do I own the code you build for me?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Yes. You own 100% of the source code, design assets, and documentation. Everything is built with standard technologies and stored in a version-controlled repository you control. No lock-in."
					}
				}
			]
		}
	</script>
</svelte:head>

<HomeHero />

<ClientLogos
	title="Trusted by Businesses Across North America"
	subtitle="From enterprise companies like TELUS to local businesses and startups"
/>

<ProblemsSolved />

<WhatIBuild />

<CaseStudiesPreview />

<Process />

<RiskReducers />

<FAQ />

<FinalCTA />
