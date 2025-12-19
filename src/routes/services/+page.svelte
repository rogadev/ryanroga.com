<script lang="ts">
	import ClientLogos from '../ClientLogos.svelte';
</script>

<svelte:head>
	<title
		>Services | Internal Tools, Web Applications & Workflow Automation | Roga Web Development</title
	>
	<meta
		name="description"
		content="Custom internal tools, dashboards, admin panels, workflow automation, and web applications for growing businesses. Solo developer delivering enterprise-quality solutions across North America."
	/>
	<meta
		name="keywords"
		content="internal tools developer, custom web applications, dashboards, admin panels, workflow automation, integrations, web development services"
	/>
	<meta property="og:title" content="Services | Roga Web Development" />
	<meta
		property="og:description"
		content="Custom internal tools, dashboards, admin panels, workflow automation, and web applications for growing businesses."
	/>
	<link rel="canonical" href="https://roga.dev/services" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"name": "Web Application Development Services",
			"provider": {
				"@type": "Person",
				"name": "Ryan Roga",
				"url": "https://roga.dev"
			},
			"description": "Custom internal tools, dashboards, admin panels, workflow automation, and web applications",
			"areaServed": "North America",
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "Web Development Services",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Dashboards & Admin Panels"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Workflow Automation"
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Third-Party Integrations"
						}
					}
				]
			}
		}
	</script>
</svelte:head>

<!-- Hero -->
<div
	class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
	aria-hidden="true"
>
	<div
		class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#5eead4] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
		style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
	></div>
</div>
<section class="relative overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
				Web Development
				<span class="bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
					Services
				</span>
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl text-pretty">
				I build internal tools, dashboards, and web applications that solve real business problems.
				Solo developer, enterprise-quality work, no agency overhead.
			</p>
			<div class="mt-10">
				<a
					href="/contact"
					class="rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-500 transition-all duration-200 hover:shadow-xl hover:scale-105"
				>
					Book a free scoping call
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Services Grid -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What I Build</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600">
				Purpose-built software designed for your specific workflow
			</p>
		</div>

		<div class="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
			<!-- Dashboards & Admin Panels -->
			<a
				href="/services/dashboards"
				class="group rounded-2xl bg-white p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-sky-200 transition-all duration-300"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 group-hover:bg-sky-200 transition-colors mb-6"
				>
					<svg
						class="h-6 w-6 text-sky-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
						/>
					</svg>
				</div>
				<h3
					class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-sky-700 transition-colors"
				>
					Dashboards & Admin Panels
				</h3>
				<p class="text-gray-600 mb-4">
					Real-time visibility into operations. Track inventory, monitor KPIs, manage users, and
					surface the data your team needs.
				</p>
				<span
					class="inline-flex items-center text-sm font-semibold text-sky-600 group-hover:text-sky-700"
				>
					Learn more
					<svg
						class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</span>
			</a>

			<!-- Workflow Automation -->
			<a
				href="/services/workflow-automation"
				class="group rounded-2xl bg-white p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-teal-200 transition-all duration-300"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 group-hover:bg-teal-200 transition-colors mb-6"
				>
					<svg
						class="h-6 w-6 text-teal-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
						/>
					</svg>
				</div>
				<h3
					class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-teal-700 transition-colors"
				>
					Workflow Automation
				</h3>
				<p class="text-gray-600 mb-4">
					Eliminate copy-paste, manual approvals, and status-chasing. Build processes that run
					themselves.
				</p>
				<span
					class="inline-flex items-center text-sm font-semibold text-teal-600 group-hover:text-teal-700"
				>
					Learn more
					<svg
						class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</span>
			</a>

			<!-- Third-Party Integrations -->
			<a
				href="/services/integrations"
				class="group rounded-2xl bg-white p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 group-hover:bg-indigo-200 transition-colors mb-6"
				>
					<svg
						class="h-6 w-6 text-indigo-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
						/>
					</svg>
				</div>
				<h3
					class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-indigo-700 transition-colors"
				>
					Third-Party Integrations
				</h3>
				<p class="text-gray-600 mb-4">
					Connect your existing tools. Payment processors, CRMs, accounting software - your internal
					tool becomes the single source of truth.
				</p>
				<span
					class="inline-flex items-center text-sm font-semibold text-indigo-600 group-hover:text-indigo-700"
				>
					Learn more
					<svg
						class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</span>
			</a>

			<!-- RBAC & Audit Logs -->
			<a
				href="/services/rbac-audit-logs"
				class="group rounded-2xl bg-white p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-green-200 transition-all duration-300"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors mb-6"
				>
					<svg
						class="h-6 w-6 text-green-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
						/>
					</svg>
				</div>
				<h3
					class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-700 transition-colors"
				>
					Role-Based Access & Audit Logs
				</h3>
				<p class="text-gray-600 mb-4">
					Secure your internal tools with RBAC and maintain compliance with detailed audit trails of
					who changed what, when.
				</p>
				<span
					class="inline-flex items-center text-sm font-semibold text-green-600 group-hover:text-green-700"
				>
					Learn more
					<svg
						class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</span>
			</a>

			<!-- Maintenance & Support -->
			<a
				href="/services/maintenance"
				class="group rounded-2xl bg-white p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-orange-200 transition-all duration-300"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 group-hover:bg-orange-200 transition-colors mb-6"
				>
					<svg
						class="h-6 w-6 text-orange-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
						/>
					</svg>
				</div>
				<h3
					class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors"
				>
					Maintenance & Support
				</h3>
				<p class="text-gray-600 mb-4">
					Ongoing updates, monitoring, bug fixes, and feature additions. Keep your tools running
					smoothly after launch.
				</p>
				<span
					class="inline-flex items-center text-sm font-semibold text-orange-600 group-hover:text-orange-700"
				>
					Learn more
					<svg
						class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</span>
			</a>

			<!-- Internal Tools (main landing page) -->
			<a
				href="/internal-tools"
				class="group rounded-2xl bg-gradient-to-br from-sky-50 to-teal-50 p-8 shadow-sm border border-sky-200 hover:shadow-lg hover:border-sky-300 transition-all duration-300"
			>
				<div
					class="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-600 group-hover:bg-sky-700 transition-colors mb-6"
				>
					<svg
						class="h-6 w-6 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
						/>
					</svg>
				</div>
				<h3
					class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-sky-700 transition-colors"
				>
					Internal Tools Overview
				</h3>
				<p class="text-gray-600 mb-4">
					Complete guide to custom internal tools: dashboards, admin panels, workflow automation,
					and more.
				</p>
				<span
					class="inline-flex items-center text-sm font-semibold text-sky-600 group-hover:text-sky-700"
				>
					View all internal tools
					<svg
						class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</span>
			</a>
		</div>
	</div>
</section>

<!-- Logos -->
<ClientLogos title="Trusted by Growing Businesses" />

<!-- CTA -->
<section class="py-16 sm:py-24 bg-gradient-to-r from-sky-600 to-teal-600">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Not Sure What You Need?
			</h2>
			<p class="mt-6 text-lg leading-8 text-sky-100">
				Book a free 15-minute call. Tell me what's broken. I'll help you figure out the right
				solution - no sales pressure.
			</p>
			<div class="mt-10">
				<a
					href="/contact"
					class="rounded-lg bg-white px-8 py-4 text-base font-semibold text-sky-700 shadow-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-xl hover:scale-105"
				>
					Book a free call
				</a>
			</div>
		</div>
	</div>
</section>
