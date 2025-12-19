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
			<p class="mt-4 text-lg leading-8 text-gray-600 text-pretty">
				See how I've helped businesses increase their online presence and drive real results.
			</p>
		</div>

		<!-- Stats -->
		<div class="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-3">
			<div class="text-center">
				<div class="text-3xl font-bold text-sky-700 sm:text-4xl">Flexible</div>
				<div class="mt-2 text-sm font-medium text-gray-600">Scope & Pricing</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-sky-700 sm:text-4xl">Weeks</div>
				<div class="mt-2 text-sm font-medium text-gray-600">to Launch</div>
			</div>
			<div class="text-center">
				<div class="text-3xl font-bold text-sky-700 sm:text-4xl">Ownership</div>
				<div class="mt-2 text-sm font-medium text-gray-600">Code & Data</div>
			</div>
		</div>

		<!-- Testimonials -->
		<div class="mx-auto mt-16 max-w-6xl">
			<div class="space-y-8">
				<!-- CarEvo Testimonial -->
				<div class="group relative">
					<div
						class="absolute inset-0 bg-gradient-to-r from-sky-500 to-teal-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"
					></div>
					<div class="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
						<div class="lg:grid lg:grid-cols-[200px_1px_1fr] lg:gap-8 flex flex-col gap-6">
							<!-- Logo and Company Info -->
							<div class="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
								<div
									class="h-16 w-16 lg:h-20 lg:w-20 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0"
								>
									<img
										src="/logos/carevo-square.png"
										alt="CarEvo Auto Solutions"
										class="h-14 w-14 lg:h-18 lg:w-18 object-cover"
										width="72"
										height="72"
										loading="lazy"
									/>
								</div>
								<div class="lg:mt-4 flex-1 lg:flex-none">
									<div class="font-bold text-gray-900 text-lg">CarEvo Auto Solutions</div>
									<div class="text-sm text-indigo-600 font-medium">Online Car Dealership</div>
									<div class="flex text-yellow-400 mt-2 justify-start lg:justify-center">
										{#each Array(5) as _}
											<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
												/>
											</svg>
										{/each}
									</div>
								</div>
							</div>

							<!-- Vertical Divider -->
							<div class="hidden lg:block w-px bg-gray-200"></div>

							<!-- Testimonial Content -->
							<div class="min-h-0">
								<blockquote class="text-gray-700 text-lg leading-relaxed relative">
									<span
										class="absolute -left-2 -top-2 text-4xl text-indigo-200 font-serif leading-none"
										>"</span
									>
									<span
										class="absolute -right-2 -bottom-2 text-4xl text-indigo-200 font-serif leading-none"
										>"</span
									>
									<span class="relative z-10 pl-6">
										{#if expandedTestimonials.carevo || (browser && window.innerWidth < 1024)}
											Before Ryan's system, we were losing cars and deals because we had no
											centralized tracking. Our logistics manager was the only one who knew where
											anything was, and we were trying to use a shared Google Sheet that nobody
											actually used. It was a disaster waiting to happen. Now we know where 99.9% of
											our vehicles are at all times. The QR key scanning from any phone is so simple
											that there's no excuse not to use it. User adoption has been incredible
											compared to our old Google Sheet method. Even our sales team can move cars
											when needed without disrupting our logistics workflow or losing track of
											inventory. It's completely transformed how we operate.
										{:else}
											Before Ryan's system, we were losing cars and deals because we had no
											centralized tracking. Our logistics manager was the only one who knew where
											anything was, and we were trying to use a shared Google Sheet that nobody
											actually used. It was a disaster waiting to happen...
										{/if}
									</span>
								</blockquote>

								{#if browser && window.innerWidth >= 1024}
									<button
										onclick={() => toggleTestimonial('carevo')}
										class="mt-6 inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200 group/btn"
									>
										<span>{expandedTestimonials.carevo ? 'Show less' : 'Read full story'}</span>
										<svg
											class="h-4 w-4 transition-transform duration-200 {expandedTestimonials.carevo
												? 'rotate-180'
												: ''}"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</button>
								{/if}
							</div>
						</div>
					</div>
				</div>

				<!-- VIU Testimonial -->
				<div class="group relative">
					<div
						class="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"
					></div>
					<div class="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
						<div class="lg:grid lg:grid-cols-[200px_1px_1fr] lg:gap-8 flex flex-col gap-6">
							<!-- Logo and Company Info -->
							<div class="flex items-center gap-4 lg:flex-col lg:items-center lg:text-center">
								<div
									class="h-16 w-16 lg:h-20 lg:w-20 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0"
								>
									<img
										src="/logos/viu logo square.png"
										alt="Vancouver Island University"
										class="h-16 w-16 lg:h-20 lg:w-20 object-cover"
										width="80"
										height="80"
										loading="lazy"
									/>
								</div>
								<div class="lg:mt-4 flex-1 lg:flex-none">
									<div class="font-bold text-gray-900 text-lg">Vancouver Island University</div>
									<div class="text-sm text-blue-600 font-medium">Educational Institution</div>
									<div class="flex text-yellow-400 mt-2 justify-start lg:justify-center">
										{#each Array(5) as _}
											<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
												<path
													d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
												/>
											</svg>
										{/each}
									</div>
								</div>
							</div>

							<!-- Vertical Divider -->
							<div class="hidden lg:block w-px bg-gray-200"></div>

							<!-- Testimonial Content -->
							<div class="min-h-0">
								<blockquote class="text-gray-700 text-lg leading-relaxed relative">
									<span
										class="absolute -left-2 -top-2 text-4xl text-blue-200 font-serif leading-none"
										>"</span
									>
									<span
										class="absolute -right-2 -bottom-2 text-4xl text-blue-200 font-serif leading-none"
										>"</span
									>
									<span class="relative z-10 pl-6">
										{#if expandedTestimonials.viu || (browser && window.innerWidth < 1024)}
											Ryan built for us a Career Outlooks web application that seamlessly connects
											our academic programs to real employment opportunities. The tool integrates
											VIU's credentials with current job postings and incorporates Stats Canada's
											3-year employment outlook data for both BC and national markets. This has
											significantly enhanced our students' career investigation process, allowing
											prospective students to make informed decisions before applying and helping
											current students understand evolving market conditions. The data-driven
											approach has improved our career counseling services and student outcomes.
										{:else}
											Ryan built for us a Career Outlooks web application that seamlessly connects
											our academic programs to real employment opportunities. The tool integrates
											VIU's credentials with current job postings and incorporates Stats Canada's
											3-year employment outlook data for both BC and national markets...
										{/if}
									</span>
								</blockquote>

								{#if browser && window.innerWidth >= 1024}
									<button
										onclick={() => toggleTestimonial('viu')}
										class="mt-6 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 group/btn"
									>
										<span>{expandedTestimonials.viu ? 'Show less' : 'Read full story'}</span>
										<svg
											class="h-4 w-4 transition-transform duration-200 {expandedTestimonials.viu
												? 'rotate-180'
												: ''}"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</button>
								{/if}
							</div>
						</div>
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
