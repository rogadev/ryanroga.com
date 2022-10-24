<script>
  import BodyWrapper from '$lib/components/layout/BodyWrapper.svelte'

  let scroll
  let upSpeed = 2.1
  let downSpeed = 1.0 / 3
</script>

<svelte:window bind:scrollY={scroll} />

<BodyWrapper title={false}>
  <div class="flex relative z-20 items-center ">
    <div
      class="container mx-auto px-6 flex flex-col justify-between items-center relative py-4"
    >
      <div class="flex flex-col ">
        <img
          src="static/images/Ryan Paranich.jpg"
          alt="Ryan Paranich"
          class="rounded-full w-28 mx-auto mt-6"
        />
        <h1
          class="text-5xl italic font-semibold mt-6 text-center dark:text-white"
        >
          Ryan Roga
        </h1>
        <h2
          class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2"
        >
          JavaScript Web Developer
        </h2>
        <div class="flex flex-row items-center justify-center mt-4">
          <img
            src="static/images/icons/vuejs-brands.svg"
            alt="Vue.js logo"
            class="box w-[100px] h-[100px] md:w-[200px] md:h-[200px] m-1"
            style:transform={`translate3d(-${scroll * 2}px,${
              scroll * downSpeed
            }px, 0`}
          />
          <img
            src="static/images/icons/Svelte_Logo.svg"
            class="box w-[100px] h-[100px] md:w-[200px] md:h-[200px] m-1"
            alt="Svelte logo"
            style:transform={`translate3d(0,-${scroll * upSpeed}px, 0`}
          />
          <img
            src="static/images/icons/nuxt-logo.svg"
            class="box w-[100px] h-[100px] md:w-[200px] md:h-[200px] m-1"
            alt="Nuxt logo"
            style:transform={`translate3d(${scroll * 2}px,${
              scroll * downSpeed
            }px, 0`}
          />
        </div>
        <article class="dark:text-white mt-[20vh] mb-[12vw]">
          <h1 class="text-xl text-center font-semibold italic">
            A Bit About Me...
          </h1>
          <p>
            In 2017, I started my small business,
            <a
              href="https://www.mossaway.ca"
              target="_blank"
              class="text-blue-500 hover:text-blue-700">MossAway</a
            >. I've always believed that the primary focus of any small business
            website should be creating frictionless customer experience. With
            that in mind, I planned and built a website and digital workflow
            that offered exactly that. I would teach myself SEO, web design,
            automation, and more. The hard work paid off because in just 2 years
            our customers nominated us for our first Better Business Bureau
            Torch Award. <span class="font-bold italic">We won!</span>
          </p>
          <p>
            At the start of the global pandemic the future of my business was
            uncertain. Instead of losing hope, I decided instead to see the
            silver lining. I invested my free time into delving deeper into web
            development. Over time, I had hacked together several small pieces
            of software and automation tools like Zapier, but I wanted a unified
            system that I had complete control over. Eventually, I decided to
            take a leap of faith and study web development, full-time.
          </p>
          <p>
            I'll be graduating in April, 2023, but I've already begun to build
            my portfolio. In my first semester I developed a
            <a
              class="text-blue-500 hover:text-blue-700"
              href="https://nicdgl113.github.io/course-project-vonroga/"
              target="_blank">window pane quoting tool</a
            >
            for MossAway that I had wanted for years but couldn't find anywhere on
            the web. For my university, VIU, I built a
            <a
              class="text-blue-500 hover:text-blue-700"
              href="https://career-outlooks.viu.ca/"
              target="_blank"
            >
              tool we deployed that allows students to easily find potential
              career paths for a given credential</a
            >
            and offers career outlook information for each available path. For school
            and fun, I've built your standard to-do list, pokemon app,
            <a
              class="text-blue-500 hover:text-blue-700"
              href="https://passwords.roga.dev/"
              target="_blank"
            >
              a password generator</a
            >, and more. No matter what I build, I always challenging myself to
            go above and beyond what is asked of me.
          </p>
          <p>
            This fall the sale of MossAway finally closes and I'm really looking
            forward to this new and exciting chapter in my life. I'm currently
            looking for part-time web development work with an interest in
            moving to full-time once school is finished. If you have any
            questions or would like to chat, please feel free to <a
              class="text-blue-500 hover:text-blue-700"
              href="/contact">get in touch</a
            >.
          </p>
        </article>
      </div>
    </div>
  </div>
</BodyWrapper>

<style>
  .box {
    align-self: center;
    filter: drop-shadow(3px 5px 2px #21303e);
  }
  .box:hover {
    filter: drop-shadow(3px 5px 2px #283a4a) brightness(1.2);
  }
  p {
    @apply mt-6;
  }
</style>
