<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import NavbarMobileMenuLink from './NavbarMobileMenuLink.svelte';

	export let open: boolean;
	export let pages: { name: string; href: string }[];

	const dispatch = createEventDispatcher();
</script>

{#if open}
	<div class="sm:hidden border-b border-gray-200" id="mobile-menu">
		<div class="space-y-1 pb-4 pt-2">
			{#each pages as { name, href }}
				<NavbarMobileMenuLink {href} close={() => dispatch('close')}>{name}</NavbarMobileMenuLink>
			{/each}
		</div>
	</div>
{/if}
