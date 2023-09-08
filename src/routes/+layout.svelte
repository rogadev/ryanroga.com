<script>
	import '../app.postcss';
	import '../styles.css';
</script>

<div class="app bg-white">
	<div class="h-full w-full">
		<slot />
	</div>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
