<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	let isVisible = false;

	// Function to handle image loading errors
	function handleImageError(event: Event): void {
		const img = event.currentTarget as HTMLImageElement;
		img.src = 'https://placehold.co/800x500/e2e8f0/475569?text=EZTripr';
	}

	// Add animation functionality
	onMount(() => {
		isVisible = true;

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
	<title>EZTripr Trip Tracker | Roga Web Development Case Study</title>
	<meta
		name="description"
		content="See how we helped Granny Go Go streamline their medical patient transportation tracking with a custom web application."
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

<main class="min-h-screen bg-white text-gray-900">
	<!-- Hero Section -->
	<section class="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4">
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col md:flex-row items-center justify-between gap-12">
				<!-- Left side content -->
				<div class="w-full md:w-1/2" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
					<div class="flex items-center mb-6">
						<a href="/projects" class="text-blue-600 hover:text-blue-800 flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Back to Projects</span>
						</a>
					</div>

					<h1 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900">EZTripr Trip Tracker</h1>

					<div class="flex items-center gap-4 mb-6">
						<span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
							Web Application
						</span>
					</div>

					<p class="text-xl md:text-2xl text-gray-700 max-w-xl leading-relaxed mb-8">
						A comprehensive trip tracking application designed for Granny Go Go's medical patient
						transportation service, streamlining driver coordination and patient trip management.
					</p>

					<div class="flex flex-wrap gap-4">
						<a
							href="/contact"
							class="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
						>
							Get This For Your Business
						</a>
					</div>
				</div>

				<!-- Right side image -->
				<div class="w-full md:w-1/2" in:fly={{ y: 50, duration: 1000, delay: 400 }}>
					<div class="relative">
						<div
							class="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur-lg opacity-20"
						></div>
						<div
							class="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
						>
							<img
								src="/images/eztripr.png"
								alt="EZTripr Dashboard"
								class="w-full h-auto"
								on:error={handleImageError}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- About Client Section -->
	<section class="py-16 px-4 bg-gray-50">
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
				<div class="w-full lg:w-3/5 animate-on-scroll">
					<div class="bg-white h-full p-8 rounded-2xl shadow-lg border border-gray-200">
						<h2 class="text-3xl font-bold mb-6 text-gray-900">About Granny Go Go</h2>
						<p class="text-gray-700 mb-4">
							Granny Go Go is a specialized transportation service based on Vancouver Island that
							provides safe and reliable transportation for medical patients. Their dedicated team
							of drivers helps patients get to and from medical appointments, ensuring they receive
							the care they need.
						</p>
						<p class="text-gray-700 mb-4">
							With a growing fleet of drivers and an increasing number of patients relying on their
							services, Granny Go Go needed a modern solution to replace their manual trip tracking
							system and improve coordination between drivers and dispatchers.
						</p>
						<p class="text-gray-700">
							Their commitment to providing exceptional service to vulnerable patients meant they
							required a solution that could handle complex scheduling requirements while
							maintaining the highest standards of reliability and patient care.
						</p>
					</div>
				</div>

				<div class="w-full lg:w-2/5 animate-on-scroll" style="transition-delay: 200ms;">
					<div class="bg-indigo-900 text-white h-full p-8 rounded-2xl shadow-lg">
						<h2 class="text-3xl font-bold mb-8">Project Overview</h2>
						<div class="space-y-4">
							<div class="bg-indigo-800/50 p-6 rounded-xl">
								<div class="flex items-center gap-3 mb-3">
									<div class="w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<h3 class="text-xl font-bold">Timeline</h3>
								</div>
								<p class="text-indigo-100">3 months from concept to deployment</p>
							</div>

							<div class="bg-indigo-800/50 p-6 rounded-xl">
								<div class="flex items-center gap-3 mb-3">
									<div class="w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
											/>
										</svg>
									</div>
									<h3 class="text-xl font-bold">Platform</h3>
								</div>
								<p class="text-indigo-100">Progressive Web Application</p>
							</div>

							<div class="bg-indigo-800/50 p-6 rounded-xl">
								<div class="flex items-center gap-3 mb-3">
									<div class="w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
											/>
										</svg>
									</div>
									<h3 class="text-xl font-bold">Tech Stack</h3>
								</div>
								<p class="text-indigo-100">Nuxt 3, Prisma, Supabase, Pinia</p>
							</div>
						</div>
					</div>
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
</main>

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
