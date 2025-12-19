<svelte:options runes={true} />

<script>
	import FooterItem from './FooterItem.svelte';
	import FooterSocial from './FooterSocial.svelte';
	import RedactedEmail from './RedactedEmail.svelte';

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
			name: 'Internal Tools & Dashboards',
			href: '/internal-tools'
		},
		{
			name: 'Workflow Automation',
			href: '/internal-tools'
		},
		{
			name: 'Web Applications',
			href: '/development'
		},
		{
			name: 'AI Integration',
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
			name: 'Free Tools',
			href: '/free-tools'
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
			name: 'TELUS TechCentral',
			href: '/projects/techcentral-telus',
			description: 'Internal content platform'
		},
		{
			name: 'CarEvo Lot Logistics',
			href: '/projects/lot-logistics-web-application',
			description: 'Inventory management system'
		},
		{
			name: 'VIU Career Outlooks',
			href: 'https://career-outlooks.viu.ca',
			description: 'Educational web platform'
		}
	];
</script>

<footer class="bg-gray-50 border-t border-gray-200 relative z-10" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-screen-2xl px-6 py-16 sm:py-20 lg:px-8 xl:px-12 2xl:px-16">
		<!-- Main Grid - custom proportions on xl, 4 on lg, 2 on md -->
		<div
			class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[2.5fr_1fr_1fr_1fr] xl:gap-12 2xl:gap-16"
		>
			<!-- Company Info - wider first column on xl -->
			<div class="space-y-6 xl:pr-12">
				<div class="flex gap-4 items-center">
					<img
						class="h-10 w-10"
						src="/logo/android-chrome-192x192.png"
						alt="Roga.dev"
						width="40"
						height="40"
					/>
					<div>
						<p class="text-lg font-semibold text-gray-900">Roga Web Development</p>
						<p class="text-sm text-gray-600">Internal tools & web applications</p>
					</div>
				</div>
				<p class="text-sm text-gray-600 max-w-lg leading-relaxed">
					I help growing businesses replace spreadsheets with dashboards, admin panels, and workflow
					tools that teams actually use. Solo developer delivering enterprise-quality solutions
					across North America.
				</p>
				<div class="flex space-x-5">
					{#each socials as { label, href, icon } (href)}
						<FooterSocial {label} {href} {icon} />
					{/each}
				</div>
				<!-- Contact Info -->
				<div class="flex flex-wrap gap-6 text-sm text-gray-600">
					<p class="flex items-center gap-2">
						<svg
							class="h-4 w-4 text-sky-600"
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
						<RedactedEmail />
					</p>
					<p class="flex items-center gap-2">
						<svg
							class="h-4 w-4 text-sky-600"
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
						<span>BC, Canada (PT timezone)</span>
					</p>
				</div>
			</div>

			<!-- Services -->
			<div>
				<h3 class="text-sm font-semibold leading-6 text-gray-900">Services</h3>
				<ul role="list" class="mt-6 space-y-4">
					{#each services as { name, href } (name)}
						<FooterItem {name} {href} />
					{/each}
				</ul>
			</div>

			<!-- Company -->
			<div>
				<h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
				<ul role="list" class="mt-6 space-y-4">
					{#each company as { name, href } (href)}
						<FooterItem {name} {href} />
					{/each}
				</ul>
				<!-- Legal links -->
				<div class="mt-8 pt-6 border-t border-gray-200 lg:border-0 lg:pt-0 lg:mt-6">
					<h3 class="text-sm font-semibold leading-6 text-gray-900 lg:hidden">Legal</h3>
					<ul role="list" class="mt-4 lg:mt-0 space-y-3">
						{#each legal as { name, href } (href)}
							<FooterItem {name} {href} />
						{/each}
					</ul>
				</div>
			</div>

			<!-- Featured Work + CTA -->
			<div>
				<h3 class="text-sm font-semibold leading-6 text-gray-900">Featured Work</h3>
				<ul role="list" class="mt-6 space-y-4">
					{#each featuredProjects as { name, href, description } (href)}
						<li>
							<a
								{href}
								class="block text-sm leading-6 text-gray-600 hover:text-sky-600 transition-colors"
							>
								<div class="font-medium">{name}</div>
								<div class="text-xs text-gray-500">{description}</div>
							</a>
						</li>
					{/each}
					<li>
						<a
							href="/projects"
							class="inline-block text-sm leading-6 text-sky-600 hover:text-sky-500 font-medium transition-colors"
						>
							View All Projects →
						</a>
					</li>
				</ul>
				<!-- CTA Section -->
				<div class="mt-8 p-4 bg-sky-50 rounded-xl border border-sky-100">
					<h4 class="text-sm font-semibold text-sky-900 mb-2">Ready to get started?</h4>
					<p class="text-xs text-sky-700 mb-3">Free 15-min call • Scoped proposal in 48 hours</p>
					<a
						href="/contact"
						class="inline-flex items-center text-sm font-medium text-sky-600 hover:text-sky-500 transition-colors"
					>
						Book a Call
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

		<!-- Bottom Section -->
		<div class="mt-16 border-t border-gray-200 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-500">
				&copy; {new Date().getFullYear()} Ryan Roga. All rights reserved.
			</p>
		</div>
	</div>
</footer>
