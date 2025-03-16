<script lang="ts">
	export let title: string = 'Technology Stack';
	export let subtitle: string =
		'Modern technologies chosen for performance, reliability, and maintainability';

	// Define the Technology type
	type Technology = {
		name: string;
		role: string;
		icon: string;
		color: string;
		delay?: number;
	};

	export let technologies: Technology[] = [];
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

		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
			{#each technologies as tech, i}
				<div
					class="animate-on-scroll"
					style={tech.delay
						? `transition-delay: ${tech.delay}ms`
						: `transition-delay: ${i * 100}ms`}
				>
					<div
						class="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all flex flex-col items-center"
					>
						<div class="w-16 h-16 mb-4 flex items-center justify-center">
							<svg viewBox="0 0 24 24" class="w-12 h-12 text-{tech.color}-500">
								{@html tech.icon}
							</svg>
						</div>
						<h3 class="text-lg font-bold text-center text-gray-900 mb-1">{tech.name}</h3>
						<p class="text-gray-600 text-center text-sm">{tech.role}</p>
					</div>
				</div>
			{/each}

			<!-- Fallback if no technologies are provided -->
			{#if technologies.length === 0}
				<slot />
			{/if}
		</div>
	</div>
</section>
