<svelte:options runes={true} />

<script lang="ts">
	let { href, name } = $props<{ href: string; name: string }>();
	let link: HTMLAnchorElement;

	$effect(() => {
		if (link && href?.startsWith('http')) {
			link.setAttribute('target', '_blank');
			link.setAttribute('rel', 'noopener noreferrer');
		}
	});
</script>

<li>
	<a
		{href}
		bind:this={link}
		class="text-sm leading-6 text-gray-600 hover:text-indigo-600 transition-colors inline-block relative z-10"
	>
		{name}
	</a>
</li>
