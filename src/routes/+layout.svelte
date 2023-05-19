<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	// Iconify Icons
	import Icon from '@iconify/svelte';
	// Skeleton Components
	import { AppBar } from '@skeletonlabs/skeleton';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppRail, AppRailTile } from '@skeletonlabs/skeleton';

	let showSidebar = false;

	const storeValue: Writable<number> = writable(0);
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<button on:click={() => (showSidebar = !showSidebar)}>
					<Icon class="text-xl" icon="mdi:menu" />
				</button>
			</svelte:fragment>
			<a href="/" class="text-xl font-bold">Ryan Roga</a>
			<svelte:fragment slot="trail">
				<a href="/login">
					<Icon class="text-xl" icon="mdi:login" />
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		{#if showSidebar}
			<AppRail selected={storeValue}>
				<AppRailTile label="Home" value={0}>
					<Icon class="text-xl" icon="mdi:home-circle" />
				</AppRailTile>
				<AppRailTile label="Projects" value={1}>
					<Icon class="text-xl" icon="mdi:code-braces" />
				</AppRailTile>
				<AppRailTile label="GitHub" value={2}>
					<Icon class="text-xl" icon="mdi:github" />
				</AppRailTile>
				<AppRailTile label="Contact" value={3}>
					<Icon class="text-xl" icon="mdi:email" />
				</AppRailTile>
			</AppRail>
		{/if}
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="pageFooter">
		<p class="text-center text-gray-500 text-xs">&copy; 2023 Ryan Roga. All rights reserved.</p>
	</svelte:fragment>
</AppShell>
