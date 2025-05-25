<svelte:options runes={true} />

<script lang="ts">
	import Icon from '@iconify/svelte';
	import { browser } from '$app/environment';

	// State for expandable testimonials
	let expandedTestimonials = $state({
		carevo: false,
		viu: false
	});

	function toggleTestimonial(key: keyof typeof expandedTestimonials) {
		expandedTestimonials[key] = !expandedTestimonials[key];
	}
</script>

<section class="bg-gray-50 py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Trusted by Growing Businesses
			</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600">
				See how I've helped businesses increase their online presence and drive real results.
			</p>
		</div>

		<!-- Stats -->
		<div class="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
			<div class="text-center">
				<div class="text-3xl font-bold text-indigo-600 sm:text-4xl">15+</div>
				<div class="mt-2 text-sm font-medium text-gray-600">Projects Delivered</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-indigo-600 sm:text-4xl">Excellent</div>
				<div class="mt-2 text-sm font-medium text-gray-600">Customer Satisfaction</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-indigo-600 sm:text-4xl">3x</div>
				<div class="mt-2 text-sm font-medium text-gray-600">Average Traffic Increase</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-indigo-600 sm:text-4xl">24/7</div>
				<div class="mt-2 text-sm font-medium text-gray-600">Support Available</div>
			</div>
		</div>

		<!-- Testimonials -->
		<div class="mx-auto mt-16 max-w-5xl">
			<div class="grid gap-8 lg:grid-cols-2 lg:items-start">
				<!-- CarEvo Testimonial -->
				<div class="rounded-2xl bg-white p-8 shadow-sm flex flex-col">
					<div class="flex items-center gap-4">
						<div class="h-12 w-12 rounded-full flex items-center justify-center overflow-hidden">
							<img
								src="/logos/carevo-square.png"
								alt="CarEvo Auto Solutions"
								class="h-11 w-11 object-cover"
							/>
						</div>
						<div>
							<div class="font-semibold text-gray-900">CarEvo Auto Solutions</div>
							<div class="text-sm text-gray-600">Online Car Dealership</div>
						</div>
					</div>
					<blockquote class="mt-4 text-gray-700 flex-grow">
						{#if expandedTestimonials.carevo || (browser && window.innerWidth < 1024)}
							"Before Ryan's system, we were losing cars and deals because we had no centralized
							tracking. Our logistics manager was the only one who knew where anything was, and we
							were trying to use a shared Google Sheet that nobody actually used. It was a disaster
							waiting to happen. Now we know where 99.9% of our vehicles are at all times. The QR
							key scanning from any phone is so simple that there's no excuse not to use it. User
							adoption has been incredible compared to our old Google Sheet method. Even our sales
							team can move cars when needed without disrupting our logistics workflow or losing
							track of inventory. It's completely transformed how we operate."
						{:else}
							"Before Ryan's system, we were losing cars and deals because we had no centralized
							tracking. Our logistics manager was the only one who knew where anything was, and we
							were trying to use a shared Google Sheet that nobody actually used..."
						{/if}
					</blockquote>
					{#if browser && window.innerWidth >= 1024}
						<button
							onclick={() => toggleTestimonial('carevo')}
							class="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
						>
							{expandedTestimonials.carevo ? 'Read less' : 'Read more'}
						</button>
					{/if}
					<div class="mt-4 flex text-yellow-400">
						{#each Array(5) as _}
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						{/each}
					</div>
				</div>

				<!-- VIU Testimonial -->
				<div class="rounded-2xl bg-white p-8 shadow-sm flex flex-col">
					<div class="flex items-center gap-4">
						<div class="h-12 w-12 rounded-full flex items-center justify-center overflow-hidden">
							<img
								src="/logos/viu logo square.png"
								alt="Vancouver Island University"
								class="h-12 w-12 object-cover"
							/>
						</div>
						<div>
							<div class="font-semibold text-gray-900">Vancouver Island University</div>
							<div class="text-sm text-gray-600">Educational Institution</div>
						</div>
					</div>
					<blockquote class="mt-4 text-gray-700 flex-grow">
						{#if expandedTestimonials.viu || (browser && window.innerWidth < 1024)}
							"The Career Outlooks application has become an essential tool for our students. Ryan's
							attention to detail and understanding of our needs resulted in a solution that
							perfectly bridges education and employment data. Students can now make informed
							decisions about their career paths with real-time labor market information."
						{:else}
							"The Career Outlooks application has become an essential tool for our students. Ryan's
							attention to detail and understanding of our needs resulted in a solution that
							perfectly bridges education and employment data..."
						{/if}
					</blockquote>
					{#if browser && window.innerWidth >= 1024}
						<button
							onclick={() => toggleTestimonial('viu')}
							class="mt-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded"
						>
							{expandedTestimonials.viu ? 'Read less' : 'Read more'}
						</button>
					{/if}
					<div class="mt-4 flex text-yellow-400">
						{#each Array(5) as _}
							<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/>
							</svg>
						{/each}
					</div>
				</div>
			</div>
		</div>

		<!-- Technologies Used By -->
		<div class="mx-auto mt-16 max-w-4xl">
			<p class="text-center text-sm font-medium text-gray-600 mb-8">
				Built with industry-leading technologies trusted by Fortune 500 companies
			</p>
			<div class="flex flex-wrap items-center justify-center gap-8 opacity-60">
				<div class="flex items-center gap-2">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
						alt="TypeScript"
						class="h-8 w-8"
					/>
					<span class="font-medium text-gray-600">TypeScript</span>
				</div>
				<div class="flex items-center gap-2">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
						alt="Svelte"
						class="h-8 w-8"
					/>
					<span class="font-medium text-gray-600">SvelteKit</span>
				</div>
				<div class="flex items-center gap-2">
					<img
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
						alt="Vue.js"
						class="h-8 w-8"
					/>
					<span class="font-medium text-gray-600">Vue.js</span>
				</div>
				<div class="flex items-center gap-2">
					<Icon icon="logos:tailwindcss-icon" class="h-8 w-8" />
					<span class="font-medium text-gray-600">Tailwind</span>
				</div>
			</div>
		</div>
	</div>
</section>
