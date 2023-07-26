<script lang="ts">
	import { fade } from 'svelte/transition';
	import Icon from '@iconify/svelte';

	export let skillName: string;
	export let skillType: string;
	export let proficiency: 1 | 2 | 3;
	export let icon: string;
	export let favorite: boolean;

	$: proficiencyText =
		proficiency === 1 ? 'Proficient' : proficiency === 2 ? 'Familiar' : 'Learning';
	$: proficiencyColor =
		proficiency === 1
			? 'bg-green-50 text-green-700 ring-green-600/20'
			: proficiency === 2
			? 'bg-blue-50 text-blue-700 ring-blue-600/20'
			: 'bg-purple-50 text-purple-700 ring-purple-600/20';

	let show = false;
</script>

<li
	on:mouseover={() => (show = true)}
	on:mouseout={() => (show = false)}
	on:focus={() => (show = true)}
	on:blur={() => (show = false)}
>
	<div class="relative w-12 md:w-16 lg:w-24 mx-auto">
		<Icon {icon} class="mx-auto h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24 rounded-md" />
		{#if favorite && show}
			<div transition:fade={{ duration: 300 }} title="I love this!">
				<Icon icon="mdi:heart" class="absolute top-0 right-0 h-6 w-6 text-red-600" />
			</div>
		{/if}
	</div>
	<h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{skillName}</h3>
	<p class="text-sm leading-6 text-gray-600 pb-1">{skillType}</p>
	<p
		class="inline-flex items-center rounded-full {proficiencyColor} px-2 py-1 text-xs font-medium ring-1 ring-inset"
	>
		{proficiencyText}
	</p>
</li>
