<script lang="ts">
	import ClientLogos from '../ClientLogos.svelte';

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
	<title
		>Internal Tools Developer | Dashboards, Admin Panels & Workflow Automation | Roga Web
		Development</title
	>
	<meta
		name="description"
		content="Replace spreadsheets with custom internal tools. I build dashboards, admin panels, and workflow automation for growing businesses. RBAC, audit logs, integrations. MVP in 6-12 weeks."
	/>
	<meta
		name="keywords"
		content="internal tools developer, custom dashboards, admin panels, workflow automation, RBAC, audit logs, business tools, SvelteKit, Next.js"
	/>
	<meta property="og:title" content="Internal Tools Developer | Roga Web Development" />
	<meta
		property="og:description"
		content="Replace spreadsheets with custom internal tools. I build dashboards, admin panels, and workflow automation for growing businesses."
	/>
	<link rel="canonical" href="https://roga.dev/internal-tools" />

	<!-- Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"name": "Internal Tools Development",
			"provider": {
				"@type": "Person",
				"name": "Ryan Roga",
				"url": "https://roga.dev"
			},
			"description": "Custom internal tools, dashboards, admin panels, and workflow automation for growing businesses",
			"areaServed": "North America",
			"serviceType": "Web Application Development"
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
				Internal Tools That Teams
				<span class="bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
					Actually Use
				</span>
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl text-pretty">
				Your spreadsheet worked until it didn't. I build dashboards, admin panels, and workflow
				tools that eliminate manual processes, reduce errors, and give your team real-time
				visibility - without the complexity of off-the-shelf enterprise software.
			</p>
			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
				<a
					href="/contact"
					class="rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all duration-200 hover:shadow-xl hover:scale-105"
				>
					Book a free scoping call
				</a>
				<a
					href="/projects"
					class="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all duration-200 hover:shadow-md"
				>
					See case studies
				</a>
			</div>
		</div>
	</div>
</section>

<!-- What I Build -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center animate-on-scroll">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What I Build</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600 text-pretty">
				Purpose-built tools designed for your specific workflow - not a one-size-fits-all platform.
			</p>
		</div>

		<div class="mx-auto mt-16 max-w-6xl">
			<div class="grid gap-8 lg:grid-cols-2">
				<!-- Dashboards -->
				<div class="animate-on-scroll rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
					<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 mb-6">
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
					<h3 class="text-xl font-semibold text-gray-900 mb-4">Dashboards & Admin Panels</h3>
					<p class="text-gray-600 mb-6">
						Real-time visibility into operations. Track inventory, monitor KPIs, manage users, and
						surface the data your team needs to make decisions fast.
					</p>
					<ul class="space-y-2 text-sm text-gray-600">
						<li class="flex items-center gap-2">
							<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Role-based access control (RBAC)</span>
						</li>
						<li class="flex items-center gap-2">
							<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Audit logs and activity tracking</span>
						</li>
						<li class="flex items-center gap-2">
							<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Custom reporting and data export</span>
						</li>
					</ul>
				</div>

				<!-- Workflow Automation -->
				<div
					class="animate-on-scroll rounded-2xl bg-white p-8 shadow-sm border border-gray-200"
					style="transition-delay: 100ms;"
				>
					<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 mb-6">
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
					<h3 class="text-xl font-semibold text-gray-900 mb-4">Workflow Automation</h3>
					<p class="text-gray-600 mb-6">
						Stop copy-pasting between systems. Automate approval flows, notifications, and
						repetitive tasks so your team can focus on high-value work.
					</p>
					<ul class="space-y-2 text-sm text-gray-600">
						<li class="flex items-center gap-2">
							<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Multi-step approval flows</span>
						</li>
						<li class="flex items-center gap-2">
							<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Email/SMS notifications</span>
						</li>
						<li class="flex items-center gap-2">
							<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Scheduled jobs and triggers</span>
						</li>
					</ul>
				</div>

				<!-- Integrations -->
				<div
					class="animate-on-scroll rounded-2xl bg-white p-8 shadow-sm border border-gray-200"
					style="transition-delay: 200ms;"
				>
					<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 mb-6">
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
					<h3 class="text-xl font-semibold text-gray-900 mb-4">Third-Party Integrations</h3>
					<p class="text-gray-600 mb-6">
						Connect your existing tools. Payment processors, CRMs, accounting software, CMSs - your
						internal tool becomes the single source of truth.
					</p>
					<ul class="space-y-2 text-sm text-gray-600">
						<li class="flex items-center gap-2">
							<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Stripe, Square, PayPal</span>
						</li>
						<li class="flex items-center gap-2">
							<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>HubSpot, Salesforce</span>
						</li>
						<li class="flex items-center gap-2">
							<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>QuickBooks, Xero</span>
						</li>
					</ul>
				</div>

				<!-- Portals -->
				<div
					class="animate-on-scroll rounded-2xl bg-white p-8 shadow-sm border border-gray-200"
					style="transition-delay: 300ms;"
				>
					<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 mb-6">
						<svg
							class="h-6 w-6 text-purple-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
							/>
						</svg>
					</div>
					<h3 class="text-xl font-semibold text-gray-900 mb-4">Customer & Employee Portals</h3>
					<p class="text-gray-600 mb-6">
						Self-service experiences that reduce support load. Let users check status, submit
						requests, and find information without calling your team.
					</p>
					<ul class="space-y-2 text-sm text-gray-600">
						<li class="flex items-center gap-2">
							<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Secure authentication (SSO)</span>
						</li>
						<li class="flex items-center gap-2">
							<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Bilingual / multi-region</span>
						</li>
						<li class="flex items-center gap-2">
							<svg class="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Search and content discovery</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Project: TELUS -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center animate-on-scroll">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Project</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600">
				Enterprise-grade internal tools for teams that rely on them every day.
			</p>
		</div>

		<div class="mx-auto mt-16 max-w-4xl animate-on-scroll" style="transition-delay: 100ms;">
			<div
				class="rounded-2xl bg-gradient-to-br from-sky-50 to-teal-50 p-8 lg:p-12 border border-sky-100"
			>
				<div class="flex items-center gap-4 mb-6">
					<img src="/logos/TELUS_Logo.svg" alt="TELUS" class="h-10" />
					<div>
						<h3 class="text-xl font-bold text-gray-900">TechCentral</h3>
						<p class="text-sm text-gray-600">TELUS Communications • Internal Platform</p>
					</div>
				</div>
				<p class="text-gray-700 mb-6">
					Built an internal content platform serving employees across Canadian regions in English
					and French. Features bilingual routing, unified search with typo-tolerance, user
					preferences, and CMS preview workflows.
				</p>
				<div class="grid gap-4 sm:grid-cols-3 mb-8">
					<div class="bg-white rounded-lg p-4 border border-sky-100">
						<div class="text-2xl font-bold text-sky-700">Next.js 15</div>
						<div class="text-sm text-gray-600">React 19, TypeScript</div>
					</div>
					<div class="bg-white rounded-lg p-4 border border-sky-100">
						<div class="text-2xl font-bold text-sky-700">Bilingual</div>
						<div class="text-sm text-gray-600">EN-CA / FR-CA</div>
					</div>
					<div class="bg-white rounded-lg p-4 border border-sky-100">
						<div class="text-2xl font-bold text-sky-700">Jan 2026</div>
						<div class="text-sm text-gray-600">Launch</div>
					</div>
				</div>
				<a
					href="/projects/techcentral-telus"
					class="inline-flex items-center gap-2 text-sky-700 font-semibold hover:text-sky-600 transition-colors"
				>
					View full case study
					<svg
						class="h-4 w-4"
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
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Logos -->
<ClientLogos title="Trusted by Growing Businesses" />

