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
	<title>Internal Tools & Web Applications for Growing Businesses | Roga Web Development</title>
	<meta
		name="description"
		content="Replace spreadsheets with dashboards, admin panels, and workflow tools that actually work. Solo developer delivering enterprise-quality internal tools for businesses across North America. MVP in 6-12 weeks."
	/>
	<meta
		name="keywords"
		content="internal tools developer, custom web applications, dashboards, admin panels, workflow automation, RBAC, audit logs, integrations, SvelteKit, Next.js, TypeScript"
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://roga.dev" />
	<meta
		property="og:title"
		content="Internal Tools & Web Applications for Growing Businesses | Roga Web Development"
	/>
	<meta
		property="og:description"
		content="Replace spreadsheets with dashboards, admin panels, and workflow tools that actually work. Solo developer delivering enterprise-quality internal tools for businesses across North America."
	/>
	<meta property="og:image" content="https://roga.dev/images/roga_dev_site_image.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Roga Web Development - Internal Tools & Web Applications"
	/>
	<meta property="og:site_name" content="Roga Web Development" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://roga.dev" />
	<meta
		name="twitter:title"
		content="Internal Tools & Web Applications for Growing Businesses | Roga Web Development"
	/>
	<meta
		name="twitter:description"
		content="Replace spreadsheets with dashboards, admin panels, and workflow tools that actually work. Solo developer delivering enterprise-quality internal tools for businesses across North America."
	/>
	<meta name="twitter:image" content="https://roga.dev/images/roga_dev_site_image.png" />
	<meta
		name="twitter:image:alt"
		content="Roga Web Development - Internal Tools & Web Applications"
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
			"description": "Custom internal tools, dashboards, admin panels, and web applications for growing businesses across North America",
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
			"sameAs": [
				"https://github.com/rogadev",
				"https://www.linkedin.com/in/rogadev/"
			],
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Web Development Services",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Internal Tools Development",
							"url": "https://roga.dev/internal-tools"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Dashboards & Admin Panels",
							"url": "https://roga.dev/services/dashboards"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Workflow Automation",
							"url": "https://roga.dev/services/workflow-automation"
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
					"name": "How much does a custom internal tool cost?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Most projects range from $8,000–$25,000 depending on complexity. A simple dashboard with one data source is on the lower end; a multi-user workflow tool with integrations is higher. Fixed pricing is provided after a scoping call."
					}
				},
				{
					"@type": "Question",
					"name": "How long does it take to build an internal tool?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "MVP in 6–12 weeks is typical. You'll see working software weekly, not a big reveal at the end. Timeline depends on scope and feedback cycles."
					}
				},
				{
					"@type": "Question",
					"name": "Do you provide ongoing support after launch?",
					"acceptedAnswer": {
						"@type": "Answer",
						"text": "Yes. Every project includes 30 days of free support. Monthly maintenance plans are available starting at $199/month for ongoing updates, monitoring, and feature additions."
					}
				}
			]
		}
	</script>
</svelte:head>

<!-- 1. Hero: internal-tools-first promise + proof hint + "Book a call" CTA -->
<HomeHero />

<!-- 2. Proof (fast): logos + strongest outcomes -->
<ClientLogos
	title="Trusted by Industry Leaders"
	subtitle="From TELUS to growing startups, I build internal tools that teams actually use"
/>

<!-- 3. Problems you solve: replace spreadsheets, reduce errors, visibility -->
<ProblemsSolved />

<!-- 4. What you build: dashboards, admin panels, integrations, RBAC -->
<WhatIBuild />

<!-- 5. Case studies preview: metrics visible -->
<CaseStudiesPreview />

<!-- 6. Process: milestones + what client receives -->
<Process />

<!-- 7. Risk reducers: security, ownership, documentation, support -->
<RiskReducers />

<!-- 8. FAQ: buyer objections -->
<FAQ />

<!-- 9. Final CTA: book a call -->
<FinalCTA />
