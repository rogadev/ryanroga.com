<svelte:options runes={true} />

<script>
	let { children } = $props();
</script>

<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
	{@render children()}
</div>
