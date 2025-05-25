<svelte:options runes={true} />

<script>
	let { children } = $props();
</script>

<div class="container mx-auto px-4 sm:px-6 lg:px-8">
	{@render children()}
</div>
