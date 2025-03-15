<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let isVisible = false;
	let serviceElements = [];

	// Function to handle image loading errors
	function handleImageError(event: Event, fallbackText: string) {
		const target = event.target as HTMLImageElement;
		target.src = `https://placehold.co/400x320/e2e8f0/475569?text=${encodeURIComponent(fallbackText)}`;
	}

	onMount(() => {
		isVisible = true;

		// Simple intersection observer for scroll animations
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
	<title>About Roga Web Development | Custom Web Solutions & AI Training</title>
	<meta
		name="description"
		content="Discover how Roga Web Development creates powerful web solutions, custom applications, and AI training programs that drive business growth and efficiency."
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
	/>
</svelte:head>

<main class="min-h-screen bg-white text-gray-900 overflow-hidden">
	<!-- Remove the previous background gradient that isn't working -->
	<style>
		:global(body) {
			/* Ensure the body has a light background */
			background-color: #ffffff;
		}
	</style>

	<!-- Hero Section with Particle Background -->
	<div class="relative">
		<!-- Simplified background elements with better opacity -->
		<div class="absolute inset-0 overflow-hidden">
			<div
				class="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"
			></div>
			<div
				class="absolute top-40 right-40 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"
			></div>
			<div
				class="absolute -bottom-20 left-40 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"
			></div>
		</div>

		<!-- Hero Content -->
		<div class="relative max-w-7xl mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24">
			<div class="flex flex-col md:flex-row items-center justify-between">
				<div class="w-full md:w-1/2 mb-12 md:mb-0" in:fly={{ y: 50, duration: 1000, delay: 200 }}>
					<h1 class="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
						Crafting Digital Excellence
					</h1>
					<p class="text-xl md:text-2xl text-gray-700 max-w-xl leading-relaxed mb-8">
						At Roga Web Development, we transform businesses through innovative web solutions and AI
						integration that drives measurable growth.
					</p>
					<div class="flex flex-wrap gap-4">
						<a
							href="/contact"
							class="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
						>
							Start Your Project
						</a>
						<a
							href="/projects"
							class="inline-block px-8 py-4 bg-transparent border-2 border-blue-500 rounded-lg text-blue-700 font-medium hover:bg-blue-50 transition-all"
						>
							Explore Our Work
						</a>
					</div>
				</div>

				<!-- Code/Design Element with synthwave styling -->
				<div class="w-full md:w-1/2 relative" in:fly={{ y: 50, duration: 1000, delay: 400 }}>
					<div
						class="relative bg-gray-900 rounded-2xl p-6 border border-purple-500/30 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105"
					>
						<div class="flex items-center mb-4 space-x-2">
							<div class="w-3 h-3 bg-red-500 rounded-full"></div>
							<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
							<div class="w-3 h-3 bg-green-500 rounded-full"></div>
							<div class="ml-4 text-purple-300 text-sm font-mono">+page.svelte</div>
						</div>
						<pre
							class="text-xs md:text-sm font-mono synthwave-code overflow-hidden">{`<span class="sw-keyword">import</span> { OpenAI } <span class="sw-keyword">from</span> <span class="sw-string">'openai'</span>;

<script>
  import { onMount } from 'svelte';

  let response = '';
  let loading = false;
  let error = null;
  let prompt = 'Respond to this customer query about our products';

  async function fetchFromOpenAI() {
    loading = true;
    error = null;
    
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer ${import.meta.env.VITE_OPENAI_API_KEY}\`
        },
        body: JSON.stringify({`}</pre>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Services Section -->
	<section class="relative py-20 px-4 bg-gray-50">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16 animate-on-scroll">
				<h2 class="inline-block text-4xl md:text-5xl font-bold relative">
					<span class="relative z-10 text-gray-900">Our Core Services</span>
					<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
					></span>
				</h2>
				<p class="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
					Transformative solutions crafted to elevate your business in the digital landscape
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
				<!-- Card 1 -->
				<div class="group relative animate-on-scroll">
					<div
						class="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div
							class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-md"
						>
							<i class="fas fa-window-restore text-2xl"></i>
						</div>
						<h3 class="text-2xl font-bold mb-4 text-gray-900">Custom Web Applications</h3>
						<p class="text-gray-700">
							We analyze your business processes to create bespoke web applications that streamline
							workflows, enhance productivity, and transform customer experiences from ordinary to
							extraordinary.
						</p>
						<div class="mt-4 text-blue-600 font-medium group-hover:underline">Learn more</div>
					</div>
				</div>

				<!-- Card 2 -->
				<div class="group relative animate-on-scroll" style="transition-delay: 200ms;">
					<div
						class="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div
							class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md"
						>
							<i class="fas fa-globe text-2xl"></i>
						</div>
						<h3 class="text-2xl font-bold mb-4 text-gray-900">Business Websites</h3>
						<p class="text-gray-700">
							From pixel-perfect custom-built websites using modern frameworks to Wix Studio
							solutions for content-driven sites, we create digital showcases that captivate and
							convert.
						</p>
						<div class="mt-4 text-blue-600 font-medium group-hover:underline">Learn more</div>
					</div>
				</div>

				<!-- Card 3 -->
				<div class="group relative animate-on-scroll" style="transition-delay: 400ms;">
					<div
						class="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] h-full"
					>
						<div
							class="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-purple-500 to-blue-600 text-white shadow-md"
						>
							<i class="fas fa-brain text-2xl"></i>
						</div>
						<h3 class="text-2xl font-bold mb-4 text-gray-900">AI Training for Businesses</h3>
						<p class="text-gray-700">
							Stay ahead of the curve with our specialized AI training programs that help businesses
							implement cutting-edge AI solutions to revolutionize operations and unlock new
							potential.
						</p>
						<div class="mt-4 text-blue-600 font-medium group-hover:underline">Learn more</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Approach Section -->
	<section class="relative py-20 px-4 bg-indigo-900 text-white">
		<div class="relative max-w-7xl mx-auto">
			<div class="flex flex-col md:flex-row items-center gap-12">
				<!-- Left side - Approach Text -->
				<div class="w-full md:w-1/2 animate-on-scroll">
					<h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">Our Approach</h2>
					<p class="text-xl text-white opacity-90 leading-relaxed mb-6">
						What sets us apart is our deep commitment to understanding the unique challenges your
						business faces. We don't just build websites or applications – we craft solutions that
						solve real problems.
					</p>
					<div class="space-y-6 mt-8">
						<div class="flex items-start gap-4">
							<div
								class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center"
							>
								<i class="fas fa-search text-white"></i>
							</div>
							<div>
								<h3 class="text-xl font-bold text-white mb-2">Discovery</h3>
								<p class="text-white opacity-80">
									We analyze your business needs and challenges, mapping out processes and
									identifying opportunities for improvement.
								</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div
								class="flex-shrink-0 w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center"
							>
								<i class="fas fa-pencil-ruler text-white"></i>
							</div>
							<div>
								<h3 class="text-xl font-bold text-white mb-2">Design</h3>
								<p class="text-white opacity-80">
									We create comprehensive blueprints for solutions that not only solve problems but
									delight users.
								</p>
							</div>
						</div>
						<div class="flex items-start gap-4">
							<div
								class="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center"
							>
								<i class="fas fa-code text-white"></i>
							</div>
							<div>
								<h3 class="text-xl font-bold text-white mb-2">Development</h3>
								<p class="text-white opacity-80">
									Our expert team brings designs to life with clean, efficient code and cutting-edge
									technologies.
								</p>
							</div>
						</div>
					</div>
				</div>
				<!-- Right side - Visual element -->
				<div class="w-full md:w-1/2 animate-on-scroll">
					<div
						class="relative bg-indigo-800/80 p-6 rounded-2xl border border-indigo-600 shadow-2xl"
					>
						<!-- Main visual -->
						<div class="grid grid-cols-3 gap-3">
							<!-- Process visualization -->
							<div
								class="aspect-square bg-blue-800/40 rounded-lg flex items-center justify-center p-4"
							>
								<div
									class="w-full h-full rounded-full border-4 border-blue-500/50 border-l-blue-400 animate-spin-slow flex items-center justify-center"
								>
									<div class="w-2/3 h-2/3 bg-blue-500/20 rounded-full"></div>
								</div>
							</div>
							<div class="col-span-2 bg-blue-800/40 rounded-lg p-4">
								<div class="h-3 w-3/4 bg-blue-500/40 rounded-full mb-3"></div>
								<div class="h-3 w-1/2 bg-blue-500/40 rounded-full mb-3"></div>
								<div class="h-3 w-5/6 bg-blue-500/40 rounded-full"></div>
							</div>
							<div class="col-span-2 bg-blue-800/40 rounded-lg p-4">
								<div class="flex items-center gap-2 mb-3">
									<div class="w-8 h-8 rounded-lg bg-indigo-600/50"></div>
									<div class="flex-1 h-3 bg-blue-500/40 rounded-full"></div>
								</div>
								<div class="flex items-center gap-2 mb-3">
									<div class="w-8 h-8 rounded-lg bg-indigo-600/50"></div>
									<div class="flex-1 h-3 bg-blue-500/40 rounded-full"></div>
								</div>
								<div class="flex items-center gap-2">
									<div class="w-8 h-8 rounded-lg bg-indigo-600/50"></div>
									<div class="flex-1 h-3 bg-blue-500/40 rounded-full"></div>
								</div>
							</div>
							<div class="bg-blue-800/40 rounded-lg flex items-center justify-center text-blue-300">
								<i class="fas fa-check-circle text-3xl"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Portfolio Preview -->
	<section class="relative py-20 px-4 bg-gray-100">
		<div class="max-w-7xl mx-auto text-center animate-on-scroll">
			<h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">See Our Work in Action</h2>
			<p class="text-xl text-gray-700 max-w-2xl mx-auto mb-12">
				The best way to understand the impact of our work is to experience it for yourself.
			</p>

			<!-- Portfolio Preview Cards -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
				<!-- Project 1: CarEvo Lot Logistics -->
				<a
					href="https://logistics.carevo.ca/login"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative overflow-hidden rounded-xl shadow-lg animate-on-scroll"
				>
					<div class="aspect-video bg-white flex items-center justify-center overflow-hidden">
						<!-- Project thumbnail with better visibility -->
						<img
							src="/images/projects/carevo-logistics.jpg"
							alt="CarEvo Lot Logistics application"
							class="object-cover w-full h-full group-hover:opacity-75 transition-opacity"
							on:error={(e) => handleImageError(e, 'CarEvo Lot Logistics')}
						/>

						<div
							class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-900/80 p-4"
						>
							<span class="px-4 py-2 bg-indigo-800 text-white font-medium rounded-lg mb-2">
								CarEvo Lot Logistics
							</span>
							<p class="text-white text-sm text-center max-w-xs">
								Vehicle tracking system for CarEvo's lot team to monitor service appointments and
								vendor trips
							</p>
						</div>
					</div>
				</a>

				<!-- Project 2: VIU Career Outlooks -->
				<a
					href="https://viu-career-outlooks.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative overflow-hidden rounded-xl shadow-lg animate-on-scroll"
					style="transition-delay: 200ms;"
				>
					<div class="aspect-video bg-white flex items-center justify-center overflow-hidden">
						<!-- Project thumbnail with better visibility -->
						<img
							src="/images/projects/viu-career-outlooks.jpg"
							alt="VIU Career Outlooks application"
							class="object-cover w-full h-full group-hover:opacity-75 transition-opacity"
							on:error={(e) => handleImageError(e, 'VIU Career Outlooks')}
						/>

						<div
							class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-900/80 p-4"
						>
							<span class="px-4 py-2 bg-indigo-800 text-white font-medium rounded-lg mb-2">
								VIU Career Outlooks
							</span>
							<p class="text-white text-sm text-center max-w-xs">
								Career investigation tool using StatsCanada 3-year outlook data for VIU credential
								paths
							</p>
						</div>
					</div>
				</a>

				<!-- Project 3: EZ Tripr -->
				<a
					href="https://eztripr.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="group relative overflow-hidden rounded-xl shadow-lg animate-on-scroll"
					style="transition-delay: 400ms;"
				>
					<div class="aspect-video bg-white flex items-center justify-center overflow-hidden">
						<!-- Project thumbnail with better visibility -->
						<img
							src="/images/projects/eztripr.jpg"
							alt="EZ Tripr application"
							class="object-cover w-full h-full group-hover:opacity-75 transition-opacity"
							on:error={(e) => handleImageError(e, 'EZTripr Trip Tracker')}
						/>

						<div
							class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-900/80 p-4"
						>
							<span class="px-4 py-2 bg-indigo-800 text-white font-medium rounded-lg mb-2">
								EZ Tripr
							</span>
							<p class="text-white text-sm text-center max-w-xs">
								Medical patient trip tracking application for Granny Go Go drivers across Vancouver
								Island
							</p>
						</div>
					</div>
				</a>
			</div>

			<div class="mt-12">
				<a
					href="/projects"
					class="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
				>
					View All Projects
				</a>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="relative py-20 px-4 bg-indigo-900 text-white">
		<div class="relative max-w-4xl mx-auto text-center py-16 animate-on-scroll">
			<!-- Simplified background elements -->
			<div class="absolute inset-0 overflow-hidden opacity-30">
				<!-- Simplified animated particles -->
				<div
					class="absolute top-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"
				></div>
				<div
					class="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"
				></div>
			</div>

			<div class="relative">
				<h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
					Ready to Transform Your Business?
				</h2>
				<p class="text-xl text-white opacity-90 max-w-2xl mx-auto mb-12">
					Let's discuss how we can help streamline your operations and elevate your digital presence
					to new heights.
				</p>
				<div class="flex flex-wrap justify-center gap-6">
					<a
						href="/contact"
						class="px-8 py-4 bg-white text-indigo-900 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
					>
						Start the Conversation
					</a>
					<a
						href="/services"
						class="px-8 py-4 bg-transparent border-2 border-white/30 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/10 transition-all"
					>
						Explore Services
					</a>
				</div>
			</div>
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

	.animate-spin-slow {
		animation: spin 6s linear infinite;
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

	/* Synthwave code styling */
	:global(.synthwave-code) {
		background-color: #1a1a2e;
		color: #36f9f6; /* Cyan color for all text */
		text-shadow:
			0 0 2px rgba(54, 249, 246, 0.6),
			0 0 10px rgba(54, 249, 246, 0.4),
			0 0 20px rgba(54, 249, 246, 0.2);
		padding: 1rem;
		border-radius: 0.5rem;
		font-weight: 500;
		letter-spacing: 0.5px;
		overflow: hidden; /* Hide overflow instead of scroll */
		max-height: 100%;
	}

	:global(.sw-keyword) {
		color: #ff8adb;
		font-weight: bold;
		text-shadow:
			0 0 2px rgba(255, 138, 219, 0.4),
			0 0 5px rgba(255, 138, 219, 0.2);
	}

	:global(.sw-variable) {
		color: #36f9f6;
		text-shadow: 0 0 2px rgba(54, 249, 246, 0.4);
	}

	:global(.sw-property) {
		color: #fede5d;
		text-shadow: 0 0 2px rgba(254, 222, 93, 0.4);
	}

	:global(.sw-string) {
		color: #ff8b39;
		text-shadow: 0 0 2px rgba(255, 139, 57, 0.4);
	}

	:global(.sw-function) {
		color: #36f9f6;
		font-style: italic;
		text-shadow: 0 0 2px rgba(54, 249, 246, 0.4);
	}

	:global(.sw-method) {
		color: #c792ea;
		text-shadow: 0 0 2px rgba(199, 146, 234, 0.4);
	}

	:global(.sw-parameter) {
		color: #ff9ac1;
		text-shadow: 0 0 2px rgba(255, 154, 193, 0.4);
	}
</style>
