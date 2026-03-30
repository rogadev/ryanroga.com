<svelte:options runes={true} />

<script>
	import Icon from '@iconify/svelte';
</script>

<section class="py-16 sm:py-24 bg-gray-50">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
				Real Projects, Real Results
			</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600 text-pretty">
				Web applications, platforms, and tools that businesses and teams rely on every day.
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
							<p class="text-sm text-gray-600 mt-2">Enterprise Knowledge Hub</p>
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
							Enterprise Knowledge Hub for 2,200+ Technicians
						</h4>
						<p class="text-gray-600 mb-6">
							Enterprise knowledge hub and dotCMS frontend with bilingual content, AI-powered chat
							with RAG, unified search, and region-aware delivery across Canada.
						</p>
						<div class="grid grid-cols-3 gap-4 mb-6">
							<div class="text-center">
								<div class="text-xl font-bold text-purple-600">2,200+</div>
								<div class="text-xs text-gray-600">Technicians</div>
							</div>
							<div class="text-center">
								<div class="text-xl font-bold text-purple-600">AI + RAG</div>
								<div class="text-xs text-gray-600">Chat Assistant</div>
							</div>
							<div class="text-center">
								<div class="text-xl font-bold text-purple-600">Bilingual</div>
								<div class="text-xs text-gray-600">EN-CA / FR-CA</div>
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

				<!-- Roga Lab -->
				<div
					class="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
				>
					<div
						class="aspect-[16/9] bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center"
					>
						<div class="text-center">
							<div
								class="h-12 w-12 mx-auto rounded-full bg-emerald-600 flex items-center justify-center mb-3"
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
										d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
									/>
								</svg>
							</div>
							<h3 class="text-lg font-semibold text-gray-900">Roga Lab</h3>
							<p class="text-xs text-gray-600 mt-1">LIMS SaaS</p>
						</div>
					</div>
					<div class="p-6">
						<h4 class="text-base font-semibold text-gray-900 mb-2">
							Plant Tissue Culture Lab LIMS
						</h4>
						<p class="text-gray-600 text-sm mb-4">
							Lab information management system for plant tissue culture workflows, media recipes,
							and contamination tracking.
						</p>
						<div class="grid grid-cols-2 gap-2 mb-4">
							<div class="text-center">
								<div class="text-lg font-bold text-emerald-600">SaaS</div>
								<div class="text-xs text-gray-600">Platform</div>
							</div>
							<div class="text-center">
								<span
									class="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700"
									>Alpha</span
								>
								<div class="text-xs text-gray-600 mt-1">Testing</div>
							</div>
						</div>
					</div>
				</div>

				<!-- CopyCleanse -->
				<div
					class="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300"
				>
					<div
						class="aspect-[16/9] bg-gradient-to-br from-teal-50 to-cyan-100 flex items-center justify-center"
					>
						<div class="text-center">
							<div
								class="h-12 w-12 mx-auto rounded-full bg-teal-600 flex items-center justify-center mb-3"
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
										d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
									/>
								</svg>
							</div>
							<h3 class="text-lg font-semibold text-gray-900">CopyCleanse</h3>
							<p class="text-xs text-gray-600 mt-1">Free Tool</p>
						</div>
					</div>
					<div class="p-6">
						<h4 class="text-base font-semibold text-gray-900 mb-2">AI Text Cleaning Tool</h4>
						<p class="text-gray-600 text-sm mb-4">
							Strips hidden characters, normalizes formatting, and removes AI tracking parameters.
							100% browser-based.
						</p>
						<div class="grid grid-cols-2 gap-2 mb-4">
							<div class="text-center">
								<div class="text-lg font-bold text-teal-600">Free</div>
								<div class="text-xs text-gray-600">No Sign-up</div>
							</div>
							<div class="text-center">
								<div class="text-lg font-bold text-teal-600">100%</div>
								<div class="text-xs text-gray-600">Client-Side</div>
							</div>
						</div>
						<a
							href="https://copycleanse.com"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-500"
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

				<!-- E&EO Career Outlooks -->
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
										d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
									/>
								</svg>
							</div>
							<h3 class="text-lg font-semibold text-gray-900">E&EO</h3>
							<p class="text-xs text-gray-600 mt-1">Career Platform</p>
						</div>
					</div>
					<div class="p-6">
						<h4 class="text-base font-semibold text-gray-900 mb-2">
							Employment & Education Outlooks
						</h4>
						<p class="text-gray-600 text-sm mb-4">
							Career investigation platform for Canada with StatsCan data, regional outlooks, and
							salary insights.
						</p>
						<div class="grid grid-cols-2 gap-2 mb-4">
							<div class="text-center">
								<div class="text-lg font-bold text-green-600">516</div>
								<div class="text-xs text-gray-600">NOC Occupations</div>
							</div>
							<div class="text-center">
								<div class="text-lg font-bold text-green-600">99+</div>
								<div class="text-xs text-gray-600">Regions</div>
							</div>
						</div>
						<a
							href="https://eaeo.ca"
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
