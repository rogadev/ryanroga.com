<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5 flex flex-col text-center md:text-left">
		<h1 class="text-5xl">{$page.status}</h1>
		<h2 class="h2 pb-4">{$page?.error?.message ?? 'Oops, Something Went Wrong'}</h2>
	</div>
</div>
