<svelte:options runes={true} />

<script>
	// Company logos data - using the actual logo files from static/logos/
	const companies = [
		{
			name: 'Telus',
			logo: '/logos/TELUS_Logo.svg',
			alt: 'Telus logo'
		},
		{
			name: 'Vancouver Island University',
			logo: '/logos/VIU-logo.png',
			alt: 'Vancouver Island University logo'
		},
		{
			name: 'Granny Go Go',
			logo: '/logos/granny-go-go.png',
			alt: 'Granny Go Go logo'
		},
		{
			name: 'MossAway',
			logo: '/logos/mossaway.png',
			alt: 'MossAway logo'
		},
		{
			name: 'CarEvo',
			logo: '/logos/carevo.webp',
			alt: 'CarEvo logo'
		}
	];

	// Duplicate the array to create seamless infinite scroll
	const duplicatedCompanies = [...companies, ...companies];
</script>

<section class="bg-white py-16 sm:py-24">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				Trusted by Industry Leaders
			</h2>
		</div>

		<!-- Logo Carousel -->
		<div class="mt-12 overflow-hidden">
			<div class="relative">
				<!-- Gradient overlays for smooth fade effect -->
				<div
					class="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent"
				></div>
				<div
					class="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent"
				></div>

				<!-- Scrolling container -->
				<div class="flex animate-scroll space-x-12 sm:space-x-16">
					{#each duplicatedCompanies as company}
						<div class="flex-shrink-0 flex items-center justify-center h-16 w-32 sm:h-20 sm:w-40">
							<img
								src={company.logo}
								alt={company.alt}
								class="max-h-full max-w-full object-contain transition-all duration-300 opacity-80 hover:opacity-100"
								loading="lazy"
							/>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	.animate-scroll {
		animation: scroll 40s linear infinite;
		will-change: transform;
	}

	/* Pause animation on hover with smooth transition */
	.animate-scroll:hover {
		animation-play-state: paused;
	}

	/* Ensure smooth rendering */
	.animate-scroll {
		backface-visibility: hidden;
		perspective: 1000px;
	}
</style>
