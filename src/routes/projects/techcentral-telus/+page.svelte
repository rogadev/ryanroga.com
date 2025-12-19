<script lang="ts">
	import Icon from '@iconify/svelte';

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
	<title>TechCentral (TELUS) Case Study | Internal Content Platform | Roga Web Development</title>
	<meta
		name="description"
		content="How I built TechCentral, an internal content platform for TELUS Communications serving employees across Canada in English and French."
	/>
	<meta property="og:title" content="TechCentral (TELUS) Case Study | Roga Web Development" />
	<meta
		property="og:description"
		content="Internal content platform for TELUS Communications with bilingual support, unified search, and CMS-driven delivery."
	/>
	<link rel="canonical" href="https://roga.dev/projects/techcentral-telus" />

	<!-- Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "CreativeWork",
			"name": "TechCentral",
			"description": "Internal content delivery platform for TELUS Communications",
			"creator": {
				"@type": "Person",
				"name": "Ryan Roga",
				"url": "https://roga.dev"
			},
			"dateCreated": "2025",
			"about": {
				"@type": "Organization",
				"name": "TELUS Communications"
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
		class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4B286D] to-[#66CC00] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
		style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
	></div>
</div>
<section class="relative overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<!-- Breadcrumb -->
			<nav class="mb-8">
				<ol class="flex items-center gap-2 text-sm text-gray-500">
					<li><a href="/projects" class="hover:text-gray-700">Projects</a></li>
					<li>/</li>
					<li class="text-gray-900 font-medium">TechCentral (TELUS)</li>
				</ol>
			</nav>

			<!-- Header -->
			<div class="flex items-center gap-4 mb-6">
				<img src="/logos/TELUS_Logo.svg" alt="TELUS" class="h-12" />
				<div>
					<span
						class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
					>
						Solo Developer
					</span>
				</div>
			</div>

			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
				TechCentral
			</h1>
			<p class="mt-2 text-xl text-gray-600">Internal Content Delivery Platform</p>

			<p class="mt-6 text-lg leading-8 text-gray-600">
				Internal web platform that delivers CMS-managed content quickly and reliably for employees
				across Canadian regions, in both English and French.
			</p>

			<!-- Key Stats -->
			<div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
				<div class="rounded-xl bg-gray-50 p-4 text-center">
					<div class="text-2xl font-bold text-gray-900">2025–2026</div>
					<div class="text-sm text-gray-600">Development</div>
				</div>
				<div class="rounded-xl bg-gray-50 p-4 text-center">
					<div class="text-2xl font-bold text-gray-900">Jan 2026</div>
					<div class="text-sm text-gray-600">Launch</div>
				</div>
				<div class="rounded-xl bg-gray-50 p-4 text-center">
					<div class="text-2xl font-bold text-gray-900">Bilingual</div>
					<div class="text-sm text-gray-600">EN-CA / FR-CA</div>
				</div>
				<div class="rounded-xl bg-gray-50 p-4 text-center">
					<div class="text-2xl font-bold text-gray-900">Enterprise</div>
					<div class="text-sm text-gray-600">Scale</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Executive Summary -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl animate-on-scroll">
				Executive Summary
			</h2>
			<div
				class="mt-8 prose prose-lg prose-gray animate-on-scroll"
				style="transition-delay: 100ms;"
			>
				<p>
					TechCentral is an internal knowledge and content delivery platform that helps TELUS
					employees find the right guidance fast, tailored by <strong>language (EN-CA/FR-CA)</strong
					>
					and <strong>region/audience</strong>.
				</p>
				<p>
					The platform focuses on usability (onboarding, consistent navigation, favourites) and
					reliability (tested workflows, predictable behaviour). It serves as a central hub where
					employees can discover, search, and save content relevant to their role and location.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- The Problem -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl animate-on-scroll">
				The Problem
			</h2>

			<div class="mt-8 space-y-6 animate-on-scroll" style="transition-delay: 100ms;">
				<div class="rounded-xl bg-red-50 border border-red-100 p-6">
					<h3 class="font-semibold text-gray-900 mb-2">Internal guidance discovery friction</h3>
					<p class="text-gray-600">
						Employees struggled to find the right information quickly. Content was scattered, search
						was poor, and there was no personalization based on role or region.
					</p>
				</div>

				<div class="rounded-xl bg-red-50 border border-red-100 p-6">
					<h3 class="font-semibold text-gray-900 mb-2">Bilingual + regional complexity</h3>
					<p class="text-gray-600">
						Canada requires English and French support, and different regions have different content
						needs. The platform needed to handle language and region preferences gracefully.
					</p>
				</div>

				<div class="rounded-xl bg-red-50 border border-red-100 p-6">
					<h3 class="font-semibold text-gray-900 mb-2">Editor autonomy needed</h3>
					<p class="text-gray-600">
						Content teams needed to publish and update without developer involvement, while
						maintaining strong UX and performance. Preview and rollback workflows were essential.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- The Solution -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl animate-on-scroll">
				What I Delivered
			</h2>

			<div class="mt-8 space-y-8">
				<div class="animate-on-scroll" style="transition-delay: 100ms;">
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 flex-shrink-0"
						>
							<svg
								class="h-5 w-5 text-sky-600"
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
						<div>
							<h3 class="text-lg font-semibold text-gray-900">Headless CMS-Driven Site</h3>
							<p class="mt-2 text-gray-600">
								Frontend application consuming content from <strong>DotCMS</strong>. Authoring stays
								in the CMS; delivery/UX is handled by the app with production-grade integration
								patterns (services/adapters).
							</p>
						</div>
					</div>
				</div>

				<div class="animate-on-scroll" style="transition-delay: 200ms;">
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 flex-shrink-0"
						>
							<svg
								class="h-5 w-5 text-teal-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900">
								Bilingual + Region-Aware Experience
							</h3>
							<p class="mt-2 text-gray-600">
								Language (EN-CA/FR-CA) and region preferences drive routing and content filtering.
								Users see content relevant to their location and language preference automatically.
							</p>
						</div>
					</div>
				</div>

				<div class="animate-on-scroll" style="transition-delay: 300ms;">
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 flex-shrink-0"
						>
							<svg
								class="h-5 w-5 text-indigo-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900">Unified Search</h3>
							<p class="mt-2 text-gray-600">
								One search experience across multiple content types. Fast, typo-tolerant (including
								diacritics handling for French), and shareable via URL state. Server-side execution
								with in-memory per-pod caching.
							</p>
						</div>
					</div>
				</div>

				<div class="animate-on-scroll" style="transition-delay: 400ms;">
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 flex-shrink-0"
						>
							<svg
								class="h-5 w-5 text-purple-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900">User Preferences + Favourites</h3>
							<p class="mt-2 text-gray-600">
								Preference persistence for a consistent experience across visits. Users can save
								favourites and maintain their settings via Cloud SQL (PostgreSQL) + Prisma.
							</p>
						</div>
					</div>
				</div>

				<div class="animate-on-scroll" style="transition-delay: 500ms;">
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 flex-shrink-0"
						>
							<svg
								class="h-5 w-5 text-orange-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-900">Editor Workflow Support</h3>
							<p class="mt-2 text-gray-600">
								CMS preview support with version-controlled templates and predictable rollback.
								Content teams can publish independently while maintaining UX standards.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Technical Implementation -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl animate-on-scroll">
				Technical Implementation
			</h2>

			<div class="mt-8 animate-on-scroll" style="transition-delay: 100ms;">
				<!-- Tech Stack -->
				<div class="rounded-xl bg-gray-50 p-6 mb-8">
					<h3 class="font-semibold text-gray-900 mb-4">Stack</h3>
					<div class="flex flex-wrap gap-3">
						<div class="group relative">
							<Icon icon="logos:nextjs-icon" class="h-10 w-10" />
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
							>
								Next.js 15
							</div>
						</div>
						<div class="group relative">
							<Icon icon="logos:react" class="h-10 w-10" />
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
							>
								React 19
							</div>
						</div>
						<div class="group relative">
							<Icon icon="logos:typescript-icon" class="h-10 w-10" />
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
							>
								TypeScript
							</div>
						</div>
						<div class="group relative">
							<Icon icon="logos:tailwindcss-icon" class="h-10 w-10" />
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
							>
								Tailwind CSS
							</div>
						</div>
						<div class="group relative">
							<Icon icon="logos:prisma" class="h-10 w-10" />
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
							>
								Prisma
							</div>
						</div>
						<div class="group relative">
							<Icon icon="logos:postgresql" class="h-10 w-10" />
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
							>
								Cloud SQL (PostgreSQL)
							</div>
						</div>
						<div class="group relative">
							<Icon icon="logos:vitest" class="h-10 w-10" />
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
							>
								Vitest
							</div>
						</div>
						<div class="group relative">
							<Icon icon="logos:playwright" class="h-10 w-10" />
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
							>
								Playwright
							</div>
						</div>
						<div class="group relative">
							<Icon icon="logos:python" class="h-10 w-10" />
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
							>
								Python
							</div>
						</div>
						<div class="group relative">
							<Icon icon="simple-icons:googlegemini" class="h-10 w-10 text-blue-600" />
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
							>
								Google Gemini
							</div>
						</div>
					</div>
				</div>

				<!-- Architecture Details -->
				<div class="space-y-6">
					<div class="rounded-xl bg-white border border-gray-200 p-6">
						<h3 class="font-semibold text-gray-900 mb-2">CMS Integration</h3>
						<p class="text-gray-600 text-sm">
							DotCMS (headless) with production-grade integration patterns. Services/adapters
							abstract CMS API complexity and handle edge cases (API limits, image delivery
							constraints) with pragmatic mitigations.
						</p>
					</div>

					<div class="rounded-xl bg-white border border-gray-200 p-6">
						<h3 class="font-semibold text-gray-900 mb-2">Data Layer</h3>
						<p class="text-gray-600 text-sm">
							Cloud SQL (PostgreSQL) + Prisma for preferences, favourites, sessions, and event-style
							telemetry. Deliberate Node.js runtime choice to support DB-backed session handling in
							middleware.
						</p>
					</div>

					<div class="rounded-xl bg-white border border-gray-200 p-6">
						<h3 class="font-semibold text-gray-900 mb-2">Search Architecture</h3>
						<p class="text-gray-600 text-sm">
							Server-side execution with in-memory per-pod caching. Bilingual normalization
							(diacritics), spelling variations, relevance scoring, and URL-as-state for
							shareability.
						</p>
					</div>

					<div class="rounded-xl bg-white border border-gray-200 p-6">
						<h3 class="font-semibold text-gray-900 mb-2">Testing Strategy</h3>
						<p class="text-gray-600 text-sm">
							Vitest (unit/integration) + Playwright (E2E), with reusable utilities and
							onboarding-safe test flows. Testing pyramid ensures confidence without slowing
							development.
						</p>
					</div>

					<div class="rounded-xl bg-white border border-gray-200 p-6">
						<h3 class="font-semibold text-gray-900 mb-2">Deployment Readiness</h3>
						<p class="text-gray-600 text-sm">
							Designed for containerized GKE-style operations. Secure secrets handling, CI-friendly
							workflows, and structured documentation for maintainability.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Business Impact -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl animate-on-scroll">
				Business Impact
			</h2>

			<div class="mt-8 space-y-6">
				<div
					class="animate-on-scroll rounded-xl bg-white border border-gray-200 p-6"
					style="transition-delay: 50ms;"
				>
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 flex-shrink-0"
						>
							<svg
								class="h-5 w-5 text-indigo-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">AI-Powered Knowledge Assistant</h3>
							<p class="text-gray-600 text-sm mt-1">
								Intelligent chatbot integration that ingests articles in real-time, providing
								employees with conversational access to a wide range of business knowledge. The AI
								automatically stays current with content updates.
							</p>
						</div>
					</div>
				</div>

				<div
					class="animate-on-scroll rounded-xl bg-white border border-gray-200 p-6"
					style="transition-delay: 150ms;"
				>
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 flex-shrink-0"
						>
							<svg class="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Reduced Operational Friction</h3>
							<p class="text-gray-600 text-sm mt-1">
								Faster, more reliable access to internal guidance reduces friction for frontline and
								support teams - they find what they need without hunting.
							</p>
						</div>
					</div>
				</div>

				<div
					class="animate-on-scroll rounded-xl bg-white border border-gray-200 p-6"
					style="transition-delay: 250ms;"
				>
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 flex-shrink-0"
						>
							<svg class="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Editor Independence</h3>
							<p class="text-gray-600 text-sm mt-1">
								Content teams can publish and update without developer involvement, while the
								platform maintains strong UX and performance standards.
							</p>
						</div>
					</div>
				</div>

				<div
					class="animate-on-scroll rounded-xl bg-white border border-gray-200 p-6"
					style="transition-delay: 350ms;"
				>
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 flex-shrink-0"
						>
							<svg class="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Lower Long-Term Ownership Cost</h3>
							<p class="text-gray-600 text-sm mt-1">
								Built with maintainability in mind - structured docs, testing pyramid, predictable
								architecture. Future developers can understand and extend the system.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Solo Developer Responsibilities -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl animate-on-scroll">
				My Responsibilities
			</h2>

			<p class="mt-4 text-gray-600 animate-on-scroll" style="transition-delay: 100ms;">
				As the solo developer on this project, I owned:
			</p>

			<ul class="mt-6 space-y-4 animate-on-scroll" style="transition-delay: 200ms;">
				<li class="flex items-start gap-3">
					<svg class="h-5 w-5 text-sky-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="text-gray-700"
						><strong>End-to-end delivery</strong>: architecture, implementation, UI/UX, API/data
						integration, testing strategy, performance decisions, and operational considerations.</span
					>
				</li>
				<li class="flex items-start gap-3">
					<svg class="h-5 w-5 text-sky-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="text-gray-700"
						><strong>Managing platform constraints</strong>: CMS API limits/bugs, image delivery
						constraints - with pragmatic mitigations and documentation.</span
					>
				</li>
				<li class="flex items-start gap-3">
					<svg class="h-5 w-5 text-sky-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="text-gray-700"
						><strong>Building for maintainability</strong>: clear project structure, repeatable test
						patterns, and documented architectural decisions.</span
					>
				</li>
			</ul>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-16 sm:py-24 bg-gradient-to-r from-sky-600 to-teal-600">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Need an Internal Tool Like This?
			</h2>
			<p class="mt-6 text-lg leading-8 text-sky-100">
				If your team is stuck searching through docs, spreadsheets, or siloed systems - let's talk
				about building something that works.
			</p>
			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
				<a
					href="/contact"
					class="rounded-lg bg-white px-8 py-4 text-base font-semibold text-sky-700 shadow-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-xl hover:scale-105"
				>
					Book a free call
				</a>
				<a
					href="/projects"
					class="rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-sky-700 transition-all duration-200"
				>
					See more projects
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
