<script lang="ts">
	import PageContentContainer from '$lib/components/PageContentContainer.svelte';
	import SkillSectionItem from '$lib/components/SkillSectionItem.svelte';
	import BackToTopDivider from './BackToTopDivider.svelte';
	import skills from './skills';
</script>

<PageContentContainer>
	<section id="skills" class="mx-auto pt-32 max-w-7xl px-6 sm:pt-32 lg:px-8">
		<div class="mx-auto max-w-7xl px-6 lg:px-8">
			<div class="mx-auto max-w-2xl lg:max-w-none">
				<div class="text-center">
					<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Skills & Assets
					</h2>
					<p class="mt-4 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
						I have experience with a wide range of technologies, but I'm always looking to learn
						more. I love to learn new things and I'm always looking for new opportunities to do so.
					</p>
				</div>
				<dl
					class="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4"
				>
					<a
						href="#skills-list"
						class="flex flex-col bg-gray-400/5 p-8 hover:bg-yellow-300/75 focus:bg-yellow-300/75 transition-all"
					>
						<dt class="text-sm font-semibold leading-6 text-gray-600">Full list of skills</dt>
						<dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
							All Skills
						</dd>
					</a>
					<a
						href="#favorite-languages"
						class="flex flex-col bg-gray-400/5 p-8 hover:bg-yellow-300/75 focus:bg-yellow-300/75 transition-all"
					>
						<dt class="text-sm font-semibold leading-6 text-gray-600">Most preferred languages</dt>
						<dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
							Languages
						</dd>
					</a>
					<a
						href="#favorite-frameworks"
						class="flex flex-col bg-gray-400/5 p-8 hover:bg-yellow-300/75 focus:bg-yellow-300/75 transition-all"
					>
						<dt class="text-sm font-semibold leading-6 text-gray-600">Most preferred frameworks</dt>
						<dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
							Frameworks
						</dd>
					</a>
					<a
						href="#learning"
						class="flex flex-col bg-gray-400/5 p-8 hover:bg-yellow-300/75 focus:bg-yellow-300/75 transition-all"
					>
						<dt class="text-sm font-semibold leading-6 text-gray-600">My learning road map</dt>
						<dd class="order-first text-3xl font-semibold tracking-tight text-gray-900">
							Learning
						</dd>
					</a>
				</dl>
			</div>
		</div>
	</section>

	<main id="skills-list" class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
		<div class="mx-auto max-w-2xl">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">All Skills</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Here you'll find an exhaustive list of all the technologies I've worked with and would
				happily work with again. Further down the page you'll find the top favorites in each
				category.
			</p>
		</div>
		<ul
			role="list"
			class="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
		>
			{#each skills as { skill, type, proficiency, favorite, icon }}
				<SkillSectionItem skillName={skill} skillType={type} {proficiency} {favorite} {icon} />
			{/each}
		</ul>
	</main>

	<BackToTopDivider />

	<section id="skills-favorites" class="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
		<div class="mx-auto max-w-2xl">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Favorites</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				Here you'll find a list of my favorite technologies in each category. These are the ones I
				consider myself most proficient in and would be most excited to work with.
			</p>
		</div>

		<!-- Favorite Languages -->
		<div id="favorite-languages" class="mt-20 mx-auto max-w-2xl">
			<h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-10">Languages</h3>
			<ul
				role="list"
				class="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
			>
				{#each skills.filter((skill) => skill.type === 'Language' && skill.favorite) as { skill, type, proficiency, favorite, icon }}
					<SkillSectionItem skillName={skill} skillType={type} {proficiency} {favorite} {icon} />
				{/each}
			</ul>
		</div>

		<BackToTopDivider />
		<!-- Front End UI Frameworks -->
		<div id="favorite-frameworks" class="mt-20 mx-auto max-w-2xl">
			<h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-10">
				Front End UI Frameworks
			</h3>
			<ul
				role="list"
				class="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
			>
				{#each skills.filter((skill) => skill.type === 'UI Framework' && skill.favorite) as { skill, type, proficiency, favorite, icon }}
					<SkillSectionItem skillName={skill} skillType={type} {proficiency} {favorite} {icon} />
				{/each}
			</ul>
		</div>

		<BackToTopDivider />
		<!-- Back End Web Frameworks -->
		<div class="mt-20 mx-auto max-w-2xl">
			<h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-10">
				Back End Web Frameworks
			</h3>
			<ul
				role="list"
				class="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
			>
				{#each skills.filter((skill) => (skill.type === 'Web Framework' || skill.type === 'Runtime') && skill.favorite) as { skill, type, proficiency, favorite, icon }}
					<SkillSectionItem skillName={skill} skillType={type} {proficiency} {favorite} {icon} />
				{/each}
			</ul>
		</div>

		<BackToTopDivider />
		<!-- Learning -->
		<div id="learning" class="mt-20 mx-auto max-w-2xl">
			<h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-10">Learning</h3>
			<ul
				role="list"
				class="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
			>
				{#each skills.filter((skill) => skill.proficiency === 3) as { skill, type, proficiency, favorite, icon }}
					<SkillSectionItem skillName={skill} skillType={type} {proficiency} {favorite} {icon} />
				{/each}
			</ul>
		</div>
	</section>
</PageContentContainer>
