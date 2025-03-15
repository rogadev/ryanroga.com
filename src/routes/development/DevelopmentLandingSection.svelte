<script>
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	// Add animation functionality for this component
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

<section class="overflow-hidden bg-white py-24 sm:py-32 relative">
	<!-- Decorative background elements -->
	<div class="absolute -z-10 pointer-events-none">
		<div
			class="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
		></div>
		<div
			class="absolute bottom-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
		></div>
	</div>

	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:pr-8 lg:pt-4 animate-on-scroll">
				<div class="lg:max-w-lg">
					<h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Solve Growing Problems<br />With Scalable Solutions
					</h2>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						Transform your business with custom web applications designed to replace inefficient
						processes. Our solutions enhance collaboration, provide real-time insights, and leverage
						AI to drive smarter decisions and growth.
					</p>
					<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
						<div class="relative pl-9 animate-on-scroll" style="transition-delay: 100ms;">
							<dt class="inline font-semibold text-gray-900">
								<Icon
									icon="mdi:robot"
									class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
									aria-hidden="true"
								/>
								Business Automation.
							</dt>
							<dd class="inline">
								Streamline complex processes into user-friendly web applications, enhancing
								productivity and reducing manual errors.
							</dd>
						</div>
						<div class="relative pl-9 animate-on-scroll" style="transition-delay: 200ms;">
							<dt class="inline font-semibold text-gray-900">
								<Icon
									icon="mdi:brain"
									class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
									aria-hidden="true"
								/>
								AI Empowerment.
							</dt>
							<dd class="inline">
								Seamlessly integrate cutting-edge AI tools into your daily operations to save time,
								boost productivity, and promote smarter decision-making.
							</dd>
						</div>
						<div class="relative pl-9 animate-on-scroll" style="transition-delay: 300ms;">
							<dt class="inline font-semibold text-gray-900">
								<Icon
									icon="mdi:chart-bell-curve-cumulative"
									class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
									aria-hidden="true"
								/>
								Scalable Growth.
							</dt>
							<dd class="inline">
								Deploy web applications that grow with your business, ensuring seamless operation,
								scalability, and future-proof functionality.
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div class="animate-on-scroll" style="transition-delay: 200ms;">
				<img
					src="/images/Product_example.png"
					alt="Product screenshot"
					class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 hover:shadow-2xl transition-shadow duration-300"
					width="2432"
					height="1442"
				/>
			</div>
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
