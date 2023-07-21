<script lang="ts">
	export let open = false;
	export let toggleMobileMenu: () => void;
</script>

<button
	type="button"
	class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
	aria-controls="mobile-menu"
	aria-expanded="false"
	on:click={toggleMobileMenu}
>
	<span class="sr-only">Open main menu</span>
	<svg
		class="{open ? 'hidden' : 'block'} h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
		/>
	</svg>
	<svg
		class="{open ? 'block' : 'hidden'} h-6 w-6"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
	</svg>
</button>
