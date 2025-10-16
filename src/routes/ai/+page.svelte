<script>
	let isVisible = $state(false);

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
</script>

<svelte:head>
	<title
		>Professional AI Training Services | Boost Productivity with AI | Roga Web Development</title
	>
	<meta
		name="description"
		content="Professional AI training for teams and individuals. Learn practical AI skills to automate tasks, boost productivity by 2x, and transform your workflow. Custom training programs available."
	/>
	<meta
		name="keywords"
		content="AI training, artificial intelligence training, productivity training, business automation, AI tools training, professional development, ChatGPT training, AI workflow optimization"
	/>
	<meta
		property="og:title"
		content="Professional AI Training Services | Boost Productivity with AI"
	/>
	<meta
		property="og:description"
		content="Transform your business with practical AI training. Learn to automate tasks, boost productivity, and leverage AI tools effectively. Custom programs for teams and individuals."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://rogaweb.dev/ai" />
	<meta property="og:image" content="https://rogaweb.dev/images/ai-training-og.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Professional AI Training Services | Boost Productivity with AI"
	/>
	<meta
		name="twitter:description"
		content="Transform your business with practical AI training. Learn to automate tasks, boost productivity, and leverage AI tools effectively."
	/>
	<meta name="twitter:image" content="https://rogaweb.dev/images/ai-training-og.jpg" />
	<link rel="canonical" href="https://rogaweb.dev/ai" />

	<!-- Structured Data for SEO -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Service",
			"name": "AI Training Services",
			"description": "Professional AI training for teams and individuals to boost productivity and automate workflows",
			"provider": {
				"@type": "Organization",
				"name": "Roga Web Development",
				"url": "https://rogaweb.dev"
			},
			"serviceType": "Training",
			"areaServed": "Worldwide",
			"hasOfferCatalog": {
				"@type": "OfferCatalog",
				"name": "AI Training Programs",
				"itemListElement": [
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Individual AI Training"
						},
						"price": "89",
						"priceCurrency": "USD",
						"priceSpecification": {
							"@type": "UnitPriceSpecification",
							"price": "89",
							"priceCurrency": "USD",
							"referenceQuantity": {
								"@type": "QuantitativeValue",
								"value": "1",
								"unitCode": "HUR"
							}
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Recurring AI Training"
						},
						"price": "69",
						"priceCurrency": "USD",
						"priceSpecification": {
							"@type": "UnitPriceSpecification",
							"price": "69",
							"priceCurrency": "USD",
							"referenceQuantity": {
								"@type": "QuantitativeValue",
								"value": "1",
								"unitCode": "HUR"
							}
						}
					},
					{
						"@type": "Offer",
						"itemOffered": {
							"@type": "Service",
							"name": "Team AI Training"
						},
						"price": "199",
						"priceCurrency": "USD",
						"priceSpecification": {
							"@type": "UnitPriceSpecification",
							"price": "199",
							"priceCurrency": "USD",
							"referenceQuantity": {
								"@type": "QuantitativeValue",
								"value": "1",
								"unitCode": "C62"
							}
						}
					}
				]
			}
		}
	</script>
</svelte:head>

<!-- Decorative background elements removed -->

