<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import VehicleQRCode from './VehicleQRCode.svelte';
	import Icon from '@iconify/svelte';

	let isVisible = false;

	// Function to handle image loading errors
	function handleImageError(event: Event): void {
		const img = event.currentTarget as HTMLImageElement;
		img.src = 'https://placehold.co/800x500/e2e8f0/475569?text=CarEvo+Lot+Logistics';
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
	<title>CarEvo Lot Logistics Web Application | Roga Web Development Case Study</title>
	<meta
		name="description"
		content="See how we transformed CarEvo Auto Solutions' lot logistics with a custom web application that improved tracking accuracy by 99.7% and reduced vehicle preparation time by 50%."
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

					<h1 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900">CarEvo Lot Logistics</h1>

					<div class="flex items-center gap-4 mb-6">
						<a
							href="https://carevo.ca"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-5 w-5"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
									clip-rule="evenodd"
								/>
							</svg>
							carevo.ca
						</a>
						<span class="text-gray-400">|</span>
						<span class="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
							Web Application
						</span>
					</div>

					<p class="text-xl md:text-2xl text-gray-700 max-w-xl leading-relaxed mb-8">
						A comprehensive logistics platform that transformed CarEvo's vehicle preparation
						workflow, increasing efficiency and transparency across their operation.
					</p>

					<div class="flex flex-wrap gap-4">
						<a
							href="/contact"
							class="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
						>
							Get This For Your Dealership
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
								src="/images/Product_example.png"
								alt="CarEvo Lot Logistics Dashboard"
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
						<h2 class="text-3xl font-bold mb-6 text-gray-900">About CarEvo</h2>
						<p class="text-gray-700 mb-4">
							CarEvo Auto Solutions is a pioneering online car dealership based in Canada that has
							revolutionized the traditional car buying experience. Their innovative approach allows
							customers to browse, purchase, and finance vehicles entirely online, with home
							delivery options available across the country.
						</p>
						<p class="text-gray-700 mb-4">
							With their unique business model handling over 100-200 vehicles monthly across
							multiple locations, CarEvo faced distinctive operational challenges that conventional
							dealership software couldn't address. The online-first nature of their business
							created a complex web of logistics requirements that traditional dealership management
							systems weren't designed to handle.
						</p>
						<p class="text-gray-700">
							As one of Canada's fastest-growing online auto retailers, CarEvo needed a solution
							that could scale with their expansion plans while maintaining their commitment to
							exceptional customer service. Their success in disrupting the traditional dealership
							model meant they required equally innovative operational tools to support their
							growth.
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
								<p class="text-indigo-100">4 months from concept to deployment</p>
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
								<p class="text-indigo-100">Web application with vendor portal</p>
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
					CarEvo's rapid growth created significant operational hurdles that threatened their
					ability to scale
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<!-- Challenge 1 -->
				<div class="group animate-on-scroll">
					<div
						class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div
							class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-red-100 text-red-600 shadow-md"
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
									d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<h3 class="text-2xl font-bold mb-4 text-gray-900">Fragmented Communication</h3>
						<p class="text-gray-700">
							Sales team members would sell vehicles while the lot team managed inspections and
							preparation, with minimal coordination between departments. This led to confusion and
							delays in vehicle delivery.
						</p>
					</div>
				</div>

				<!-- Challenge 2 -->
				<div class="group animate-on-scroll" style="transition-delay: 100ms;">
					<div
						class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div
							class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-orange-100 text-orange-600 shadow-md"
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
									d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
								/>
							</svg>
						</div>
						<h3 class="text-2xl font-bold mb-4 text-gray-900">Inconsistent Tracking</h3>
						<p class="text-gray-700">
							A shared Google Sheet was the primary tracking tool, but it was rarely used correctly
							and lacked accountability features. This made it difficult to know where vehicles were
							in the preparation process.
						</p>
					</div>
				</div>

				<!-- Challenge 3 -->
				<div class="group animate-on-scroll" style="transition-delay: 200ms;">
					<div
						class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div
							class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-yellow-100 text-yellow-600 shadow-md"
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
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
								/>
							</svg>
						</div>
						<h3 class="text-2xl font-bold mb-4 text-gray-900">Lost Inventory</h3>
						<p class="text-gray-700">
							Vehicles would sometimes remain at vendor locations for months after being forgotten
							in the system, tying up inventory and creating financial inefficiencies.
						</p>
					</div>
				</div>

				<!-- Challenge 4 -->
				<div class="group animate-on-scroll" style="transition-delay: 300ms;">
					<div
						class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div
							class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-green-100 text-green-600 shadow-md"
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
									d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
						<h3 class="text-2xl font-bold mb-4 text-gray-900">Multiple Locations</h3>
						<p class="text-gray-700">
							Operating across different lots with separate sales teams selling from the same
							inventory created confusion about vehicle availability and location.
						</p>
					</div>
				</div>

				<!-- Challenge 5 -->
				<div class="group animate-on-scroll" style="transition-delay: 400ms;">
					<div
						class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div
							class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-red-100 text-red-600 shadow-md"
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
									d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
								/>
							</svg>
						</div>
						<h3 class="text-2xl font-bold mb-4 text-gray-900">Knowledge Silos</h3>
						<p class="text-gray-700">
							Critical logistics information existed primarily in the logistics manager's head,
							creating a significant business continuity risk if they were unavailable.
						</p>
					</div>
				</div>

				<!-- Challenge 6 -->
				<div class="group animate-on-scroll" style="transition-delay: 500ms;">
					<div
						class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div
							class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-yellow-100 text-yellow-600 shadow-md"
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
									d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905 0 .905.714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
								/>
							</svg>
						</div>
						<h3 class="text-2xl font-bold mb-4 text-gray-900">Volume Pressure</h3>
						<p class="text-gray-700">
							With 100-200+ vehicles sold monthly, the manual system couldn't scale to meet demand,
							creating bottlenecks in the preparation process.
						</p>
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
					We developed a comprehensive lot logistics platform tailored to CarEvo's unique workflow
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
									<Icon icon="mdi:qrcode-scan" class="w-full h-full" />
								</div>
								<div class="flex-1 min-w-0">
									<h4 class="text-lg sm:text-xl font-bold text-white mb-2">
										QR-Enabled Key Tag System
									</h4>
									<p class="text-white/80 text-sm sm:text-base">
										Each vehicle received a unique, obfuscated QR code linking directly to its
										profile in the system, enabling quick access to vehicle information.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-6">
								<div
									class="flex-shrink-0 w-14 h-14 rounded-xl bg-indigo-600/20 backdrop-blur-sm flex items-center justify-center p-3"
								>
									<Icon icon="mdi:clipboard-list" class="w-full h-full" />
								</div>
								<div class="flex-1 min-w-0">
									<h4 class="text-lg sm:text-xl font-bold text-white mb-2">
										Comprehensive Vehicle Intake
									</h4>
									<p class="text-white/80 text-sm sm:text-base">
										Lot team members document all vehicle conditions upon arrival, including
										mechanical issues, cosmetic damage, and cleanliness.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-6">
								<div
									class="flex-shrink-0 w-14 h-14 rounded-xl bg-purple-600/20 backdrop-blur-sm flex items-center justify-center p-3"
								>
									<Icon icon="mdi:account-group" class="w-full h-full" />
								</div>
								<div class="flex-1 min-w-0">
									<h4 class="text-lg sm:text-xl font-bold text-white mb-2">
										Task Management System
									</h4>
									<p class="text-white/80 text-sm sm:text-base">
										Sales team creates vehicle preparation requests that lot team members can claim,
										complete, and document with a full audit trail.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-6">
								<div
									class="flex-shrink-0 w-14 h-14 rounded-xl bg-blue-600/20 backdrop-blur-sm flex items-center justify-center p-3"
								>
									<Icon icon="mdi:store-cog" class="w-full h-full" />
								</div>
								<div class="flex-1 min-w-0">
									<h4 class="text-lg sm:text-xl font-bold text-white mb-2">Vendor Portal</h4>
									<p class="text-white/80 text-sm sm:text-base">
										External service providers update vehicle status directly, eliminating constant
										phone calls and creating transparency for all stakeholders.
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
							class="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl"
						>
							<!-- Dashboard mockup -->
							<div class="bg-gray-900 rounded-xl overflow-hidden">
								<div class="bg-gray-800 px-4 py-2 flex items-center gap-2">
									<div class="w-3 h-3 bg-red-500 rounded-full"></div>
									<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
									<div class="w-3 h-3 bg-green-500 rounded-full"></div>
									<div class="ml-4 text-gray-400 text-sm">CarEvo Lot Logistics Dashboard</div>
								</div>
							</div>

							<!-- Dashboard content -->
							<div class="p-4">
								<!-- Dashboard header -->
								<div class="flex justify-between items-center mb-4">
									<div>
										<h4 class="text-white text-lg font-medium">Vehicle Logistics Overview</h4>
										<p class="text-gray-400 text-sm">Today, May 15, 2023</p>
									</div>
									<div class="flex gap-2">
										<div class="bg-indigo-600/30 text-indigo-300 px-3 py-1 rounded text-sm">
											Dashboard
										</div>
										<div class="bg-gray-700 text-gray-300 px-3 py-1 rounded text-sm">Reports</div>
									</div>
								</div>

								<!-- Stats row -->
								<div class="grid grid-cols-3 gap-3 mb-4">
									<div class="bg-gray-800 p-3 rounded-lg">
										<p class="text-gray-400 text-xs mb-1">Vehicles in Process</p>
										<p class="text-white text-xl font-bold">42</p>
									</div>
									<div class="bg-gray-800 p-3 rounded-lg">
										<p class="text-gray-400 text-xs mb-1">At Vendors</p>
										<p class="text-white text-xl font-bold">18</p>
									</div>
									<div class="bg-gray-800 p-3 rounded-lg">
										<p class="text-gray-400 text-xs mb-1">Ready for Delivery</p>
										<p class="text-white text-xl font-bold">7</p>
									</div>
								</div>

								<!-- Task list preview -->
								<div class="bg-gray-800 rounded-lg p-3 mb-4">
									<div class="flex justify-between items-center mb-2">
										<h5 class="text-white font-medium">Recent Tasks</h5>
										<span class="text-blue-400 text-xs">View All</span>
									</div>
									<div class="space-y-2">
										<div class="flex items-center justify-between bg-gray-700/50 p-2 rounded">
											<div class="flex items-center gap-2">
												<div class="w-2 h-2 bg-green-500 rounded-full"></div>
												<span class="text-gray-300 text-sm">2023 Honda Civic - MVI</span>
											</div>
											<span class="text-gray-400 text-xs">Completed</span>
										</div>
										<div class="flex items-center justify-between bg-gray-700/50 p-2 rounded">
											<div class="flex items-center gap-2">
												<div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
												<span class="text-gray-300 text-sm">2022 Toyota RAV4 - Detail</span>
											</div>
											<span class="text-gray-400 text-xs">In Progress</span>
										</div>
										<div class="flex items-center justify-between bg-gray-700/50 p-2 rounded">
											<div class="flex items-center gap-2">
												<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
												<span class="text-gray-300 text-sm">2021 Tesla Model 3 - Inspection</span>
											</div>
											<span class="text-gray-400 text-xs">Assigned</span>
										</div>
									</div>
								</div>

								<!-- QR code example -->
								<VehicleQRCode vin="1FT8W3BT5NWB12345" vehicleName="2022 Ford F-150" />
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
					The implementation of our custom logistics platform transformed CarEvo's operations
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
							<Icon icon="mdi:account-check" class="w-12 h-12" />
						</div>
						<h3 class="text-4xl font-bold mb-2 text-center text-gray-900">98%</h3>
						<p class="text-xl font-medium mb-2 text-center text-gray-700">User Adoption Rate</p>
						<p class="text-gray-600 text-center">
							Compared to less than 30% with the previous spreadsheet system
						</p>
					</div>
				</div>

				<!-- Metric 2 -->
				<div class="animate-on-scroll" style="transition-delay: 100ms;">
					<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
						<div
							class="flex items-center justify-center w-20 h-20 mb-6 rounded-xl bg-indigo-100 text-indigo-600 shadow-md mx-auto"
						>
							<Icon icon="mdi:target-account" class="w-12 h-12" />
						</div>
						<h3 class="text-4xl font-bold mb-2 text-center text-gray-900">99.7%</h3>
						<p class="text-xl font-medium mb-2 text-center text-gray-700">Tracking Accuracy</p>
						<p class="text-gray-600 text-center">
							Improved from approximately 65% with the previous system
						</p>
					</div>
				</div>

				<!-- Metric 3 -->
				<div class="animate-on-scroll" style="transition-delay: 200ms;">
					<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
						<div
							class="flex items-center justify-center w-20 h-20 mb-6 rounded-xl bg-purple-100 text-purple-600 shadow-md mx-auto"
						>
							<Icon icon="mdi:clock-fast" class="w-12 h-12" />
						</div>
						<h3 class="text-4xl font-bold mb-2 text-center text-gray-900">50%</h3>
						<p class="text-xl font-medium mb-2 text-center text-gray-700">Reduced Prep Time</p>
						<p class="text-gray-600 text-center">
							Average vehicle preparation time decreased from 9 days to 4.5 days
						</p>
					</div>
				</div>

				<!-- Metric 4 -->
				<div class="animate-on-scroll" style="transition-delay: 300ms;">
					<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
						<div
							class="flex items-center justify-center w-20 h-20 mb-6 rounded-xl bg-green-100 text-green-600 shadow-md mx-auto"
						>
							<Icon icon="mdi:phone-off" class="w-12 h-12" />
						</div>
						<h3 class="text-4xl font-bold mb-2 text-center text-gray-900">85%</h3>
						<p class="text-xl font-medium mb-2 text-center text-gray-700">Reduced Vendor Calls</p>
						<p class="text-gray-600 text-center">
							Freeing staff time for more valuable tasks and improving vendor relationships
						</p>
					</div>
				</div>

				<!-- Metric 5 -->
				<div class="animate-on-scroll" style="transition-delay: 400ms;">
					<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
						<div
							class="flex items-center justify-center w-20 h-20 mb-6 rounded-xl bg-red-100 text-red-600 shadow-md mx-auto"
						>
							<Icon icon="mdi:car-search" class="w-12 h-12" />
						</div>
						<h3 class="text-4xl font-bold mb-2 text-center text-gray-900">0</h3>
						<p class="text-xl font-medium mb-2 text-center text-gray-700">"Lost" Vehicles</p>
						<p class="text-gray-600 text-center">
							Eliminated forgotten vehicles at vendor locations (previously 5-7 per month)
						</p>
					</div>
				</div>

				<!-- Metric 6 -->
				<div class="animate-on-scroll" style="transition-delay: 500ms;">
					<div class="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
						<div
							class="flex items-center justify-center w-20 h-20 mb-6 rounded-xl bg-yellow-100 text-yellow-600 shadow-md mx-auto"
						>
							<Icon icon="mdi:emoticon-happy" class="w-12 h-12" />
						</div>
						<h3 class="text-4xl font-bold mb-2 text-center text-gray-900">30%</h3>
						<p class="text-xl font-medium mb-2 text-center text-gray-700">Improved Satisfaction</p>
						<p class="text-gray-600 text-center">
							Customer satisfaction increased with more accurate delivery timeframes
						</p>
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
						The logistics platform has completely transformed how we manage our vehicle preparation
						process. We've eliminated the confusion and delays that were costing us time and money.
						Now, everyone knows exactly where each vehicle is in the process, and we can provide
						accurate delivery timelines to our customers.
					</p>

					<div class="flex items-center">
						<div class="mr-4">
							<div
								class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold"
							>
								CM
							</div>
						</div>
						<div>
							<p class="font-bold text-gray-900">Colton Mackie</p>
							<p class="text-gray-600">Logistics Manager, CarEvo Auto Solutions</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Technology Stack Section -->
	<section class="py-20 px-4">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16 animate-on-scroll">
				<h2 class="inline-block text-4xl md:text-5xl font-bold relative">
					<span class="relative z-10 text-gray-900">Technology Stack</span>
					<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
					></span>
				</h2>
				<p class="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
					Modern technologies chosen for performance, reliability, and maintainability
				</p>
			</div>

			<div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
				<!-- Tech 1 -->
				<div class="animate-on-scroll">
					<div
						class="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all flex flex-col items-center"
					>
						<div class="w-16 h-16 mb-4 flex items-center justify-center">
							<Icon icon="logos:nuxt-icon" width="48" height="48" />
						</div>
						<h3 class="text-lg font-bold text-center text-gray-900 mb-1">Nuxt 3</h3>
						<p class="text-gray-600 text-center text-sm h-10 flex items-center justify-center">
							Full-Stack Framework
						</p>
					</div>
				</div>

				<!-- Tech 2 -->
				<div class="animate-on-scroll" style="transition-delay: 100ms;">
					<div
						class="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all flex flex-col items-center"
					>
						<div class="w-16 h-16 mb-4 flex items-center justify-center">
							<Icon icon="logos:prisma" width="48" height="48" />
						</div>
						<h3 class="text-lg font-bold text-center text-gray-900 mb-1">Prisma</h3>
						<p class="text-gray-600 text-center text-sm h-10 flex items-center justify-center">
							ORM & Database Tools
						</p>
					</div>
				</div>

				<!-- Tech 3 -->
				<div class="animate-on-scroll" style="transition-delay: 200ms;">
					<div
						class="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all flex flex-col items-center"
					>
						<div class="w-16 h-16 mb-4 flex items-center justify-center">
							<Icon icon="logos:supabase-icon" width="48" height="48" />
						</div>
						<h3 class="text-lg font-bold text-center text-gray-900 mb-1">Supabase</h3>
						<p class="text-gray-600 text-center text-sm h-10 flex items-center justify-center">
							Backend & Auth
						</p>
					</div>
				</div>

				<!-- Tech 4 -->
				<div class="animate-on-scroll" style="transition-delay: 300ms;">
					<div
						class="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all flex flex-col items-center"
					>
						<div class="w-16 h-16 mb-4 flex items-center justify-center">
							<Icon icon="logos:pinia" width="48" height="48" />
						</div>
						<h3 class="text-lg font-bold text-center text-gray-900 mb-1">Pinia</h3>
						<p class="text-gray-600 text-center text-sm h-10 flex items-center justify-center">
							State Management
						</p>
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
