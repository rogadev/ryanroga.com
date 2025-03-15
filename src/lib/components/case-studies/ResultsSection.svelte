<script lang="ts">
	export let title: string = 'The Results';
	export let subtitle: string =
		'The implementation transformed operations with measurable improvements';

	// Define the Metric type
	type Metric = {
		value: string;
		label: string;
		description: string;
		icon: string;
		color: string;
		delay?: number;
	};

	export let metrics: Metric[] = [];
	export let testimonial: {
		quote: string;
		author: string;
		position: string;
		initials?: string;
	} | null = null;
</script>

<section class="py-20 px-4 bg-gray-50">
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

		<!-- Results metrics -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
			{#each metrics as metric, i}
				<div
					class="animate-on-scroll"
					style={metric.delay
						? `transition-delay: ${metric.delay}ms`
						: `transition-delay: ${i * 100}ms`}
				>
					<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
						<div
							class="flex items-center justify-center w-20 h-20 mb-6 rounded-xl bg-{metric.color}-100 text-{metric.color}-600 shadow-md mx-auto"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-10 w-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{@html metric.icon}
							</svg>
						</div>
						<h3 class="text-4xl font-bold mb-2 text-center text-gray-900">{metric.value}</h3>
						<p class="text-xl font-medium mb-2 text-center text-gray-700">{metric.label}</p>
						<p class="text-gray-600 text-center">
							{metric.description}
						</p>
					</div>
				</div>
			{/each}

			<!-- Fallback if no metrics are provided -->
			{#if metrics.length === 0}
				<slot name="metrics" />
			{/if}
		</div>

		<!-- Testimonial -->
		{#if testimonial}
			<div class="max-w-4xl mx-auto animate-on-scroll">
				<div class="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
					<svg
						class="w-12 h-12 text-indigo-500 mb-6"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
						/>
					</svg>

					<p class="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
						{testimonial.quote}
					</p>

					<div class="flex items-center">
						<div class="mr-4">
							<div
								class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold"
							>
								{testimonial.initials ||
									testimonial.author
										.split(' ')
										.map((name) => name[0])
										.join('')}
							</div>
						</div>
						<div>
							<p class="font-bold text-gray-900">{testimonial.author}</p>
							<p class="text-gray-600">{testimonial.position}</p>
						</div>
					</div>
				</div>
			</div>
		{:else}
			<slot name="testimonial" />
		{/if}
	</div>
</section>
