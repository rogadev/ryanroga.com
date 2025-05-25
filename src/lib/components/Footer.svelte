<svelte:options runes={true} />

<script>
	import FooterItem from './FooterItem.svelte';
	import FooterSocial from './FooterSocial.svelte';

	const socials = [
		{
			label: 'GitHub',
			href: 'https://github.com/rogadev',
			icon: 'mdi:github'
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/rogadev/',
			icon: 'mdi:linkedin'
		}
	];

	const services = [
		{
			name: 'Custom Web Applications',
			href: '/development'
		},
		{
			name: 'Business Websites',
			href: '/development'
		},
		{
			name: 'E-commerce Solutions',
			href: '/development'
		},
		{
			name: 'AI Integration Services',
			href: '/ai'
		}
	];

	const company = [
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Resume',
			href: '/resume'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];

	const legal = [
		{
			name: 'Privacy Policy',
			href: '/privacy'
		},
		{
			name: 'Terms of Service',
			href: '/terms'
		}
	];

	const featuredProjects = [
		{
			name: 'CarEvo Lot Logistics',
			href: '/projects/lot-logistics-web-application',
			description: 'Inventory management system'
		},
		{
			name: 'EzTripR Trip Tracker',
			href: '/projects/eztripr-trip-tracker',
			description: 'Driver logistics platform'
		}
	];
</script>

<footer class="bg-gray-50 border-t border-gray-200 relative z-10" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<!-- Company Info -->
			<div class="space-y-6">
				<div class="flex gap-4 items-center">
					<img class="h-8 w-8" src="/logo/android-chrome-192x192.png" alt="Roga.dev" />
					<div>
						<p class="text-lg font-semibold text-gray-900">Roga Web Development</p>
						<p class="text-sm text-gray-600">Professional web solutions for small business</p>
					</div>
				</div>
				<p class="text-sm text-gray-600 max-w-md">
					Transforming small businesses across Canada with custom web applications, modern websites,
					and e-commerce solutions. No upfront costs, proven results.
				</p>
				<div class="flex space-x-6">
					{#each socials as { label, href, icon }}
						<FooterSocial {label} {href} {icon} />
					{/each}
				</div>
				<!-- Contact Info -->
				<div class="space-y-2 text-sm text-gray-600">
					<p class="flex items-center gap-2">
						<svg
							class="h-4 w-4 text-indigo-600"
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
						<a href="mailto:ryan@roga.dev" class="hover:text-indigo-600 transition-colors"
							>ryan@roga.dev</a
						>
					</p>
					<p class="flex items-center gap-2">
						<svg
							class="h-4 w-4 text-indigo-600"
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
						<span>Western Canada</span>
					</p>
				</div>
			</div>

			<!-- Navigation Links -->
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Services</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each services as { name, href }}
								<FooterItem {name} {href} />
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each company as { name, href }}
								<FooterItem {name} {href} />
							{/each}
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Featured Work</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each featuredProjects as { name, href, description }}
								<li>
									<a
										{href}
										class="block text-sm leading-6 text-gray-600 hover:text-indigo-600 transition-colors"
									>
										<div class="font-medium">{name}</div>
										<div class="text-xs text-gray-500">{description}</div>
									</a>
								</li>
							{/each}
							<li>
								<a
									href="/projects"
									class="inline-block text-sm leading-6 text-indigo-600 hover:text-indigo-500 font-medium transition-colors"
								>
									View All Projects →
								</a>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each legal as { name, href }}
								<FooterItem {name} {href} />
							{/each}
						</ul>
						<!-- CTA Section -->
						<div class="mt-8 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
							<h4 class="text-sm font-semibold text-indigo-900 mb-2">Ready to get started?</h4>
							<p class="text-xs text-indigo-700 mb-3">Free consultation • No upfront costs</p>
							<a
								href="/contact"
								class="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
							>
								Start Your Project
								<svg
									class="ml-1 h-3 w-3"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
									/>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Bottom Section -->
		<div class="mt-16 border-t border-gray-200 pt-8 sm:mt-20 lg:mt-24">
			<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
				<p class="text-xs leading-5 text-gray-500">&copy; 2025 Ryan Roga. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>
