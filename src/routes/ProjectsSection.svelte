<script lang="ts">
	import ProjectSectionItem from './ProjectSectionItem.svelte';
	import PageContentContainer from '$lib/components/PageContentContainer.svelte';
	import careerOutlooks from './Career Outlooks Full Page View.png';
</script>

<PageContentContainer>
	<div id="projects" class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-4xl">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
				<!-- <p class="mt-2 text-lg leading-8 text-gray-600">
					See some of my work live and in production
				</p> -->
				<div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
					<ProjectSectionItem
						src={careerOutlooks}
						alt="A person wearing a black shirt and black pants standing in front of a black background"
						stack={[
							'TypeScript',
							'SvelteKit',
							'TailwindCSS',
							'Vercel',
							'Node/Express',
							'Puppeteer',
							'Vitest'
						]}
						href="https://viu-career-outlooks.vercel.app/"
						releaseDate="2022-09-01"
						projectTitle="VIU Career Outlooks Web Tool"
						projectDescription="A web tool that helps students to explore career outlooks for their program of study and make more educated decisions about their future studies. This tool was built for Vancouver Island University."
						liveSite="https://viu-career-outlooks.vercel.app/"
						links={[
							{
								href: '',
								icon: 'akar-icons:github-fill',
								label: 'GitHub'
							}
						]}
					/>
				</div>
			</div>
		</div>
	</div>
</PageContentContainer>
