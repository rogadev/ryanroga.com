<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';
	import RedactedEmail from '$lib/components/RedactedEmail.svelte';
	import ClientLogos from '../ClientLogos.svelte';
	import { initScrollAnimations } from '$lib/actions/scrollAnimation';

	let isVisible = $state(false);

	$effect(() => {
		isVisible = true;
		return initScrollAnimations();
	});
</script>

<svelte:head>
	<title>Contact | Roga.dev</title>
	<meta name="description" content="Contact Roga.dev for web development and AI solutions" />
</svelte:head>

<main class="relative overflow-hidden bg-white">
	<!-- Hero Section -->
	<section class="relative py-24 sm:py-32 lg:py-40">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				{#if isVisible}
					<div class="hidden" in:fly={{ y: 20, duration: 800, delay: 100 }}>
						📧 Let's Connect • Quick Response Guaranteed
					</div>
					<h1
						class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl text-balance"
						in:fly={{ y: 50, duration: 1000, delay: 200 }}
					>
						Ready to
						<span
							class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
						>
							Start Your Project?
						</span>
					</h1>
					<p
						class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl text-pretty"
						in:fly={{ y: 50, duration: 1000, delay: 400 }}
					>
						Let's discuss how we can transform your business with modern web solutions and AI
						integration. I'm here to help bring your vision to life.
					</p>
					<div
						class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6"
						in:fly={{ y: 30, duration: 1000, delay: 600 }}
					>
						<div class="flex items-center justify-center gap-2 text-sm text-gray-600">
							<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Free Consultation</span>
						</div>
						<div class="flex items-center justify-center gap-2 text-sm text-gray-600">
							<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>Quick Response</span>
						</div>
						<div class="flex items-center justify-center gap-2 text-sm text-gray-600">
							<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
							<span>No Upfront Costs</span>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</section>

	<!-- Contact Options Section -->
	<section class="py-16 sm:py-24" id="choose-how-to-connect">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center mb-16">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
					Choose How to Connect
				</h2>
				<p class="mt-4 text-lg leading-8 text-gray-600 text-pretty">
					Pick the method that works best for you. I'm available through multiple channels and
					respond quickly.
				</p>
			</div>

			<div class="grid gap-8 lg:grid-cols-2">
				<!-- Quick Contact Options -->
				<div class="animate-on-scroll">
					<div
						class="rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all duration-300 h-full"
					>
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 mb-6">
							<svg
								class="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
						<p class="text-gray-600 mb-6">
							Get in touch directly through your preferred method. I typically respond within a few
							hours during business days.
						</p>

						<div class="space-y-4">
							<!-- Email -->
							<div class="flex items-center gap-4 group">
								<div
									class="flex-none p-3 bg-gray-50 rounded-lg group-hover:bg-indigo-50 transition-colors"
								>
									<svg
										class="h-5 w-5 text-gray-600 group-hover:text-indigo-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
										/>
									</svg>
								</div>
								<div>
									<div class="text-lg font-medium text-gray-900">
										<RedactedEmail />
									</div>
									<p class="text-sm text-gray-600">Best for detailed project discussions</p>
								</div>
							</div>

							<!-- LinkedIn -->
							<div class="flex items-center gap-4 group">
								<div
									class="flex-none p-3 bg-gray-50 rounded-lg group-hover:bg-indigo-50 transition-colors"
								>
									<Icon
										icon="mdi:linkedin"
										class="h-5 w-5 text-gray-600 group-hover:text-indigo-600"
									/>
								</div>
								<div>
									<a
										href="https://www.linkedin.com/in/ryanroga/"
										target="_blank"
										referrerpolicy="no-referrer"
										class="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors"
									>
										Connect on LinkedIn
									</a>
									<p class="text-sm text-gray-600">Professional networking & updates</p>
								</div>
							</div>

							<!-- GitHub -->
							<div class="flex items-center gap-4 group">
								<div
									class="flex-none p-3 bg-gray-50 rounded-lg group-hover:bg-indigo-50 transition-colors"
								>
									<Icon
										icon="mdi:github-box"
										class="h-5 w-5 text-gray-600 group-hover:text-indigo-600"
									/>
								</div>
								<div>
									<a
										href="https://github.com/rogadev"
										target="_blank"
										referrerpolicy="no-referrer"
										class="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors"
									>
										View My Code
									</a>
									<p class="text-sm text-gray-600">Open source projects & contributions</p>
								</div>
							</div>

							<!-- Location -->
							<div class="flex items-center gap-4 group">
								<div
									class="flex-none p-3 bg-gray-50 rounded-lg group-hover:bg-indigo-50 transition-colors"
								>
									<svg
										class="h-5 w-5 text-gray-600 group-hover:text-indigo-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
										/>
									</svg>
								</div>
								<div>
									<a
										href="https://www.google.com/maps/place/Cumberland,+BC/@49.6156253,-125.0471651,13z/data=!3m1!4b1!4m6!3m5!1s0x5486c92c56b8ac31:0x507e04e23e7e8035!8m2!3d49.6156252!4d-125.0225567!16zL20vMDFzY3ox?entry=ttu"
										target="_blank"
										referrerpolicy="no-referrer"
										class="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors"
									>
										Cumberland, BC, Canada
									</a>
									<p class="text-sm text-gray-600">Available for local meetings</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Notice About Form Removal -->
				<div class="animate-on-scroll" style="transition-delay: 200ms;">
					<div class="rounded-2xl border border-orange-200 bg-orange-50 p-8 h-full">
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500 mb-6">
							<svg
								class="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-gray-900 mb-4">
							Contact Form Temporarily Unavailable
						</h3>
						<div class="text-gray-700 space-y-4">
							<p class="leading-relaxed">
								Due to abuse and spam, the form section of this website has been removed. We
								apologize for the inconvenience.
							</p>
							<p class="leading-relaxed">
								In the meantime, please feel free to reach out using any of the contact methods
								listed on the left, or contact me directly at <RedactedEmail />.
							</p>
							<div class="mt-6 p-4 bg-white rounded-lg border border-orange-200">
								<p class="text-sm text-gray-600">
									<strong>Quick Tip:</strong> For the fastest response, include details about your project,
									timeline, and any specific requirements in your email.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Developer Profile Section -->
	<section class="py-16 bg-gray-50">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-4xl">
				<div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
					<div class="flex flex-col lg:flex-row gap-8 items-center">
						<div class="flex-shrink-0">
							<img
								class="w-32 h-32 rounded-full object-cover object-center border-4 border-indigo-100"
								src="/images/ryanroga.jpg"
								alt="Ryan Roga"
								width="128"
								height="128"
								loading="lazy"
							/>
						</div>
						<div class="flex-1 text-center lg:text-left">
							<h3 class="text-2xl font-bold text-gray-900 mb-2">Ryan Roga</h3>
							<p class="text-lg text-indigo-600 mb-4">Full-Stack Developer & AI Specialist</p>
							<p class="text-gray-600 mb-6">
								Based in Cumberland, BC, I help small businesses across Canada transform their
								digital presence with modern web applications and AI-powered solutions. From concept
								to deployment, I deliver scalable, high-performance applications that drive real
								business results.
							</p>
							<div class="flex flex-wrap gap-4 justify-center lg:justify-start">
								<a
									href="/about"
									class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all duration-200"
								>
									About Me
								</a>
								<a
									href="/resume"
									class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all duration-200"
								>
									View Resume
								</a>
								<a
									href="/projects"
									class="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all duration-200"
								>
									See My Work
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Client Logos - Using shared component -->
	<ClientLogos
		title="Join These Industry Leaders"
		subtitle="Companies that have trusted us to deliver exceptional web solutions"
	/>

	<!-- CTA Section -->
	<section class="bg-gradient-to-r from-indigo-600 to-purple-700 py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Ready to Get Started?
				</h2>
				<p class="mt-6 text-lg leading-8 text-indigo-200">
					Don't let outdated technology hold your business back. Let's build something amazing
					together and give your business the competitive edge it deserves.
				</p>
				<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
					<div
						class="rounded-lg bg-white px-8 py-4 text-base font-semibold text-indigo-600 shadow-lg"
					>
						<RedactedEmail />
					</div>
					<a
						href="/projects"
						class="rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white hover:bg-white hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
					>
						See My Work
					</a>
				</div>
				<div class="mt-8 text-sm text-indigo-200">
					<p>🚀 Free consultation • No upfront costs • Quick responses</p>
				</div>
			</div>
		</div>
	</section>
</main>