<!-- FAQ -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center animate-on-scroll">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Frequently Asked Questions
			</h2>
		</div>

		<div class="mx-auto mt-16 max-w-3xl">
			<div class="space-y-8">
				<div class="animate-on-scroll">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">
						How much does an internal tool cost?
					</h3>
					<p class="text-gray-600">
						Most projects range from $8,000–$25,000 depending on complexity. A simple dashboard with
						one data source is on the lower end; a multi-user workflow tool with integrations is
						higher. I provide fixed pricing after a scoping call.
					</p>
				</div>

				<div class="animate-on-scroll" style="transition-delay: 100ms;">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">How long does it take to build?</h3>
					<p class="text-gray-600">
						MVP in 6–12 weeks is typical. You'll see working software weekly, not a big reveal at
						the end. Timeline depends on scope and how quickly we can iterate on feedback.
					</p>
				</div>

				<div class="animate-on-scroll" style="transition-delay: 200ms;">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">What if our requirements change?</h3>
					<p class="text-gray-600">
						That's expected. I use milestone-based pricing so we can adjust scope at natural
						breakpoints. Major pivots may affect cost/timeline, but I'll always give you clear
						options.
					</p>
				</div>

				<div class="animate-on-scroll" style="transition-delay: 300ms;">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">
						Can you integrate with our existing systems?
					</h3>
					<p class="text-gray-600">
						Yes - that's often the whole point. I've integrated with Weebly, Zapier, Wave, DotCMS,
						Supabase, and many others. If it has an API or database connection, we can connect it.
					</p>
				</div>

				<div class="animate-on-scroll" style="transition-delay: 400ms;">
					<h3 class="text-lg font-semibold text-gray-900 mb-2">What happens after launch?</h3>
					<p class="text-gray-600">
						30 days of free support is included. After that, I offer monthly maintenance retainers
						for ongoing updates, monitoring, and feature additions. You also get full ownership of
						the code - any developer can take over if needed.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-16 sm:py-24 bg-gradient-to-r from-sky-600 to-teal-600">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Ready to Replace the Spreadsheet?
			</h2>
			<p class="mt-6 text-lg leading-8 text-sky-100">
				Book a free 15-minute call. Tell me what's broken. I'll tell you if I can help - and give
				you a scoped proposal within 48 hours.
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

<style>
	.animate-on-scroll {
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
