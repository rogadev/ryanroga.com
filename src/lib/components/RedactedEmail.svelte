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

<!-- Redacted email display -->
<span
	class="inline-flex items-center gap-1 text-gray-500 cursor-pointer border-b border-dashed border-gray-400 hover:border-gray-600 transition-colors select-none"
	role="button"
	tabindex="0"
	aria-label="Email address removed due to spam - click for details"
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
			d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
		/>
	</svg>
	[email redacted]
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
					<h3 class="text-base font-semibold text-gray-900">Email Address Removed</h3>
					<div class="mt-2 max-w-xl text-sm text-gray-500">
						<p>
							My email address has been removed from this site due to spam and abuse. Please connect
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
