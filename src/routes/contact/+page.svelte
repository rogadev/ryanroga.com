<script lang="ts">
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';
	import { fade, fly, slide } from 'svelte/transition';

	let isVisible = false;
	let showForm = false;

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

	function toggleForm() {
		showForm = !showForm;
	}
</script>

<svelte:head>
	<title>Contact | Roga.dev</title>
	<meta name="description" content="Contact Roga.dev for web development and AI solutions" />
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

<main class="min-h-screen bg-white">
	<!-- Hero Section -->
	<section class="relative py-20 px-4">
		<div class="max-w-7xl mx-auto text-center">
			{#if isVisible}
				<h1
					class="text-5xl md:text-6xl font-bold mb-6 text-gray-900 relative inline-block"
					in:fly={{ y: 50, duration: 1000, delay: 200 }}
				>
					<span class="relative z-10">Get in Touch</span>
					<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
					></span>
				</h1>
				<p
					class="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-12"
					in:fly={{ y: 50, duration: 1000, delay: 400 }}
				>
					Let's discuss how we can help transform your business with innovative web solutions and AI
					integration.
				</p>
			{/if}
		</div>
	</section>

	<!-- Contact Grid Section -->
	<section class="py-12 px-4">
		<div class="max-w-7xl mx-auto">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
				<!-- Left Column - Contact Info -->
				<div class="animate-on-scroll">
					<div
						class="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-2xl p-8 text-white shadow-xl h-full"
					>
						<h2 class="text-3xl font-bold mb-8">Connect With Me</h2>
						<p class="text-lg mb-10 text-blue-100">
							I'm always open to new projects, ideas, and opportunities. Reach out and let's create
							something amazing together.
						</p>

						<div class="space-y-6">
							<!-- Location -->
							<div class="flex items-center gap-x-4 group">
								<div
									class="flex-none p-3 bg-blue-800/50 rounded-lg group-hover:bg-blue-700/70 transition-colors"
								>
									<svg
										class="h-6 w-6 text-blue-200"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
										/>
									</svg>
								</div>
								<a
									href="https://www.google.com/maps/place/Victoria,+BC/@48.4262921,-123.376775,12z/data=!3m1!4b1!4m6!3m5!1s0x548f738bddb06171:0x38e8f3741ebb48ed!8m2!3d48.4284207!4d-123.3656444!16zL20vMDgxbV8?entry=ttu"
									target="_blank"
									rel="noopener noreferrer"
									class="text-lg hover:text-blue-300 transition-colors flex items-center"
								>
									Victoria, British Columbia, Canada
									<Icon icon="mdi:open-in-new" class="h-4 w-4 ml-1 opacity-70" />
								</a>
							</div>

							<!-- Email -->
							<div class="flex items-center gap-x-4 group">
								<div
									class="flex-none p-3 bg-blue-800/50 rounded-lg group-hover:bg-blue-700/70 transition-colors"
								>
									<svg
										class="h-6 w-6 text-blue-200"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
										/>
									</svg>
								</div>
								<a
									href="mailto:ryan@roga.dev"
									target="_blank"
									class="text-lg hover:text-blue-300 transition-colors"
								>
									ryan@roga.dev
								</a>
							</div>

							<!-- LinkedIn -->
							<div class="flex items-center gap-x-4 group">
								<div
									class="flex-none p-3 bg-blue-800/50 rounded-lg group-hover:bg-blue-700/70 transition-colors"
								>
									<Icon icon="mdi:linkedin" class="h-6 w-6 text-blue-200" />
								</div>
								<a
									href="https://www.linkedin.com/in/ryanroga/"
									target="_blank"
									referrerpolicy="no-referrer"
									class="text-lg hover:text-blue-300 transition-colors"
								>
									ryanroga
								</a>
							</div>

							<!-- GitHub -->
							<div class="flex items-center gap-x-4 group">
								<div
									class="flex-none p-3 bg-blue-800/50 rounded-lg group-hover:bg-blue-700/70 transition-colors"
								>
									<Icon icon="mdi:github-box" class="h-6 w-6 text-blue-200" />
								</div>
								<a
									href="https://github.com/rogadev"
									target="_blank"
									referrerpolicy="no-referrer"
									class="text-lg hover:text-blue-300 transition-colors"
								>
									rogadev
								</a>
							</div>

							<!-- Resume -->
							<div class="flex items-center gap-x-4 group">
								<div
									class="flex-none p-3 bg-blue-800/50 rounded-lg group-hover:bg-blue-700/70 transition-colors"
								>
									<Icon icon="mdi:file-account" class="h-6 w-6 text-blue-200" />
								</div>
								<a href="/resume" class="text-lg hover:text-blue-300 transition-colors italic">
									See My Resume...
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Right Column - Profile Image & Contact Form -->
				<div class="animate-on-scroll" style="transition-delay: 200ms;">
					<div
						class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 h-full relative"
					>
						<!-- Profile Image -->
						<div class="relative h-full">
							<img
								class="w-full h-full object-cover object-center"
								src="/images/ryanroga.jpg"
								alt="Ryan Roga"
							/>
							<div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

							<!-- Profile Info -->
							<div class="absolute bottom-0 left-0 p-6 w-full">
								<div class="flex justify-between items-end">
									<div>
										<h3 class="text-2xl font-bold text-white">Ryan Roga</h3>
										<p class="text-blue-200">Web Developer & AI Specialist</p>
									</div>

									<!-- Contact Button -->
									{#if !showForm}
										<button
											on:click={toggleForm}
											class="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
										>
											Contact Me
										</button>
									{/if}
								</div>
							</div>

							<!-- Contact Form Overlay -->
							{#if showForm}
								<div
									class="absolute bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-lg p-6 border-t border-gray-200"
									transition:slide={{ duration: 300, axis: 'y' }}
								>
									<div class="flex justify-between items-center mb-4">
										<h3 class="text-2xl font-bold text-gray-900">Send Me a Message</h3>
										<button on:click={toggleForm} class="text-gray-500 hover:text-gray-700">
											<Icon icon="mdi:close" class="h-6 w-6" />
										</button>
									</div>

									<form class="space-y-4">
										<div>
											<label for="name" class="block text-sm font-medium text-gray-700 mb-1"
												>Name</label
											>
											<input
												type="text"
												id="name"
												name="name"
												class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
												placeholder="Your name"
											/>
										</div>
										<div>
											<label for="email" class="block text-sm font-medium text-gray-700 mb-1"
												>Email</label
											>
											<input
												type="email"
												id="email"
												name="email"
												class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
												placeholder="your.email@example.com"
											/>
										</div>
										<div>
											<label for="message" class="block text-sm font-medium text-gray-700 mb-1"
												>Message</label
											>
											<textarea
												id="message"
												name="message"
												rows="3"
												class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
												placeholder="How can I help you?"
											></textarea>
										</div>
										<button
											type="submit"
											class="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
										>
											Send Message
										</button>
									</form>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 px-4 mt-12 bg-gray-50">
		<div class="max-w-5xl mx-auto text-center animate-on-scroll">
			<h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Services We Offer</h2>
			<p class="text-xl text-gray-700 max-w-2xl mx-auto mb-10">
				From custom web applications to AI integration, I help businesses transform their digital
				presence and streamline operations. Discover how my expertise can benefit your specific
				project.
			</p>
			<a
				href="/about"
				class="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
			>
				Learn More
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
