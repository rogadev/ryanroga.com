<svelte:options runes={true} />

<script>
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>Privacy Policy | Roga.dev</title>
	<meta
		name="description"
		content="Privacy Policy for Roga Web Development Services. Learn how we collect, use, and protect your personal information."
	/>
	<meta
		name="keywords"
		content="privacy policy, data protection, personal information, web development services"
	/>
	<meta property="og:title" content="Privacy Policy | Roga.dev" />
	<meta
		property="og:description"
		content="Privacy Policy for Roga Web Development Services. Learn how we collect, use, and protect your personal information."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://roga.dev/privacy" />
	<link rel="canonical" href="https://roga.dev/privacy" />
</svelte:head>

<!-- Background decorative elements -->
<div
	class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
	aria-hidden="true"
>
	<div
		class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#818cf8] to-[#c7d2fe] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
		style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
	></div>
</div>

<section class="relative overflow-hidden">
	<div class="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
		<!-- Header -->
		<div class="mx-auto max-w-2xl text-center mb-16">
			<div class="hidden">🔒 Privacy & Data Protection</div>
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
				Privacy
				<span class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
					Policy
				</span>
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Your privacy is important to us. This policy explains how we collect, use, and protect your
				personal information.
			</p>
			<div class="mt-6 text-sm text-gray-500">
				<p>
					Last updated: {new Date().toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</p>
			</div>
		</div>

		<!-- Content -->
		<div class="prose prose-lg prose-indigo mx-auto max-w-none">
			<div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
				<section class="mb-12">
					<h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
						<Icon icon="mdi:information-outline" class="w-6 h-6 text-indigo-600 mr-3" />
						Information We Collect
					</h2>
					<div class="space-y-6">
						<div>
							<h3 class="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
							<p class="text-gray-600 mb-4">
								When you contact us or use our services, we may collect:
							</p>
							<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
								<li>Name and contact information (email, phone number)</li>
								<li>Business information and project requirements</li>
								<li>Communication preferences</li>
								<li>
									Payment and billing information (processed securely through third-party providers)
								</li>
							</ul>
						</div>
						<div>
							<h3 class="text-lg font-semibold text-gray-800 mb-3">Technical Information</h3>
							<p class="text-gray-600 mb-4">
								We automatically collect certain technical information:
							</p>
							<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
								<li>IP address and browser information</li>
								<li>Website usage data and analytics</li>
								<li>Device and operating system information</li>
								<li>Cookies and similar tracking technologies</li>
							</ul>
						</div>
					</div>
				</section>

				<section class="mb-12">
					<h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
						<Icon icon="mdi:check-circle-outline" class="w-6 h-6 text-indigo-600 mr-3" />
						How We Use Your Information
					</h2>
					<div class="space-y-4">
						<p class="text-gray-600">We use the information we collect to:</p>
						<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
							<li>Provide and improve our web development services</li>
							<li>Communicate with you about projects and services</li>
							<li>Process payments and manage billing</li>
							<li>Send important updates and service notifications</li>
							<li>Analyze website usage to improve user experience</li>
							<li>Comply with legal obligations and protect our rights</li>
							<li>Prevent fraud and ensure security</li>
						</ul>
					</div>
				</section>

				<section class="mb-12">
					<h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
						<Icon icon="mdi:share-variant-outline" class="w-6 h-6 text-indigo-600 mr-3" />
						Information Sharing
					</h2>
					<div class="space-y-4">
						<p class="text-gray-600">
							We do not sell, trade, or rent your personal information. We may share information
							only in these limited circumstances:
						</p>
						<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
							<li>
								<strong>Service Providers:</strong> Trusted third-party services that help us operate
								our business (hosting, analytics, payment processing)
							</li>
							<li>
								<strong>Legal Requirements:</strong> When required by law or to protect our rights and
								safety
							</li>
							<li>
								<strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of
								assets
							</li>
							<li>
								<strong>With Your Consent:</strong> When you explicitly authorize us to share your information
							</li>
						</ul>
					</div>
				</section>

				<section class="mb-12">
					<h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
						<Icon icon="mdi:lock-outline" class="w-6 h-6 text-indigo-600 mr-3" />
						Data Security
					</h2>
					<div class="space-y-4">
						<p class="text-gray-600">
							We implement industry-standard security measures to protect your information:
						</p>
						<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
							<li>SSL encryption for all data transmission</li>
							<li>Secure hosting with regular security updates</li>
							<li>Limited access to personal information on a need-to-know basis</li>
							<li>Secure payment processing through trusted providers</li>
						</ul>
						<div class="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
							<p class="text-amber-800 text-sm">
								<strong>Note:</strong> While we strive to protect your information, no method of
								transmission over the internet is 100% secure. We cannot guarantee absolute
								security.<sup><small class="text-2xs">&dagger;</small></sup>
							</p>
						</div>
					</div>
				</section>

				<section class="mb-12">
					<h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
						<Icon icon="mdi:account-outline" class="w-6 h-6 text-indigo-600 mr-3" />
						Your Rights
					</h2>
					<div class="space-y-4">
						<p class="text-gray-600">
							You have the following rights regarding your personal information:
						</p>
						<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
							<li>
								<strong>Access:</strong> Request a copy of the personal information we hold about you
							</li>
							<li>
								<strong>Correction:</strong> Request correction of inaccurate or incomplete information
							</li>
							<li>
								<strong>Deletion:</strong> Request deletion of your personal information<sup
									><small class="text-2xs">&Dagger;</small></sup
								>
							</li>
							<li>
								<strong>Portability:</strong> Request transfer of your data to another service provider
							</li>
							<li><strong>Objection:</strong> Object to certain types of processing</li>
							<li>
								<strong>Withdrawal:</strong> Withdraw consent for data processing where applicable
							</li>
						</ul>
						<p class="text-gray-600 mt-4">
							To exercise these rights, please contact us using the information provided below.
						</p>
					</div>
				</section>

				<section class="mb-12">
					<h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
						<Icon icon="mdi:clock-outline" class="w-6 h-6 text-indigo-600 mr-3" />
						Data Retention
					</h2>
					<div class="space-y-4">
						<p class="text-gray-600">
							We retain your personal information only as long as necessary to:
						</p>
						<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
							<li>Provide our services and maintain our business relationship</li>
							<li>Comply with legal, accounting, or reporting requirements</li>
							<li>Resolve disputes and enforce our agreements</li>
							<li>Protect against fraud and abuse</li>
						</ul>
						<p class="text-gray-600 mt-4">
							When information is no longer needed, we securely delete or anonymize it.
						</p>
					</div>
				</section>

				<section class="mb-12">
					<h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
						<Icon icon="mdi:earth" class="w-6 h-6 text-indigo-600 mr-3" />
						International Data Transfers
					</h2>
					<div class="space-y-4">
						<p class="text-gray-600">
							Our services are primarily operated from Canada. If you are located outside Canada,
							please be aware that your information may be transferred to, stored, and processed in
							Canada where our servers are located and our central database is operated.
						</p>
						<p class="text-gray-600">
							We ensure that any international transfers comply with applicable data protection laws
							and implement appropriate safeguards to protect your information.
						</p>
					</div>
				</section>

				<section class="mb-12">
					<h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
						<Icon icon="mdi:heart-outline" class="w-6 h-6 text-indigo-600 mr-3" />
						Children's Privacy
					</h2>
					<div class="space-y-4">
						<p class="text-gray-600">
							Our services are not intended for children under 13 years of age. We do not knowingly
							collect personal information from children under 13. If you are a parent or guardian
							and believe your child has provided us with personal information, please contact us
							immediately.
						</p>
					</div>
				</section>

				<section class="mb-12">
					<h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
						<Icon icon="mdi:pencil-outline" class="w-6 h-6 text-indigo-600 mr-3" />
						Changes to This Policy
					</h2>
					<div class="space-y-4">
						<p class="text-gray-600">
							We may update this Privacy Policy from time to time to reflect changes in our
							practices or for other operational, legal, or regulatory reasons. We will notify you
							of any material changes by:
						</p>
						<ul class="list-disc list-inside text-gray-600 space-y-2 ml-4">
							<li>Posting the updated policy on our website</li>
							<li>Updating the "Last updated" date at the top of this policy</li>
							<li>Sending you an email notification for significant changes</li>
						</ul>
						<p class="text-gray-600 mt-4">
							Your continued use of our services after any changes indicates your acceptance of the
							updated policy.
						</p>
					</div>
				</section>

				<section>
					<h2 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
						<Icon icon="mdi:email-outline" class="w-6 h-6 text-indigo-600 mr-3" />
						Contact Us
					</h2>
					<div class="space-y-4">
						<p class="text-gray-600">
							If you have any questions about this Privacy Policy or our data practices, please
							contact us:
						</p>
						<div class="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
							<div class="space-y-3">
								<div class="flex items-center">
									<Icon icon="mdi:earth" class="w-5 h-5 text-indigo-600 mr-3" />
									<span class="text-gray-700"
										>Website: <a
											href="/contact#choose-how-to-connect"
											class="text-indigo-600 hover:text-indigo-500">roga.dev/contact</a
										></span
									>
								</div>
								<div class="flex items-center">
									<Icon icon="mdi:earth" class="w-5 h-5 text-indigo-600 mr-3" />
									<span class="text-gray-700">Location: Cumberland, British Columbia, Canada</span>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>

		<!-- Footnotes -->
		<div class="mt-12">
			<div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
				<div class="space-y-2">
					<p class="text-xs text-gray-600">
						&dagger; While we strive to protect your information, no method of transmission over the
						internet is 100% secure. We cannot guarantee absolute security.
					</p>
					<p class="text-xs text-gray-600">
						&Dagger; Subject to legal requirements and our legitimate business interests
					</p>
				</div>
			</div>
		</div>

		<!-- Call to Action -->
		<div class="mt-16 text-center">
			<div
				class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100"
			>
				<h3 class="text-2xl font-bold text-gray-900 mb-4">Questions About Your Privacy?</h3>
				<p class="text-gray-600 mb-6">
					We're committed to transparency and protecting your data. Contact us if you need
					clarification on any aspect of this policy.
				</p>
				<a
					href="/contact"
					class="inline-flex items-center rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200 hover:shadow-xl hover:scale-105"
				>
					Contact Us
					<Icon icon="mdi:arrow-right" class="ml-2 w-4 h-4" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Bottom decorative element -->
<div
	class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
	aria-hidden="true"
>
	<div
		class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#4f46e5] to-[#818cf8] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
		style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
	></div>
</div>
