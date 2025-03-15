<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	// Framework logos
	const frameworks = [
		{ name: 'SvelteKit', icon: 'simple-icons:svelte' },
		{ name: 'Nuxt', icon: 'simple-icons:nuxtdotjs' },
		{ name: 'Next.js', icon: 'simple-icons:nextdotjs' },
		{ name: 'Astro', icon: 'simple-icons:astro' },
		{ name: 'React', icon: 'simple-icons:react' },
		{ name: 'Vue', icon: 'simple-icons:vuedotjs' }
	];

	onMount(() => {
		const animateElements = () => {
			document.querySelectorAll('.animate-on-scroll').forEach((el) => {
				if (el.classList.contains('animate-in')) return;

				const rect = el.getBoundingClientRect();
				const isVisible = rect.top <= window.innerHeight * 0.8;

				if (isVisible) {
					el.classList.add('animate-in');
				}
			});
		};

		// Run once on mount
		animateElements();

		// Add scroll listener
		window.addEventListener('scroll', animateElements);

		return () => {
			window.removeEventListener('scroll', animateElements);
		};
	});
</script>

<section class="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32 relative overflow-hidden">
	<!-- Decorative elements -->
	<div class="absolute -z-10 pointer-events-none">
		<div
			class="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
		></div>
	</div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl lg:text-center animate-on-scroll">
			<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Custom Web Solutions Tailored For Your Business
			</p>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Unlock the full potential of your business with bespoke Nuxt and SvelteKit web applications
				designed to meet your unique needs. Experience seamless integration, scalability, and
				enhanced user engagement.
			</p>
		</div>

		<!-- Framework logos -->
		<div
			class="mx-auto mt-12 max-w-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none"
		>
			{#each frameworks as framework, i}
				<div class="animate-on-scroll" style="transition-delay: {i * 100}ms;">
					<div class="col-span-1 flex justify-center items-center h-16 group">
						<Icon
							icon={framework.icon}
							class="h-10 w-10 text-gray-500 group-hover:text-indigo-600 transition-colors duration-300"
							aria-hidden="true"
						/>
						<span
							class="ml-2 text-sm font-medium text-gray-500 group-hover:text-indigo-600 transition-colors duration-300"
							>{framework.name}</span
						>
					</div>
				</div>
			{/each}
		</div>

		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
			<dl
				class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
			>
				<div class="relative pl-16 animate-on-scroll">
					<dt class="text-base font-semibold leading-7 text-gray-900">
						<div
							class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 shadow-md transform transition-transform duration-300 hover:scale-110"
						>
							<Icon icon="mdi:account-heart" class="h-6 w-6 text-white" aria-hidden="true" />
						</div>
						User-Centric Designs
					</dt>
					<dd class="mt-2 text-base leading-7 text-gray-600">
						Craft engaging user experiences with mobile-first designs and accessible interfaces.
						Boost conversions with websites that resonate with your audience's needs and
						preferences.
					</dd>
				</div>
				<div class="relative pl-16 animate-on-scroll" style="transition-delay: 100ms;">
					<dt class="text-base font-semibold leading-7 text-gray-900">
						<div
							class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 shadow-md transform transition-transform duration-300 hover:scale-110"
						>
							<Icon
								icon="mdi:chart-bell-curve-cumulative"
								class="h-6 w-6 text-white"
								aria-hidden="true"
							/>
						</div>
						Scalable Architecture
					</dt>
					<dd class="mt-2 text-base leading-7 text-gray-600">
						Grow your platform with confidence. Our applications are built to scale, handling
						increased traffic and data with ease, ensuring your website evolves with your business.
					</dd>
				</div>
				<div class="relative pl-16 animate-on-scroll" style="transition-delay: 200ms;">
					<dt class="text-base font-semibold leading-7 text-gray-900">
						<div
							class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 shadow-md transform transition-transform duration-300 hover:scale-110"
						>
							<Icon icon="mdi:speedometer" class="h-6 w-6 text-white" aria-hidden="true" />
						</div>
						Enhanced Performance
					</dt>
					<dd class="mt-2 text-base leading-7 text-gray-600">
						Experience lightning-fast load times and optimal performance. Our optimized coding
						practices and modern technologies ensure your website operates at peak efficiency.
					</dd>
				</div>
				<div class="relative pl-16 animate-on-scroll" style="transition-delay: 300ms;">
					<dt class="text-base font-semibold leading-7 text-gray-900">
						<div
							class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 shadow-md transform transition-transform duration-300 hover:scale-110"
						>
							<Icon icon="mdi:shield-lock" class="h-6 w-6 text-white" aria-hidden="true" />
						</div>
						Advanced Security
					</dt>
					<dd class="mt-2 text-base leading-7 text-gray-600">
						Protect your business and users with top-tier security measures. From SSL certificates
						to regular security audits, we ensure your data remains secure and compliant.
					</dd>
				</div>
			</dl>
		</div>

		<!-- CTA Button -->
		<div class="mt-16 flex justify-center animate-on-scroll">
			<a
				href="/contact"
				class="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
			>
				Start Your Project
			</a>
		</div>
	</div>
</section>

<style>
	@keyframes blob {
		0% {
			transform: translate(0px, 0px) scale(1);
		}
		33% {
			transform: translate(15px, -25px) scale(1.05);
		}
		66% {
			transform: translate(-10px, 10px) scale(0.95);
		}
		100% {
			transform: translate(0px, 0px) scale(1);
		}
	}

	.animate-blob {
		animation: blob 7s infinite;
	}

	.animation-delay-2000 {
		animation-delay: 2s;
	}

	.animation-delay-4000 {
		animation-delay: 4s;
	}

	.animate-on-scroll {
		opacity: 0;
		transform: translateY(30px);
		transition:
			opacity 0.6s ease-out,
			transform 0.6s ease-out;
	}

	:global(.animate-on-scroll.animate-in) {
		opacity: 1;
		transform: translateY(0);
	}
</style>
