<script>
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
		},
		{
			label: 'YouTube',
			href: 'https://www.youtube.com/channel/UCGGXaakYjoujLmC53eYw4sQ',
			icon: 'mdi:youtube'
		},
		{
			label: 'TikTok',
			href: 'https://www.tiktok.com/@technicallycreative',
			icon: 'ic:baseline-tiktok'
		}
	];

	const solutions = [
		{
			name: 'Business Analysis',
			href: '#'
		},
		{
			name: 'Business Consulting',
			href: '#'
		},
		{
			name: 'Web Applications',
			href: '#'
		},
		{
			name: 'Website Development',
			href: '#'
		},
		{
			name: 'Online Marketing',
			href: '#'
		}
	];
</script>

<footer class="bg-white" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-4 pt-8 sm:pt-12 lg:px-8 lg:pt-18">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-8">
				<img class="h-7" src="/logo/android-chrome-192x192.png" alt="Roga.dev" />
				<p class="text-sm leading-6 text-gray-600">Making better web tools for small business.</p>
				<div class="flex space-x-6">
					{#each socials as { label, href, icon }}
						<FooterSocial {label} {href} {icon} />
					{/each}
				</div>
			</div>
			<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Solutions</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each solutions as { name, href }}
								<li>
									<a {href} class="text-sm leading-6 text-gray-600 hover:text-gray-900">
										{name}
									</a>
								</li>
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Support</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Pricing</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
									>Documentation</a
								>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Guides</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900"
									>API Status</a
								>
							</li>
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">About</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Blog</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Jobs</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Press</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Partners</a>
							</li>
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
						<ul role="list" class="mt-6 space-y-4">
							<li>
								<a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Claim</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Privacy</a>
							</li>
							<li>
								<a href="#" class="text-sm leading-6 text-gray-600 hover:text-gray-900">Terms</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-500">&copy; 2023 Ryan Paranich. All rights reserved.</p>
		</div>
	</div>
</footer>
