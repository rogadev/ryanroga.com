<script>
  import { page } from '$app/stores'
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  const toggleMobileMenu = () => dispatch('toggleMobileMenu')
  export let to = '#'
</script>

<a
  href={to}
  on:click={toggleMobileMenu}
  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
  class:active={(to === '/' && $page.url.pathname === '/') ||
    (to !== '/' && $page.url.pathname.startsWith(to))}
  aria-current={(to === '/' && $page.url.pathname === '/') ||
  (to !== '/' && $page.url.pathname.startsWith(to))
    ? 'page'
    : null}
>
  <slot /></a
>

<style>
  .active {
    @apply bg-gray-900 text-white;
  }
</style>
