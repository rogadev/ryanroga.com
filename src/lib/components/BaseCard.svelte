<svelte:options runes={true} />

<script>
	let { children } = $props();
</script>

<div class="overflow-hidden rounded-lg bg-white shadow">
	<div class="px-4 py-5 sm:p-6">
		{@render children()}
	</div>
</div>
