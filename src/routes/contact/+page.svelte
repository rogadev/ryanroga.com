<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import RedactedEmail from '$lib/components/RedactedEmail.svelte';
	import ClientLogos from '../ClientLogos.svelte';
	import { initScrollAnimations } from '$lib/actions/scrollAnimation';

	let isVisible = $state(false);

	$effect(() => {
		isVisible = true;
		return initScrollAnimations();
	});
</script>

<svelte:head>
	<title>Book a Call | Roga Web Development | Internal Tools & Web Applications</title>
	<meta
		name="description"
		content="Book a free 15-minute call to discuss your internal tool or web application project. Get a scoped proposal within 48 hours. No pressure, no pitch - just honest advice."
	/>
	<meta property="og:title" content="Book a Call | Roga Web Development" />
	<meta
		property="og:description"
		content="Book a free 15-minute call to discuss your internal tool or web application project. Get a scoped proposal within 48 hours."
	/>
	<link rel="canonical" href="https://roga.dev/contact" />
</svelte:head>

<main class="relative overflow-hidden bg-white">
	<!-- Hero Section -->
	<section class="relative py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				{#if isVisible}
					<h1
						class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl text-balance"
						in:fly={{ y: 50, duration: 1000, delay: 200 }}
					>
						Let's Talk About
						<span class="bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
							Your Project
						</span>
					</h1>
					<p
						class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl text-pretty"
						in:fly={{ y: 50, duration: 1000, delay: 400 }}
					>
						Book a free 15-minute call. I'll ask about what's broken, what you've tried, and what
						success looks like. If I can help, you'll get a scoped proposal within 48 hours.
					</p>
					<div
						class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
						in:fly={{ y: 30, duration: 1000, delay: 600 }}
					>
						<div class="flex items-center justify-center gap-2 text-sm text-gray-600">
							<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>15-minute call</span>
						</div>
						<div class="flex items-center justify-center gap-2 text-sm text-gray-600">
							<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>No sales pitch</span>
						</div>
						<div class="flex items-center justify-center gap-2 text-sm text-gray-600">
							<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Honest advice</span>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- Booking Section -->
	<section class="py-16 sm:py-24 bg-gray-50" id="book">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="grid gap-12 lg:grid-cols-2 lg:gap-16 items-stretch">
				<!-- Contact via LinkedIn (temporary) -->
				<div class="animate-on-scroll h-full">
					<div
						class="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg h-full flex flex-col"
					>
						<h2 class="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h2>

						<!-- Notice about scheduling -->
						<div class="mb-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
							<div class="flex gap-3">
								<svg
									class="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
									/>
								</svg>
								<div>
									<p class="text-sm text-amber-800 font-medium">
										Online scheduling temporarily unavailable
									</p>
									<p class="text-sm text-amber-700 mt-1">
										The scheduling system was taken down due to abuse from cold-call sales outreach.
										Please reach out via LinkedIn or email instead.
									</p>
								</div>
							</div>
						</div>

						<!-- LinkedIn CTA -->
						<div class="text-center py-8 flex-grow flex flex-col justify-center">
							<div
								class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 mb-6"
							>
								<Icon icon="mdi:linkedin" class="h-10 w-10 text-blue-600" />
							</div>
							<h3 class="text-xl font-semibold text-gray-900 mb-3">Connect on LinkedIn</h3>
							<p class="text-gray-600 mb-6 max-w-sm mx-auto">
								Send me a message on LinkedIn and I'll get back to you within 1 business day.
							</p>
							<a
								href="https://www.linkedin.com/in/ryanroga/"
								target="_blank"
								rel="noopener noreferrer"
								class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-500 transition-all duration-200 hover:shadow-xl"
							>
								<Icon icon="mdi:linkedin" class="h-5 w-5" />
								Message me on LinkedIn
							</a>
						</div>
					</div>
				</div>

				<!-- What to Expect -->
				<div class="animate-on-scroll h-full" style="transition-delay: 200ms;">
					<div class="rounded-2xl border border-gray-200 bg-white p-8 h-full">
						<h2 class="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>

						<div class="space-y-6">
							<!-- Step 1 -->
							<div class="flex gap-4">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 font-bold flex-shrink-0"
								>
									1
								</div>
								<div>
									<h3 class="font-semibold text-gray-900">Discovery (5 min)</h3>
									<p class="text-gray-600 text-sm mt-1">
										You tell me what's broken: the manual process, the spreadsheet nobody uses, the
										visibility gap. I'll ask questions to understand the real problem.
									</p>
								</div>
							</div>

							<!-- Step 2 -->
							<div class="flex gap-4">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 font-bold flex-shrink-0"
								>
									2
								</div>
								<div>
									<h3 class="font-semibold text-gray-900">Fit Check (5 min)</h3>
									<p class="text-gray-600 text-sm mt-1">
										I'll tell you honestly if this is something I can help with. If not, I'll point
										you toward a better solution (different tool, different approach, different
										developer).
									</p>
								</div>
							</div>

							<!-- Step 3 -->
							<div class="flex gap-4">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sky-700 font-bold flex-shrink-0"
								>
									3
								</div>
								<div>
									<h3 class="font-semibold text-gray-900">Next Steps (5 min)</h3>
									<p class="text-gray-600 text-sm mt-1">
										If we're a fit, I'll explain how I work and what a scoping process looks like.
										You'll get a written proposal within 48 hours - no obligation.
									</p>
								</div>
							</div>
						</div>

						<!-- What to prepare -->
						<div class="mt-8 p-4 bg-sky-50 rounded-lg border border-sky-200">
							<h3 class="font-semibold text-gray-900 mb-2">Before the call, think about:</h3>
							<ul class="space-y-2 text-sm text-gray-600">
								<li class="flex items-start gap-2">
									<svg class="h-4 w-4 text-sky-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>What's the pain? (hours wasted, errors, no visibility)</span>
								</li>
								<li class="flex items-start gap-2">
									<svg class="h-4 w-4 text-sky-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>What have you tried? (spreadsheets, off-the-shelf tools)</span>
								</li>
								<li class="flex items-start gap-2">
									<svg class="h-4 w-4 text-sky-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
									<span>Timeline? (urgent, next quarter, exploring)</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Quick Contact Options -->
	<section class="py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center mb-12">
				<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
					Other Ways to Connect
				</h2>
			</div>

			<div class="mx-auto max-w-4xl">
				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					<!-- Email -->
					<div
						class="group rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all duration-300 text-center"
					>
						<div
							class="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-sky-100 transition-colors mb-4"
						>
							<svg
								class="h-6 w-6 text-gray-600 group-hover:text-sky-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								/>
							</svg>
						</div>
						<h3 class="font-semibold text-gray-900 mb-1">Email</h3>
						<p class="text-sm text-gray-600">
							<RedactedEmail />
						</p>
					</div>

					<!-- LinkedIn -->
					<a
						href="https://www.linkedin.com/in/ryanroga/"
						target="_blank"
						rel="noopener noreferrer"
						class="group rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all duration-300 text-center"
					>
						<div
							class="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-blue-100 transition-colors mb-4"
						>
							<Icon icon="mdi:linkedin" class="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
						</div>
						<h3 class="font-semibold text-gray-900 mb-1">LinkedIn</h3>
						<p class="text-sm text-gray-600">Connect with me</p>
					</a>

					<!-- GitHub -->
					<a
						href="https://github.com/rogadev"
						target="_blank"
						rel="noopener noreferrer"
						class="group rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all duration-300 text-center"
					>
						<div
							class="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors mb-4"
						>
							<Icon icon="mdi:github" class="h-6 w-6 text-gray-600 group-hover:text-gray-900" />
						</div>
						<h3 class="font-semibold text-gray-900 mb-1">GitHub</h3>
						<p class="text-sm text-gray-600">See my code</p>
					</a>

					<!-- Location -->
					<div
						class="group rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition-all duration-300 text-center"
					>
						<div
							class="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 group-hover:bg-teal-100 transition-colors mb-4"
						>
							<svg
								class="h-6 w-6 text-gray-600 group-hover:text-teal-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>
						</div>
						<h3 class="font-semibold text-gray-900 mb-1">Location</h3>
						<p class="text-sm text-gray-600">BC, Canada</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Developer Profile Section -->
	<section class="py-16 bg-gray-50">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
					<div class="flex flex-col lg:flex-row gap-8 items-center">
						<div class="flex-shrink-0">
							<img
								class="w-32 h-32 rounded-full object-cover object-center border-4 border-sky-100"
								src="/images/ryanroga.jpg"
								alt="Ryan Roga"
								width="128"
								height="128"
								loading="lazy"
							/>
						</div>
						<div class="flex-1 text-center lg:text-left">
							<h3 class="text-2xl font-bold text-gray-900 mb-2">Ryan Roga</h3>
							<p class="text-lg text-sky-600 mb-4">Internal Tools & Web Applications Developer</p>
							<p class="text-gray-600 mb-6">
								I help growing businesses replace spreadsheets and manual processes with custom
								internal tools. Based in BC, Canada, I work with teams across North America to build
								dashboards, admin panels, and workflow automation that teams actually use.
							</p>
							<div class="flex flex-wrap gap-4 justify-center lg:justify-start">
								<a
									href="/about"
									class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all duration-200"
								>
									About Me
								</a>
								<a
									href="/projects"
									class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all duration-200"
								>
									See My Work
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Client Logos -->
	<ClientLogos
		title="Trusted by Growing Businesses"
		subtitle="From Fortune 500 to startups, I build tools teams rely on every day"
	/>
</main>
