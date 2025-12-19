<svelte:options runes={true} />

<script lang="ts">
	let openItems = $state<Record<number, boolean>>({});

	function toggle(index: number) {
		openItems[index] = !openItems[index];
	}
</script>

<section class="bg-gray-50 py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Frequently Asked Questions
			</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600">
				Clear, honest answers to how I price, build, and support your project.
			</p>
		</div>

		<div class="mx-auto mt-16 max-w-4xl">
			<div class="space-y-4">
				<!-- FAQ 1 -->
				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(1)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								How much does a professional website cost?
							</h3>
							<svg
								class="h-5 w-5 text-gray-500 transition-transform duration-200 {openItems[1]
									? 'rotate-180'
									: ''}"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
					</button>
					{#if openItems[1]}
						<div class="px-6 pb-6">
							<p class="text-gray-600 mb-4">
								Pricing depends on scope and complexity. Most projects fit one of these ranges:
							</p>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-start gap-2">
									<span class="text-indigo-600 font-bold">•</span>
									<span
										><strong>Basic Business Website:</strong> $2,500 - $5,000 (5-10 pages, contact forms,
										basic SEO)</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-indigo-600 font-bold">•</span>
									<span
										><strong>E-commerce Store:</strong> $5,000 - $10,000 (product catalog, payment processing,
										inventory management)</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-indigo-600 font-bold">•</span>
									<span
										><strong>Custom Web Application:</strong> $8,000 - $20,000+ (database-driven, user
										authentication, custom features)</span
									>
								</li>
							</ul>
							<p class="text-gray-600 mt-4">
								I offer flexible payment plans and always provide transparent pricing with no hidden
								fees.
							</p>
						</div>
					{/if}
				</div>

				<!-- FAQ 2 -->
				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(2)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								How long does it take to build a website?
							</h3>
							<svg
								class="h-5 w-5 text-gray-500 transition-transform duration-200 {openItems[2]
									? 'rotate-180'
									: ''}"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
					</button>
					{#if openItems[2]}
						<div class="px-6 pb-6">
							<p class="text-gray-600 mb-4">
								Timelines vary by scope and feedback cycles. Typical ranges:
							</p>
							<ul class="space-y-2 text-gray-600 mb-4">
								<li class="flex items-start gap-2">
									<span class="text-indigo-600 font-bold">•</span>
									<span><strong>Simple Business Website:</strong> 2-4 weeks*</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-indigo-600 font-bold">•</span>
									<span><strong>E-commerce Store:</strong> 4-8 weeks*</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-indigo-600 font-bold">•</span>
									<span><strong>Custom Web Application:</strong> 8-16 weeks*</span>
								</li>
							</ul>
							<p class="text-gray-600 mb-4">
								I work efficiently while ensuring quality, and I'll provide regular updates on
								progress. For ongoing contracts, we work until the project is complete. Urgent
								support needs are prioritized within existing agreements.
							</p>
							<div class="text-xs text-gray-500 border-t border-gray-200 pt-3">
								<p>
									*These are estimates only. Actual timelines may vary based on project complexity,
									scope changes, feedback cycles, and specific requirements. A detailed timeline
									will be provided after project consultation and requirements gathering.
								</p>
							</div>
						</div>
					{/if}
				</div>

				<!-- FAQ 3 -->
				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(3)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								Will I be able to update the website myself?
							</h3>
							<svg
								class="h-5 w-5 text-gray-500 transition-transform duration-200 {openItems[3]
									? 'rotate-180'
									: ''}"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
					</button>
					{#if openItems[3]}
						<div class="px-6 pb-6">
							<p class="text-gray-600 mb-4">
								Options tailored to your team - choose self‑managed, developer‑managed, or hybrid:
							</p>
							<div class="mb-4">
								<h5 class="font-semibold text-gray-900 mb-2">Dynamic Web Applications:</h5>
								<ul class="space-y-2 text-gray-600 mb-3">
									<li class="flex items-start gap-2">
										<span class="text-purple-600 font-bold">•</span>
										<span>Interactive applications where users input and manage data</span>
									</li>
									<li class="flex items-start gap-2">
										<span class="text-purple-600 font-bold">•</span>
										<span>Database-driven with real-time updates (like our logistics platform)</span
										>
									</li>
									<li class="flex items-start gap-2">
										<span class="text-purple-600 font-bold">•</span>
										<span>Core structure remains stable, but data and functionality evolve</span>
									</li>
								</ul>
							</div>
							<div class="mb-4">
								<h5 class="font-semibold text-gray-900 mb-2">Self-Managed Websites:</h5>
								<ul class="space-y-2 text-gray-600 mb-3">
									<li class="flex items-start gap-2">
										<span class="text-blue-600 font-bold">•</span>
										<span>Full content management system with user-friendly interface</span>
									</li>
									<li class="flex items-start gap-2">
										<span class="text-blue-600 font-bold">•</span>
										<span>Update text, images, products, and basic information yourself</span>
									</li>
									<li class="flex items-start gap-2">
										<span class="text-blue-600 font-bold">•</span>
										<span>Comprehensive training and documentation included</span>
									</li>
								</ul>
							</div>
							<div class="mb-4">
								<h5 class="font-semibold text-gray-900 mb-2">Developer-Managed Websites:</h5>
								<ul class="space-y-2 text-gray-600 mb-3">
									<li class="flex items-start gap-2">
										<span class="text-indigo-600 font-bold">•</span>
										<span>More streamlined, performance-optimized static sites</span>
									</li>
									<li class="flex items-start gap-2">
										<span class="text-indigo-600 font-bold">•</span>
										<span>Content updates handled by me upon request</span>
									</li>
									<li class="flex items-start gap-2">
										<span class="text-indigo-600 font-bold">•</span>
										<span>Lower ongoing maintenance requirements</span>
									</li>
								</ul>
							</div>
							<p class="text-gray-600">
								During our consultation, we'll discuss your comfort level with technology, how often
								you plan to update content, and your budget to determine the best approach for your
								specific needs.
							</p>
						</div>
					{/if}
				</div>

				<!-- FAQ 4 -->
				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(4)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								What if I'm not happy with the final result?
							</h3>
							<svg
								class="h-5 w-5 text-gray-500 transition-transform duration-200 {openItems[4]
									? 'rotate-180'
									: ''}"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
					</button>
					{#if openItems[4]}
						<div class="px-6 pb-6">
							<p class="text-gray-600 mb-4">
								A structured review process with built‑in revision rounds ensures the final result
								meets agreed objectives:
							</p>
							<ul class="space-y-2 text-gray-600 mb-4">
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Design approval process:</strong> You'll see and approve wireframes and
										designs before development starts</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Regular check-ins:</strong> Scheduled updates and opportunities to provide
										feedback throughout the process</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Revision rounds:</strong> Built-in revision phases for reasonable adjustments
										within the agreed scope</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Quality commitment:</strong> I'll work diligently to address any legitimate
										concerns and deliver work that meets the agreed specifications</span
									>
								</li>
							</ul>
							<p class="text-gray-600">
								Through clear communication and this structured process, I've built strong
								relationships with all my clients and delivered websites they're proud to show off.
							</p>
						</div>
					{/if}
				</div>

				<!-- FAQ 5 -->
				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(5)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								Do you provide ongoing support and maintenance?
							</h3>
							<svg
								class="h-5 w-5 text-gray-500 transition-transform duration-200 {openItems[5]
									? 'rotate-180'
									: ''}"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
					</button>
					{#if openItems[5]}
						<div class="px-6 pb-6">
							<p class="text-gray-600 mb-4">
								Yes! I believe in long-term partnerships with my clients. Here's what I offer:
							</p>
							<ul class="space-y-2 text-gray-600 mb-4">
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>30 days free support:</strong> Included with every project launch</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Monthly maintenance plans:</strong> Starting at $249/month for updates, monitoring,
										and security</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span><strong>Emergency support:</strong> Quick response for critical issues</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Feature additions:</strong> Hourly rates for new functionality as your business
										grows</span
									>
								</li>
							</ul>
							<p class="text-gray-600">
								I'm here for the long haul - your website should grow with your business, and I'll
								help make that happen.
							</p>
						</div>
					{/if}
				</div>

				<!-- FAQ 6 -->
				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(6)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								Will my website work on mobile devices?
							</h3>
							<svg
								class="h-5 w-5 text-gray-500 transition-transform duration-200 {openItems[6]
									? 'rotate-180'
									: ''}"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
					</button>
					{#if openItems[6]}
						<div class="px-6 pb-6">
							<p class="text-gray-600 mb-4">
								Absolutely! Every website I build is mobile-first and fully responsive. This means:
							</p>
							<ul class="space-y-2 text-gray-600 mb-4">
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span>Perfect display on phones, tablets, and desktops</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span>Fast loading times on mobile networks</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span>Touch-friendly navigation and buttons</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span>Google's mobile-friendly standards met</span>
								</li>
							</ul>
							<p class="text-gray-600">
								Since over 60% of web traffic comes from mobile devices, mobile optimization is
								essential for your business success.
							</p>
						</div>
					{/if}
				</div>

				<!-- FAQ 7 -->
				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(7)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								Can you help with SEO and getting found on Google?
							</h3>
							<svg
								class="h-5 w-5 text-gray-500 transition-transform duration-200 {openItems[7]
									? 'rotate-180'
									: ''}"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
					</button>
					{#if openItems[7]}
						<div class="px-6 pb-6">
							<p class="text-gray-600 mb-4">
								Yes! SEO is built into every website I create. Here's what I include:
							</p>
							<ul class="space-y-2 text-gray-600 mb-4">
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Technical SEO:</strong> Proper page structure, meta tags, and schema markup</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Speed optimization:</strong> Fast loading times that Google loves</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Local SEO setup:</strong> Google My Business integration and local directories</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Analytics setup:</strong> Google Analytics and Search Console configuration</span
									>
								</li>
							</ul>
							<p class="text-gray-600">
								While I handle the technical foundation, ongoing SEO (content creation, link
								building) can be discussed as a separate service based on your needs and budget.
							</p>
						</div>
					{/if}
				</div>

				<!-- FAQ 8 -->
				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(8)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								What happens if you're unavailable or something happens to you?
							</h3>
							<svg
								class="h-5 w-5 text-gray-500 transition-transform duration-200 {openItems[8]
									? 'rotate-180'
									: ''}"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19.5 8.25l-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</div>
					</button>
					{#if openItems[8]}
						<div class="px-6 pb-6">
							<p class="text-gray-600 mb-4">
								Great question! I've planned for this scenario to protect your business:
							</p>
							<ul class="space-y-2 text-gray-600 mb-4">
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Complete code documentation:</strong> Everything is clearly documented and
										organized</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Version control:</strong> All code is stored in secure, accessible repositories</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Standard technologies:</strong> No proprietary systems - any developer can
										take over</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">✓</span>
									<span
										><strong>Network of professionals:</strong> Trusted colleagues who can step in if
										needed</span
									>
								</li>
							</ul>
							<p class="text-gray-600">
								You own your website and all its code - you're never locked in or dependent solely
								on me.
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>

		<!-- Still have questions CTA -->
		<div class="mx-auto mt-16 max-w-2xl text-center">
			<div class="rounded-2xl bg-indigo-50 p-8">
				<h3 class="text-xl font-semibold text-gray-900 mb-4">Still Have Questions?</h3>
				<p class="text-gray-600 mb-6">
					I'm here to help! Schedule a free consultation call where we can discuss your specific
					needs and I can answer any other questions you might have.
				</p>
				<a
					href="/contact"
					class="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all duration-200"
				>
					Schedule Free Consultation
					<svg
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>
