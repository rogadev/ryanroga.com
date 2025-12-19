<script lang="ts">
	import ClientLogos from '../../ClientLogos.svelte';
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>Third-Party Integrations | Stripe, HubSpot, QuickBooks & More | Roga Web Development</title>
	<meta
		name="description"
		content="Connect your business tools. Stripe, HubSpot, QuickBooks, Salesforce, and more. Build integrations that keep your systems in sync automatically."
	/>
	<meta
		name="keywords"
		content="API integrations, Stripe integration, HubSpot integration, QuickBooks integration, CRM integration, payment integration"
	/>
	<link rel="canonical" href="https://roga.dev/services/integrations" />
</svelte:head>

<!-- Hero -->
<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
	<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#6366f1] to-[#0ea5e9] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
</div>
<section class="relative overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<nav class="mb-8">
				<ol class="flex items-center justify-center gap-2 text-sm text-gray-500">
					<li><a href="/services" class="hover:text-gray-700">Services</a></li>
					<li>/</li>
					<li class="text-gray-900 font-medium">Third-Party Integrations</li>
				</ol>
			</nav>
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
				<span class="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
					Third-Party Integrations
				</span>
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl text-pretty">
				Connect your existing tools so data flows automatically. Stop copying between systems
				and let your internal tool become the single source of truth.
			</p>
			<div class="mt-10">
				<a
					href="/contact"
					class="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all duration-200 hover:shadow-xl hover:scale-105"
				>
					Book a free scoping call
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Common Integrations -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Common Integrations
			</h2>
			<p class="mt-4 text-lg text-gray-600">
				I've integrated with these and many more
			</p>
		</div>

		<div class="mx-auto max-w-4xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200 text-center">
				<div class="flex justify-center mb-4">
					<Icon icon="logos:stripe" class="h-10 w-10" />
				</div>
				<h3 class="font-semibold text-gray-900 mb-2">Stripe</h3>
				<p class="text-gray-600 text-sm">Payments, subscriptions, invoicing</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200 text-center">
				<div class="flex justify-center mb-4">
					<Icon icon="logos:hubspot" class="h-10 w-10" />
				</div>
				<h3 class="font-semibold text-gray-900 mb-2">HubSpot</h3>
				<p class="text-gray-600 text-sm">CRM, marketing, sales automation</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200 text-center">
				<div class="flex justify-center mb-4">
					<Icon icon="logos:quickbooks" class="h-10 w-10" />
				</div>
				<h3 class="font-semibold text-gray-900 mb-2">QuickBooks</h3>
				<p class="text-gray-600 text-sm">Accounting, invoicing, expenses</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200 text-center">
				<div class="flex justify-center mb-4">
					<Icon icon="logos:salesforce" class="h-10 w-10" />
				</div>
				<h3 class="font-semibold text-gray-900 mb-2">Salesforce</h3>
				<p class="text-gray-600 text-sm">CRM, leads, opportunities</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200 text-center">
				<div class="flex justify-center mb-4">
					<Icon icon="logos:slack-icon" class="h-10 w-10" />
				</div>
				<h3 class="font-semibold text-gray-900 mb-2">Slack</h3>
				<p class="text-gray-600 text-sm">Notifications, alerts, commands</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200 text-center">
				<div class="flex justify-center mb-4">
					<Icon icon="logos:google-calendar" class="h-10 w-10" />
				</div>
				<h3 class="font-semibold text-gray-900 mb-2">Google Workspace</h3>
				<p class="text-gray-600 text-sm">Calendar, Drive, Sheets</p>
			</div>
		</div>

		<p class="mt-12 text-center text-gray-600">
			Don't see what you need? If it has an API, I can probably integrate it.
		</p>
	</div>
</section>

<!-- What I Build -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Integration Types
			</h2>
		</div>

		<div class="mx-auto max-w-3xl space-y-6">
			<div class="rounded-xl bg-indigo-50 border border-indigo-200 p-6">
				<h3 class="font-semibold text-gray-900 mb-2">Real-Time Sync</h3>
				<p class="text-gray-600 text-sm">
					Changes in one system appear in others immediately. Webhooks, push notifications, and
					instant updates.
				</p>
			</div>
			<div class="rounded-xl bg-sky-50 border border-sky-200 p-6">
				<h3 class="font-semibold text-gray-900 mb-2">Scheduled Sync</h3>
				<p class="text-gray-600 text-sm">
					Daily, hourly, or custom schedules. Good for batch processing and when real-time isn't
					critical.
				</p>
			</div>
			<div class="rounded-xl bg-teal-50 border border-teal-200 p-6">
				<h3 class="font-semibold text-gray-900 mb-2">One-Time Migration</h3>
				<p class="text-gray-600 text-sm">
					Moving data from one system to another. Clean, transform, and load with validation.
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
					What if the third-party API changes?
				</h3>
				<p class="text-gray-600">
					I build integrations with versioning and monitoring. When APIs change, you'll know, and
					updates are straightforward.
				</p>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">
					What about rate limits?
				</h3>
				<p class="text-gray-600">
					I build in respect for rate limits, retry logic, and queuing. High-volume syncs are
					handled gracefully.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Logos -->
<ClientLogos title="Trusted by Growing Businesses" />

<!-- CTA -->
<section class="py-16 sm:py-24 bg-gradient-to-r from-indigo-600 to-sky-600">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Ready to Connect Your Tools?
			</h2>
			<p class="mt-6 text-lg leading-8 text-indigo-100">
				Book a free 15-minute call. Tell me what systems you need connected. I'll tell you how
				we can make them talk.
			</p>
			<div class="mt-10">
				<a
					href="/contact"
					class="rounded-lg bg-white px-8 py-4 text-base font-semibold text-indigo-700 shadow-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-xl hover:scale-105"
				>
					Book a free call
				</a>
			</div>
		</div>
	</div>
</section>

