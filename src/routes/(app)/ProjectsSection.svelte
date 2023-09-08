<script lang="ts">
	import Icon from '@iconify/svelte';
	import ProjectSectionItem from './ProjectSectionItem.svelte';
	import PageContentContainer from '$lib/components/PageContentContainer.svelte';
	import careerOutlooksImage from './Career Outlooks Full Page View.png';
	import ezTriprImage from './EzTripr Updated Drive.png';
</script>

<PageContentContainer>
	<div id="projects" class="bg-white py-24 sm:py-32">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-4xl">
				<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
				<p class="mt-2 text-lg leading-8 text-gray-600">
					You can also find a list of my favorite projects on <a
						class="text-blue-500 hover:text-blue-400 hover:underline"
						href="https://github.com/rogadev#projects">GitHub</a
					>.
				</p>
				<div class="flex justify-end mt-4">
					<a
						href="/projects"
						class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						See all projects
						<Icon icon="akar-icons:arrow-right" class="w-4 h-4" />
					</a>
				</div>

				<div class="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
					<ProjectSectionItem
						src={careerOutlooksImage}
						alt={`Image of the VIU Career Outlooks web tool in action. The image shows the results of a search for the career "Web Developer"`}
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
						releaseDate="Released - September 1st, 2021"
						projectTitle="VIU Career Outlooks Web Tool"
						projectDescription="Designed and built for Vancouver Island University, Career Outlooks is a tool that helps students to explore career outlooks for their program of study and make more educated decisions about their future studies. It also connects to real-world market outlook data to provide detailed information about employment trends and outlook in that industry for all of British Columbia."
						liveSite="https://viu-career-outlooks.vercel.app/"
						links={[
							{
								label: 'GitHub',
								icon: 'akar-icons:github-fill',
								href: 'https://github.com/rogadev/viu-career-outlooks'
							}
						]}
					/>
					<ProjectSectionItem
						src={ezTriprImage}
						alt="Image of the EzTripr web application in action. The image shows a map with a route drawn on it, passenger details, times, a list of stops, and a list of actions."
						stack={[
							'TypeScript',
							'Nuxt',
							'Vue',
							'TailwindCSS',
							'Zod',
							'Vitest',
							'Prisma',
							'Supabase',
							'Nuxt Test Utils',
							'OpenAI API',
							'Google Maps Distance Matrix API'
						]}
						href="https://www.canva.com/design/DAFfid4eMDA/XdWkNkor_7pZTy1r3YTySw/edit?utm_content=DAFfid4eMDA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
						releaseDate="Released - April 15th, 2023"
						projectTitle="EzTripr"
						projectDescription="I designed, built, and deployed this full stack web application to enhance trip management for medical companion drivers for the Nanaimo-based company Granny Go Go. The app streamlines schedules and enhances communication between drivers, passengers, and dispatch. It offers a full suite of features that simplify trip planning, increase efficiency, and elevate the overall driving experience."
						liveSite="https://eztripr.com/"
						links={[
							{
								label: 'Presentation',
								icon: 'mdi:presentation',
								href: 'https://www.canva.com/design/DAFfid4eMDA/XdWkNkor_7pZTy1r3YTySw/edit?utm_content=DAFfid4eMDA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'
							},
							{
								label: 'GitHub',
								icon: 'akar-icons:github-fill',
								href: 'https://github.com/rogadev/capstone'
							}
						]}
					/>
				</div>
			</div>
		</div>
	</div>
</PageContentContainer>
