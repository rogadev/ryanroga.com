<svelte:options runes={true} />

<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<!-- Hero Section -->
<section
	class="relative py-20 px-4 bg-gradient-to-b from-sky-900 to-teal-800 text-white overflow-hidden mt-6"
>
	<!-- Decorative background elements -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div
			class="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
		></div>
		<div
			class="absolute top-1/3 left-1/3 w-96 h-96 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
		></div>
		<div
			class="absolute bottom-1/4 right-1/3 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
		></div>

		<!-- Add floating geometric shapes -->
		<div class="absolute top-0 left-0 w-full h-full">
			<div
				class="absolute top-[15%] left-[10%] w-16 h-16 border-2 border-white/20 rounded-lg rotate-12 animate-float"
			></div>
			<div
				class="absolute top-[60%] left-[80%] w-24 h-24 border-2 border-white/20 rounded-full animate-float animation-delay-1000"
			></div>
			<div
				class="absolute top-[75%] left-[20%] w-12 h-12 border-2 border-white/20 rotate-45 animate-float animation-delay-3000"
			></div>
			<div
				class="absolute top-[30%] left-[70%] w-20 h-20 border-2 border-white/20 rounded-lg rotate-12 animate-float animation-delay-2000"
			></div>
		</div>

		<!-- Add subtle grid pattern overlay -->
		<div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
	</div>

	<div class="max-w-7xl mx-auto relative">
		<div class="max-w-3xl" in:fade={{ duration: 800, delay: 200 }}>
			<!-- Add decorative element before heading -->
			<div class="flex items-center gap-3 mb-4 text-blue-300">
				<div class="h-px w-12 bg-blue-300"></div>
				<span class="uppercase tracking-wider text-sm font-medium">Portfolio</span>
			</div>

			<h1 class="text-5xl md:text-6xl font-bold mb-6 relative text-balance">
				Our Work
				<span class="absolute -bottom-3 left-0 w-24 h-1.5 bg-blue-400 rounded-full"></span>
			</h1>

			<p class="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 text-pretty">
				We build custom web solutions that solve real business problems. Explore our case studies to
				see how we've helped organizations streamline operations, engage customers, and drive
				growth.
			</p>

			<!-- Enhanced tags with icons -->
			<div class="flex flex-wrap gap-3 mb-8">
				<span
					class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
					Web Applications
				</span>
				<span
					class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
						/>
					</svg>
					Business Websites
				</span>
				<span
					class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
						/>
					</svg>
					AI Integration
				</span>
				<span
					class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-2"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
						/>
					</svg>
					Data Visualization
				</span>
			</div>
		</div>

		<!-- Add decorative illustration -->
		<div class="hidden lg:block absolute right-0 bottom-0 translate-y-1/4 w-96 h-96 opacity-20">
			<svg
				viewBox="0 0 200 200"
				xmlns="http://www.w3.org/2000/svg"
				class="w-full h-full text-white"
			>
				<path
					fill="currentColor"
					d="M45.3,-51.2C58.3,-40.9,68.8,-25.9,71.8,-9.2C74.9,7.5,70.6,25.9,60.1,39.3C49.5,52.7,32.8,61.1,14.2,67.2C-4.3,73.3,-24.8,77.1,-40.3,69.5C-55.8,61.9,-66.3,42.8,-70.8,23.3C-75.3,3.8,-73.8,-16.2,-64.9,-31.1C-56,-46,-39.7,-55.9,-23.7,-64.8C-7.7,-73.7,7.9,-81.7,22.8,-77.5C37.7,-73.3,51.9,-56.9,45.3,-51.2Z"
					transform="translate(100 100)"
				/>
			</svg>
		</div>
	</div>
</section>

<style>
	@keyframes blob {
		0% {
			transform: translate(0px, 0px) scale(1);
		}
		33% {
			transform: translate(15px, -25px) scale(1.05);
		}
		66% {
			transform: translate(-10px, 10px) scale(0.95);
		}
		100% {
			transform: translate(0px, 0px) scale(1);
		}
	}

	.animate-blob {
		animation: blob 7s infinite;
	}

	.animation-delay-2000 {
		animation-delay: 2s;
	}

	.animation-delay-4000 {
		animation-delay: 4s;
	}
</style>
