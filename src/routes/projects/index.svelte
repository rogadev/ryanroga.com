<script>
  import ProjectImageModal from '../../components/modal/ProjectImageModal.svelte'

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
</script>

{#if showProjectImageModal}
  <ProjectImageModal
    src={projectImageModal.src}
    alt={projectImageModal.alt}
    on:close={closeProjectImageModal}
  />
{/if}

<div class="bg-gray-50 w-1/2 p-4 rounded-md shadow-md">
  <div
    class="my-4 mb-4 mt-0 grid grid-row-2 md:grid-cols-4 justify-between items-center"
  >
    <div class="md:col-span-3">
      <h2 class="text-2xl mb-2">Roga Weather</h2>
      <p>Uses the GeoIP and WeatherDBI API's to fetch and memoizes requests.</p>
    </div>
    <div class="text-center my-4 md:text-right">
      <a
        class="bg-gray-700 hover:bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium shadow"
        target="blank"
        href="https://weather.roga.dev">Live Site</a
      >
    </div>
  </div>
  <img
    src="static/images/projects/Roga Weather.png"
    alt="Roga Weather App Demo"
    class="rounded-md shadow-sm cursor-pointer"
    on:click={() =>
      openProjectImageModal(
        'static/images/projects/Roga Weather.png',
        'Roga Weather App Demo'
      )}
  />
</div>
