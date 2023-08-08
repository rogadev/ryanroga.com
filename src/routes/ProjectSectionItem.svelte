<script lang="ts">
	import Icon from '@iconify/svelte';

	export let src: string;
	export let alt: string = '';
	export let stack: string[];
	export let href: string = '#';
	export let releaseDate: string | null = null;
	export let projectTitle: string;
	export let projectDescription: string;
	export let liveSite: string;
	export let links: { href: string; icon: string; label: string }[] = [];
</script>

<article class="relative isolate flex flex-col gap-8 lg:flex-row">
	<div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
		<a href="/projects">
			<img
				{src}
				{alt}
				class="absolute inset-0 h-full w-full rounded-lg bg-gray-50 object-top object-cover"
			/>
			<div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
		</a>
	</div>
	<div>
		{#if releaseDate}
			<time datetime="2020-03-16" class="text-gray-500 text-xs">{releaseDate}</time>
		{/if}
		<div class="flex items-center flex-wrap gap-x-4 text-xs mt-2">
			{#each stack as item}
				<a
					href="/skills"
					class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 mb-1"
				>
					{item}
				</a>
			{/each}
		</div>
		<div class="group relative max-w-xl">
			<h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
				<a {href}>
					<span class="absolute inset-0" />
					{projectTitle}
				</a>
			</h3>
			<p class="mt-5 text-sm leading-6 text-gray-600">
				{projectDescription}
			</p>
		</div>
		<div class="mt-6 flex border-t border-gray-900/5 pt-6">
			<div class="relative flex items-center gap-x-4">
				<a
					href={liveSite}
					target="_blank"
					title="Link to Live Site"
					class="text-gray-500 hover:text-gray-600"
				>
					<span class="sr-only">Live site</span>
					<Icon icon="fa:external-link" class="w-10 h-10" />
				</a>
				{#each links as { href, icon, label }}
					<a
						{href}
						target="_blank"
						title="Link to {label}"
						class="text-gray-500 hover:text-gray-600"
					>
						<span class="sr-only">{label}</span>
						<Icon {icon} class="w-10 h-10" />
					</a>
				{/each}
			</div>
		</div>
	</div>
</article>
