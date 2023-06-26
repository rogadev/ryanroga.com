<script lang="ts">
	import Icon from '@iconify/svelte';

	export let href: string = '/';
	export let icon: string = '';
	export let label: string = '';
	export let variant: string = 'variant-gradient-secondary-tertiary';
</script>

<!-- The only icon we should have that might need is is the home button.
	Change the turnery if this changes. -->
<a
	{href}
	class="btn bg-gradient-to-br {variant}"
	data-sveltekit-preload-data="hover"
	title={label ? label : 'Home'}
>
	<span>
		<Icon class="text-xl" {icon} />
	</span>
	{#if label !== ''}
		<span class="hidden md:block">
			{label}
		</span>
	{/if}
</a>
