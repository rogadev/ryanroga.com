<svelte:options runes={true} />

<script lang="ts">
	import Icon from '@iconify/svelte';

	const tools = [
		{
			name: 'CopyCleanse',
			url: 'https://copycleanse.com',
			description:
				'Clean AI-generated text automatically. Strips hidden characters, normalizes smart quotes, removes tracking parameters, and cleans Unicode artifacts.',
			icon: 'mdi:text-box-remove',
			color: 'teal' as const,
			highlights: ['100% Client-Side', 'No Data Stored', '6+ AI Platforms'],
			tags: ['Text Cleaning', 'Privacy-First']
		},
		{
			name: 'Image Converter',
			url: 'https://converter.roga.dev',
			description:
				'Convert images between formats without the sketchy stuff. No watermarks, no malware, no selling your images. Just drag, drop, and download.',
			icon: 'mdi:image-sync',
			color: 'sky' as const,
			highlights: ['No Upload Required', 'Multiple Formats', 'Batch Convert'],
			tags: ['Images', 'Converter']
		},
		{
			name: 'Password Generator',
			url: 'https://passwords.roga.dev',
			description:
				'Generate strong, secure passwords with customizable length and character options. Share configurations via URL. Everything runs locally.',
			icon: 'mdi:key-variant',
			color: 'indigo' as const,
			highlights: ['Runs Locally', 'Shareable Config', 'Customizable'],
			tags: ['Security', 'Passwords']
		},
		{
			name: 'E&EO — Career Outlooks',
			url: 'https://eaeo.ca',
			description:
				'Explore employment and education outlooks for 516 NOC occupations across Canada. Regional salary data, job prospects, and educational institution matching.',
			icon: 'mdi:chart-timeline-variant-shimmer',
			color: 'amber' as const,
			highlights: ['516 Occupations', 'StatsCan Data', 'Regional Insights'],
			tags: ['Careers', 'Canada']
		}
	];

	const colorClasses = {
		sky: {
			iconBg: 'bg-sky-100 group-hover:bg-sky-200',
			icon: 'text-sky-600',
			border: 'border-sky-100 hover:border-sky-300',
			link: 'text-sky-600 group-hover:text-sky-700',
			highlight: 'bg-sky-50 text-sky-700',
			tag: 'bg-sky-100 text-sky-700'
		},
		teal: {
			iconBg: 'bg-teal-100 group-hover:bg-teal-200',
			icon: 'text-teal-600',
			border: 'border-teal-100 hover:border-teal-300',
			link: 'text-teal-600 group-hover:text-teal-700',
			highlight: 'bg-teal-50 text-teal-700',
			tag: 'bg-teal-100 text-teal-700'
		},
		indigo: {
			iconBg: 'bg-indigo-100 group-hover:bg-indigo-200',
			icon: 'text-indigo-600',
			border: 'border-indigo-100 hover:border-indigo-300',
			link: 'text-indigo-600 group-hover:text-indigo-700',
			highlight: 'bg-indigo-50 text-indigo-700',
			tag: 'bg-indigo-100 text-indigo-700'
		},
		amber: {
			iconBg: 'bg-amber-100 group-hover:bg-amber-200',
			icon: 'text-amber-600',
			border: 'border-amber-100 hover:border-amber-300',
			link: 'text-amber-600 group-hover:text-amber-700',
			highlight: 'bg-amber-50 text-amber-700',
			tag: 'bg-amber-100 text-amber-700'
		}
	};
</script>

<svelte:head>
	<title
		>Free Tools | Text Cleaner, Image Converter, Password Generator, Career Outlooks | Roga Web
		Development</title
	>
	<meta
		name="description"
		content="Free web tools built by Ryan Roga. Text cleaner, image converter, password generator, and Canadian career outlooks — no ads, no tracking, no sign-up required."
	/>
	<meta
		name="keywords"
		content="free web tools, text cleaner, image converter, password generator, career outlooks, online tools, developer tools, copycleanse, eaeo"
	/>
	<meta property="og:title" content="Free Tools | Roga Web Development" />
	<meta
		property="og:description"
		content="Free web tools built by Ryan Roga. No ads, no tracking, no sign-up required."
	/>
	<link rel="canonical" href="https://roga.dev/free-tools" />
</svelte:head>

<!-- Hero — compact, integrated -->
<div
	class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
	aria-hidden="true"
>
	<div
		class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#5eead4] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
		style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
	></div>
</div>

<section class="relative overflow-hidden">
	<div class="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 sm:pb-12 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-balance">
				Free
				<span class="bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
					Web Tools
				</span>
			</h1>
			<p class="mt-4 text-base leading-7 text-gray-600 sm:text-lg text-pretty">
				No ads. No tracking. No sign-up. Just open and use.
			</p>
		</div>
	</div>
</section>

<!-- Tools Grid -->
<section class="pb-16 sm:pb-24 pt-4">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="grid gap-6 sm:grid-cols-2">
			{#each tools as tool (tool.url)}
				{@const colors = colorClasses[tool.color]}
				<a
					href={tool.url}
					target="_blank"
					rel="noopener noreferrer"
					class="group rounded-2xl bg-white p-6 sm:p-8 shadow-sm border {colors.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
				>
					<!-- Header: icon + name + tags -->
					<div class="flex items-start gap-4 mb-4">
						<div
							class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl {colors.iconBg} transition-colors"
						>
							<Icon icon={tool.icon} class="h-6 w-6 {colors.icon}" />
						</div>
						<div class="min-w-0">
							<h2 class="text-lg font-semibold text-gray-900 sm:text-xl">
								{tool.name}
							</h2>
							<div class="flex flex-wrap gap-1.5 mt-1.5">
								{#each tool.tags as tag}
									<span class="text-xs font-medium px-2 py-0.5 rounded-full {colors.tag}">
										{tag}
									</span>
								{/each}
							</div>
						</div>
					</div>

					<!-- Description -->
					<p class="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
						{tool.description}
					</p>

					<!-- Highlights -->
					<div class="flex flex-wrap gap-2 mb-5">
						{#each tool.highlights as highlight}
							<span
								class="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-lg {colors.highlight}"
							>
								<svg class="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
								{highlight}
							</span>
						{/each}
					</div>

					<!-- CTA -->
					<span class="inline-flex items-center text-sm font-semibold {colors.link}">
						Open tool
						<svg
							class="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
							/>
						</svg>
					</span>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Why Free + CTA — compact combined section -->
<section class="py-12 sm:py-16 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
			<div class="flex-1 text-center sm:text-left">
				<h2 class="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">Why free?</h2>
				<p class="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
					I built these because I needed them. No reason to charge for something simple and useful.
					If you have a bigger problem that needs solving, let's talk.
				</p>
			</div>
			<a
				href="/contact"
				class="shrink-0 rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-sky-500 transition-all duration-200 hover:shadow-lg whitespace-nowrap"
				data-track="book_call"
				data-track-source="free_tools"
			>
				Got a bigger problem?
			</a>
		</div>
		<p class="mt-8 text-center text-sm text-gray-500">
			More tools on the way. Follow me on
			<a
				href="https://github.com/rogadev"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sky-600 hover:text-sky-700 font-medium">GitHub</a
			>
			to see what's next.
		</p>
	</div>
</section>
