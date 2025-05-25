<svelte:options runes={true} />

<script lang="ts">
	let isVisible = $state(false);

	$effect(() => {
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
	<title>About Ryan Roga | Web Development Expert & Business Solution Architect</title>
	<meta
		name="description"
		content="Meet Ryan Roga, a passionate web developer specializing in custom business applications, modern websites, and AI integration. Based in Western Canada, serving businesses nationwide with proven results."
	/>
	<meta
		name="keywords"
		content="Ryan Roga, web developer, custom applications, SvelteKit expert, business websites, AI integration, Western Canada web development"
	/>
	<meta property="og:title" content="About Ryan Roga | Web Development Expert" />
	<meta
		property="og:description"
		content="Passionate web developer specializing in custom business solutions. Transforming businesses through innovative web applications and AI integration."
	/>
	<meta property="og:type" content="profile" />
	<meta property="og:url" content="https://roga.dev/about" />
	<link rel="canonical" href="https://roga.dev/about" />

	<!-- Structured Data for SEO -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Ryan Roga",
			"jobTitle": "Web Developer & Business Solution Architect",
			"url": "https://roga.dev",
			"sameAs": ["https://linkedin.com/in/ryan-rogan", "https://github.com/rogadev"],
			"worksFor": {
				"@type": "Organization",
				"name": "Roga Web Development",
				"url": "https://roga.dev"
			},
			"knowsAbout": [
				"Web Development",
				"SvelteKit",
				"TypeScript",
				"Custom Web Applications",
				"AI Integration",
				"Business Automation"
			],
			"address": {
				"@type": "PostalAddress",
				"addressRegion": "BC"
			}
		}
	</script>
</svelte:head>

<!-- Hero Background -->
<div
	class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
	aria-hidden="true"
>
	<div
		class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#818cf8] to-[#c7d2fe] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
		style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
	></div>
</div>

<main class="relative overflow-hidden">
	<!-- Hero Section -->
	<section aria-labelledby="about-hero-heading" class="relative">
		<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
			<div class="mx-auto max-w-2xl text-center">
				<div
					class="mb-8 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
				>
					👋 Meet the Developer Behind the Solutions
				</div>
				<h1
					id="about-hero-heading"
					class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
				>
					Hi, I'm
					<span
						class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
					>
						Ryan Roga
					</span>
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
					A passionate web developer who transforms complex business challenges into elegant digital
					solutions. Based in Western Canada, I help businesses nationwide achieve their digital
					potential.
				</p>
				<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
					<a
						href="/contact"
						class="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 hover:shadow-xl hover:scale-105"
					>
						Let's Work Together
					</a>
					<a
						href="/projects"
						class="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-all duration-200 hover:shadow-md"
					>
						See My Work
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- About Story Section -->
	<section class="py-16 sm:py-24 bg-white">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<div class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
					<div class="lg:pr-4 animate-on-scroll">
						<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Story</h2>
						<p class="mt-6 text-lg leading-8 text-gray-600">
							My journey into web development started with a simple belief: technology should solve
							real problems and make life easier, not more complicated. What began as curiosity
							about how websites work evolved into a passion for creating digital solutions that
							drive tangible business results.
						</p>
						<p class="mt-6 text-lg leading-8 text-gray-600">
							Over the years, I've had the privilege of working with businesses across various
							industries, from small local shops to growing enterprises. Each project has taught me
							something new about the intersection of technology and business needs.
						</p>
						<div class="mt-8 space-y-6">
							<div class="flex items-start gap-4">
								<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
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
											d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 3.75a6.01 6.01 0 01-6 6 6.01 6.01 0 01-6-6 6.01 6.01 0 016-6 6.01 6.01 0 016 6z"
										/>
									</svg>
								</div>
								<div>
									<h3 class="text-lg font-semibold text-gray-900">Results-Driven Approach</h3>
									<p class="text-gray-600">
										Every solution I build is designed with measurable business outcomes in mind.
									</p>
								</div>
							</div>
							<div class="flex items-start gap-4">
								<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
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
											d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.58-5.84a14.927 14.927 0 012.58 5.84M9.75 7.124a6 6 0 00-6 6 6 6 0 006 6m0-12a6 6 0 016 6 6 6 0 01-6 6m0-12v12"
										/>
									</svg>
								</div>
								<div>
									<h3 class="text-lg font-semibold text-gray-900">Continuous Learning</h3>
									<p class="text-gray-600">
										I stay current with the latest technologies to provide cutting-edge solutions.
									</p>
								</div>
							</div>
							<div class="flex items-start gap-4">
								<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
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
											d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
										/>
									</svg>
								</div>
								<div>
									<h3 class="text-lg font-semibold text-gray-900">Collaborative Partnership</h3>
									<p class="text-gray-600">
										I work closely with clients to understand their vision and bring it to life.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="lg:pl-8 animate-on-scroll" style="transition-delay: 200ms;">
						<!-- Skills & Expertise -->
						<div class="rounded-2xl bg-gray-50 p-8">
							<h3 class="text-xl font-semibold text-gray-900 mb-6">Technical Expertise</h3>
							<div class="space-y-4">
								<div>
									<div class="flex items-center justify-between mb-2">
										<span class="text-sm font-medium text-gray-700">Frontend Development</span>
										<span class="text-sm text-gray-500">Expert</span>
									</div>
									<div class="w-full bg-gray-200 rounded-full h-2">
										<div class="bg-indigo-600 h-2 rounded-full w-[95%]"></div>
									</div>
									<p class="text-xs text-gray-600 mt-1">
										SvelteKit, Vue.js, TypeScript, Tailwind CSS
									</p>
								</div>
								<div>
									<div class="flex items-center justify-between mb-2">
										<span class="text-sm font-medium text-gray-700">Backend Development</span>
										<span class="text-sm text-gray-500">Advanced</span>
									</div>
									<div class="w-full bg-gray-200 rounded-full h-2">
										<div class="bg-indigo-600 h-2 rounded-full w-[90%]"></div>
									</div>
									<p class="text-xs text-gray-600 mt-1">Node.js, Express, PostgreSQL, MongoDB</p>
								</div>
								<div>
									<div class="flex items-center justify-between mb-2">
										<span class="text-sm font-medium text-gray-700">AI Integration</span>
										<span class="text-sm text-gray-500">Proficient</span>
									</div>
									<div class="w-full bg-gray-200 rounded-full h-2">
										<div class="bg-indigo-600 h-2 rounded-full w-[85%]"></div>
									</div>
									<p class="text-xs text-gray-600 mt-1">
										OpenAI API, Custom AI Solutions, Training
									</p>
								</div>
								<div>
									<div class="flex items-center justify-between mb-2">
										<span class="text-sm font-medium text-gray-700">DevOps & Deployment</span>
										<span class="text-sm text-gray-500">Proficient</span>
									</div>
									<div class="w-full bg-gray-200 rounded-full h-2">
										<div class="bg-indigo-600 h-2 rounded-full w-[80%]"></div>
									</div>
									<p class="text-xs text-gray-600 mt-1">Vercel, AWS, Docker, CI/CD</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- What I Do Section -->
	<section class="py-16 sm:py-24 bg-gray-50">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center animate-on-scroll">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What I Do Best</h2>
				<p class="mt-4 text-lg leading-8 text-gray-600">
					I specialize in creating digital solutions that solve real business problems and drive
					growth.
				</p>
			</div>

			<div class="mx-auto mt-16 max-w-6xl">
				<div class="grid gap-8 lg:grid-cols-3">
					<!-- Custom Applications -->
					<div
						class="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all duration-300 animate-on-scroll"
					>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-700 transition-colors duration-300"
						>
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
									d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
								/>
							</svg>
						</div>
						<h3 class="mt-6 text-xl font-semibold text-gray-900">Custom Business Applications</h3>
						<p class="mt-4 text-gray-600">
							From inventory management systems to customer portals, I build web applications that
							streamline your operations and boost efficiency.
						</p>
						<div class="mt-6">
							<a
								href="/projects"
								class="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
							>
								View examples <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>

					<!-- Modern Websites -->
					<div
						class="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all duration-300 animate-on-scroll"
						style="transition-delay: 200ms;"
					>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-700 transition-colors duration-300"
						>
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
									d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h3 class="mt-6 text-xl font-semibold text-gray-900">Professional Websites</h3>
						<p class="mt-4 text-gray-600">
							Beautiful, fast, and SEO-optimized websites that convert visitors into customers and
							represent your brand professionally.
						</p>
						<div class="mt-6">
							<a
								href="/contact"
								class="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
							>
								Get started <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>

					<!-- AI Solutions -->
					<div
						class="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all duration-300 animate-on-scroll"
						style="transition-delay: 400ms;"
					>
						<div
							class="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-700 transition-colors duration-300"
						>
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
									d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
								/>
							</svg>
						</div>
						<h3 class="mt-6 text-xl font-semibold text-gray-900">AI Integration & Training</h3>
						<p class="mt-4 text-gray-600">
							Help your business leverage AI technology with custom integrations and comprehensive
							training programs for your team.
						</p>
						<div class="mt-6">
							<a href="/ai" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
								Learn more <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Values Section -->
	<section class="py-16 sm:py-24 bg-white">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center animate-on-scroll">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
					My Approach to Success
				</h2>
				<p class="mt-4 text-lg leading-8 text-gray-600">
					These core principles guide every project I undertake and every relationship I build.
				</p>
			</div>

			<div class="mx-auto mt-16 max-w-5xl animate-on-scroll" style="transition-delay: 200ms;">
				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div class="text-center">
						<div
							class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100"
						>
							<svg
								class="h-8 w-8 text-indigo-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<h3 class="mt-6 text-lg font-semibold text-gray-900">Quality First</h3>
						<p class="mt-4 text-gray-600">
							Every line of code is written with performance, security, and maintainability in mind.
							No shortcuts, no compromises.
						</p>
					</div>

					<div class="text-center">
						<div
							class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100"
						>
							<svg
								class="h-8 w-8 text-indigo-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<h3 class="mt-6 text-lg font-semibold text-gray-900">On-Time Delivery</h3>
						<p class="mt-4 text-gray-600">
							I respect your timeline and budget. Clear communication and realistic expectations
							ensure projects are delivered when promised.
						</p>
					</div>

					<div class="text-center">
						<div
							class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100"
						>
							<svg
								class="h-8 w-8 text-indigo-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
								/>
							</svg>
						</div>
						<h3 class="mt-6 text-lg font-semibold text-gray-900">Long-term Partnership</h3>
						<p class="mt-4 text-gray-600">
							I'm not just building a website; I'm helping you grow your business. Ongoing support
							and optimization are part of every relationship.
						</p>
					</div>

					<div class="text-center">
						<div
							class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100"
						>
							<svg
								class="h-8 w-8 text-indigo-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
								/>
							</svg>
						</div>
						<h3 class="mt-6 text-lg font-semibold text-gray-900">Measurable Results</h3>
						<p class="mt-4 text-gray-600">
							Every solution is designed with specific business goals in mind. We track performance
							and optimize for continuous improvement.
						</p>
					</div>

					<div class="text-center">
						<div
							class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100"
						>
							<svg
								class="h-8 w-8 text-indigo-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.58-5.84a14.927 14.927 0 012.58 5.84M9.75 7.124a6 6 0 00-6 6 6 6 0 006 6m0-12a6 6 0 016 6 6 6 0 01-6 6m0-12v12"
								/>
							</svg>
						</div>
						<h3 class="mt-6 text-lg font-semibold text-gray-900">Innovation Focused</h3>
						<p class="mt-4 text-gray-600">
							I stay ahead of the curve with the latest technologies and best practices to give your
							business a competitive edge.
						</p>
					</div>

					<div class="text-center">
						<div
							class="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100"
						>
							<svg
								class="h-8 w-8 text-indigo-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
								/>
							</svg>
						</div>
						<h3 class="mt-6 text-lg font-semibold text-gray-900">Clear Communication</h3>
						<p class="mt-4 text-gray-600">
							No technical jargon, no surprises. You'll always know exactly what's happening with
							your project and why.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="relative py-16 sm:py-24 bg-indigo-600">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center animate-on-scroll">
				<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Ready to Transform Your Business?
				</h2>
				<p class="mt-6 text-lg leading-8 text-indigo-100">
					Let's discuss your project and explore how I can help you achieve your digital goals. No
					obligation, just honest advice about what's possible.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="/contact"
						class="rounded-lg bg-white px-6 py-3 text-base font-semibold text-indigo-600 shadow-lg hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:shadow-xl hover:scale-105"
					>
						Get Started Today
					</a>
					<a
						href="/projects"
						class="rounded-lg border border-white/20 bg-indigo-600 px-6 py-3 text-base font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
					>
						View Portfolio
					</a>
				</div>
			</div>
		</div>
	</section>
</main>

<!-- Background gradient for bottom -->
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
