<script lang="ts">
	import { fly } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	// Modal state
	let showModal = $state(false);

	// Function to handle image loading errors
	function handleImageError(event: Event): void {
		const img = event.currentTarget as HTMLImageElement;
		img.src = 'https://placehold.co/800x500/e2e8f0/475569?text=EZTripr';
	}

	// Modal functions
	function openModal() {
		showModal = true;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		showModal = false;
		document.body.style.overflow = 'auto';
	}

	// Handle escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && showModal) {
			closeModal();
		}
	}

	// Add animation functionality
	$effect(() => {
		// Apply gray background to body
		document.body.classList.add('bg-gray-50');

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

		// Add keydown listener
		document.addEventListener('keydown', handleKeydown);

		// Cleanup
		return () => {
			document.body.classList.remove('bg-gray-50');
			document.removeEventListener('keydown', handleKeydown);
		};
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

<main class="min-h-screen text-gray-900">
	<!-- Hero Section -->
	<section class="relative pt-16 pb-12 md:pt-24 md:pb-16 px-4">
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
					<div class="relative max-w-[300px] mx-auto">
						<div
							class="absolute -inset-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur-lg opacity-20"
						></div>
						<div
							class="relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200"
						>
							<img
								src="/images/eztripr.png"
								alt="EZTripr Dashboard"
								class="w-full"
								onerror={handleImageError}
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
							Granny Go Go is Vancouver Island's premier companion and escorted transportation
							service, serving clients from 19 to 95 years old. What began as a senior-focused
							service has evolved into a comprehensive support system, providing companionship for
							homebound individuals and assistance for various outings, including medical
							appointments.
						</p>
						<p class="text-gray-700 mb-4">
							From a single team member to a thriving network of dozens of driver companions, they
							now serve communities from Campbell River to the Cowichan Valley. Each journey is
							approached with compassion and professionalism, ensuring clients are treated with the
							utmost respect and dignity.
						</p>
						<p class="text-gray-700">
							As their service area and team expanded, Granny Go Go needed a solution that could
							scale with their growth. The EZTripr application was developed to replace manual
							tracking methods, enabling real-time coordination between drivers and dispatchers
							while maintaining their high standards of reliable, dignified service.
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
								<p class="text-indigo-100">4 months from design to deployment</p>
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
								<p class="text-indigo-100">Driver Trip Tracking Web Application</p>
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
								<p class="text-indigo-100">Nuxt 3, Prisma, Supabase, OpenAI API, Google Maps API</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Challenges Section -->
	<section class="py-20 px-4">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16 animate-on-scroll">
				<h2 class="inline-block text-4xl md:text-5xl font-bold relative">
					<span class="relative z-10 text-gray-900">The Challenges</span>
					<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
					></span>
				</h2>
				<p class="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
					Granny Go Go faced several operational hurdles as their service expanded across Vancouver
					Island
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Challenge 1 -->
				<div class="group animate-on-scroll">
					<div
						class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div class="flex items-start gap-4 mb-6">
							<div class="bg-blue-100 p-3 rounded-lg">
								<Icon icon="mdi:calendar-clock" class="h-6 w-6 text-blue-600" />
							</div>
							<div>
								<h3 class="text-xl font-bold mb-2">Manual Scheduling</h3>
								<p class="text-gray-700">
									Coordinating multiple drivers and trips using spreadsheets became unmanageable as
									the service grew, leading to scheduling conflicts and inefficiencies.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Challenge 2 -->
				<div class="group animate-on-scroll" style="transition-delay: 200ms;">
					<div
						class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div class="flex items-start gap-4 mb-6">
							<div class="bg-blue-100 p-3 rounded-lg">
								<Icon icon="mdi:routes" class="h-6 w-6 text-blue-600" />
							</div>
							<div>
								<h3 class="text-xl font-bold mb-2">Route Optimization</h3>
								<p class="text-gray-700">
									Without proper tools, planning efficient routes for multiple stops and
									coordinating between drivers was time-consuming and often suboptimal.
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Challenge 3 -->
				<div class="group animate-on-scroll" style="transition-delay: 400ms;">
					<div
						class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div class="flex items-start gap-4 mb-6">
							<div class="bg-blue-100 p-3 rounded-lg">
								<Icon icon="mdi:account-multiple" class="h-6 w-6 text-blue-600" />
							</div>
							<div>
								<h3 class="text-xl font-bold mb-2">Driver Communication</h3>
								<p class="text-gray-700">
									Relying on phone calls and text messages for updates created communication gaps
									and made it difficult to track real-time trip status.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Solution Section -->
	<section class="py-20 px-4 bg-gradient-to-b from-indigo-900 to-blue-900 text-white">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16 animate-on-scroll">
				<h2 class="inline-block text-4xl md:text-5xl font-bold relative">
					<span class="relative z-10 text-white">Our Solution</span>
					<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-400/30 transform -skew-x-3"
					></span>
				</h2>
				<p class="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
					We developed a comprehensive trip tracking platform tailored to Granny Go Go's unique
					needs
				</p>
			</div>

			<div class="grid md:grid-cols-2 gap-12 items-center">
				<!-- Left side - Solution description -->
				<div class="animate-on-scroll">
					<div
						class="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 shadow-xl"
					>
						<h3 class="text-2xl sm:text-3xl font-bold mb-8 text-white">Key Features</h3>

						<div class="space-y-8">
							<div class="flex items-start gap-6">
								<div
									class="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-600/20 backdrop-blur-sm flex items-center justify-center p-3"
								>
									<Icon icon="mdi:map-marker-path" class="w-full h-full" />
								</div>
								<div class="flex-1 min-w-0">
									<h4 class="text-lg sm:text-xl font-bold text-white mb-2">Smart Route Planning</h4>
									<p class="text-white/80 text-sm sm:text-base">
										Automated route optimization for multiple stops, considering traffic patterns
										and appointment times.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-6">
								<div
									class="flex-shrink-0 w-14 h-14 rounded-xl bg-indigo-600/20 backdrop-blur-sm flex items-center justify-center p-3"
								>
									<Icon icon="mdi:calendar-check" class="w-full h-full" />
								</div>
								<div class="flex-1 min-w-0">
									<h4 class="text-lg sm:text-xl font-bold text-white mb-2">Real-time Scheduling</h4>
									<p class="text-white/80 text-sm sm:text-base">
										Dynamic scheduling system that prevents double-bookings and automatically
										adjusts for changes.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-6">
								<div
									class="flex-shrink-0 w-14 h-14 rounded-xl bg-purple-600/20 backdrop-blur-sm flex items-center justify-center p-3"
								>
									<Icon icon="mdi:cellphone-message" class="w-full h-full" />
								</div>
								<div class="flex-1 min-w-0">
									<h4 class="text-lg sm:text-xl font-bold text-white mb-2">Driver Mobile App</h4>
									<p class="text-white/80 text-sm sm:text-base">
										Mobile-first interface for drivers to manage trips, update status, and
										communicate with dispatch.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Right side - Visual representation -->
				<div class="animate-on-scroll" style="transition-delay: 200ms;">
					<div class="relative">
						<div
							class="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-20"
						></div>
						<div
							class="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl overflow-hidden"
						>
							<div class="dashboard-image-container">
								<button
									onclick={openModal}
									class="block w-full cursor-pointer transition-transform hover:scale-105"
									aria-label="View full dashboard image"
								>
									<img
										src="/images/EzTripr-Updated-Drive-UI.png"
										alt="EZTripr Dashboard Interface"
										class="rounded-lg w-full max-h-[600px] object-cover object-top shadow-lg dashboard-image"
										loading="lazy"
										onerror={handleImageError}
									/>
								</button>
								<div
									class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center"
								>
									<div
										class="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-900 font-medium"
									>
										<Icon icon="mdi:magnify-plus" class="inline w-5 h-5 mr-2" />
										Click to view full image
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Results Section -->
	<section class="py-20 px-4 bg-gray-50">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16 animate-on-scroll">
				<h2 class="inline-block text-4xl md:text-5xl font-bold relative">
					<span class="relative z-10 text-gray-900">The Results</span>
					<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
					></span>
				</h2>
				<p class="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
					The implementation of EZTripr transformed Granny Go Go's operations
				</p>
			</div>

			<!-- Results metrics -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
				<!-- Metric 1 -->
				<div class="animate-on-scroll">
					<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
						<div
							class="flex items-center justify-center w-20 h-20 mb-6 rounded-xl bg-blue-100 text-blue-600 shadow-md mx-auto"
						>
							<Icon icon="mdi:clock-fast" class="w-12 h-12" />
						</div>
						<h3 class="text-4xl font-bold mb-2 text-center text-gray-900">40%</h3>
						<p class="text-xl font-medium mb-2 text-center text-gray-700">Faster Scheduling</p>
						<p class="text-gray-600 text-center">
							Reduced time spent on trip planning and coordination
						</p>
					</div>
				</div>

				<!-- Metric 2 -->
				<div class="animate-on-scroll" style="transition-delay: 100ms;">
					<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
						<div
							class="flex items-center justify-center w-20 h-20 mb-6 rounded-xl bg-indigo-100 text-indigo-600 shadow-md mx-auto"
						>
							<Icon icon="mdi:routes" class="w-12 h-12" />
						</div>
						<h3 class="text-4xl font-bold mb-2 text-center text-gray-900">25%</h3>
						<p class="text-xl font-medium mb-2 text-center text-gray-700">More Efficient Routes</p>
						<p class="text-gray-600 text-center">
							Increased trips per day through optimized routing
						</p>
					</div>
				</div>

				<!-- Metric 3 -->
				<div class="animate-on-scroll" style="transition-delay: 200ms;">
					<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
						<div
							class="flex items-center justify-center w-20 h-20 mb-6 rounded-xl bg-green-100 text-green-600 shadow-md mx-auto"
						>
							<Icon icon="mdi:account-check" class="w-12 h-12" />
						</div>
						<h3 class="text-4xl font-bold mb-2 text-center text-gray-900">95%</h3>
						<p class="text-xl font-medium mb-2 text-center text-gray-700">Client Satisfaction</p>
						<p class="text-gray-600 text-center">Improved on-time performance and communication</p>
					</div>
				</div>
			</div>

			<!-- Testimonial -->
			<div class="max-w-4xl mx-auto animate-on-scroll">
				<div class="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-lg">
					<svg
						class="w-12 h-12 text-indigo-500 mb-6"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 448 512"
					>
						<path
							d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
						/>
					</svg>

					<p class="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
						The EZTripr Trip Tracker revolutionized my scheduling and driving routines. The ease of
						tapping through the day, without the hassle of sifting through email text or dealing
						with conflicts in scheduling, was a true game changer. It made my workday smoother, more
						efficient, and more enjoyable.
					</p>

					<div class="flex items-center">
						<div class="mr-4">
							<div
								class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold"
							>
								RP
							</div>
						</div>
						<div>
							<p class="font-bold text-gray-900">Ryan Paranich</p>
							<p class="text-gray-600">Companion, Granny Go Go</p>
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

<!-- Modal for full image view -->
{#if showModal}
	<div
		class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
		onclick={closeModal}
		onkeydown={(e) => e.key === 'Escape' && closeModal()}
		role="dialog"
		aria-modal="true"
		aria-label="Image modal"
		tabindex="-1"
		transition:fly={{ duration: 300, opacity: 0 }}
	>
		<div class="relative max-w-4xl max-h-[90vh] w-full">
			<button
				onclick={closeModal}
				class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
				aria-label="Close modal"
			>
				<Icon icon="mdi:close" class="w-8 h-8" />
			</button>
			<div class="bg-white rounded-lg overflow-hidden shadow-2xl max-h-[90vh]">
				<div class="modal-image-container">
					<img
						src="/images/EzTripr-Updated-Drive-UI.png"
						alt="EZTripr Dashboard Interface - Full View"
						class="w-full h-auto modal-dashboard-image"
					/>
				</div>
			</div>
		</div>
	</div>
{/if}

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

	@keyframes panImage {
		0% {
			object-position: center top;
		}
		50% {
			object-position: center bottom;
		}
		100% {
			object-position: center top;
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

	/* Dashboard image panning animation */
	.dashboard-image-container {
		position: relative;
		overflow: hidden;
		border-radius: 0.5rem;
	}

	.dashboard-image {
		animation: panImage 60s ease-in-out infinite;
		transition: transform 0.9s ease;
	}

	.dashboard-image-container:hover .dashboard-image {
		animation-play-state: paused;
	}

	/* Modal styling */
	.modal-image-container {
		max-height: 80vh;
		overflow-y: auto;
		scrollbar-width: thin;
		scrollbar-color: #cbd5e1 #f1f5f9;
	}

	.modal-image-container::-webkit-scrollbar {
		width: 8px;
	}

	.modal-image-container::-webkit-scrollbar-track {
		background: #f1f5f9;
	}

	.modal-image-container::-webkit-scrollbar-thumb {
		background: #cbd5e1;
		border-radius: 4px;
	}

	.modal-image-container::-webkit-scrollbar-thumb:hover {
		background: #94a3b8;
	}

	.modal-dashboard-image {
		display: block;
		max-width: none;
		width: 100%;
		height: auto;
	}
</style>
