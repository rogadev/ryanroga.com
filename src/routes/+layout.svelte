<script>
	import '../app.postcss';
	import '../styles.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="app bg-white">
	<div class="h-full w-full">
		<div class="bg-white">
			<Navbar />

			<div class="relative isolate pt-14">
				{@render children()}
			</div>
		</div>
		<Footer />
	</div>
</div>
