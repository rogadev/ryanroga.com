<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly, slide } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();

	let isVisible = $state(false);
	let showForm = $state(false);
	let isSubmitting = $state(false);

	$effect(() => {
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

<!-- Background decorative elements -->
<div
	class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
	aria-hidden="true"
>
	<div
		class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#818cf8] to-[#c7d2fe] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
		style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
	></div>
</div>

<main class="relative overflow-hidden bg-white">
	<!-- Hero Section -->
	<section class="relative py-24 sm:py-32 lg:py-40">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center">
				{#if isVisible}
					<div
						class="mb-8 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
						in:fly={{ y: 20, duration: 800, delay: 100 }}
					>
						📧 Let's Connect • Quick Response Guaranteed
					</div>
					<h1
						class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
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
						class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
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
	<section class="py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center mb-16">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					Choose How to Connect
				</h2>
				<p class="mt-4 text-lg leading-8 text-gray-600">
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
									<a
										href="mailto:ryan@roga.dev"
										class="text-lg font-medium text-gray-900 hover:text-indigo-600 transition-colors"
									>
										ryan@roga.dev
									</a>
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

				<!-- Contact Form -->
				<div class="animate-on-scroll" style="transition-delay: 200ms;">
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
									d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-gray-900 mb-4">Send a Message</h3>
						<p class="text-gray-600 mb-6">
							Tell me about your project and I'll get back to you with ideas, questions, and next
							steps.
						</p>

						<!-- Success/Error Messages -->
						{#if form?.success}
							<div class="mb-6 rounded-lg bg-green-50 border border-green-200 p-4" in:slide>
								<div class="flex items-center">
									<svg class="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
									<p class="text-green-700 font-medium">{form.message}</p>
								</div>
							</div>
						{/if}

						{#if form?.error}
							<div class="mb-6 rounded-lg bg-red-50 border border-red-200 p-4" in:slide>
								<div class="flex items-center">
									<svg class="h-5 w-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
											clip-rule="evenodd"
										/>
									</svg>
									<p class="text-red-700 font-medium">{form.error}</p>
								</div>
							</div>
						{/if}

						<form
							method="POST"
							class="space-y-6"
							use:enhance={() => {
								isSubmitting = true;
								return async ({ update }) => {
									await update();
									isSubmitting = false;
								};
							}}
						>
							<div>
								<label for="name" class="block text-sm font-medium text-gray-700 mb-2">
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={form?.name || ''}
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
									placeholder="Your name"
									disabled={isSubmitting}
									required
								/>
							</div>
							<div>
								<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={form?.email || ''}
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
									placeholder="your.email@example.com"
									disabled={isSubmitting}
									required
								/>
							</div>
							<div>
								<label for="project" class="block text-sm font-medium text-gray-700 mb-2">
									Project Type
								</label>
								<select
									id="project"
									name="project"
									value={form?.project || ''}
									disabled={isSubmitting}
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
								>
									<option value="">Select a project type</option>
									<option value="website">Business Website</option>
									<option value="webapp">Custom Web Application</option>
									<option value="ecommerce">E-commerce Store</option>
									<option value="ai">AI Integration</option>
									<option value="consulting">Consulting</option>
									<option value="other">Other</option>
								</select>
							</div>
							<div>
								<label for="message" class="block text-sm font-medium text-gray-700 mb-2">
									Project Details
								</label>
								<textarea
									id="message"
									name="message"
									rows="4"
									value={form?.message || ''}
									disabled={isSubmitting}
									class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
									placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
									required
								></textarea>
							</div>
							<button
								type="submit"
								disabled={isSubmitting}
								class="w-full rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
							>
								{#if isSubmitting}
									<div class="flex items-center justify-center gap-2">
										<svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
											<circle
												class="opacity-25"
												cx="12"
												cy="12"
												r="10"
												stroke="currentColor"
												stroke-width="4"
											></circle>
											<path
												class="opacity-75"
												fill="currentColor"
												d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
											></path>
										</svg>
										Sending...
									</div>
								{:else}
									Send Message
								{/if}
							</button>
						</form>
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
					<a
						href="mailto:ryan@roga.dev"
						class="rounded-lg bg-white px-8 py-4 text-base font-semibold text-indigo-600 shadow-lg hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:shadow-xl hover:scale-105"
					>
						Email Me Now
					</a>
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

<!-- Background decorative element at bottom -->
<div
	class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
	aria-hidden="true"
>
	<div
		class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4f46e5] to-[#818cf8] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
		style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
	></div>
</div>

<style>
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
