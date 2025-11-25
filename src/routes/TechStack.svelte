<svelte:options runes={true} />

<script>
	import Icon from '@iconify/svelte';
</script>

<section class="py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-balance">
				Technology that Reduces Risk &amp; Cost
			</h2>
			<p class="mt-4 text-lg leading-8 text-gray-600 text-pretty">
				Modern tools chosen to keep your app fast, secure, and easy to maintain—without locking you
				in.
			</p>
		</div>

		<!-- Main Technologies -->
		<div class="mx-auto mt-16 max-w-6xl">
			<div class="grid gap-8 lg:grid-cols-3">
				<!-- Frontend Technologies -->
				<div class="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
					<div class="flex items-center gap-4 mb-6">
						<div class="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
							<svg
								class="h-6 w-6 text-blue-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-gray-900">Frontend Excellence</h3>
					</div>
					<p class="text-gray-600 mb-6">
						Beautiful, responsive interfaces that are accessible and lightning fast.
					</p>
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<Icon icon="logos:svelte-icon" class="h-8 w-8" />
							<div>
								<div class="font-medium text-gray-900">SvelteKit</div>
								<div class="text-sm text-gray-600">Ultra-fast, lightweight framework</div>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<Icon icon="logos:vue" class="h-8 w-8" />
							<div>
								<div class="font-medium text-gray-900">Vue.js & Nuxt</div>
								<div class="text-sm text-gray-600">Progressive web applications</div>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<Icon icon="logos:typescript-icon" class="h-8 w-8" />
							<div>
								<div class="font-medium text-gray-900">TypeScript</div>
								<div class="text-sm text-gray-600">Type-safe, maintainable code</div>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<Icon icon="logos:tailwindcss-icon" class="h-8 w-8" />
							<div>
								<div class="font-medium text-gray-900">Tailwind CSS</div>
								<div class="text-sm text-gray-600">Custom, responsive designs</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Backend Technologies -->
				<div class="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
					<div class="flex items-center gap-4 mb-6">
						<div class="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
							<svg
								class="h-6 w-6 text-green-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V6a3 3 0 013-3h13.5a3 3 0 013 3v5.25a3 3 0 01-3 3m-16.5 0a3 3 0 013 3v5.25a3 3 0 013 3h10.5a3 3 0 013-3V18a3 3 0 01-3-3m-3.75 0V8.25a2.25 2.25 0 00-2.25-2.25H9m12 0a2.25 2.25 0 012.25 2.25v13.5m-12 0a2.25 2.25 0 00-2.25 2.25v5.25a2.25 2.25 0 012.25 2.25h5.25"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-gray-900">Backend Power</h3>
					</div>
					<p class="text-gray-600 mb-6">
						Reliable servers with type-safe data models and secure APIs.
					</p>
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<Icon icon="logos:nodejs-icon" class="h-8 w-8" />
							<div>
								<div class="font-medium text-gray-900">Node.js</div>
								<div class="text-sm text-gray-600">High-performance runtime</div>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<Icon icon="skill-icons:expressjs-dark" class="h-8 w-8" />
							<div>
								<div class="font-medium text-gray-900">Express.js</div>
								<div class="text-sm text-gray-600">Fast, minimalist web framework</div>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<Icon icon="logos:prisma" class="h-8 w-8" />
							<div>
								<div class="font-medium text-gray-900">Prisma ORM</div>
								<div class="text-sm text-gray-600">Type-safe database access</div>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<Icon icon="logos:postgresql" class="h-8 w-8" />
							<div>
								<div class="font-medium text-gray-900">PostgreSQL</div>
								<div class="text-sm text-gray-600">Enterprise-grade database</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Cloud & DevOps -->
				<div class="rounded-2xl bg-white p-8 shadow-sm border border-gray-200">
					<div class="flex items-center gap-4 mb-6">
						<div class="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
							<svg
								class="h-6 w-6 text-purple-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
								/>
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-gray-900">Cloud & Deployment</h3>
					</div>
					<p class="text-gray-600 mb-6">
						Battle-tested hosting and deployment with simple rollbacks and 99.9% uptime targets.
					</p>
					<div class="space-y-4">
						<div class="flex items-center gap-3">
							<div class="h-8 w-8 bg-black rounded flex items-center justify-center">
								<span class="text-white text-xs font-bold">▲</span>
							</div>
							<div>
								<div class="font-medium text-gray-900">Vercel</div>
								<div class="text-sm text-gray-600">Lightning-fast deployment</div>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<Icon icon="logos:supabase-icon" class="h-8 w-8" />
							<div>
								<div class="font-medium text-gray-900">Supabase</div>
								<div class="text-sm text-gray-600">Backend as a Service</div>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<Icon icon="logos:aws" class="h-8 w-8" />
							<div>
								<div class="font-medium text-gray-900">AWS</div>
								<div class="text-sm text-gray-600">Enterprise cloud solutions</div>
							</div>
						</div>
						<div class="flex items-center gap-3">
							<Icon icon="logos:docker-icon" class="h-8 w-8" />
							<div>
								<div class="font-medium text-gray-900">Docker</div>
								<div class="text-sm text-gray-600">Consistent deployments</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Benefits Section -->
		<div class="mx-auto mt-16 max-w-4xl">
			<div class="rounded-2xl bg-gradient-to-r from-sky-500 to-teal-600 p-8 text-white">
				<h3 class="text-2xl font-bold text-center mb-8">Why These Choices Matter</h3>
				<div class="grid gap-6 md:grid-cols-3">
					<div class="text-center">
						<div
							class="mx-auto h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center mb-4"
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
									d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
								/>
							</svg>
						</div>
						<h4 class="font-semibold mb-2">Faster Experiences</h4>
						<p class="text-sm text-white/90">Better conversion and happier teams.</p>
					</div>
					<div class="text-center">
						<div
							class="mx-auto h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center mb-4"
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
									d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
								/>
							</svg>
						</div>
						<h4 class="font-semibold mb-2">Security by Design</h4>
						<p class="text-sm text-white/90">Protect customer and business data.</p>
					</div>
					<div class="text-center">
						<div
							class="mx-auto h-12 w-12 rounded-lg bg-white/20 flex items-center justify-center mb-4"
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
									d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 010 1.343l-3.75 3.75A11.95 11.95 0 015.25 21v-2.25A11.95 11.95 0 002.25 18z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M11.25 9L9 11.25l1.5 1.5L13.5 10.5 9 6l2.25-2.25L15 7.5 22.5 0l-7.5 7.5z"
								/>
							</svg>
						</div>
						<h4 class="font-semibold mb-2">Built to Scale</h4>
						<p class="text-sm text-white/90">Start small, grow without rewrites.</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Quality Assurance -->
		<div class="mx-auto mt-16 max-w-6xl">
			<div class="rounded-2xl bg-gray-50 p-8">
				<h3 class="text-xl font-semibold text-gray-900 text-center mb-8">
					Quality Assurance & Best Practices
				</h3>
				<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
					<div class="text-center">
						<div
							class="mx-auto h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4"
						>
							<svg
								class="h-6 w-6 text-blue-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5"
								/>
							</svg>
						</div>
						<h4 class="font-semibold text-gray-900 mb-2">Automated Testing</h4>
						<p class="text-sm text-gray-600">
							Comprehensive test suites ensure bug-free deployments and maintain code quality.
						</p>
					</div>
					<div class="text-center">
						<div
							class="mx-auto h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center mb-4"
						>
							<svg
								class="h-6 w-6 text-green-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
								/>
							</svg>
						</div>
						<h4 class="font-semibold text-gray-900 mb-2">SEO Optimization</h4>
						<p class="text-sm text-gray-600">
							Built-in SEO best practices help your website rank higher in search results.
						</p>
					</div>
					<div class="text-center">
						<div
							class="mx-auto h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center mb-4"
						>
							<svg
								class="h-6 w-6 text-purple-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
								/>
							</svg>
						</div>
						<h4 class="font-semibold text-gray-900 mb-2">Mobile-First</h4>
						<p class="text-sm text-gray-600">
							Responsive design ensures perfect performance on all devices and screen sizes.
						</p>
					</div>
					<div class="text-center">
						<div
							class="mx-auto h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4"
						>
							<svg
								class="h-6 w-6 text-orange-600"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
								/>
							</svg>
						</div>
						<h4 class="font-semibold text-gray-900 mb-2">Performance Monitoring</h4>
						<p class="text-sm text-gray-600">
							Real-time analytics and monitoring ensure optimal performance 24/7.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
