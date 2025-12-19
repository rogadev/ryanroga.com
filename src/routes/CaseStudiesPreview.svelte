<svelte:options runes={true} />

<script>
	import Icon from '@iconify/svelte';
</script>

<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
				Real Results for Real Businesses
			</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600 text-pretty">
				Internal tools and web applications that teams rely on every day.
			</p>
		</div>

		<div class="mx-auto mt-16 max-w-6xl">
			<div class="grid gap-8 lg:grid-cols-3">
				<!-- TELUS TechCentral - Featured -->
				<div
					class="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 lg:col-span-2 lg:row-span-2"
				>
					<div
						class="aspect-[16/9] lg:aspect-[4/3] bg-gradient-to-br from-purple-50 to-green-50 flex items-center justify-center p-8"
					>
						<div class="text-center">
							<img src="/logos/TELUS_Logo.svg" alt="TELUS" class="h-16 mx-auto mb-4" />
							<h3 class="text-2xl font-bold text-gray-900">TechCentral</h3>
							<p class="text-sm text-gray-600 mt-2">Internal Content Platform</p>
						</div>
					</div>
					<div class="p-8">
						<div class="flex items-center justify-between mb-4">
							<div class="flex items-center gap-2">
								<span class="font-medium text-gray-900">TELUS Communications</span>
							</div>
							<span
								class="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700"
								>Internal Platform</span
							>
						</div>
						<h4 class="text-lg font-semibold text-gray-900 mb-3">
							Bilingual Content Delivery for Canadian Employees
						</h4>
						<p class="text-gray-600 mb-6">
							Built an internal platform delivering CMS-managed content in English and French, with
							unified search, user preferences, and editor preview workflows.
						</p>
						<div class="grid grid-cols-3 gap-4 mb-6">
							<div class="text-center">
								<div class="text-xl font-bold text-purple-600">Next.js 15</div>
								<div class="text-xs text-gray-600">React 19</div>
							</div>
							<div class="text-center">
								<div class="text-xl font-bold text-purple-600">Bilingual</div>
								<div class="text-xs text-gray-600">EN-CA / FR-CA</div>
							</div>
							<div class="text-center">
								<div class="text-xl font-bold text-purple-600">Jan 2026</div>
								<div class="text-xs text-gray-600">Launch</div>
							</div>
						</div>
						<div class="flex flex-wrap gap-3 mb-6 justify-center">
							<div class="group/icon relative">
								<Icon
									icon="logos:nextjs-icon"
									class="h-8 w-8 transition-transform hover:scale-110"
								/>
								<div
									class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
								>
									Next.js 15
								</div>
							</div>
							<div class="group/icon relative">
								<Icon icon="logos:react" class="h-8 w-8 transition-transform hover:scale-110" />
								<div
									class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
								>
									React 19
								</div>
							</div>
							<div class="group/icon relative">
								<Icon
									icon="logos:typescript-icon"
									class="h-8 w-8 transition-transform hover:scale-110"
								/>
								<div
									class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
								>
									TypeScript
								</div>
							</div>
							<div class="group/icon relative">
								<Icon icon="logos:prisma" class="h-8 w-8 transition-transform hover:scale-110" />
								<div
									class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
								>
									Prisma
								</div>
							</div>
						</div>
						<div class="flex justify-end">
							<a
								href="/projects/techcentral-telus"
								class="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-500"
							>
								View Case Study
								<svg
									class="h-4 w-4"
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

				<!-- CarEvo Case Study -->
				<div
					class="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
				>
					<div
						class="aspect-[16/9] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center"
					>
						<div class="text-center">
							<div
								class="h-12 w-12 mx-auto rounded-full bg-indigo-600 flex items-center justify-center mb-3"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M8.25 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5zM12 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5zM15.75 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5zM19.5 18.75a1.5 1.5 0 01-3 0V8.25a1.5 1.5 0 013 0v10.5z"
									/>
								</svg>
							</div>
							<h3 class="text-lg font-semibold text-gray-900">CarEvo Logistics</h3>
							<p class="text-xs text-gray-600 mt-1">Internal Tool</p>
						</div>
					</div>
					<div class="p-6">
						<h4 class="text-base font-semibold text-gray-900 mb-2">Vehicle Inventory Tracking</h4>
						<p class="text-gray-600 text-sm mb-4">
							Replaced spreadsheets with QR-based tracking. 99.9% inventory visibility.
						</p>
						<div class="grid grid-cols-2 gap-2 mb-4">
							<div class="text-center">
								<div class="text-lg font-bold text-indigo-600">40%</div>
								<div class="text-xs text-gray-600">Efficiency ↑</div>
							</div>
							<div class="text-center">
								<div class="text-lg font-bold text-indigo-600">3x</div>
								<div class="text-xs text-gray-600">Faster</div>
							</div>
						</div>
						<a
							href="/projects/lot-logistics-web-application"
							class="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
						>
							View Case Study
							<svg
								class="h-4 w-4"
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

				<!-- VIU Case Study -->
				<div
					class="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
				>
					<div
						class="aspect-[16/9] bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center"
					>
						<div class="text-center">
							<div
								class="h-12 w-12 mx-auto rounded-full bg-green-600 flex items-center justify-center mb-3"
							>
								<svg
									class="h-6 w-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
									/>
								</svg>
							</div>
							<h3 class="text-lg font-semibold text-gray-900">VIU Career Outlooks</h3>
							<p class="text-xs text-gray-600 mt-1">Educational Platform</p>
						</div>
					</div>
					<div class="p-6">
						<h4 class="text-base font-semibold text-gray-900 mb-2">Career Exploration Tool</h4>
						<p class="text-gray-600 text-sm mb-4">
							Connects academic programs to real employment data across BC.
						</p>
						<div class="grid grid-cols-2 gap-2 mb-4">
							<div class="text-center">
								<div class="text-lg font-bold text-green-600">10K+</div>
								<div class="text-xs text-gray-600">Students</div>
							</div>
							<div class="text-center">
								<div class="text-lg font-bold text-green-600">500+</div>
								<div class="text-xs text-gray-600">Career Paths</div>
							</div>
						</div>
						<a
							href="https://career-outlooks.viu.ca"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-500"
						>
							View Live Site
							<svg
								class="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- CTA to see more projects -->
		<div class="mx-auto mt-12 text-center">
			<a
				href="/projects"
				class="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-all duration-200 hover:shadow-xl"
			>
				View All Projects
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
</section>
