<script lang="ts">
	import SkillSectionItem from '$lib/components/SkillSectionItem.svelte';
	import Icon from '@iconify/svelte';
	import skills from './skills';
</script>

<section
	id="skills"
	class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40"
>
	<div class="mx-auto max-w-2xl lg:mx-0">
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Skills</h2>
		<p class="mt-6 text-lg leading-8 text-gray-600">
			I have experience with a wide range of technologies, but I'm always looking to learn more. I
			absolutely love to learn new things and I'm always looking for new opportunities to do so.
		</p>
		<div class="flex justify-end mt-4">
			<a
				href="/skills"
				class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				See the full list
				<Icon icon="akar-icons:arrow-right" class="w-4 h-4" />
			</a>
		</div>

		<ul
			role="list"
			class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
		>
			{#each skills as skill}
				<SkillSectionItem
					skillName={skill.name}
					skillType={skill.type}
					proficiency={skill.proficiency}
					favorite={skill.favorite}
					icon={skill.icon}
				/>
			{/each}
		</ul>
		<div class="flex justify-center mt-16">
			<a
				href="/skills"
				class="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				See the full list of skills
				<Icon icon="akar-icons:arrow-right" class="w-4 h-4" />
			</a>
		</div>
	</div>
</section>
