<script>
  import { fade } from 'svelte/transition'
  import BodyWrapper from '../components/layout/BodyWrapper.svelte'

  let showRoga = false
  function toggleShowRoga() {
    showRoga = !showRoga
  }

  let scroll
  let upSpeed = 2.1
  let downSpeed = 1.0 / 3
</script>

<svelte:window bind:scrollY={scroll} />

<BodyWrapper title={false}>
  <div class="flex relative z-20 items-center">
    <div
      class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4"
    >
      <div class="flex flex-col">
        <img
          src="static/images/Ryan Paranich.jpg"
          alt="Ryan Paranich"
          class="rounded-full w-28 mx-auto mt-6"
        />
        <p class="text-3xl my-6 text-center dark:text-white">Hey, I'm Ryan.</p>
        <h2
          class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2"
        >
          Your Next Web Developer
        </h2>
        <div class="flex flex-row items-center justify-center mt-4">
          <img
            src="static/images/icons/vuejs-brands.svg"
            alt="Vue.js"
            class="box"
            style:transform={`translate3d(-${scroll * 2}px,${
              scroll * downSpeed
            }px, 0`}
          />
          <img
            src="static/images/icons/Svelte_Logo.svg"
            class="box"
            alt="Svelte"
            style:transform={`translate3d(0,-${scroll * upSpeed}px, 0`}
          />
          <img
            src="static/images/icons/react-brands.svg"
            class="box"
            alt="React.js"
            style:transform={`translate3d(${scroll * 2}px,${
              scroll * downSpeed
            }px, 0`}
          />
        </div>
        <div class="box" />
        <div class="box" />
        <div class="box" />
        <div class="box" />
        <div class="box" />
        <div class="box" />
        <div class="box" />
      </div>
    </div>
  </div>
</BodyWrapper>

<style>
  .box {
    --size: 200px;
    height: var(--size);
    width: var(--size);
    margin: 1rem;
    align-self: center;
    filter: drop-shadow(3px 5px 2px #35495e);
  }
</style>
