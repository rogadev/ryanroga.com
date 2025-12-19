<script lang="ts">
	import ClientLogos from '../../ClientLogos.svelte';
</script>

<svelte:head>
	<title>Custom Dashboards & Admin Panels | Internal Tools | Roga Web Development</title>
	<meta
		name="description"
		content="Custom dashboards and admin panels that give your team real-time visibility. Track inventory, monitor KPIs, manage users with RBAC. Replace spreadsheets with tools that work."
	/>
	<meta
		name="keywords"
		content="custom dashboards, admin panels, internal tools, RBAC, real-time reporting, data visualization, business intelligence"
	/>
	<link rel="canonical" href="https://roga.dev/services/dashboards" />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"name": "Custom Dashboards & Admin Panels",
			"provider": {
				"@type": "Person",
				"name": "Ryan Roga",
				"url": "https://roga.dev"
			},
			"description": "Custom dashboards and admin panels with real-time visibility, RBAC, and audit logs",
			"areaServed": "North America"
		}
	</script>
</svelte:head>

<!-- Hero -->
<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
	<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#5eead4] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
</div>
<section class="relative overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<nav class="mb-8">
				<ol class="flex items-center justify-center gap-2 text-sm text-gray-500">
					<li><a href="/services" class="hover:text-gray-700">Services</a></li>
					<li>/</li>
					<li class="text-gray-900 font-medium">Dashboards & Admin Panels</li>
				</ol>
			</nav>
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
				Custom
				<span class="bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
					Dashboards & Admin Panels
				</span>
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl text-pretty">
				Real-time visibility into your operations. Track inventory, monitor KPIs, manage users,
				and surface the data your team needs to make decisions fast.
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

<!-- What's Included -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				What's Included
			</h2>
		</div>

		<div class="mx-auto max-w-4xl grid gap-8 lg:grid-cols-2">
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
				<h3 class="font-semibold text-gray-900 mb-3">Role-Based Access Control (RBAC)</h3>
				<p class="text-gray-600 text-sm">
					Admin, manager, viewer - different roles see different data and actions. Secure by design.
				</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
				<h3 class="font-semibold text-gray-900 mb-3">Audit Logs</h3>
				<p class="text-gray-600 text-sm">
					Who changed what, when. Complete activity tracking for compliance and troubleshooting.
				</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
				<h3 class="font-semibold text-gray-900 mb-3">Real-Time Data</h3>
				<p class="text-gray-600 text-sm">
					Live updates without page refreshes. See inventory changes, status updates, and KPIs in real-time.
				</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
				<h3 class="font-semibold text-gray-900 mb-3">Data Export</h3>
				<p class="text-gray-600 text-sm">
					CSV, Excel, PDF reports. Get your data out when you need it for analysis or compliance.
				</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
				<h3 class="font-semibold text-gray-900 mb-3">Custom Filtering & Search</h3>
				<p class="text-gray-600 text-sm">
					Find what you need fast. Filters, search, and saved views tailored to your workflow.
				</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
				<h3 class="font-semibold text-gray-900 mb-3">Mobile-Responsive</h3>
				<p class="text-gray-600 text-sm">
					Works on tablets and phones. Check status from the warehouse floor or on the go.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Example Use Cases -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Example Use Cases
			</h2>
		</div>

		<div class="mx-auto max-w-3xl space-y-6">
			<div class="rounded-xl bg-sky-50 border border-sky-200 p-6">
				<h3 class="font-semibold text-gray-900 mb-2">Inventory Management Dashboard</h3>
				<p class="text-gray-600 text-sm">
					Track stock levels, reorder points, and supplier lead times. QR code scanning for quick
					lookups. Alerts when inventory runs low.
				</p>
			</div>
			<div class="rounded-xl bg-teal-50 border border-teal-200 p-6">
				<h3 class="font-semibold text-gray-900 mb-2">Operations Command Center</h3>
				<p class="text-gray-600 text-sm">
					Monitor team workload, project status, and deadlines in one place. Assign tasks, track
					progress, and identify bottlenecks before they become problems.
				</p>
			</div>
			<div class="rounded-xl bg-indigo-50 border border-indigo-200 p-6">
				<h3 class="font-semibold text-gray-900 mb-2">User & Permission Management</h3>
				<p class="text-gray-600 text-sm">
					Admin panel to manage users, roles, and permissions. Onboard new team members, disable
					departed employees, and audit access patterns.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Frequently Asked Questions
			</h2>
		</div>

		<div class="mx-auto max-w-3xl space-y-8">
			<div>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">
					How much does a custom dashboard cost?
				</h3>
				<p class="text-gray-600">
					Most dashboard projects range from $8,000–$20,000 depending on complexity, data sources,
					and user management requirements. I provide fixed pricing after a scoping call.
				</p>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">
					Can it connect to my existing data?
				</h3>
				<p class="text-gray-600">
					Yes - databases (PostgreSQL, MySQL, SQL Server), APIs, spreadsheets, and third-party
					services can all feed into your dashboard.
				</p>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">
					How long does it take to build?
				</h3>
				<p class="text-gray-600">
					A basic dashboard takes 4–8 weeks. Complex admin panels with multiple user roles and
					integrations may take 8–12 weeks.
				</p>
			</div>
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
				Ready to Build Your Dashboard?
			</h2>
			<p class="mt-6 text-lg leading-8 text-sky-100">
				Book a free 15-minute call. Tell me what data you need to see. I'll tell you how we can
				make it happen.
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

