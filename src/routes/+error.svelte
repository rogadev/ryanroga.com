<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>{page.status} | Roga Web Development</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="relative overflow-hidden">
	<div
		class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
		aria-hidden="true"
	>
		<div
			class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#38bdf8] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
			style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
		></div>
	</div>

	<div class="mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<p class="text-8xl font-bold text-sky-600 sm:text-9xl">{page.status}</p>
			<h1 class="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				{#if page.status === 404}
					Page not found
				{:else}
					Something went wrong
				{/if}
			</h1>
			<p class="mt-4 text-lg leading-8 text-gray-600">
				{#if page.status === 404}
					The page you're looking for doesn't exist or has been moved.
				{:else}
					{page.error?.message || "An unexpected error occurred."}
				{/if}
			</p>
			<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
				<a
					href="/"
					class="rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-sky-500 transition-all duration-200"
				>
					Go home
				</a>
				<a
					href="/contact"
					class="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-200"
					data-track="book_call"
					data-track-source="error_page"
				>
					Let's talk about your project
				</a>
			</div>
		</div>
	</div>
</section>
