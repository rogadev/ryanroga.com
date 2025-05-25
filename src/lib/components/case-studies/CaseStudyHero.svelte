<svelte:options runes={true} />

<script lang="ts">
	import { fly } from 'svelte/transition';

	let {
		title,
		clientUrl,
		clientName,
		description,
		imageUrl = '',
		category = 'Web Application'
	} = $props<{
		title: string;
		clientUrl: string;
		clientName: string;
		description: string;
		imageUrl?: string;
		category?: string;
	}>();

	function handleImageError(event: Event): void {
		const img = event.currentTarget as HTMLImageElement;
		img.src = `https://placehold.co/800x500/e2e8f0/475569?text=${encodeURIComponent(title)}`;
	}
</script>

<!-- Hero Section -->
<section class="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4">
	<div class="max-w-7xl mx-auto">
		<div class="flex flex-col md:flex-row items-center justify-between gap-12">
			<!-- Left side content -->
			<div class="w-full md:w-1/2" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
				<div class="flex items-center mb-6">
					<a href="/projects" class="text-blue-600 hover:text-blue-800 flex items-center gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>Back to Projects</span>
					</a>
				</div>

				<h1 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900">{title}</h1>

				<div class="flex items-center gap-4 mb-6">
					<a
						href={clientUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
								clip-rule="evenodd"
							/>
						</svg>
						{clientName}
					</a>
					<span class="text-gray-400">|</span>
					<span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
						{category}
					</span>
				</div>

				<p class="text-xl md:text-2xl text-gray-700 max-w-xl leading-relaxed mb-8">
					{description}
				</p>

				<div class="flex flex-wrap gap-4">
					<a
						href="/contact"
						class="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
					>
						Start Your Project
					</a>
				</div>
			</div>

			<!-- Right side image -->
			<div class="w-full md:w-1/2" in:fly={{ y: 50, duration: 1000, delay: 400 }}>
				<div class="relative">
					<div
						class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur-lg opacity-20"
					></div>
					<div
						class="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
					>
						<img
							src={imageUrl}
							alt="{title} Dashboard"
							class="w-full h-auto"
							onerror={handleImageError}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
