<svelte:options runes={true} />

<script lang="ts">
	let { delay = 0, threshold = 0.1 } = $props<{ delay?: number; threshold?: number }>();

	let element: HTMLElement;
	let isVisible = $state(false);

	$effect(() => {
		if (!element) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(element);
					}
				});
			},
			{ threshold }
		);

		observer.observe(element);

		return () => {
			observer.disconnect();
		};
	});
</script>

<div
	bind:this={element}
	class="animate-on-scroll {isVisible ? 'animate-in' : ''}"
	style={delay ? `transition-delay: ${delay}ms` : ''}
>
	<slot />
</div>

<style>
	.animate-on-scroll {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;
	}

	.animate-in {
		opacity: 1;
		transform: translateY(0);
	}
</style>
