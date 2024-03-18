<script lang="ts">
	import NavbarMobileMenu from './NavbarMobileMenu.svelte';
	import NavbarSocial from './NavbarSocial.svelte';
	import NavbarLink from './NavbarLink.svelte';
	import NavbarMobileMenuButton from './NavbarMobileMenuButton.svelte';

	let showMobileMenu = false;

	const pages = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'Contact',
			href: '/contact'
		},
		{
			name: 'Resume',
			href: '/resume'
		}
	];
	const socials = [
		{
			label: 'GitHub',
			href: 'https://github.com/rogadev',
			icon: 'mdi:github',
			color: '#333'
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/ryanroga/',
			icon: 'mdi:linkedin',
			color: '#333'
		}
	];

	const toggleMobileMenu = () => {
		showMobileMenu = !showMobileMenu;
	};
</script>

<nav class="bg-white shadow mb-[2px] {showMobileMenu ? 'sticky top-0' : ''}">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<NavbarMobileMenuButton open={showMobileMenu} {toggleMobileMenu} />
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<a href="/" class="flex flex-shrink-0 items-center">
					<img class="h-8 w-auto" src="/logo/android-chrome-192x192.png" alt="Roga.dev" />
				</a>
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					{#each pages as { href, name }}
						<NavbarLink {href}>{name}</NavbarLink>
					{/each}
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				{#each socials as { label, href, icon, color }}
					<NavbarSocial {label} {href} {icon} {color} />
				{/each}
			</div>
		</div>
	</div>

	<NavbarMobileMenu {pages} open={showMobileMenu} on:close={() => (showMobileMenu = false)} />
</nav>
