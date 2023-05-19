<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<h1 class="h1">{$page.status}: {$page?.error?.message ?? 'Something Went Wrong'}</h1>
	</div>
</div>
