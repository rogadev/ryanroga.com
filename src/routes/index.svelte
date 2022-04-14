<script>
  import { fade } from 'svelte/transition'
  import BodyWrapper from '../components/layout/BodyWrapper.svelte'

  let showRoga = false
  function toggleShowRoga() {
    showRoga = !showRoga
  }
</script>

<BodyWrapper title={false}>
  <h1 class="text-4xl font-bold">Hi, I'm Ryan</h1>
  <p>
    Award winning business owner turned web developer based on Vancouver Island,
    BC. I enjoy building clean & concise web apps using awesome frameworks like
    Vue 3, Express, Svelte, and React. I'm looking for a full-time co-op
    position this summer.
  </p>
</BodyWrapper>
