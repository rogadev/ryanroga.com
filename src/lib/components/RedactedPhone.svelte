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
	<!-- Redacted phone display -->
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
				d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
			/>
		</svg>
		[phone redacted]
	</span>

	<!-- Tooltip -->
	{#if showTooltip}
		<div
			class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 animate-in fade-in duration-200"
		>
			<div
				class="bg-gray-900 text-white text-sm rounded-lg px-3 py-2 max-w-64 text-center shadow-lg"
			>
				<p class="font-medium mb-1">Phone Number Removed</p>
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
