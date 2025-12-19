<svelte:options runes={true} />

<!-- Our Approach Section -->
<section class="py-20 px-4 bg-gray-50">
	<div class="max-w-7xl mx-auto">
		<div class="flex flex-col lg:flex-row items-center gap-12">
			<div class="w-full lg:w-1/2 animate-on-scroll">
				<h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Project Approach</h2>
				<p class="text-xl text-gray-700 leading-relaxed mb-8">
					We believe in a collaborative, transparent process that keeps you involved every step of
					the way. Our approach ensures we deliver solutions that not only meet your current needs
					but can grow with your business.
				</p>

				<div class="space-y-6">
					<div class="flex items-start gap-4">
						<div
							class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white"
						>
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
									d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Understanding Your Needs</h3>
							<p class="text-gray-700">
								We start by deeply understanding your business, users, and goals to ensure our
								solution addresses the right problems.
							</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div
							class="flex-shrink-0 w-12 h-12 rounded-lg bg-sky-600 flex items-center justify-center text-white"
						>
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
									d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Tailored Solutions</h3>
							<p class="text-gray-700">
								We craft custom solutions using the right technologies for your specific needs, not
								one-size-fits-all templates.
							</p>
						</div>
					</div>

					<div class="flex items-start gap-4">
						<div
							class="flex-shrink-0 w-12 h-12 rounded-lg bg-teal-600 flex items-center justify-center text-white"
						>
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
									d="M13 10V3L4 14h7v7l9-11h-7z"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 mb-2">Ongoing Partnership</h3>
							<p class="text-gray-700">
								We don't just build and leave. We provide ongoing support and enhancements to ensure
								your solution continues to deliver value.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="w-full lg:w-1/2 animate-on-scroll">
				<div class="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-xl">
					<!-- Project lifecycle visualization - horizontal timeline -->
					<div class="relative">
						<!-- Connecting line -->
						<div class="absolute left-8 top-0 bottom-0 w-1 bg-gray-200 z-0"></div>

						<!-- Timeline steps -->
						<div class="space-y-12">
							<!-- Discovery phase -->
							<div class="relative flex items-start gap-6 group">
								<div class="relative z-10">
									<div
										class="w-16 h-16 rounded-full bg-blue-100 border-4 border-white shadow-md flex items-center justify-center group-hover:bg-blue-200 transition-colors"
									>
										<div
											class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white"
										>
											<span class="font-bold">1</span>
										</div>
									</div>
								</div>
								<div class="pt-2">
									<h3
										class="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-900 transition-colors"
									>
										Discovery
									</h3>
									<p class="text-gray-700">
										We analyze your business needs, research your industry, and define project goals
										and requirements.
									</p>
								</div>
							</div>

							<!-- Design phase -->
							<div class="relative flex items-start gap-6 group">
								<div class="relative z-10">
									<div
										class="w-16 h-16 rounded-full bg-indigo-100 border-4 border-white shadow-md flex items-center justify-center group-hover:bg-indigo-200 transition-colors"
									>
										<div
											class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white"
										>
											<span class="font-bold">2</span>
										</div>
									</div>
								</div>
								<div class="pt-2">
									<h3
										class="text-xl font-bold text-indigo-800 mb-2 group-hover:text-indigo-900 transition-colors"
									>
										Design
									</h3>
									<p class="text-gray-700">
										We create wireframes, prototypes, and visual designs that align with your brand
										and user needs.
									</p>
								</div>
							</div>

							<!-- Development phase -->
							<div class="relative flex items-start gap-6 group">
								<div class="relative z-10">
									<div
										class="w-16 h-16 rounded-full bg-purple-100 border-4 border-white shadow-md flex items-center justify-center group-hover:bg-purple-200 transition-colors"
									>
										<div
											class="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white"
										>
											<span class="font-bold">3</span>
										</div>
									</div>
								</div>
								<div class="pt-2">
									<h3
										class="text-xl font-bold text-purple-800 mb-2 group-hover:text-purple-900 transition-colors"
									>
										Develop
									</h3>
									<p class="text-gray-700">
										We build your solution using modern technologies, with regular demos and
										feedback sessions.
									</p>
								</div>
							</div>

							<!-- Deployment phase -->
							<div class="relative flex items-start gap-6 group">
								<div class="relative z-10">
									<div
										class="w-16 h-16 rounded-full bg-green-100 border-4 border-white shadow-md flex items-center justify-center group-hover:bg-green-200 transition-colors"
									>
										<div
											class="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white"
										>
											<span class="font-bold">4</span>
										</div>
									</div>
								</div>
								<div class="pt-2">
									<h3
										class="text-xl font-bold text-green-800 mb-2 group-hover:text-green-900 transition-colors"
									>
										Deploy
									</h3>
									<p class="text-gray-700">
										We launch your solution, provide training, and offer ongoing support and
										maintenance.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
