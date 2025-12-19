<script lang="ts">
	import Icon from '@iconify/svelte';

	const tools = [
		{
			name: 'Image Converter',
			url: 'https://converter.roga.dev',
			description: 'Convert images between formats without the sketchy stuff. No watermarks, no malware, no selling your images. Just drag, drop, and download.',
			icon: 'mdi:image-sync',
			color: 'sky'
		},
		{
			name: 'CopyCleanse',
			url: 'https://copycleanse.com',
			description: 'Clean AI-generated text automatically. Strips hidden characters, normalizes smart quotes, removes tracking parameters, and cleans Unicode artifacts. No data stored.',
			icon: 'mdi:text-box-remove',
			color: 'teal'
		},
		{
			name: 'Password Generator',
			url: 'https://passwords.roga.dev',
			description: 'Generate strong, secure passwords with customizable length and character options. Share configurations via URL. Everything runs locally in your browser.',
			icon: 'mdi:key-variant',
			color: 'indigo'
		}
	];

	const colorClasses = {
		sky: {
			bg: 'bg-sky-100',
			bgHover: 'group-hover:bg-sky-200',
			icon: 'text-sky-600',
			border: 'hover:border-sky-200',
			link: 'text-sky-600 group-hover:text-sky-700'
		},
		teal: {
			bg: 'bg-teal-100',
			bgHover: 'group-hover:bg-teal-200',
			icon: 'text-teal-600',
			border: 'hover:border-teal-200',
			link: 'text-teal-600 group-hover:text-teal-700'
		},
		indigo: {
			bg: 'bg-indigo-100',
			bgHover: 'group-hover:bg-indigo-200',
			icon: 'text-indigo-600',
			border: 'hover:border-indigo-200',
			link: 'text-indigo-600 group-hover:text-indigo-700'
		}
	};
</script>

<svelte:head>
	<title>Free Tools | Unit Converter, Text Cleaner, Password Generator | Roga Web Development</title>
	<meta
		name="description"
		content="Free web tools built by Ryan Roga. Unit converter, text cleaner, password generator - no ads, no tracking, no sign-up required."
	/>
	<meta
		name="keywords"
		content="free web tools, unit converter, text cleaner, password generator, online tools, developer tools"
	/>
	<meta property="og:title" content="Free Tools | Roga Web Development" />
	<meta
		property="og:description"
		content="Free web tools built by Ryan Roga. No ads, no tracking, no sign-up required."
	/>
	<link rel="canonical" href="https://roga.dev/free-tools" />
</svelte:head>

<!-- Hero -->
<div
	class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
	aria-hidden="true"
>
	<div
		class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#5eead4] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
		style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
	></div>
</div>
<section class="relative overflow-hidden pb-32">
	<!-- Bottom fade to gray-50 -->
	<div
		class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-gray-50 -z-10"
		aria-hidden="true"
	></div>

	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
				Free
				<span class="bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
					Web Tools
				</span>
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600 sm:text-xl text-pretty">
				Simple, useful tools I've built for the web. No ads, no tracking, no sign-up required.
				Just open and use.
			</p>
		</div>
	</div>
</section>

<!-- Tools Grid -->
<section class="py-16 sm:py-24 bg-gray-50 -mt-16">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-5xl">
			<div class="grid gap-8 lg:grid-cols-3">
			{#each tools as tool (tool.url)}
				{@const colors = colorClasses[tool.color as keyof typeof colorClasses]}
					<a
						href={tool.url}
						target="_blank"
						rel="noopener noreferrer"
						class="group rounded-2xl bg-white p-8 shadow-sm border border-gray-200 hover:shadow-lg {colors.border} transition-all duration-300 flex flex-col"
					>
						<div class="flex h-14 w-14 items-center justify-center rounded-xl {colors.bg} {colors.bgHover} transition-colors mb-6">
							<Icon icon={tool.icon} class="h-7 w-7 {colors.icon}" />
						</div>
						<h2 class="text-xl font-semibold text-gray-900 mb-3">
							{tool.name}
						</h2>
						<p class="text-gray-600 flex-grow mb-6">
							{tool.description}
						</p>
						<span class="inline-flex items-center text-sm font-semibold {colors.link}">
							Open tool
							<svg class="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
							</svg>
						</span>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Why Free -->
<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
				Why Free?
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				These are tools I built because I needed them. No reason to charge for something simple
				and useful. If you find them helpful, great! If you have a bigger problem that needs
				solving, maybe we should talk.
			</p>
			<div class="mt-10">
				<a
					href="/contact"
					class="rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-500 transition-all duration-200 hover:shadow-xl"
					data-track="book_call"
					data-track-source="free_tools"
				>
					Got a bigger problem? Let's talk
				</a>
			</div>
		</div>
	</div>
</section>

<!-- More Coming -->
<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<div class="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 mb-6">
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				More tools coming soon
			</div>
			<p class="text-gray-600">
				I'm always building new tools. Check back later or follow me on
				<a href="https://github.com/rogadev" target="_blank" rel="noopener noreferrer" class="text-sky-600 hover:text-sky-700 font-medium">GitHub</a>
				to see what's next.
			</p>
		</div>
	</div>
</section>

