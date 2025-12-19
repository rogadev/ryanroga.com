<script lang="ts">
	import { fade } from 'svelte/transition';
	import ProjectCard from './ProjectCard.svelte';

	// Project data - this could come from an API or data file
	const featuredProjects = [
		{
			id: 'carevo-logistics',
			title: 'CarEvo Lot Logistics',
			slug: 'lot-logistics-web-application',
			client: 'CarEvo',
			description:
				"Vehicle tracking system for CarEvo's lot team to monitor service appointments and vendor trips",
			image: '/images/Product_example.png',
			tags: ['Web Application', 'Logistics', 'Tracking System']
		},
		{
			id: 'eztripr',
			title: 'EZTripr Trip Tracker',
			slug: 'eztripr-trip-tracker',
			client: 'Granny Go Go',
			description:
				'Medical patient trip tracking application for Granny Go Go drivers across Vancouver Island',
			image: '/images/eztripr.png',
			tags: ['Healthcare', 'Transportation', 'Tracking System']
		}
	];

	// Animation setup
	$effect(() => {
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

	// Function to handle image loading errors
	function handleImageError(event: Event, fallbackText: string) {
		const target = event.target as HTMLImageElement;
		target.src = `https://placehold.co/800x450/e2e8f0/475569?text=${encodeURIComponent(fallbackText)}`;
	}
</script>

<svelte:head>
	<title>Our Projects | Roga Web Development | Custom Web Solutions</title>
	<meta
		name="description"
		content="Explore our portfolio of custom web applications, business websites, and AI solutions that have helped businesses streamline operations and grow."
	/>
</svelte:head>

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

			<!-- Add CTA button -->
			<a
				href="#featured-projects"
				class="inline-flex items-center gap-2 px-6 py-3 bg-white text-sky-700 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg group"
			>
				View Our Projects
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 group-hover:translate-x-1 transition-transform"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</a>
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

<!-- Our Approach Section -->
<section class="py-20 px-4 bg-gray-50">
	<div class="max-w-7xl mx-auto">
		<div class="flex flex-col lg:flex-row items-center gap-12">
			<div class="w-full lg:w-1/2 animate-on-scroll">
				<h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Project Approach</h2>
				<p class="text-xl text-gray-700 leading-relaxed mb-8">
					We believe in a collaborative, transparent process that keeps you involved every step of
					the way. Our approach ensures we deliver solutions that not only meet your current needs
					but can grow with your business.
				</p>

				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div
							class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white"
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
									d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Understanding Your Needs</h3>
							<p class="text-gray-700">
								We start by deeply understanding your business, users, and goals to ensure our
								solution addresses the right problems.
							</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div
							class="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-600 flex items-center justify-center text-white"
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
									d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Tailored Solutions</h3>
							<p class="text-gray-700">
								We craft custom solutions using the right technologies for your specific needs, not
								one-size-fits-all templates.
							</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div
							class="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-600 flex items-center justify-center text-white"
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
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Ongoing Partnership</h3>
							<p class="text-gray-700">
								We don't just build and leave. We provide ongoing support and enhancements to ensure
								your solution continues to deliver value.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="w-full lg:w-1/2 animate-on-scroll">
				<div class="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-xl">
					<!-- Project lifecycle visualization - horizontal timeline -->
					<div class="relative">
						<!-- Connecting line -->
						<div class="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 z-0"></div>

						<!-- Timeline steps -->
						<div class="space-y-12">
							<!-- Discovery phase -->
							<div class="relative flex items-start gap-6 group">
								<div class="relative z-10">
									<div
										class="w-16 h-16 rounded-full bg-blue-100 border-4 border-white shadow-md flex items-center justify-center group-hover:bg-blue-200 transition-colors"
									>
										<div
											class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white"
										>
											<span class="font-bold">1</span>
										</div>
									</div>
								</div>
								<div class="pt-2">
									<h3
										class="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-900 transition-colors"
									>
										Discovery
									</h3>
									<p class="text-gray-700">
										We analyze your business needs, research your industry, and define project goals
										and requirements.
									</p>
								</div>
							</div>

							<!-- Design phase -->
							<div class="relative flex items-start gap-6 group">
								<div class="relative z-10">
									<div
										class="w-16 h-16 rounded-full bg-indigo-100 border-4 border-white shadow-md flex items-center justify-center group-hover:bg-indigo-200 transition-colors"
									>
										<div
											class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white"
										>
											<span class="font-bold">2</span>
										</div>
									</div>
								</div>
								<div class="pt-2">
									<h3
										class="text-xl font-bold text-indigo-800 mb-2 group-hover:text-indigo-900 transition-colors"
									>
										Design
									</h3>
									<p class="text-gray-700">
										We create wireframes, prototypes, and visual designs that align with your brand
										and user needs.
									</p>
								</div>
							</div>

							<!-- Development phase -->
							<div class="relative flex items-start gap-6 group">
								<div class="relative z-10">
									<div
										class="w-16 h-16 rounded-full bg-purple-100 border-4 border-white shadow-md flex items-center justify-center group-hover:bg-purple-200 transition-colors"
									>
										<div
											class="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white"
										>
											<span class="font-bold">3</span>
										</div>
									</div>
								</div>
								<div class="pt-2">
									<h3
										class="text-xl font-bold text-purple-800 mb-2 group-hover:text-purple-900 transition-colors"
									>
										Develop
									</h3>
									<p class="text-gray-700">
										We build your solution using modern technologies, with regular demos and
										feedback sessions.
									</p>
								</div>
							</div>

							<!-- Deployment phase -->
							<div class="relative flex items-start gap-6 group">
								<div class="relative z-10">
									<div
										class="w-16 h-16 rounded-full bg-green-100 border-4 border-white shadow-md flex items-center justify-center group-hover:bg-green-200 transition-colors"
									>
										<div
											class="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white"
										>
											<span class="font-bold">4</span>
										</div>
									</div>
								</div>
								<div class="pt-2">
									<h3
										class="text-xl font-bold text-green-800 mb-2 group-hover:text-green-900 transition-colors"
									>
										Deploy
									</h3>
									<p class="text-gray-700">
										We launch your solution, provide training, and offer ongoing support and
										maintenance.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Featured Projects Section -->
<section id="featured-projects" class="py-20 px-4 bg-white">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16 animate-on-scroll">
			<h2 class="inline-block text-4xl md:text-5xl font-bold relative">
				<span class="relative z-10 text-gray-900">Featured Projects</span>
				<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
				></span>
			</h2>
			<p class="mt-6 text-xl text-gray-700 max-w-2xl mx-auto">
				Explore our recent work and discover how we've helped businesses transform their digital
				presence
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
			{#each featuredProjects as project, i}
				<ProjectCard {project} delay={i * 200} {handleImageError} />
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 px-4 bg-gradient-to-r from-sky-600 to-teal-600 text-white">
	<div class="max-w-5xl mx-auto text-center animate-on-scroll">
		<h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Next Project?</h2>
		<p class="text-xl opacity-90 max-w-2xl mx-auto mb-10">
			Let's discuss how we can help bring your vision to life with a custom solution tailored to
			your needs.
		</p>
		<a
			href="/contact"
			class="inline-block px-8 py-4 bg-white text-sky-700 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
