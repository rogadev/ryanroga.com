<script>
  let scroll
  let upSpeed = 1.1
  let downSpeed = 1.0 / 3
</script>

<svelte:window bind:scrollY={scroll} />

<section>
  <h1 class=" text-3xl font-bold my-4">Translate demo</h1>

  <div
    class="box"
    style:transform={`translate3d(${scroll}px,${scroll * downSpeed}px, 0`}
  />
  <div
    class="box"
    style:transform={`translate3d(-${scroll}px,${scroll * downSpeed}px, 0`}
  />
  <div
    class="box"
    style:transform={`translate3d(0,-${scroll * upSpeed}px, 0`}
  />
  <div class="box" />
  <div class="box" />
  <div class="box" />
  <div class="box" />
  <div class="box" />
  <div class="box" />
  <div class="box" />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .box {
    --size: 200px;
    height: var(--size);
    width: var(--size);
    background: lightgray;
    margin: 1rem;
  }
</style>
