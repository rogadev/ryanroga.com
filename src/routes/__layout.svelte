<script>
  import TheNavbar from '$lib/components/navigation/TheNavbar.svelte'
  import '../app.css'

  let showMobileMenu = false
  const toggleMobileMenu = () => {
    showMobileMenu = !showMobileMenu
  }
  const closeMobileMenuIfOpen = () => {
    if (showMobileMenu) {
      showMobileMenu = false
    }
  }
</script>

<svelte:head>
  <title>Ryan Roga | JavaScript Web Developer</title>
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<div class="h-full bg-white dark:bg-gray-900">
  <TheNavbar {showMobileMenu} on:toggleMobileMenu={toggleMobileMenu} />
  <div on:click={closeMobileMenuIfOpen}>
    <slot />
  </div>
</div>
