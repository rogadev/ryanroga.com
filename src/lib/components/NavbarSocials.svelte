<script lang="ts">
	import Icon from '@iconify/svelte';
	export let icon: string;
	export let href: string;
	export let color: string;
</script>

<a
	{href}
	target="_blank"
	class="inline-block h-8 w-8 overflow-hidden rounded-full bg-gray-50 drop-shadow-md hover:bg-gray-200 hover:shadow-md ml-2"
>
	<div class="h-full flex items-center justify-center">
		<Icon {icon} class="h-4/5 w-4/5" style="color:{color}" />
	</div>
</a>

<style scoped>
	a {
		transition: all 0.2s ease-in-out;
	}
</style>
