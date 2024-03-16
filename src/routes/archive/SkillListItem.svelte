<script lang="ts">
	import Icon from '@iconify/svelte';
	export let icon: string;
</script>

<li>
	<Icon {icon} class="mx-auto h-24 w-24 rounded-md" />
	<h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
		<slot />
	</h3>
	<!-- <p class="text-sm leading-6 text-gray-600">Co-Founder / CTO</p> -->
</li>
