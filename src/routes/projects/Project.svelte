<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let title: string = '';
	export let description: string = '';
	export let image: string = '';
	export let imageAlt: string = '';
	export let link: string = '';
	export let production: string | null = null;
	export let date: string = Date().toString();
</script>

<div class="w-full text-token grid grid-cols-1 gap-4 p-4">
	<div class="card bg-transparent overflow-hidden">
		<header>
			<img src={image} class="bg-black/50 w-full aspect-[21/9] mt-0" alt={imageAlt} />
		</header>
		<div class="px-4 space-y-4">
			<h3 class="h3 text-center" data-toc-ignore>
				{title}
			</h3>
			<article>
				<p>{description}</p>
			</article>
			<div id="links" class="flex flex-row items-center justify-evenly gap-2">
				<a href={link} target="_blank" rel="norefer">Project</a>
				<a href={link} target="_blank" rel="norefer">GitHub</a>
				{#if production}
					<a href={link} target="_blank" rel="norefer">Production</a>
				{/if}
			</div>
			<hr class="opacity-50" />
			<footer class="p-4 flex justify-start items-center space-x-4 h-10">
				<Avatar src="https://source.unsplash.com/YOErFW8AfkI/32x32" width="w-8" />
				<div class="flex-auto flex justify-between items-center">
					<small>{new Date(date).toLocaleDateString()}</small>
				</div>
			</footer>
		</div>
	</div>
</div>
