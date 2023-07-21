<script lang="ts">
	import { page } from '$app/stores';

	export let href = '/';

	const activeStyles =
		'inline-flex items-center border-b-2 border-sky-600 px-1 pt-1 text-sm font-medium text-gray-900 hover:no-underline';
	const defaultStyles =
		'inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:no-underline hover:border-gray-300 hover:text-gray-700';

	$: isActive = href === $page.url.pathname;
</script>

<!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
<a {href} class={isActive ? activeStyles : defaultStyles}>
	<slot />
</a>

<style scoped>
	a {
		transition: all 0.3s ease-in-out;
	}
</style>
