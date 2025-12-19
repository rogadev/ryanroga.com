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
	<title>About Ryan Roga | Small Business Web Development Expert</title>
	<meta
		name="description"
		content="Meet Ryan Roga, the web developer who helps small businesses compete online. Personal service, modern technology, and proven results. No agency overhead, just results."
	/>
	<meta
		name="keywords"
		content="Ryan Roga, small business web developer, custom web applications, SvelteKit expert, business websites, independent developer, Western Canada"
	/>
	<meta property="og:title" content="About Ryan Roga | Small Business Web Development Expert" />
	<meta
		property="og:description"
		content="The web developer who helps small businesses compete online. Personal service, modern technology, and proven results."
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
			"jobTitle": "Small Business Web Development Expert",
			"url": "https://roga.dev",
			"sameAs": ["https://linkedin.com/in/ryan-rogan", "https://github.com/rogadev"],
			"worksFor": {
				"@type": "Organization",
				"name": "Roga Web Development",
				"url": "https://roga.dev"
			},
			"knowsAbout": [
				"Small Business Web Development",
				"SvelteKit",
				"TypeScript",
				"Custom Web Applications",
				"E-commerce Solutions",
				"Business Automation"
			],
			"address": {
				"@type": "PostalAddress",
				"addressRegion": "BC",
				"addressCountry": "CA"
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
		class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#5eead4] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
		style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
	></div>
</div>

<main class="relative overflow-hidden">
	<!-- Hero Section -->
	<section aria-labelledby="about-hero-heading" class="relative">
		<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
			<div class="mx-auto max-w-2xl text-center">
				<!-- Removed badge above H1 -->
				<h1
					id="about-hero-heading"
					class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl text-balance"
				>
					I Help Small Businesses
					<span class="bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
						Win Online
					</span>
				</h1>
				<p class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl text-pretty">
					While big agencies treat you like a number, I treat you like a partner. I'm Ryan Roga, and
					I build web solutions that actually move the needle for small businesses across Canada.
				</p>
				<div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
					<div class="flex items-center justify-center gap-2 text-sm text-gray-600">
						<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>Direct Communication</span>
					</div>
					<div class="flex items-center justify-center gap-2 text-sm text-gray-600">
						<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>Small Business Pricing</span>
					</div>
					<div class="flex items-center justify-center gap-2 text-sm text-gray-600">
						<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
							<path
								fill-rule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clip-rule="evenodd"
							/>
						</svg>
						<span>Proven Results</span>
					</div>
				</div>
				<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
					<a
						href="/contact"
						class="rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all duration-200 hover:shadow-xl hover:scale-105"
					>
						Let's Talk About Your Project
					</a>
					<a
						href="/projects"
						class="rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 transition-all duration-200 hover:shadow-md"
					>
						See Real Results
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- The Problem Section -->
	<section class="py-16 sm:py-24 bg-gray-50">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center animate-on-scroll">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
					Tired of Being Just Another Client?
				</h2>
				<p class="mt-4 text-lg leading-8 text-gray-600 text-pretty">
					Most small businesses get burned by web agencies. Here's what I hear all the time:
				</p>
			</div>

			<div class="mx-auto mt-16 max-w-6xl animate-on-scroll" style="transition-delay: 200ms;">
				<div class="grid gap-6 lg:grid-cols-3">
					<div class="rounded-2xl bg-white p-6 shadow-sm border border-red-100">
						<div class="flex items-center gap-3 mb-4">
							<div class="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
								<span class="text-red-600 text-xl">😤</span>
							</div>
							<h3 class="text-lg font-semibold text-gray-900">"They Don't Get My Business"</h3>
						</div>
						<p class="text-gray-600">
							Big agencies usually assign developers who've never run a business. They build what
							looks pretty, not what drives sales.
						</p>
					</div>

					<div class="rounded-2xl bg-white p-6 shadow-sm border border-red-100">
						<div class="flex items-center gap-3 mb-4">
							<div class="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
								<span class="text-red-600 text-xl">🐌</span>
							</div>
							<h3 class="text-lg font-semibold text-gray-900">"Everything Takes Forever"</h3>
						</div>
						<p class="text-gray-600">
							Simple changes require meetings, approvals, and weeks of waiting. Need to pivot? That
							won't be cheap or easy!
						</p>
					</div>

					<div class="rounded-2xl bg-white p-6 shadow-sm border border-red-100">
						<div class="flex items-center gap-3 mb-4">
							<div class="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
								<span class="text-red-600 text-xl">👻</span>
							</div>
							<h3 class="text-lg font-semibold text-gray-900">"Can't Reach Anyone"</h3>
						</div>
						<p class="text-gray-600">
							Account managers who don't know code. Developers who don't return calls. Your website
							breaks and nobody cares.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- My Story Section -->
	<section class="py-16 sm:py-24 bg-white">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-6xl">
				<div class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-center">
					<div class="animate-on-scroll">
						<div class="rounded-2xl bg-gradient-to-br from-sky-50 to-teal-50 p-8">
							<div class="flex items-center gap-4 mb-6">
								<div class="h-16 w-16 rounded-full bg-sky-600 flex items-center justify-center">
									<span class="text-xl font-bold text-white">R</span>
								</div>
								<div>
									<h3 class="text-xl font-semibold text-gray-900">Ryan Roga</h3>
									<p class="text-sm text-gray-600">Your Web Development Partner</p>
								</div>
							</div>
							<div class="space-y-4">
								<div class="flex items-center gap-3">
									<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
									<span class="text-sm text-gray-700">Vancouver Island University Graduate</span>
								</div>
								<div class="flex items-center gap-3">
									<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
									<span class="text-sm text-gray-700">5+ Years Building Business Solutions</span>
								</div>
								<div class="flex items-center gap-3">
									<svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
										<path
											fill-rule="evenodd"
											d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
											clip-rule="evenodd"
										/>
									</svg>
									<span class="text-sm text-gray-700">Based in Beautiful British Columbia</span>
								</div>
							</div>
						</div>
					</div>
					<div class="animate-on-scroll" style="transition-delay: 200ms;">
						<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
							Why I Do This Differently
						</h2>
						<p class="mt-6 text-lg leading-8 text-gray-600 text-pretty">
							I started this business because I was tired of seeing small businesses get ripped off
							by agencies that don't understand what it's like to run a business.
						</p>
						<p class="mt-6 text-lg leading-8 text-gray-600 text-pretty">
							As a graduate of VIU's top-rated Web Development program, I have the technical skills.
							But more importantly, I understand that your website isn't just a pretty brochure -
							it's a business tool that needs to work as hard as you do.
						</p>
						<div class="mt-8 space-y-6">
							<div class="flex items-start gap-4">
								<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
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
											d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
										/>
									</svg>
								</div>
								<div>
									<h3 class="text-lg font-semibold text-gray-900">You Talk Directly to Me</h3>
									<p class="text-gray-600">
										No account managers. No junior developers. When you call, you get the person who
										actually built your website.
									</p>
								</div>
							</div>
							<div class="flex items-start gap-4">
								<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
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
											d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div>
									<h3 class="text-lg font-semibold text-gray-900">Honest, Transparent Pricing</h3>
									<p class="text-gray-600">
										No hidden fees. No surprise charges. I tell you exactly what things cost
										upfront, and I stick to it.
									</p>
								</div>
							</div>
							<div class="flex items-start gap-4">
								<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
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
											d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
										/>
									</svg>
								</div>
								<div>
									<h3 class="text-lg font-semibold text-gray-900">
										Business Results, Not Just Pretty Websites
									</h3>
									<p class="text-gray-600">
										Every feature I build has a purpose: drive sales, save time, or improve customer
										experience. No fluff.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- How I Work Section -->
	<section class="py-16 sm:py-24 bg-gray-50">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center animate-on-scroll">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
					How I Actually Work With You
				</h2>
				<p class="mt-4 text-lg leading-8 text-gray-600 text-pretty">
					No corporate BS. No confusing processes. Just a straightforward partnership that gets
					results.
				</p>
			</div>

			<div class="mx-auto mt-16 max-w-6xl animate-on-scroll" style="transition-delay: 200ms;">
				<div class="grid gap-8 lg:grid-cols-2">
					<!-- Left Column -->
					<div class="space-y-8">
						<div class="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
							<div class="flex items-center gap-4 mb-6">
								<div class="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
									<span class="text-xl font-bold text-blue-600">1</span>
								</div>
								<h3 class="text-xl font-semibold text-gray-900">We Talk About Your Business</h3>
							</div>
							<p class="text-gray-600 mb-4">
								Not your "requirements." Your actual business. What problems are you trying to
								solve? What would success look like? I need to understand your world before I can
								help improve it.
							</p>
							<div class="text-sm text-blue-700 bg-blue-50 rounded-lg p-3">
								💡 Free 30-minute consultation - no sales pitch, just honest advice
							</div>
						</div>

						<div class="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
							<div class="flex items-center gap-4 mb-6">
								<div class="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
									<span class="text-xl font-bold text-green-600">2</span>
								</div>
								<h3 class="text-xl font-semibold text-gray-900">I Build, You Review</h3>
							</div>
							<p class="text-gray-600 mb-4">
								I don't disappear for months. You see progress every week. We make adjustments as we
								go. Your feedback shapes the final product, not some project manager's
								interpretation of it.
							</p>
							<div class="text-sm text-green-700 bg-green-50 rounded-lg p-3">
								📱 Weekly progress updates with real, working previews
							</div>
						</div>
					</div>

					<!-- Right Column -->
					<div class="space-y-8">
						<div class="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
							<div class="flex items-center gap-4 mb-6">
								<div class="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
									<span class="text-xl font-bold text-purple-600">3</span>
								</div>
								<h3 class="text-xl font-semibold text-gray-900">Launch & Optimize</h3>
							</div>
							<p class="text-gray-600 mb-4">
								Launch day isn't goodbye day. I monitor performance, fix any issues, and help you
								understand how to get the most from your new website. Real partnership doesn't end
								at launch.
							</p>
							<div class="text-sm text-purple-700 bg-purple-50 rounded-lg p-3">
								🚀 30 days of free support after launch
							</div>
						</div>

						<div class="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
							<div class="flex items-center gap-4 mb-6">
								<div class="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center">
									<span class="text-xl font-bold text-indigo-600">4</span>
								</div>
								<h3 class="text-xl font-semibold text-gray-900">Grow Together</h3>
							</div>
							<p class="text-gray-600 mb-4">
								As your business grows, your website should too. I'm here for the long haul - new
								features, performance improvements, or just someone to bounce ideas off of.
							</p>
							<div class="text-sm text-indigo-700 bg-indigo-50 rounded-lg p-3">
								🤝 Ongoing partnership rates for existing clients
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- What Makes Me Different -->
	<section class="py-16 sm:py-24 bg-white">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center animate-on-scroll">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
					The Independent Developer Advantage
				</h2>
				<p class="mt-4 text-lg leading-8 text-gray-600 text-pretty">
					Why small businesses get better results working with me instead of big agencies.
				</p>
			</div>

			<div class="mx-auto mt-16 max-w-6xl animate-on-scroll" style="transition-delay: 200ms;">
				<div class="overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-200">
					<div class="bg-gradient-to-r from-sky-600 to-teal-600 px-6 py-4">
						<h3 class="text-lg font-semibold text-white text-center">
							Agency vs. Independent Developer
						</h3>
					</div>
					<div class="p-8">
						<div class="grid gap-8 lg:grid-cols-2">
							<!-- Agency Problems -->
							<div>
								<h4 class="text-lg font-semibold text-gray-900 mb-6 text-center">
									❌ Typical Agency Experience
								</h4>
								<div class="space-y-4">
									<div class="flex items-start gap-3">
										<div
											class="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5"
										>
											<svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<span class="text-gray-600"
											>Account managers who don't understand your business</span
										>
									</div>
									<div class="flex items-start gap-3">
										<div
											class="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5"
										>
											<svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<span class="text-gray-600">Junior developers working on your project</span>
									</div>
									<div class="flex items-start gap-3">
										<div
											class="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5"
										>
											<svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<span class="text-gray-600">Hidden costs and scope creep</span>
									</div>
									<div class="flex items-start gap-3">
										<div
											class="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5"
										>
											<svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<span class="text-gray-600">Months of delays and missed deadlines</span>
									</div>
									<div class="flex items-start gap-3">
										<div
											class="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5"
										>
											<svg class="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<span class="text-gray-600">No support after launch</span>
									</div>
								</div>
							</div>

							<!-- My Approach -->
							<div>
								<h4 class="text-lg font-semibold text-gray-900 mb-6 text-center">
									✅ Working With Me
								</h4>
								<div class="space-y-4">
									<div class="flex items-start gap-3">
										<div
											class="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5"
										>
											<svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<span class="text-gray-600">Direct communication with the actual developer</span
										>
									</div>
									<div class="flex items-start gap-3">
										<div
											class="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5"
										>
											<svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<span class="text-gray-600">Senior-level expertise on every project</span>
									</div>
									<div class="flex items-start gap-3">
										<div
											class="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5"
										>
											<svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<span class="text-gray-600">Fixed pricing with no surprises</span>
									</div>
									<div class="flex items-start gap-3">
										<div
											class="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5"
										>
											<svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<span class="text-gray-600">Realistic timelines that I actually meet</span>
									</div>
									<div class="flex items-start gap-3">
										<div
											class="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5"
										>
											<svg class="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
												<path
													fill-rule="evenodd"
													d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
													clip-rule="evenodd"
												/>
											</svg>
										</div>
										<span class="text-gray-600">Ongoing partnership and support</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="relative py-16 sm:py-24 bg-gradient-to-r from-sky-600 to-teal-600">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl text-center animate-on-scroll">
				<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Ready to Work With Someone Who Actually Cares?
				</h2>
				<p class="mt-6 text-lg leading-8 text-indigo-100 text-pretty">
					Let's have an honest conversation about your business and what you're trying to achieve.
					No sales pitch, no pressure - just straight talk about what's possible.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6">
					<a
						href="/contact"
						class="rounded-lg bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-lg hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 hover:shadow-xl hover:scale-105"
					>
						Let's Talk About Your Project
					</a>
					<a
						href="/projects"
						class="rounded-lg border border-white/20 bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
					>
						See What I've Built
					</a>
				</div>
				<div class="mt-8 text-sm text-indigo-100">
					<p>Free consultation • No obligation • Honest advice about what you actually need</p>
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
		class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#0284c7] to-[#14b8a6] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
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
