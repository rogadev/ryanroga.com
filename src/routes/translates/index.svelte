<script>
  let scroll
</script>

<svelte:window bind:scrollY={scroll} />

<section>
  <h1 class=" text-3xl font-bold my-4">Fun with translate</h1>

  <div
    class="box"
    style:transform={`translate3d(${scroll}px,${scroll / 3}px, 0`}
  />
  <div
    class="box"
    style:transform={`translate3d(-${scroll}px,${scroll / 3}px, 0`}
  />
  <div class="box" style:transform={`translate3d(0,-${scroll * 1.1}px, 0`} />
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
