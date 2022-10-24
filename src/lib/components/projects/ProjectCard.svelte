<script>
  import ProjectImageModal from '../modal/ProjectImageModal.svelte'

  let showProjectImageModal = false
  let projectImageModal = {
    src: '',
    alt: '',
  }

  const closeProjectImageModal = () => {
    showProjectImageModal = false
  }

  const openProjectImageModal = (src, alt) => {
    showProjectImageModal = true
    projectImageModal.src = src
    projectImageModal.alt = alt
  }

  export let title
  export let description
  export let link
  export let imageUrl
</script>

{#if showProjectImageModal}
  <ProjectImageModal
    src={projectImageModal.src}
    alt={projectImageModal.alt}
    on:close={closeProjectImageModal}
  />
{/if}

<div class="flex justify-center overflow-auto min-h-full">
  <div class="bg-gray-200 w-1/2 p-4 m-4 rounded-md shadow-lg min-w-[80%]">
    <div
      class="py-4 pb-4 pt-0 grid grid-row-2 md:grid-cols-4 justify-between items-center"
    >
      <div class="md:col-span-3">
        <h2 class="text-2xl mb-2">{title}</h2>
        <p>{description}</p>
      </div>
      <div class="text-center my-4 md:text-right">
        <a
          class="bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium shadow"
          target="_blank"
          href={link}>Live Site</a
        >
      </div>
    </div>
    <img
      src={imageUrl}
      alt={`${title} Demo`}
      class="rounded-md shadow-sm cursor-pointer"
      on:click={() => openProjectImageModal(imageUrl, `${title} Demo`)}
    />
  </div>
</div>
