<script lang="ts">
	import Icon from '@iconify/svelte';
	export let icon: string;
	export let href: string;
	export let color: string;
	export let label: string;
</script>

<a
	{href}
	target="_blank"
	class="inline-block h-8 w-8 overflow-hidden rounded-full hover:bg-gray-100 hover:drop-shadow-md ml-2"
>
	<span class="sr-only">{label}</span>
	<div class="h-full flex items-center justify-center">
		<Icon {icon} class="h-4/5 w-4/5" style="color:{color}" />
	</div>
</a>

<style scoped>
	a {
		transition: all 0.3s ease-in-out;
	}
</style>
