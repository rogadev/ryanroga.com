<svelte:options runes={true} />

<script lang="ts">
	let { href, name } = $props<{ href: string; name: string }>();
	let link: HTMLAnchorElement;

	$effect(() => {
		if (href?.startsWith('http')) {
			link.setAttribute('target', '_blank');
			link.setAttribute('rel', 'noopener noreferrer');
		}
	});
</script>

<li>
	<a {href} bind:this={link} class="text-sm leading-6 text-gray-600 hover:text-gray-900">
		{name}
	</a>
</li>
