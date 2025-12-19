<svelte:options runes={true} />

<script lang="ts">
	let {
		title = 'Our Solution',
		subtitle = 'A comprehensive platform tailored to unique workflow needs',
		features = [],
		featuresSnippet,
		visual
	} = $props<{
		title?: string;
		subtitle?: string;
		features?: Feature[];
		featuresSnippet?: import('svelte').Snippet;
		visual?: import('svelte').Snippet;
	}>();

	// Define the Feature type
	type Feature = {
		title: string;
		description: string;
		icon: string;
		color?: string;
	};

	// Default color if not provided
	const defaultColor = 'blue';
</script>

<section class="py-20 px-4 bg-gradient-to-b from-indigo-900 to-blue-900 text-white">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16 animate-on-scroll">
			<h2 class="inline-block text-4xl md:text-5xl font-bold relative">
				<span class="relative z-10 text-white">{title}</span>
				<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-400/30 transform -skew-x-3"
				></span>
			</h2>
			<p class="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
				{subtitle}
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12 items-center">
			<!-- Left side - Solution description -->
			<div class="animate-on-scroll">
				<div class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
					<h3 class="text-3xl font-bold mb-6 text-white">Key Features</h3>

					<div class="space-y-6">
						{#each features as feature}
							<div class="flex items-start gap-4">
								<div
									class="flex-shrink-0 w-12 h-12 rounded-lg bg-{feature.color ||
										defaultColor}-600 flex items-center justify-center"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<!-- eslint-disable-next-line svelte/no-at-html-tags -->
										{@html feature.icon}
									</svg>
								</div>
								<div>
									<h4 class="text-xl font-bold text-white mb-2">{feature.title}</h4>
									<p class="text-white/80">
										{feature.description}
									</p>
								</div>
							</div>
						{/each}

						<!-- Fallback if no features are provided -->
						{#if features.length === 0}
							{@render featuresSnippet?.()}
						{/if}
					</div>
				</div>
			</div>

			<!-- Right side - Visual representation -->
			<div class="animate-on-scroll" style="transition-delay: 200ms;">
				<div class="relative">
					<div
						class="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-20"
					></div>
					<div
						class="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl"
					>
						{#if visual}
							{@render visual()}
						{:else}
							<!-- Default dashboard mockup if no custom visual is provided -->
							<div class="bg-gray-900 rounded-xl overflow-hidden">
								<div class="bg-gray-800 px-4 py-2 flex items-center gap-2">
									<div class="w-3 h-3 bg-red-500 rounded-full"></div>
									<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
									<div class="w-3 h-3 bg-green-500 rounded-full"></div>
									<div class="ml-4 text-gray-400 text-sm">Dashboard Preview</div>
								</div>

								<!-- Placeholder content -->
								<div class="p-8 flex items-center justify-center">
									<p class="text-gray-400">Custom dashboard visualization goes here</p>
								</div>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
