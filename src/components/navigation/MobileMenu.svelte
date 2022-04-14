<script>
  import { createEventDispatcher } from 'svelte'
  import MobileNavLink from './MobileNavLink.svelte'
  const dispatch = createEventDispatcher()
  const toggleMobileMenu = () => dispatch('toggleMobileMenu')
</script>

<!-- Mobile menu, show/hide based on menu state. -->
<div class="md:hidden" id="mobile-menu">
  <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    <MobileNavLink to="/" on:toggleMobileMenu={toggleMobileMenu}
      >Dashboard</MobileNavLink
    >
    <MobileNavLink to="/about" on:toggleMobileMenu={toggleMobileMenu}
      >About</MobileNavLink
    >
    <MobileNavLink to="/projects" on:toggleMobileMenu={toggleMobileMenu}
      >Projects</MobileNavLink
    >
  </div>
</div>
