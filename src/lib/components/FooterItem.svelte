<script lang="ts">
	import { onMount } from 'svelte';

	export let href: string;
	export let name: string;
	let link: HTMLAnchorElement;

	onMount(() => {
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
