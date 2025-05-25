<svelte:options runes={true} />

<script>
	import Icon from '@iconify/svelte';
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
			<div class="grid gap-8 lg:grid-cols-2">
				<div class="rounded-2xl bg-white p-8 shadow-sm">
					<div class="flex items-center gap-4">
						<div class="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
							<span class="text-sm font-bold text-indigo-600">CE</span>
						</div>
						<div>
							<div class="font-semibold text-gray-900">CarEvo Auto Solutions</div>
							<div class="text-sm text-gray-600">Online Used Car Dealership</div>
						</div>
					</div>
					<blockquote class="mt-4 text-gray-700">
						"Ryan transformed our logistics operations with a custom web application. Our efficiency
						increased by 40% and customer satisfaction improved dramatically. The system handles
						multiple lot management seamlessly."
					</blockquote>
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

				<div class="rounded-2xl bg-white p-8 shadow-sm">
					<div class="flex items-center gap-4">
						<div class="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
							<span class="text-sm font-bold text-indigo-600">VIU</span>
						</div>
						<div>
							<div class="font-semibold text-gray-900">Vancouver Island University</div>
							<div class="text-sm text-gray-600">Educational Institution</div>
						</div>
					</div>
					<blockquote class="mt-4 text-gray-700">
						"The Career Outlooks application has become an essential tool for our students. Ryan's
						attention to detail and understanding of our needs resulted in a solution that perfectly
						bridges education and employment data."
					</blockquote>
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
