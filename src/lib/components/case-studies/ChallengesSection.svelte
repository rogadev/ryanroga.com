<script lang="ts">
	export let title: string = 'The Challenges';
	export let subtitle: string =
		'Significant operational hurdles that threatened the ability to scale';

	// Define the Challenge type
	type Challenge = {
		title: string;
		description: string;
		icon: string;
		color: string;
		delay?: number;
	};

	export let challenges: Challenge[] = [];
</script>

<section class="py-20 px-4">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16 animate-on-scroll">
			<h2 class="inline-block text-4xl md:text-5xl font-bold relative">
				<span class="relative z-10 text-gray-900">{title}</span>
				<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
				></span>
			</h2>
			<p class="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
				{subtitle}
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each challenges as challenge, i}
				<div
					class="group animate-on-scroll"
					style={challenge.delay
						? `transition-delay: ${challenge.delay}ms`
						: `transition-delay: ${i * 100}ms`}
				>
					<div
						class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div
							class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-{challenge.color}-100 text-{challenge.color}-600 shadow-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-8 w-8"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{@html challenge.icon}
							</svg>
						</div>
						<h3 class="text-2xl font-bold mb-4 text-gray-900">{challenge.title}</h3>
						<p class="text-gray-700">
							{challenge.description}
						</p>
					</div>
				</div>
			{/each}

			<!-- Fallback if no challenges are provided -->
			{#if challenges.length === 0}
				<slot />
			{/if}
		</div>
	</div>
</section>
