<svelte:options runes={true} />

<script lang="ts">
	let {
		title = 'Ready to Transform Your Business Operations?',
		subtitle = "Let's discuss how we can create a custom solution that drives real results for your business.",
		primaryButtonText = 'Start Your Project',
		primaryButtonUrl = '/contact',
		secondaryButtonText = 'View More Case Studies',
		secondaryButtonUrl = '/projects'
	} = $props<{
		title?: string;
		subtitle?: string;
		primaryButtonText?: string;
		primaryButtonUrl?: string;
		secondaryButtonText?: string;
		secondaryButtonUrl?: string;
	}>();
</script>

<section class="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
	<div class="max-w-5xl mx-auto text-center animate-on-scroll">
		<h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
			{title}
		</h2>
		<p class="text-xl text-white opacity-90 max-w-2xl mx-auto mb-12">
			{subtitle}
		</p>
		<div class="flex flex-wrap justify-center gap-6">
			<a
				href={primaryButtonUrl}
				class="px-8 py-4 bg-white text-indigo-700 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
			>
				{primaryButtonText}
			</a>
			<a
				href={secondaryButtonUrl}
				class="px-8 py-4 bg-transparent border-2 border-white/30 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/10 transition-all"
			>
				{secondaryButtonText}
			</a>
		</div>
	</div>
</section>
