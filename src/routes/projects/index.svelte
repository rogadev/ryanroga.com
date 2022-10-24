<script>
  import ProjectCard from '$lib/components/projects/ProjectCard.svelte'
</script>

<h1
  class="py-6 px-4 sm:px-6 lg:px-8 text-3xl font-bold text-gray-900 dark:text-white text-center"
>
  Projects
</h1>

<main>
  <div
    class="grid grid-cols auto-rows-max lg:grid-cols-2 2xl:lg:grid-cols-3 gap-8 items-center justify-center"
  >
    <ProjectCard
      title="Career Outlooks"
      description="A real-world career outlook search tool for students and recent graduates."
      link="https://career-outlooks.viu.ca/"
      imageUrl="static/images/projects/career-outlooks.png"
    />
    <ProjectCard
      title="Password Generator"
      description="A simple note taking app that uses IndexedDB to store notes."
      link="https://passwords.roga.dev"
      imageUrl="static/images/projects/password-generator.png"
    />
    <ProjectCard
      title="Weather App"
      description="Uses the GeoIP and WeatherDBI API's to fetch and memoizes requests."
      link="https://weather.roga.dev"
      imageUrl="static/images/projects/Roga Weather.png"
    />
  </div>
</main>
