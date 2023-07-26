<script lang="ts">
	import SkillSectionItem from './SkillSectionItem.svelte';
</script>

<section id="skills" class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
	<div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			I have experience with a wide range of technologies, but I'm always looking to learn more. I
			love to learn new things and I'm always looking for new opportunities to do so.
		</p>
	</div>
	<ul
		role="list"
		class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
	>
		<SkillSectionItem
			skillName="JavaScript"
			skillType="Language"
			proficiency={1}
			favorite={true}
			icon="logos:javascript"
		/>
		<SkillSectionItem
			skillName="TypeScript"
			skillType="Language"
			proficiency={1}
			favorite={true}
			icon="logos:typescript-icon"
		/>
		<SkillSectionItem
			skillName="HTML"
			skillType="Language"
			proficiency={1}
			favorite={true}
			icon="logos:html-5"
		/>
		<SkillSectionItem
			skillName="CSS"
			skillType="Language"
			proficiency={1}
			favorite={true}
			icon="logos:css-3"
		/>
		<SkillSectionItem
			skillName="Python"
			skillType="Language"
			proficiency={3}
			favorite={true}
			icon="logos:python"
		/>
		<SkillSectionItem
			skillName="Svelte"
			skillType="UI Framework"
			proficiency={1}
			favorite={true}
			icon="logos:svelte-icon"
		/>
		<SkillSectionItem
			skillName="Vue"
			skillType="UI Framework"
			proficiency={1}
			favorite={true}
			icon="logos:vue"
		/>
		<SkillSectionItem
			skillName="React"
			skillType="UI Framework"
			proficiency={1}
			favorite={false}
			icon="logos:react"
		/>
		<SkillSectionItem
			skillName="Node"
			skillType="Runtime"
			proficiency={1}
			favorite={true}
			icon="logos:nodejs-icon"
		/>
		<SkillSectionItem
			skillName="TS Node"
			skillType="Runtime"
			proficiency={2}
			favorite={true}
			icon="logos:tsnode"
		/>
		<SkillSectionItem
			skillName="Express"
			skillType="Web Framework"
			proficiency={1}
			favorite={true}
			icon="logos:express"
		/>
		<SkillSectionItem
			skillName="SvelteKit"
			skillType="Web Framework"
			proficiency={1}
			favorite={true}
			icon="logos:svelte-kit"
		/>
		<SkillSectionItem
			skillName="Nuxt"
			skillType="Web Framework"
			proficiency={1}
			favorite={true}
			icon="logos:nuxt-icon"
		/>
		<SkillSectionItem
			skillName="Astro"
			skillType="Web Framework"
			proficiency={1}
			favorite={true}
			icon="logos:astro-icon"
		/>
		<SkillSectionItem
			skillName="Supabase"
			skillType="Database"
			proficiency={1}
			favorite={true}
			icon="logos:supabase-icon"
		/>
		<SkillSectionItem
			skillName="GitHub"
			skillType="Version Control"
			proficiency={1}
			favorite={true}
			icon="logos:github-icon"
		/>
		<SkillSectionItem
			skillName="OpenAI"
			skillType="API"
			proficiency={1}
			favorite={true}
			icon="logos:openai-icon"
		/>
		<SkillSectionItem
			skillName="Prisma"
			skillType="ORM"
			proficiency={1}
			favorite={true}
			icon="logos:prisma"
		/>
		<SkillSectionItem
			skillName="Tailwind"
			skillType="CSS Framework"
			proficiency={1}
			favorite={true}
			icon="logos:tailwindcss-icon"
		/>
		<SkillSectionItem
			skillName="Vercel"
			skillType="Hosting"
			proficiency={1}
			favorite={true}
			icon="logos:vercel-icon"
		/>
		<SkillSectionItem
			skillName="Vercel Postgres"
			skillType="Database"
			proficiency={1}
			favorite={true}
			icon="logos:vercel-icon"
		/>
		<SkillSectionItem
			skillName="Vercel KV"
			skillType="Database"
			proficiency={1}
			favorite={true}
			icon="logos:vercel-icon"
		/>
		<SkillSectionItem
			skillName="Vercel AI"
			skillType="Package"
			proficiency={1}
			favorite={true}
			icon="logos:vercel-icon"
		/>
		<SkillSectionItem
			skillName="Puppeteer"
			skillType="Package"
			proficiency={1}
			favorite={true}
			icon="logos:puppeteer"
		/>
		<SkillSectionItem
			skillName="Mapbox"
			skillType="Package"
			proficiency={1}
			favorite={true}
			icon="logos:mapbox-icon"
		/>
		<SkillSectionItem
			skillName="Zod"
			skillType="Package"
			proficiency={1}
			favorite={true}
			icon="logos:zod"
		/>
		<SkillSectionItem
			skillName="Vitest"
			skillType="Testing"
			proficiency={1}
			favorite={true}
			icon="logos:vitest"
		/>
		<SkillSectionItem
			skillName="Jest"
			skillType="Testing"
			proficiency={1}
			favorite={true}
			icon="logos:jest"
		/>
		<SkillSectionItem
			skillName="Mocha"
			skillType="Testing"
			proficiency={1}
			favorite={true}
			icon="logos:mocha"
		/>
		<SkillSectionItem
			skillName="Flask"
			skillType="Web Framework"
			proficiency={3}
			favorite={true}
			icon="logos:flask"
		/>
	</ul>
</section>
