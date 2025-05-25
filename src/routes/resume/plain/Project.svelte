<script lang="ts">
	let {
		project = {
			type: 'Co-op Project',
			title: 'VIU Career Outlooks',
			description:
				'Developed for VIU, this web application helps future students research the 3-year career outlooks of various programs. The app used Puppeteer to web scrape data from the Government of Canada LMI-EO API and Fuse.js to provide a fast search experience. A proof-of-concept was built with Nuxt 3, and the app was later rebuilt with SvelteKit 1 (RC) and Tailwind CSS, and the search results are server cached in Vercel KV.',
			stack: [
				'Node/Express',
				'Puppeteer',
				'Nuxt 3',
				'Tailwind CSS',
				'Fuse.js',
				'SvelteKit 1 (RC)',
				'GC LMI-EO API (Deprecated)',
				'Vercel KV'
			],
			link: 'https://career-outlooks.viu.ca',
			live: 'https://career-outlooks.viu.ca',
			repo: 'https://github.com/rogadev/viu-career-outlooks'
		}
	} = $props();
</script>

<h6 class="text-lg text-center">
	{project.type} -
	<a class=" hover:text-blue-700" href={project.link} target="_blank">
		{project.title}
	</a>
</h6>

<div class="flex items-center justify-center gap-4">
	{#if project.live}
		<div class="flex justify-center">
			<a class=" hover:text-blue-700" href={project.live} target="_blank"> Live Site</a>
		</div>
	{/if}

	{#if project.repo}
		<div class="flex justify-center">
			<a class=" hover:text-blue-700" href={project.repo} target="_blank"> Project Repo </a>
		</div>
	{/if}
</div>

<p class="px-4 mb-0 text-justify">
	{project.description}
</p>

<div class="flex flex-wrap gap-3 justify-between mt-2 mb-4 mx-4 italic">
	{#each project.stack as tech}
		<span>{tech}</span>
	{/each}
</div>
