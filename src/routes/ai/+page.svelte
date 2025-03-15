<script>
	import { onMount } from 'svelte';

	let isVisible = false;

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
	<title>AI Training Services | Roga Web Development</title>
	<meta
		name="description"
		content="Unlock the transformative power of AI for your team with our comprehensive training programs. Learn how AI can amplify productivity and revolutionize your workflow."
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

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="py-16 md:py-24 px-4">
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col md:flex-row items-center gap-12">
				<div class="w-full md:w-1/2 animate-on-scroll">
					<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
						AI Training That <span class="text-blue-600">Transforms</span> Your Business
					</h1>
					<p class="text-xl text-gray-700 mb-8">
						Unlock the power of AI for your team with practical, hands-on training that delivers
						immediate value. Learn how to leverage AI tools to boost productivity, enhance
						creativity, and solve real business challenges.
					</p>
					<div class="flex flex-wrap gap-4">
						<a
							href="#pricing"
							class="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
						>
							View Training Options
						</a>
						<a
							href="/contact"
							class="inline-block px-8 py-4 bg-transparent border-2 border-blue-500 rounded-lg text-blue-700 font-medium hover:bg-blue-50 transition-all"
						>
							Contact Us
						</a>
					</div>
				</div>
				<div class="w-full md:w-1/2 animate-on-scroll" style="transition-delay: 200ms;">
					<div class="relative">
						<div
							class="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg transform rotate-6"
						></div>
						<div
							class="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-100 rounded-lg transform -rotate-6"
						></div>
						<div
							class="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden"
						>
							<div class="flex items-center mb-6">
								<div
									class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-4"
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
											d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
										/>
									</svg>
								</div>
								<h3 class="text-xl font-bold text-gray-900">AI-Powered Productivity</h3>
							</div>
							<ul class="space-y-3 text-gray-700">
								<li class="flex items-start">
									<svg
										class="h-6 w-5 flex-none text-blue-600 mt-0.5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
											clip-rule="evenodd"
										/>
									</svg>
									<span class="ml-2">Automate repetitive tasks</span>
								</li>
								<li class="flex items-start">
									<svg
										class="h-6 w-5 flex-none text-blue-600 mt-0.5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
											clip-rule="evenodd"
										/>
									</svg>
									<span class="ml-2">Generate high-quality content</span>
								</li>
								<li class="flex items-start">
									<svg
										class="h-6 w-5 flex-none text-blue-600 mt-0.5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
											clip-rule="evenodd"
										/>
									</svg>
									<span class="ml-2">Analyze data for actionable insights</span>
								</li>
								<li class="flex items-start">
									<svg
										class="h-6 w-5 flex-none text-blue-600 mt-0.5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
											clip-rule="evenodd"
										/>
									</svg>
									<span class="ml-2">Enhance decision-making processes</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Benefits Section -->
	<section class="py-16 px-4 bg-gray-50">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16 animate-on-scroll">
				<h2 class="inline-block text-4xl font-bold relative">
					<span class="relative z-10 text-gray-900">Why AI Training Matters</span>
					<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
					></span>
				</h2>
				<p class="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
					In today's rapidly evolving digital landscape, AI literacy is becoming as essential as
					computer literacy was a generation ago.
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
				<!-- Benefit 1 -->
				<div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
					<div
						class="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600"
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
					<h3 class="text-2xl font-bold mb-3 text-gray-900">Immediate Productivity Boost</h3>
					<p class="text-gray-700">
						Learn practical AI skills that can be applied immediately to streamline workflows and
						automate repetitive tasks, freeing your team to focus on high-value work.
					</p>
				</div>

				<!-- Benefit 2 -->
				<div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
					<div
						class="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6 text-indigo-600"
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
								d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
							/>
						</svg>
					</div>
					<h3 class="text-2xl font-bold mb-3 text-gray-900">Competitive Advantage</h3>
					<p class="text-gray-700">
						Stay ahead of the curve by equipping your team with the skills to leverage AI for
						innovation, problem-solving, and creating unique value for your customers.
					</p>
				</div>

				<!-- Benefit 3 -->
				<div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
					<div
						class="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600"
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
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>
					<h3 class="text-2xl font-bold mb-3 text-gray-900">Team Empowerment</h3>
					<p class="text-gray-700">
						Build confidence across your organization by democratizing AI knowledge and fostering a
						culture of continuous learning and innovation.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Pricing Section -->
	<section
		id="pricing"
		class="py-16 md:py-24 px-4 bg-gradient-to-b from-indigo-900 to-blue-900 text-white"
	>
		<div class="max-w-7xl mx-auto">
			<div class="max-w-4xl mx-auto text-center mb-16 animate-on-scroll">
				<h2 class="text-base font-semibold leading-7 text-orange-400">Pricing</h2>
				<p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
					AI Training For Teams & Individuals
				</p>
				<p class="mt-6 text-xl leading-8 text-gray-300">
					Practical, hands-on training that delivers immediate value. Learn how to leverage AI tools
					to boost productivity, enhance creativity, and solve real business challenges.
				</p>
			</div>

			<div
				class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-on-scroll"
				style="transition-delay: 200ms;"
			>
				<!-- Individual Training Card -->
				<div
					class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all hover:transform hover:-translate-y-1 hover:shadow-xl"
				>
					<div class="flex items-center justify-between gap-x-4">
						<h3 id="tier-individual" class="text-xl font-semibold leading-8 text-white">
							Individual Training
						</h3>
					</div>
					<p class="mt-4 text-gray-300">
						Personalized one-on-one sessions tailored to your specific needs and industry.
					</p>
					<p class="mt-6 flex items-baseline gap-x-1">
						<span class="text-4xl font-bold tracking-tight text-white">$149</span>
						<span class="text-sm font-semibold leading-6 text-gray-300">/hour</span>
					</p>
					<a
						href="https://calendly.com/ryan-awq/ai-office-training"
						aria-describedby="tier-individual"
						class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
					>
						Schedule Session
					</a>
					<ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300">
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-blue-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Customized curriculum for your role
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-blue-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Direct access to an AI expert
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-blue-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Work on your real-life projects
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-blue-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Follow-up resources and materials
						</li>
					</ul>
				</div>

				<!-- Recurring Training Card -->
				<div
					class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-orange-500 hover:border-orange-400 transition-all transform hover:-translate-y-1 hover:shadow-xl relative z-10"
				>
					<div
						class="absolute -top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full"
					>
						MOST POPULAR
					</div>
					<div class="flex items-center justify-between gap-x-4">
						<h3 id="tier-recurring" class="text-xl font-semibold leading-8 text-white">
							Recurring Training
						</h3>
					</div>
					<p class="mt-4 text-gray-300">
						Ongoing skill development with regular sessions to build mastery over time.
					</p>
					<p class="mt-6 flex items-baseline gap-x-1">
						<span class="text-4xl font-bold tracking-tight text-white">$119</span>
						<span class="text-sm font-semibold leading-6 text-gray-300">/hour</span>
					</p>
					<a
						href="https://calendly.com/ryan-awq/ai-office-training"
						aria-describedby="tier-recurring"
						class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-orange-500 text-white shadow-sm hover:bg-orange-400 focus-visible:outline-orange-500"
					>
						Schedule Session
					</a>
					<ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300">
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-orange-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							All Individual Training features
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-orange-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Discounted hourly rate
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-orange-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Progressive skill building
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-orange-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Continuous assessment and feedback
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-orange-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Priority scheduling
						</li>
					</ul>
				</div>

				<!-- Team Training Card -->
				<div
					class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/30 transition-all hover:transform hover:-translate-y-1 hover:shadow-xl"
				>
					<div class="flex items-center justify-between gap-x-4">
						<h3 id="tier-team" class="text-xl font-semibold leading-8 text-white">Team Training</h3>
					</div>
					<p class="mt-4 text-gray-300">
						Collaborative learning experiences designed for teams of 3-10 people.
					</p>
					<p class="mt-6 flex items-baseline gap-x-1">
						<span class="text-4xl font-bold tracking-tight text-white">$299</span>
						<span class="text-sm font-semibold leading-6 text-gray-300">/session</span>
					</p>
					<a
						href="/contact"
						aria-describedby="tier-team"
						class="mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
					>
						Contact Us
					</a>
					<ul role="list" class="mt-8 space-y-3 text-sm leading-6 text-gray-300">
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-blue-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Tailored to team objectives
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-blue-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Interactive group exercises
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-blue-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Scalable learning solutions for groups of various sizes
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-blue-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Insights into how AI can streamline workflows and boost productivity
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-blue-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Real-world case studies to illustrate the impact of AI in your industry
						</li>
						<li class="flex gap-x-3">
							<svg
								class="h-6 w-5 flex-none text-blue-400"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
									clip-rule="evenodd"
								/>
							</svg>
							Access to group activities and exercises to reinforce learning outcomes
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section class="py-16 px-4 bg-gray-50">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16 animate-on-scroll">
				<h2 class="inline-block text-4xl font-bold relative">
					<span class="relative z-10 text-gray-900">What Our Clients Say</span>
					<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
					></span>
				</h2>
				<p class="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
					Hear from professionals who have transformed their workflows with our AI training.
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
				<!-- Testimonial 1 -->
				<div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
					<div class="flex items-center mb-6">
						<div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
							<span class="text-blue-600 font-bold text-xl">S</span>
						</div>
						<div>
							<h4 class="font-bold text-gray-900">Sarah Johnson</h4>
							<p class="text-gray-600 text-sm">Marketing Director</p>
						</div>
					</div>
					<div class="mb-4">
						<div class="flex text-yellow-400">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
						</div>
					</div>
					<p class="text-gray-700">
						"The AI training completely transformed our content creation process. We're now
						producing twice the content in half the time, with better results. The ROI was immediate
						and substantial."
					</p>
				</div>

				<!-- Testimonial 2 -->
				<div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
					<div class="flex items-center mb-6">
						<div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
							<span class="text-indigo-600 font-bold text-xl">M</span>
						</div>
						<div>
							<h4 class="font-bold text-gray-900">Michael Chen</h4>
							<p class="text-gray-600 text-sm">Operations Manager</p>
						</div>
					</div>
					<div class="mb-4">
						<div class="flex text-yellow-400">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
						</div>
					</div>
					<p class="text-gray-700">
						"The hands-on approach to AI training made all the difference. We've automated several
						repetitive processes, saving our team 15+ hours per week. The practical examples were
						invaluable."
					</p>
				</div>

				<!-- Testimonial 3 -->
				<div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
					<div class="flex items-center mb-6">
						<div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
							<span class="text-purple-600 font-bold text-xl">J</span>
						</div>
						<div>
							<h4 class="font-bold text-gray-900">Jessica Rivera</h4>
							<p class="text-gray-600 text-sm">Small Business Owner</p>
						</div>
					</div>
					<div class="mb-4">
						<div class="flex text-yellow-400">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								></path>
							</svg>
						</div>
					</div>
					<p class="text-gray-700">
						"As a small business owner, I was skeptical about AI, but this training changed
						everything. I'm now handling tasks that would have required hiring additional staff. The
						personalized approach was perfect for my needs."
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="py-16 px-4 bg-white">
		<div class="max-w-4xl mx-auto">
			<div class="text-center mb-16 animate-on-scroll">
				<h2 class="inline-block text-4xl font-bold relative">
					<span class="relative z-10 text-gray-900">Frequently Asked Questions</span>
					<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
					></span>
				</h2>
			</div>

			<div class="space-y-6 animate-on-scroll">
				<div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
					<h3 class="text-xl font-bold text-gray-900 mb-2">
						Do I need technical experience to benefit from AI training?
					</h3>
					<p class="text-gray-700">
						Not at all! Our training is designed for professionals at all technical levels. We
						tailor the content to your specific background and needs, ensuring you can apply what
						you learn regardless of your technical expertise.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
					<h3 class="text-xl font-bold text-gray-900 mb-2">
						How quickly will I see results from the training?
					</h3>
					<p class="text-gray-700">
						Most clients implement what they learn immediately and see productivity improvements
						within days. Our practical, hands-on approach ensures you leave each session with
						actionable skills you can apply right away.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
					<h3 class="text-xl font-bold text-gray-900 mb-2">
						What types of AI tools do you cover in the training?
					</h3>
					<p class="text-gray-700">
						We cover a wide range of AI tools relevant to your industry and role, including content
						generation, data analysis, process automation, customer service solutions, and creative
						tools. The specific tools are customized to your needs.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
					<h3 class="text-xl font-bold text-gray-900 mb-2">
						Is team training better than individual sessions?
					</h3>
					<p class="text-gray-700">
						It depends on your goals. Team training creates a shared understanding and collaborative
						environment, while individual training offers deeper personalization. Many organizations
						benefit from a combination of both approaches.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
		<div class="max-w-5xl mx-auto text-center animate-on-scroll">
			<h2 class="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
			<p class="text-xl opacity-90 max-w-2xl mx-auto mb-10">
				Take the first step toward AI-powered productivity and innovation. Schedule your training
				session today.
			</p>
			<div class="flex flex-wrap justify-center gap-6">
				<a
					href="https://calendly.com/ryan-awq/ai-office-training"
					class="inline-block px-8 py-4 bg-white text-indigo-700 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
				>
					Schedule Your First Session
				</a>
				<a
					href="/contact"
					class="inline-block px-8 py-4 bg-transparent border-2 border-white/30 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/10 transition-all"
				>
					Contact Us for Custom Solutions
				</a>
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
