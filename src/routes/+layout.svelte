<script>
	import '../app.postcss';
	import '../styles.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen bg-white">
	<div class="h-full w-full">
		<header>
			<Navbar />
		</header>
		<slot />
		<Footer />
	</div>
</div>
