<script lang="ts">
	import { page, navigating } from '$app/stores';

	// Props
	export let href: string;
	export let close: () => void;

	// Styles
	const activeStyles =
		'block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 cursor-default';
	const defaultStyles =
		'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700';

	// Data
	$: active = $page.url.pathname === href;
	$: {
		if ($navigating) {
			close();
		}
	}
</script>

<a {href} class={active ? activeStyles : defaultStyles}>
	<slot />
</a>
