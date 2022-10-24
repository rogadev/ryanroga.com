<script>
  export let title
</script>

{#if title}
  <header class="shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
    </div>
  </header>
{/if}

<main>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <slot />
  </div>
</main>