<main class="min-h-screen">
	<!-- Hero Section -->
	<section class="py-16 md:py-24 px-4">
		<div class="max-w-7xl mx-auto">
			<div class="flex flex-col md:flex-row items-center gap-12">
				<div class="w-full md:w-1/2 animate-on-scroll">
					<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 text-balance">
						AI Training That <span class="text-blue-600">Transforms</span> Your Business
					</h1>
					<p class="text-xl text-gray-700 mb-8 text-pretty">
						Unlock the power of AI for your team with practical, hands-on training that delivers
						immediate value. Learn how to leverage AI tools to boost productivity, enhance
						creativity, and solve real business challenges.
					</p>
					<div class="flex flex-wrap gap-4">
						<a
							href="#pricing"
							class="inline-block px-8 py-4 bg-gradient-to-r from-sky-500 to-teal-600 rounded-lg text-white font-medium hover:from-sky-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
						>
							View Training Options
						</a>
						<a
							href="/contact"
							class="inline-block px-8 py-4 bg-transparent border-2 border-sky-500 rounded-lg text-sky-700 font-medium hover:bg-blue-50 transition-all"
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
							class="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-100 rounded-lg transform -rotate-6"
						></div>
						<div
							class="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden"
						>
							<div class="flex items-center mb-6">
								<div
									class="w-12 h-12 bg-gradient-to-br from-sky-500 to-teal-600 rounded-lg flex items-center justify-center text-white mr-4"
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
				<h2 class="inline-block text-4xl font-bold relative text-balance">
					<span class="relative z-10 text-gray-900">Why AI Training Matters Now</span>
					<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
					></span>
				</h2>
				<p class="mt-6 text-xl text-gray-700 max-w-3xl mx-auto text-pretty">
					Organizations using AI effectively report 40% higher productivity. Don't get left behind
					in the AI revolution.
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
					<h3 class="text-2xl font-bold mb-3 text-gray-900">10x Productivity Boost</h3>
					<p class="text-gray-700">
						Learn practical AI skills that can be applied immediately to streamline workflows and
						automate repetitive tasks, freeing your team to focus on high-value strategic work.
					</p>
				</div>

				<!-- Benefit 2 -->
				<div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
					<div
						class="w-16 h-16 bg-sky-100 rounded-lg flex items-center justify-center mb-6 text-sky-600"
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
					<h3 class="text-2xl font-bold mb-3 text-gray-900">Future-Proof Your Career</h3>
					<p class="text-gray-700">
						Stay ahead of the curve by equipping your team with essential AI literacy skills for
						innovation, problem-solving, and creating unique competitive advantages.
					</p>
				</div>

				<!-- Benefit 3 -->
				<div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
					<div
						class="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6 text-teal-600"
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
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</div>
					<h3 class="text-2xl font-bold mb-3 text-gray-900">Build Confident AI Users</h3>
					<p class="text-gray-700">
						Transform your organization by democratizing AI knowledge and fostering a culture of
						continuous learning, innovation, and strategic technology adoption.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- What You'll Learn Section -->
	<section class="py-16 px-4 bg-white">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16 animate-on-scroll">
				<h2 class="inline-block text-4xl font-bold relative text-balance">
					<span class="relative z-10 text-gray-900">What You'll Master</span>
					<span class="absolute -bottom-3 left-0 w-full h-3 bg-blue-500/30 transform -skew-x-3"
					></span>
				</h2>
				<p class="mt-6 text-xl text-gray-700 max-w-3xl mx-auto text-pretty">
					Comprehensive AI training covering the tools and techniques that matter most for your
					business success.
				</p>
			</div>

			<div class="grid md:grid-cols-2 gap-12 animate-on-scroll">
				<div>
					<h3 class="text-2xl font-bold mb-6 text-gray-900">Essential AI Skills</h3>
					<ul class="space-y-4">
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
							<span class="ml-3 text-gray-700"
								><strong>Prompt Engineering:</strong> Craft effective prompts for maximum AI output quality</span
							>
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
							<span class="ml-3 text-gray-700"
								><strong>Content Creation:</strong> Generate high-quality copy, emails, and marketing
								materials</span
							>
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
							<span class="ml-3 text-gray-700"
								><strong>Data Analysis:</strong> Extract insights from spreadsheets and reports using
								AI</span
							>
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
							<span class="ml-3 text-gray-700"
								><strong>Process Automation:</strong> Identify and automate repetitive business tasks</span
							>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="text-2xl font-bold mb-6 text-gray-900">AI Tools You'll Use</h3>
					<ul class="space-y-4">
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
							<span class="ml-3 text-gray-700"
								><strong>ChatGPT & Claude:</strong> Master conversational AI for business applications</span
							>
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
							<span class="ml-3 text-gray-700"
								><strong>Midjourney & DALL-E:</strong> Create professional visuals and graphics</span
							>
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
							<span class="ml-3 text-gray-700"
								><strong>Zapier & Make:</strong> Build automated workflows between apps</span
							>
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
							<span class="ml-3 text-gray-700"
								><strong>Industry-Specific Tools:</strong> Discover AI solutions tailored to your field</span
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Pricing Section -->
	<section
		id="pricing"
		class="py-16 md:py-24 px-4 bg-gradient-to-b from-sky-900 to-teal-900 text-white"
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
						<span class="text-4xl font-bold tracking-tight text-white">$89</span>
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
						<span class="text-4xl font-bold tracking-tight text-white">$69</span>
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
						<span class="text-4xl font-bold tracking-tight text-white">$199</span>
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
						Most participants implement what they learn immediately and see productivity
						improvements within days. Our practical, hands-on approach ensures you leave each
						session with actionable skills you can apply right away.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
					<h3 class="text-xl font-bold text-gray-900 mb-2">
						What types of AI tools do you cover in the training?
					</h3>
					<p class="text-gray-700">
						We cover essential AI tools including ChatGPT, Claude, Midjourney, automation platforms
						like Zapier, and industry-specific solutions. The specific tools are customized based on
						your role and business needs.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
					<h3 class="text-xl font-bold text-gray-900 mb-2">
						Is team training better than individual sessions?
					</h3>
					<p class="text-gray-700">
						It depends on your goals. Team training creates shared understanding and collaborative
						workflows, while individual training offers deeper personalization. Many organizations
						benefit from a combination of both approaches.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
					<h3 class="text-xl font-bold text-gray-900 mb-2">
						What industries do you provide AI training for?
					</h3>
					<p class="text-gray-700">
						We work with professionals across all industries including marketing, sales, operations,
						healthcare, finance, legal, consulting, and more. Our training is customized to your
						specific industry challenges and use cases.
					</p>
				</div>

				<div class="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
					<h3 class="text-xl font-bold text-gray-900 mb-2">
						Do you provide ongoing support after the training?
					</h3>
					<p class="text-gray-700">
						Yes! All training includes follow-up resources, and we offer recurring training sessions
						for continuous skill development. We're here to support your AI journey beyond the
						initial training.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 px-4 bg-gradient-to-r from-sky-600 to-teal-600 text-white">
		<div class="max-w-5xl mx-auto text-center animate-on-scroll">
			<h2 class="text-4xl md:text-5xl font-bold mb-6 text-balance">
				Ready to 10x Your Productivity with AI?
			</h2>
			<p class="text-xl opacity-90 max-w-2xl mx-auto mb-10 text-pretty">
				Join the AI revolution and transform your workflow. Schedule your personalized training
				session today and start seeing results immediately.
			</p>
			<div class="flex flex-wrap justify-center gap-6">
				<a
					href="https://calendly.com/ryan-awq/ai-office-training"
					class="inline-block px-8 py-4 bg-white text-sky-700 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
				>
					Schedule Your Training Session
				</a>
				<a
					href="/contact"
					class="inline-block px-8 py-4 bg-transparent border-2 border-white/30 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/10 transition-all"
				>
					Custom Enterprise Solutions
				</a>
			</div>
		</div>
	</section>
</main>

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
