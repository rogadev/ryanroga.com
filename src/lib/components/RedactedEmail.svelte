<script lang="ts">
	let showTooltip = $state(false);
	let hoverTimeout: NodeJS.Timeout;

	function handleMouseEnter() {
		clearTimeout(hoverTimeout);
		showTooltip = true;
	}

	function handleMouseLeave() {
		hoverTimeout = setTimeout(() => {
			showTooltip = false;
		}, 150); // Small delay to prevent flickering
	}
</script>

<div class="relative inline-block">
	<!-- Redacted email display -->
	<span
		class="inline-flex items-center gap-1 text-gray-500 cursor-help border-b border-dashed border-gray-400 hover:border-gray-600 transition-colors"
		role="button"
		tabindex="0"
		onmouseenter={handleMouseEnter}
		onmouseleave={handleMouseLeave}
		onfocus={handleMouseEnter}
		onblur={handleMouseLeave}
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

	<!-- Tooltip -->
	{#if showTooltip}
		<div
			class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 animate-in fade-in duration-200"
		>
			<div
				class="bg-gray-900 text-white text-sm rounded-lg px-3 py-2 max-w-64 text-center shadow-lg"
			>
				<p class="font-medium mb-1">Email Address Removed</p>
				<p class="text-gray-300 text-xs mb-2">
					Due to spam and abuse, contact info has been removed from this site.
				</p>
				<p class="text-gray-300 text-xs">
					Please connect with me on <a
						href="https://www.linkedin.com/in/ryanroga"
						target="_blank"
						class="text-blue-400 hover:text-blue-300 underline">LinkedIn</a
					> instead.
				</p>
				<!-- Arrow -->
				<div
					class="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"
				></div>
			</div>
		</div>
	{/if}
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateX(-50%) translateY(4px);
		}
		to {
			opacity: 1;
			transform: translateX(-50%) translateY(0);
		}
	}

	.animate-in {
		animation-fill-mode: both;
	}

	.fade-in {
		animation-name: fade-in;
	}

	.duration-200 {
		animation-duration: 200ms;
	}
</style>
