<script>
  import TheNavbar from '../components/navigation/TheNavbar.svelte'
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

<div class="min-h-full">
  <TheNavbar {showMobileMenu} on:toggleMobileMenu={toggleMobileMenu} />
  <div on:click={closeMobileMenuIfOpen}>
    <slot />
  </div>
</div>
