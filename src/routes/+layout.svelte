<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.postcss';
	import './styles.css';
</script>

<div class="app">
	<header>
		<Navbar />
	</header>

	<main class="h-full w-full">
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
