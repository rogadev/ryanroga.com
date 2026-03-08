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
	<title>CopyCleanse Case Study | AI Text Cleaning Tool | Roga Web Development</title>
	<meta
		name="description"
		content="CopyCleanse: a free, browser-based tool that removes telltale signs of AI-generated text. Strips hidden characters, normalizes formatting, cleans tracking parameters. 100% client-side."
	/>
	<meta property="og:title" content="CopyCleanse Case Study | Roga Web Development" />
	<meta
		property="og:description"
		content="Free AI text cleaning tool built with SvelteKit. 100% client-side processing, no data stored."
	/>
	<link rel="canonical" href="https://roga.dev/projects/copycleanse" />

	<!-- Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "CopyCleanse",
			"description": "Free browser-based tool that removes telltale signs of AI-generated text",
			"url": "https://copycleanse.com",
			"applicationCategory": "UtilitiesApplication",
			"operatingSystem": "Web",
			"offers": {
				"@type": "Offer",
				"price": "0",
				"priceCurrency": "USD"
			},
			"creator": {
				"@type": "Person",
				"name": "Ryan Roga",
				"url": "https://roga.dev"
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
		class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0d9488] to-[#06b6d4] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
					<li class="text-gray-900 font-medium">CopyCleanse</li>
				</ol>
			</nav>

			<!-- Header -->
			<div class="flex items-center gap-4 mb-6">
				<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100">
					<svg
						class="h-7 w-7 text-teal-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
						/>
					</svg>
				</div>
				<div>
					<span
						class="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-700"
					>
						Free Tool
					</span>
					<span
						class="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 ml-2"
					>
						Open Source
					</span>
				</div>
			</div>

			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
				CopyCleanse
			</h1>
			<p class="mt-2 text-xl text-gray-600">Clean AI Text, Auto-Magically</p>

			<p class="mt-6 text-lg leading-8 text-gray-600">
				A free, browser-based utility that removes telltale signs of AI-generated text. Strips
				hidden characters, normalizes formatting, and cleans tracking parameters so that AI-assisted
				content appears naturally written. All processing happens client-side - no data ever leaves
				the browser.
			</p>

			<!-- Key Stats -->
			<div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
				<div class="rounded-xl bg-gray-50 p-4 text-center">
					<div class="text-2xl font-bold text-gray-900">Free</div>
					<div class="text-sm text-gray-600">No Sign-up</div>
				</div>
				<div class="rounded-xl bg-gray-50 p-4 text-center">
					<div class="text-2xl font-bold text-gray-900">100%</div>
					<div class="text-sm text-gray-600">Client-Side</div>
				</div>
				<div class="rounded-xl bg-gray-50 p-4 text-center">
					<div class="text-2xl font-bold text-gray-900">Zero</div>
					<div class="text-sm text-gray-600">Data Stored</div>
				</div>
				<div class="rounded-xl bg-gray-50 p-4 text-center">
					<div class="text-2xl font-bold text-gray-900">6+</div>
					<div class="text-sm text-gray-600">AI Platforms</div>
				</div>
			</div>

			<!-- Live Link -->
			<div class="mt-8">
				<a
					href="https://copycleanse.com"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-teal-500 transition-all duration-200 hover:shadow-xl"
				>
					Try CopyCleanse
					<svg
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- How It Works -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl animate-on-scroll">
				How It Works
			</h2>
			<div
				class="mt-8 grid gap-6 sm:grid-cols-3 animate-on-scroll"
				style="transition-delay: 100ms;"
			>
				<div class="rounded-xl bg-white border border-gray-200 p-6 text-center">
					<div
						class="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-teal-100 mb-4"
					>
						<span class="text-xl font-bold text-teal-600">1</span>
					</div>
					<h3 class="font-semibold text-gray-900 mb-2">Paste</h3>
					<p class="text-gray-600 text-sm">
						Paste AI-generated text from ChatGPT, Claude, Gemini, Copilot, or any other AI tool.
					</p>
				</div>
				<div class="rounded-xl bg-white border border-gray-200 p-6 text-center">
					<div
						class="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-teal-100 mb-4"
					>
						<span class="text-xl font-bold text-teal-600">2</span>
					</div>
					<h3 class="font-semibold text-gray-900 mb-2">Clean</h3>
					<p class="text-gray-600 text-sm">
						The tool strips hidden whitespace, normalizes quotes, removes zero-width characters and
						tracking parameters.
					</p>
				</div>
				<div class="rounded-xl bg-white border border-gray-200 p-6 text-center">
					<div
						class="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-teal-100 mb-4"
					>
						<span class="text-xl font-bold text-teal-600">3</span>
					</div>
					<h3 class="font-semibold text-gray-900 mb-2">Copy</h3>
					<p class="text-gray-600 text-sm">
						Cleaned results are auto-copied and ready for immediate use. No trace of AI
						fingerprints.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- What It Cleans -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl animate-on-scroll">
				What It Cleans
			</h2>

			<div class="mt-8 grid gap-4 sm:grid-cols-2">
				<div
					class="animate-on-scroll rounded-xl bg-gray-50 border border-gray-200 p-5"
					style="transition-delay: 50ms;"
				>
					<h3 class="font-semibold text-gray-900 mb-2">Hidden Characters</h3>
					<p class="text-gray-600 text-sm">
						Zero-width characters, soft hyphens, directional marks, and non-breaking spaces that AI
						tools embed invisibly.
					</p>
				</div>
				<div
					class="animate-on-scroll rounded-xl bg-gray-50 border border-gray-200 p-5"
					style="transition-delay: 100ms;"
				>
					<h3 class="font-semibold text-gray-900 mb-2">Smart Quotes & Dashes</h3>
					<p class="text-gray-600 text-sm">
						Normalizes curly/smart quotes to straight quotes, converts em dashes and en dashes, and
						fixes Unicode ellipses.
					</p>
				</div>
				<div
					class="animate-on-scroll rounded-xl bg-gray-50 border border-gray-200 p-5"
					style="transition-delay: 150ms;"
				>
					<h3 class="font-semibold text-gray-900 mb-2">Tracking Parameters</h3>
					<p class="text-gray-600 text-sm">
						Removes AI-specific URL tracking parameters like <code
							class="text-xs bg-gray-100 px-1 rounded">source=chatgpt</code
						>,
						<code class="text-xs bg-gray-100 px-1 rounded">utm_source=openai</code>, and similar
						markers.
					</p>
				</div>
				<div
					class="animate-on-scroll rounded-xl bg-gray-50 border border-gray-200 p-5"
					style="transition-delay: 200ms;"
				>
					<h3 class="font-semibold text-gray-900 mb-2">Homoglyphs & Artifacts</h3>
					<p class="text-gray-600 text-sm">
						Detects and replaces suspicious homoglyph characters and Unicode artifacts that
						fingerprint AI-generated content.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Technical Implementation -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl animate-on-scroll">
				Technical Implementation
			</h2>

			<div class="mt-8 animate-on-scroll" style="transition-delay: 100ms;">
				<!-- Tech Stack -->
				<div class="rounded-xl bg-white p-6 mb-8 border border-gray-200">
					<h3 class="font-semibold text-gray-900 mb-4">Stack</h3>
					<div class="flex flex-wrap gap-3">
						<div class="group relative">
							<Icon icon="logos:svelte-icon" class="h-10 w-10" />
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
							>
								SvelteKit
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
							<Icon icon="logos:javascript" class="h-10 w-10" />
							<div
								class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
							>
								Client-Side JS
							</div>
						</div>
					</div>
				</div>

				<div class="space-y-6">
					<div class="rounded-xl bg-white border border-gray-200 p-6">
						<h3 class="font-semibold text-gray-900 mb-2">Privacy-First Architecture</h3>
						<p class="text-gray-600 text-sm">
							All text processing happens entirely in the browser using JavaScript. No API calls, no
							server round-trips, no data storage. Text never leaves the user's device.
						</p>
					</div>

					<div class="rounded-xl bg-white border border-gray-200 p-6">
						<h3 class="font-semibold text-gray-900 mb-2">Universal AI Detection</h3>
						<p class="text-gray-600 text-sm">
							Works with text from ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google), Copilot
							(Microsoft), and others via universal detection algorithms that target common AI text
							artifacts.
						</p>
					</div>

					<div class="rounded-xl bg-white border border-gray-200 p-6">
						<h3 class="font-semibold text-gray-900 mb-2">Content Platform</h3>
						<p class="text-gray-600 text-sm">
							Includes a blog with educational content on whitespace fingerprinting, AI detection
							methods, and tracking removal tutorials. Built to drive organic traffic and establish
							authority.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Target Audience -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl animate-on-scroll">
				Who It's For
			</h2>

			<div class="mt-8 space-y-6">
				<div
					class="animate-on-scroll rounded-xl bg-white border border-gray-200 p-6"
					style="transition-delay: 50ms;"
				>
					<div class="flex items-start gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 flex-shrink-0"
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
									d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Academic Users</h3>
							<p class="text-gray-600 text-sm mt-1">
								Students and researchers managing AI-assisted research and writing who need clean,
								professional output.
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
							class="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 flex-shrink-0"
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
									d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Content Creators</h3>
							<p class="text-gray-600 text-sm mt-1">
								Professional writers and marketers who use AI as a starting point and want polished,
								naturally formatted final copy.
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
							class="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 flex-shrink-0"
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
									d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="font-semibold text-gray-900">Privacy-Conscious Users</h3>
							<p class="text-gray-600 text-sm mt-1">
								Anyone concerned about AI tracking parameters in URLs and hidden metadata embedded
								in AI-generated content.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA -->
<section class="py-16 sm:py-24 bg-gradient-to-r from-teal-600 to-cyan-600">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
				Try CopyCleanse for Free
			</h2>
			<p class="mt-6 text-lg leading-8 text-teal-100">
				No sign-up, no downloads, no data stored. Just paste, clean, and copy.
			</p>
			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
				<a
					href="https://copycleanse.com"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-lg bg-white px-8 py-4 text-base font-semibold text-teal-700 shadow-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-xl hover:scale-105"
				>
					Open CopyCleanse
				</a>
				<a
					href="/projects"
					class="rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-teal-700 transition-all duration-200"
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
