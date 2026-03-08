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
				Straight answers to the questions I hear most from business owners considering a custom
				build.
			</p>
		</div>

		<div class="mx-auto mt-16 max-w-4xl">
			<div class="space-y-4">
				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(1)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								How much does a custom project cost?
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
								Every project is different, but here are typical ranges to give you a starting
								point:
							</p>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-start gap-2">
									<span class="text-indigo-600 font-bold">-</span>
									<span
										><strong>Business Website:</strong> $2,500 - $5,000 (marketing site, contact forms,
										SEO foundations)</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-indigo-600 font-bold">-</span>
									<span
										><strong>E-Commerce Store:</strong> $5,000 - $10,000 (product catalog, checkout,
										inventory)</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-indigo-600 font-bold">-</span>
									<span
										><strong>Custom Web Application or SaaS:</strong> $8,000 - $25,000+ (user accounts,
										database, custom features)</span
									>
								</li>
							</ul>
							<p class="text-gray-600 mt-4">
								You'll get a fixed quote after our scoping call - no hourly billing surprises. I
								also offer flexible payment plans for larger projects.
							</p>
						</div>
					{/if}
				</div>

				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(2)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">How long will my project take?</h3>
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
								It depends on scope, but typical timelines look like this:
							</p>
							<ul class="space-y-2 text-gray-600 mb-4">
								<li class="flex items-start gap-2">
									<span class="text-indigo-600 font-bold">-</span>
									<span><strong>Business Website:</strong> 2-4 weeks</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-indigo-600 font-bold">-</span>
									<span><strong>E-Commerce Store:</strong> 4-8 weeks</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-indigo-600 font-bold">-</span>
									<span><strong>Web Application MVP:</strong> 6-12 weeks</span>
								</li>
							</ul>
							<p class="text-gray-600">
								You'll see working progress every week, not a big reveal at the end. I keep you in
								the loop at every stage so there are no surprises on launch day.
							</p>
						</div>
					{/if}
				</div>

				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(3)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								Why hire a solo developer instead of an agency?
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
								With me, you get direct access to the person building your software. No account
								managers, no handoffs between departments, no junior developers learning on your
								dime.
							</p>
							<ul class="space-y-2 text-gray-600">
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">+</span>
									<span>Lower overhead means better pricing for you</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">+</span>
									<span>One person who knows every line of your codebase</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">+</span>
									<span>Faster communication and decision-making</span>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">+</span>
									<span>Enterprise-grade engineering without the enterprise price tag</span>
								</li>
							</ul>
						</div>
					{/if}
				</div>

				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(4)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								Will I be able to update the site myself?
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
								That's entirely up to you. I offer three approaches depending on your comfort level:
							</p>
							<ul class="space-y-2 text-gray-600 mb-4">
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">+</span>
									<span
										><strong>Self-managed:</strong> A content management system where you update text,
										images, and products yourself</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">+</span>
									<span
										><strong>Developer-managed:</strong> You send me changes and I handle them quickly
										- great for hands-off business owners</span
									>
								</li>
								<li class="flex items-start gap-2">
									<span class="text-green-600 font-bold">+</span>
									<span
										><strong>Hybrid:</strong> You handle routine content updates, I handle anything structural
										or technical</span
									>
								</li>
							</ul>
							<p class="text-gray-600">
								We'll figure out the best fit during our initial call. Training and documentation
								are included with every project.
							</p>
						</div>
					{/if}
				</div>

				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(5)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								Do you provide ongoing support after launch?
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
								Yes - I don't disappear after deployment. Every project includes 30 days of free
								support for bug fixes and adjustments. After that, I offer monthly maintenance plans
								starting at $249/month for ongoing updates, monitoring, security patches, and new
								features as your business grows.
							</p>
						</div>
					{/if}
				</div>

				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(6)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								What if I'm not happy with the result?
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
								My process is designed to prevent that. You approve designs before any code is
								written, and you see working software every week during development. Built-in
								revision rounds give you structured opportunities to provide feedback. By the time
								we reach launch, you've already seen and shaped the product at every stage.
							</p>
						</div>
					{/if}
				</div>

				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(7)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								Do I own the code? What if I want to switch developers later?
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
								You own 100% of the source code, design assets, and documentation. Everything is
								built with standard, widely-used technologies and stored in a version-controlled
								repository that you control. If you ever want to bring on a different developer or
								an in-house team, they can pick up right where I left off. No lock-in, no
								proprietary systems.
							</p>
						</div>
					{/if}
				</div>

				<div class="rounded-2xl bg-white shadow-sm border border-gray-200 overflow-hidden">
					<button class="w-full px-6 py-6 text-left focus:outline-none" onclick={() => toggle(8)}>
						<div class="flex items-center justify-between">
							<h3 class="text-lg font-semibold text-gray-900">
								Will my website work on phones and rank on Google?
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
								Every site I build is mobile-first and responsive across all devices. Technical SEO
								is included as standard: proper page structure, meta tags, schema markup, fast
								loading times, and Google Search Console setup. For ongoing content strategy and
								link building, we can discuss that as an additional service.
							</p>
						</div>
					{/if}
				</div>
			</div>
		</div>

		<div class="mx-auto mt-16 max-w-2xl text-center">
			<div class="rounded-2xl bg-indigo-50 p-8">
				<h3 class="text-xl font-semibold text-gray-900 mb-4">Have a different question?</h3>
				<p class="text-gray-600 mb-6">
					I'm happy to answer anything on a quick call. No sales pitch - just a conversation about
					what you need and whether I can help.
				</p>
				<a
					href="/contact"
					class="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all duration-200"
				>
					Ask me anything
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
