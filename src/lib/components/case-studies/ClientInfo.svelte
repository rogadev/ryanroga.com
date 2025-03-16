<script lang="ts">
	export let clientName: string;
	export let clientDescription: string;
	export let timeline: string = '3 months from concept to deployment';
	export let platform: string = 'Web application';
	export let techStack: string = 'SvelteKit, Node.js, PostgreSQL';
</script>

<section class="py-16 px-4 bg-gray-50">
	<div class="max-w-7xl mx-auto">
		<div class="flex flex-col md:flex-row gap-12 items-center">
			<div class="w-full md:w-1/3 animate-on-scroll">
				<div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
					<h2 class="text-3xl font-bold mb-6 text-gray-900">About {clientName}</h2>
					<div class="text-gray-700">
						<slot name="description">
							<p>{clientDescription}</p>
						</slot>
					</div>
				</div>
			</div>

			<div class="w-full md:w-2/3 animate-on-scroll" style="transition-delay: 200ms;">
				<div class="bg-indigo-900 text-white p-8 rounded-2xl shadow-lg">
					<h2 class="text-3xl font-bold mb-6">Project Overview</h2>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div class="bg-indigo-800/50 p-6 rounded-xl">
							<div class="flex items-center gap-3 mb-3">
								<div class="w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<h3 class="text-xl font-bold">Timeline</h3>
							</div>
							<p class="text-indigo-100">{timeline}</p>
						</div>

						<div class="bg-indigo-800/50 p-6 rounded-xl">
							<div class="flex items-center gap-3 mb-3">
								<div class="w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
										/>
									</svg>
								</div>
								<h3 class="text-xl font-bold">Platform</h3>
							</div>
							<p class="text-indigo-100">{platform}</p>
						</div>

						<div class="bg-indigo-800/50 p-6 rounded-xl">
							<div class="flex items-center gap-3 mb-3">
								<div class="w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
										/>
									</svg>
								</div>
								<h3 class="text-xl font-bold">Tech Stack</h3>
							</div>
							<p class="text-indigo-100">{techStack}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
