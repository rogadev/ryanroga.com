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
	const solutions = [
		{
			name: 'AI Training for Teams',
			href: '/ai'
		},
		{
			name: 'One-on-one AI Coaching',
			href: '/ai'
		},
		{
			name: 'Web Application Development',
			href: '/development'
		}
	];
	const projects = [
		{
			name: 'CarEvo Lot Logistics',
			href: 'https://logistics.carevo.ca'
		},
		{
			name: 'VIU Career Outlooks',
			href: 'https://viu-career-outlooks.vercel.app'
		},
		{
			name: 'GGG Driver Trip Tracking',
			href: 'https://eztripr.com'
		}
	];
	// const company = [
	// 	{
	// 		name: 'Press',
	// 		href: '/press'
	// 	},
	// 	{
	// 		name: 'Partners',
	// 		href: '/partners'
	// 	}
	// ];
</script>

<footer class="bg-white" aria-labelledby="footer-heading">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="mx-auto max-w-7xl px-6 pb-4 pt-8 sm:pt-12 lg:px-8 lg:pt-18">
		<div class="xl:grid xl:grid-cols-3 xl:gap-8">
			<div class="space-y-6">
				<div class="flex gap-4 items-center font-semibold leading-6 text-gray-600">
					<img class="h-7" src="/logo/android-chrome-192x192.png" alt="Roga.dev" />
					<p>Roga Web Development</p>
				</div>
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
								<FooterItem {name} {href} />
							{/each}
						</ul>
					</div>
					<div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Projects</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each projects as { name, href }}
								<FooterItem {name} {href} />
							{/each}
						</ul>
					</div>
				</div>
				<div class="md:grid md:grid-cols-2 md:gap-8">
					<!-- <div>
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Company</h3>
						<ul role="list" class="mt-6 space-y-4">
							{#each company as { name, href }}
								<FooterItem {name} {href} />
							{/each}
						</ul>
					</div> -->
					<!-- <div class="mt-10 md:mt-0">
						<h3 class="text-sm font-semibold leading-6 text-gray-900">Legal</h3>
						<ul role="list" class="mt-6 space-y-4">
							<FooterItem name="Privacy" href="/privacy" />
							<FooterItem name="Terms" href="/terms" />
						</ul>
					</div> -->
				</div>
			</div>
		</div>
		<div class="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
			<p class="text-xs leading-5 text-gray-500">&copy; 2025 Ryan Roga. All rights reserved.</p>
		</div>
	</div>
</footer>
