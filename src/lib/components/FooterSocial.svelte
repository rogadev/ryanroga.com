<svelte:options runes={true} />

<script lang="ts">
	import Icon from '@iconify/svelte';

	let { href, label, icon } = $props<{ href: string; label: string; icon: string }>();
</script>

<a {href} target="_blank" class="text-gray-400 hover:text-gray-500">
	<span class="sr-only">
		{label}
	</span>
	<Icon {icon} class="h-6 w-6 fill-current" />
</a>
