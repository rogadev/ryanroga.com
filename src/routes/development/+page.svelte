<script>
	import { onMount } from 'svelte';
	import WebFrameworksSection from './WebFrameworksSection.svelte';
	import DevelopmentLandingSection from './DevelopmentLandingSection.svelte';

	// Add animation functionality
	onMount(() => {
		// Intersection observer for scroll animations
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-in');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		document.querySelectorAll('.animate-on-scroll').forEach((el) => {
			observer.observe(el);
		});
	});
</script>

<svelte:head>
	<title>Development Services | Your Company Name</title>
	<meta
		name="description"
		content="Professional web and software development services using cutting-edge technologies and frameworks."
	/>
</svelte:head>

<!-- Decorative background elements -->
<div class="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
	<div
		class="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
	></div>
	<div
		class="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
	></div>
	<div
		class="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
	></div>
</div>

<DevelopmentLandingSection />

<WebFrameworksSection />

<!-- Add a new section with animation -->
<section class="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
	<div class="max-w-7xl mx-auto animate-on-scroll">
		<h2 class="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900">
			Our Development Process
		</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
			<!-- Process Step 1 -->
			<div
				class="bg-white p-8 rounded-xl shadow-lg animate-on-scroll hover:shadow-xl transition-shadow"
			>
				<div
					class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
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
				</div>
				<h3 class="text-2xl font-bold mb-3 text-gray-900">Discovery</h3>
				<p class="text-gray-700">
					We begin by understanding your business goals, target audience, and project requirements
					to create a strategic roadmap.
				</p>
			</div>

			<!-- Process Step 2 -->
			<div
				class="bg-white p-8 rounded-xl shadow-lg animate-on-scroll hover:shadow-xl transition-shadow"
				style="transition-delay: 200ms;"
			>
				<div
					class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 text-indigo-600"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold mb-3 text-gray-900">Development</h3>
				<p class="text-gray-700">
					Our expert team builds your solution using modern frameworks and best practices, with
					regular updates and transparent communication.
				</p>
			</div>

			<!-- Process Step 3 -->
			<div
				class="bg-white p-8 rounded-xl shadow-lg animate-on-scroll hover:shadow-xl transition-shadow"
				style="transition-delay: 400ms;"
			>
				<div
					class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
				<h3 class="text-2xl font-bold mb-3 text-gray-900">Delivery & Support</h3>
				<p class="text-gray-700">
					We thoroughly test, deploy your solution, and provide ongoing support to ensure your
					project continues to succeed.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
	<div class="max-w-5xl mx-auto text-center animate-on-scroll">
		<h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Amazing?</h2>
		<p class="text-xl opacity-90 max-w-2xl mx-auto mb-10">
			Let's discuss how our development expertise can help bring your vision to life.
		</p>
		<a
			href="/contact"
			class="inline-block px-8 py-4 bg-white text-indigo-700 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
		>
			Start Your Project
		</a>
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

	.animate-on-scroll {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;
	}

	:global(.animate-on-scroll.animate-in) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
