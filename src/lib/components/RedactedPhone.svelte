<script lang="ts">
	let showModal = $state(false);

	function handleClick() {
		showModal = true;
	}

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			showModal = true;
		}
		if (event.key === 'Escape') {
			showModal = false;
		}
	}

	function closeModal() {
		showModal = false;
	}
</script>

<!-- Redacted phone display -->
<span
	class="inline-flex items-center gap-1 text-gray-500 cursor-pointer border-b border-dashed border-gray-400 hover:border-gray-600 transition-colors select-none"
	role="button"
	tabindex="0"
	aria-label="Phone number removed due to spam - click for details"
	onkeydown={handleKeyDown}
	onclick={handleClick}
>
	<svg
		class="h-4 w-4 text-gray-400"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
		/>
	</svg>
	[phone redacted]
</span>

<!-- Modal -->
{#if showModal}
	<!-- Modal backdrop -->
	<div
		class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-50"
		aria-hidden="true"
		onclick={closeModal}
	></div>

	<!-- Modal panel -->
	<div class="fixed inset-0 z-50 overflow-y-auto">
		<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
			<div
				class="bg-white shadow sm:rounded-lg relative transform overflow-hidden transition-all sm:my-8 sm:w-full sm:max-w-lg"
			>
				<div class="px-4 py-5 sm:p-6">
					<h3 class="text-base font-semibold text-gray-900">Phone Number Removed</h3>
					<div class="mt-2 max-w-xl text-sm text-gray-500">
						<p>
							My phone number has been removed from this site due to spam and abuse. Please connect
							with me on LinkedIn for professional inquiries.
						</p>
					</div>
					<div class="mt-5 flex flex-col sm:flex-row gap-3">
						<a
							href="https://www.linkedin.com/in/ryanroga"
							target="_blank"
							class="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
						>
							<svg class="h-4 w-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
								<path
									d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
								/>
							</svg>
							Connect on LinkedIn
						</a>
						<button
							type="button"
							class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
							onclick={closeModal}
						>
							OK
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<!-- End Modal -->

<style>
</style>
