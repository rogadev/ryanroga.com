<script>
  import { page } from '$app/stores'
  export let to = '#'
</script>

<a
  href={to}
  class="bg-transparent text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  class:active={(to === '/' && $page.url.pathname === '/') ||
    (to !== '/' && $page.url.pathname.startsWith(to))}
  aria-current={(to === '/' && $page.url.pathname === '/') ||
  (to !== '/' && $page.url.pathname.startsWith(to))
    ? 'page'
    : false}
>
  <slot />
</a>

<style>
  .active {
    @apply bg-gray-900 text-white;
  }
</style>
