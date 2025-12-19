<script lang="ts">
	import ClientLogos from '../../ClientLogos.svelte';
</script>

<svelte:head>
	<title>Role-Based Access Control & Audit Logs | Security for Internal Tools | Roga Web Development</title>
	<meta
		name="description"
		content="Secure your internal tools with RBAC and maintain compliance with detailed audit trails. Control who sees what and track every change."
	/>
	<meta
		name="keywords"
		content="RBAC, role-based access control, audit logs, security, compliance, access control, user permissions"
	/>
	<link rel="canonical" href="https://roga.dev/services/rbac-audit-logs" />
</svelte:head>

<!-- Hero -->
<div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
	<div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#22c55e] to-[#0ea5e9] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
</div>
<section class="relative overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<nav class="mb-8">
				<ol class="flex items-center justify-center gap-2 text-sm text-gray-500">
					<li><a href="/services" class="hover:text-gray-700">Services</a></li>
					<li>/</li>
					<li class="text-gray-900 font-medium">RBAC & Audit Logs</li>
				</ol>
			</nav>
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
				<span class="bg-gradient-to-r from-green-600 to-sky-500 bg-clip-text text-transparent">
					Role-Based Access & Audit Logs
				</span>
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl text-pretty">
				Secure your internal tools. Control who sees what. Track every change. Maintain
				compliance without slowing your team down.
			</p>
			<div class="mt-10">
				<a
					href="/contact"
					class="rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-green-500 transition-all duration-200 hover:shadow-xl hover:scale-105"
				>
					Book a free scoping call
				</a>
			</div>
		</div>
	</div>
</section>

<!-- RBAC Features -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Role-Based Access Control
			</h2>
			<p class="mt-4 text-lg text-gray-600">
				Different roles see different data and actions
			</p>
		</div>

		<div class="mx-auto max-w-4xl grid gap-8 lg:grid-cols-2">
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
				<h3 class="font-semibold text-gray-900 mb-3">Custom Role Definitions</h3>
				<p class="text-gray-600 text-sm">
					Admin, manager, viewer, or custom roles that match your org structure. Each role has
					specific permissions.
				</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
				<h3 class="font-semibold text-gray-900 mb-3">Granular Permissions</h3>
				<p class="text-gray-600 text-sm">
					Control access at the feature, page, or even field level. View but not edit, edit but
					not delete - your rules.
				</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
				<h3 class="font-semibold text-gray-900 mb-3">Data-Level Security</h3>
				<p class="text-gray-600 text-sm">
					Regional managers see their region only. Department heads see their department. Data
					filtering built in.
				</p>
			</div>
			<div class="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
				<h3 class="font-semibold text-gray-900 mb-3">User Management</h3>
				<p class="text-gray-600 text-sm">
					Invite, activate, deactivate users. Assign roles. Reset passwords. All from an admin
					interface.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Audit Logs -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Audit Logs
			</h2>
			<p class="mt-4 text-lg text-gray-600">
				Who changed what, when - complete visibility
			</p>
		</div>

		<div class="mx-auto max-w-3xl space-y-6">
			<div class="rounded-xl bg-green-50 border border-green-200 p-6">
				<h3 class="font-semibold text-gray-900 mb-2">Change Tracking</h3>
				<p class="text-gray-600 text-sm">
					Every create, update, and delete is logged with the user, timestamp, and before/after
					values.
				</p>
			</div>
			<div class="rounded-xl bg-sky-50 border border-sky-200 p-6">
				<h3 class="font-semibold text-gray-900 mb-2">Login History</h3>
				<p class="text-gray-600 text-sm">
					Track successful and failed login attempts. IP addresses, devices, and suspicious
					patterns.
				</p>
			</div>
			<div class="rounded-xl bg-indigo-50 border border-indigo-200 p-6">
				<h3 class="font-semibold text-gray-900 mb-2">Searchable & Exportable</h3>
				<p class="text-gray-600 text-sm">
					Filter by user, date range, or action type. Export for compliance reports or
					investigations.
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
					Is this SOC 2 / HIPAA compliant?
				</h3>
				<p class="text-gray-600">
					RBAC and audit logs are foundational controls for many compliance frameworks. I can
					build to meet specific requirements - let's discuss on the scoping call.
				</p>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">
					How long are audit logs retained?
				</h3>
				<p class="text-gray-600">
					Configurable based on your needs - 90 days, 1 year, 7 years, or indefinite with
					appropriate storage planning.
				</p>
			</div>
			<div>
				<h3 class="text-lg font-semibold text-gray-900 mb-2">
					Can we integrate with SSO?
				</h3>
				<p class="text-gray-600">
					Yes - SAML, OAuth, and enterprise SSO providers like Okta and Azure AD are all options.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Logos -->
<ClientLogos title="Trusted by Growing Businesses" />

<!-- CTA -->
<section class="py-16 sm:py-24 bg-gradient-to-r from-green-600 to-sky-600">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Ready to Secure Your Tools?
			</h2>
			<p class="mt-6 text-lg leading-8 text-green-100">
				Book a free 15-minute call. Tell me about your security and compliance needs. I'll show
				you how to address them.
			</p>
			<div class="mt-10">
				<a
					href="/contact"
					class="rounded-lg bg-white px-8 py-4 text-base font-semibold text-green-700 shadow-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-xl hover:scale-105"
				>
					Book a free call
				</a>
			</div>
		</div>
	</div>
</section>

