<script lang="ts">
	import NavbarSocials from './NavbarSocials.svelte';

	import NavbarLink from './NavbarLink.svelte';
	import NavbarMobileMenuButton from './NavbarMobileMenuButton.svelte';
	import Icon from '@iconify/svelte';

	let showMobileMenu = false;

	const pages = [
		{
			name: 'Home',
			href: '/'
		},
		{
			name: 'About',
			href: '/about'
		},
		{
			name: 'Projects',
			href: '/projects'
		},
		{
			name: 'Devlog',
			href: '/devlog'
		},
		{
			name: 'Contact',
			href: '/contact'
		}
	];

	const toggleMobileMenu = () => {
		showMobileMenu = !showMobileMenu;
	};
</script>

<nav class="bg-white shadow">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<NavbarMobileMenuButton open={showMobileMenu} {toggleMobileMenu} />
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<img class="h-8 w-auto" src="/logo/android-chrome-192x192.png" alt="Your Company" />
				</div>
				<div class="hidden sm:ml-6 sm:flex sm:space-x-8">
					{#each pages as { href, name }}
						<NavbarLink {href}>{name}</NavbarLink>
					{/each}
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<NavbarSocials icon="mdi:github" color="#333333" href="https://github.com/rogadev" />
				<NavbarSocials
					icon="mdi:linkedin"
					color="#0077B5"
					href="https://www.linkedin.com/in/ryanroga/"
				/>
				<!-- <NavbarSocials icon="mdi:twitter" color="#1DA1F2" href="/" /> -->
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	<div class="sm:hidden" id="mobile-menu">
		<div class="space-y-1 pb-4 pt-2">
			<!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
			<a
				href="#"
				class="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
				>Dashboard</a
			>
			<a
				href="#"
				class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
				>Team</a
			>
			<a
				href="#"
				class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
				>Projects</a
			>
			<a
				href="#"
				class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
				>Calendar</a
			>
		</div>
	</div>
</nav>
