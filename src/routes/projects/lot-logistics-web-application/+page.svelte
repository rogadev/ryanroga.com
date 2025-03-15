<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

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
							Start Your Project
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
								src="/images/projects/carevo-logistics.jpg"
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
			<div class="flex flex-col md:flex-row gap-12 items-center">
				<div class="w-full md:w-1/3 animate-on-scroll">
					<div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
						<h2 class="text-3xl font-bold mb-6 text-gray-900">About CarEvo</h2>
						<p class="text-gray-700 mb-4">
							CarEvo Auto Solutions is a pioneering online car dealership based in Canada that has
							revolutionized the traditional car buying experience. Their innovative approach allows
							customers to browse, purchase, and finance vehicles entirely online, with home
							delivery options available across the country.
						</p>
						<p class="text-gray-700">
							With their unique business model handling over 100-200 vehicles monthly across
							multiple locations, CarEvo faced distinctive operational challenges that conventional
							dealership software couldn't address. The online-first nature of their business
							created a complex web of logistics requirements that traditional dealership management
							systems weren't designed to handle.
						</p>
					</div>
				</div>

				<div class="w-full md:w-2/3 animate-on-scroll" style="transition-delay: 200ms;">
					<div class="bg-indigo-900 text-white p-8 rounded-2xl shadow-lg">
						<h2 class="text-3xl font-bold mb-6">Project Overview</h2>
						<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
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
								<p class="text-indigo-100">SvelteKit, Node.js, PostgreSQL</p>
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
							class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-blue-100 text-blue-600 shadow-md"
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
									d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
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
							class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-purple-100 text-purple-600 shadow-md"
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
									d="M13 10V3L4 14h7v7l9-11h-7z"
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
						class="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl"
					>
						<h3 class="text-3xl font-bold mb-6 text-white">Key Features</h3>

						<div class="space-y-6">
							<div class="flex items-start gap-4">
								<div
									class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center"
								>
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
											d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
										/>
									</svg>
								</div>
								<div>
									<h4 class="text-xl font-bold text-white mb-2">QR-Enabled Key Tag System</h4>
									<p class="text-white/80">
										Each vehicle received a unique, obfuscated QR code linking directly to its
										profile in the system, enabling quick access to vehicle information.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-4">
								<div
									class="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center"
								>
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
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
										/>
									</svg>
								</div>
								<div>
									<h4 class="text-xl font-bold text-white mb-2">Comprehensive Vehicle Intake</h4>
									<p class="text-white/80">
										Lot team members document all vehicle conditions upon arrival, including
										mechanical issues, cosmetic damage, and cleanliness.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-4">
								<div
									class="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center"
								>
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
											d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
										/>
									</svg>
								</div>
								<div>
									<h4 class="text-xl font-bold text-white mb-2">Task Management System</h4>
									<p class="text-white/80">
										Sales team creates vehicle preparation requests that lot team members can claim,
										complete, and document with a full audit trail.
									</p>
								</div>
							</div>

							<div class="flex items-start gap-4">
								<div
									class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center"
								>
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
											d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
										/>
									</svg>
								</div>
								<div>
									<h4 class="text-xl font-bold text-white mb-2">Vendor Portal</h4>
									<p class="text-white/80">
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
								<div class="flex items-center justify-center bg-white p-3 rounded-lg">
									<div class="flex flex-col items-center">
										<div class="w-24 h-24 bg-gray-900 flex items-center justify-center mb-1">
											<svg viewBox="0 0 100 100" class="w-20 h-20">
												<!-- Simplified QR code representation -->
												<rect x="10" y="10" width="80" height="80" fill="white" />
												<rect x="20" y="20" width="20" height="20" fill="black" />
												<rect x="60" y="20" width="20" height="20" fill="black" />
												<rect x="20" y="60" width="20" height="20" fill="black" />
												<rect x="50" y="50" width="30" height="30" fill="black" />
												<rect x="30" y="30" width="10" height="10" fill="black" />
												<rect x="50" y="30" width="10" height="10" fill="black" />
												<rect x="30" y="50" width="10" height="10" fill="black" />
											</svg>
										</div>
										<span class="text-gray-900 text-xs font-medium">2022 Ford F-150</span>
										<span class="text-gray-600 text-xs">VIN: 1FT8W3BT5NWB12345</span>
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-10 w-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-10 w-10"
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-10 w-10"
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-10 w-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
								/>
							</svg>
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-10 w-10"
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-10 w-10"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
								/>
							</svg>
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
								JD
							</div>
						</div>
						<div>
							<p class="font-bold text-gray-900">John Doe</p>
							<p class="text-gray-600">Operations Manager, CarEvo Auto Solutions</p>
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
							<svg viewBox="0 0 24 24" class="w-12 h-12 text-orange-500">
								<path
									fill="currentColor"
									d="M5.41,4.59C5.88,4.24 6.41,4 7,4H17C18.11,4 19,4.89 19,6V18C19,19.11 18.11,20 17,20H7C5.89,20 5,19.11 5,18V6C5,5.41 5.24,4.88 5.59,4.41L7,3L5.59,1.59C5.21,1.21 5.21,0.58 5.59,0.21C5.96,-0.17 6.6,-0.17 6.97,0.21L9.09,2.33C9.47,2.71 9.47,3.34 9.09,3.72L6.97,5.84C6.6,6.22 5.96,6.22 5.59,5.84C5.21,5.47 5.21,4.83 5.59,4.46V4.59Z"
								/>
							</svg>
						</div>
						<h3 class="text-lg font-bold text-center text-gray-900 mb-1">SvelteKit</h3>
						<p class="text-gray-600 text-center text-sm">Frontend Framework</p>
					</div>
				</div>

				<!-- Tech 2 -->
				<div class="animate-on-scroll" style="transition-delay: 100ms;">
					<div
						class="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all flex flex-col items-center"
					>
						<div class="w-16 h-16 mb-4 flex items-center justify-center">
							<svg viewBox="0 0 24 24" class="w-12 h-12 text-green-600">
								<path
									fill="currentColor"
									d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.89,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z"
								/>
							</svg>
						</div>
						<h3 class="text-lg font-bold text-center text-gray-900 mb-1">Node.js</h3>
						<p class="text-gray-600 text-center text-sm">Backend Runtime</p>
					</div>
				</div>

				<!-- Tech 3 -->
				<div class="animate-on-scroll" style="transition-delay: 200ms;">
					<div
						class="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all flex flex-col items-center"
					>
						<div class="w-16 h-16 mb-4 flex items-center justify-center">
							<svg viewBox="0 0 24 24" class="w-12 h-12 text-blue-600">
								<path
									fill="currentColor"
									d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"
								/>
							</svg>
						</div>
						<h3 class="text-lg font-bold text-center text-gray-900 mb-1">PostgreSQL</h3>
						<p class="text-gray-600 text-center text-sm">Database</p>
					</div>
				</div>

				<!-- Tech 4 -->
				<div class="animate-on-scroll" style="transition-delay: 300ms;">
					<div
						class="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-all flex flex-col items-center"
					>
						<div class="w-16 h-16 mb-4 flex items-center justify-center">
							<svg viewBox="0 0 24 24" class="w-12 h-12 text-blue-500">
								<path
									fill="currentColor"
									d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z"
								/>
							</svg>
						</div>
						<h3 class="text-lg font-bold text-center text-gray-900 mb-1">Tailwind CSS</h3>
						<p class="text-gray-600 text-center text-sm">Styling</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
		<div class="max-w-5xl mx-auto text-center animate-on-scroll">
			<h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
				Ready to Transform Your Business Operations?
			</h2>
			<p class="text-xl text-white opacity-90 max-w-2xl mx-auto mb-12">
				Let's discuss how a custom web application can streamline your workflows and drive
				measurable results.
			</p>
			<div class="flex flex-wrap justify-center gap-6">
				<a
					href="/contact"
					class="px-8 py-4 bg-white text-indigo-700 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
				>
					Start Your Project
				</a>
				<a
					href="/projects"
					class="px-8 py-4 bg-transparent border-2 border-white/30 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/10 transition-all"
				>
					View More Case Studies
				</a>
			</div>
		</div>
	</section>
</main>
