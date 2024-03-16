<script>
	import '../app.postcss';
	import '../styles.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="app bg-white">
	<div class="h-full w-full">
		<div class="bg-white">
			<Navbar />

			<div class="relative isolate px-6 pt-14 lg:px-8">
				<slot />
			</div>
		</div>
		<Footer />
	</div>
</div>
