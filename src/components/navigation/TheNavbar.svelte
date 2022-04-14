<script>
  import MobileMenu from './MobileMenu.svelte'
  import MobileMenuButton from './MobileMenuButton.svelte'
  import NavLink from './NavLink.svelte'
  // import NotificationBell from './NotificationBell.svelte'

  const toggleMobileMenu = () => {
    showMobileMenu = !showMobileMenu
  }

  let showMobileMenu = false
</script>

<nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="flex items-center">
        <div class="flex-shrink-0">
          <a href="/">
            <div class="brand text-white text-3xl">Roga</div>
          </a>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <NavLink to="/">Welcome</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
          </div>
        </div>
      </div>
      <!-- <div class="hidden md:block">
        <div class="ml-4 flex items-center md:ml-6">
          <NotificationBell />
        </div>
      </div> -->
      <MobileMenuButton on:toggleMenu={toggleMobileMenu} />
    </div>
  </div>
  {#if showMobileMenu}
    <MobileMenu on:toggleMobileMenu={toggleMobileMenu} />
  {/if}
</nav>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@800&display=swap');
  .brand {
    font-family: 'Cinzel', serif;
  }
</style>
