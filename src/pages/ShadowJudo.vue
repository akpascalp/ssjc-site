<template>
  <div class="relative flex h-screen bg-white justify-center text-white p-6">
    <div class="absolute w-4/5 flex flex-col items-center pt-8">
      <p class="text-[16px] justify-self-center">House of SSJC</p>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="100" y2="2" stroke="white" stroke-width='0.03' />
      </svg>
    </div>
    <div class="absolute h-screen flex flex-col justify-center items-center">
      <p class="text-[48px]">Shadow Judo</p>
      <p class="text-[16px]">Scroll down to learn more</p>
    </div>
    <img src="/judo_bg.png" class="object-cover rounded" />
  </div>


  <br class="py-6" />

  <div class="text-[16px] my-6 px-4 sm:px-24 grid grid-cols-2">
    <p class="text-[#7C7C7C]">Introduction</p>
    <hr class="my-4 col-span-2">
  </div>

  <div>
    <div class="pt-8 pb-8 pl-2 sm:pl-24">
      <ShadowJudo />
    </div>
    <div class="grid px-4 pt-2 gap-y-4 sm:grid-cols-2 ">
      <p class="text-[16px] sm:mx-20">
        <i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua” ??</i>
      </p>
      <div class="grid">
        <div class="text-[16px] pr-16 pb-16">
          <p>
          <p class="font-bold">What is Shadow Judo?</p>
          Shadow Judo is a unique fitness program developed by the founders of Dojo House, inspired by the movements and
          principles of judo. It combines the benefits of judo with specialized training techniques, creating a dynamic
          and effective workout experience.

          <br />
          In Shadow Judo, fitness programs are designed to incorporate judo-inspired movements and exercises. By using the
          "judo elastic grip," a specific accessory that simulates the resistance of a judo opponent, participants engage
          in weight body work that targets various muscle groups.

          <br />
          <br />
          This complete and balanced activity focuses on different aspects of fitness, including leg work, body height,
          and core exercises. Core exercises, in particular, strengthen the muscles in your abdomen, lower back, and
          pelvis, enhancing both your physical performance and overall body coordination.
          <br />
          Shadow Judo not only challenges your physical abilities but also requires deep concentration and endurance. It
          offers a unique opportunity to train your mind and body, drawing inspiration from the principles of judo.

          <br />
          <br />
          <p class="font-bold">Who is it for?</p>
          Shadow Judo is designed for adults who are seeking to improve their cardiovascular endurance, develop a strong
          core, and build a solid physical foundation. Whether your goal is to tone muscles, reduce body fat, increase
          endurance, or enhance coordination, Shadow Judo provides a dynamic and inspiring workout experience suitable for
          individuals of all fitness levels.
          </p>
        </div>
        <div class="flex flex-col gap-3">
          <button class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clip-rule="evenodd" />
            </svg>
            <p class="pl-4 text-[18px]">View Coaches</p>
          </button>
          <button class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clip-rule="evenodd" />
            </svg>
            <p class="pl-4 text-[18px]">View Planning</p>
          </button>
        </div>
        <br>
        <br>
        <button class="btn-primary justify-self-center mt-16 sm:mt-0 sm:justify-self-start">
          Book A Session
        </button>
      </div>
    </div>
    <div class="grid grid-cols-2 pt-20 items-start place-items-center mx-8">
      <img src="/img_12.png" class="w-3/4" />
      <img src="/img_10.png" />
    </div>
  </div>

  <br class="py-6" />

  <div class="relative">
    <div class="relative bg-[#F6F6F6] py-12 px-4 sm:pt-24 sm:pb-80 grid justify-items-center gap-2 sm:gap-14 sm:-bottom-40">
      <img src="/citation.png" class="w-4" />
      <div class="text-[16px]">
        Dojo House of SSJC
      </div>
      <div class="text-[36px] sm:w-1/3 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua
      </div>
      <img src="/citation.png" class="w-4" />
    </div>
  </div>

  <Carousel :images="images" />

  <div class="sm:py-8" />

  <div class="text-[16px] pl-80 max-[1130px]:px-6 w-4/5">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  </div>

  <div class="py-12" />

  <CallToAction
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    btnText="Book a Session" bgUrl="/img_6.png" />
</template>
    
<script>
import Carousel from '@/components/Carousel.vue';
import PersonLayout from '@/layouts/PersonLayout.vue';
import CallToAction from '@/components/CallToAction.vue';
import ShadowJudo from '@/components/animatedTitles/ShadowJudo.vue';

export default {
  components: {
    Carousel,
    PersonLayout,
    CallToAction,
    ShadowJudo
  },
  data() {
    return {
      images: [{
        src: '/img_1.png',
        alt: 'Img 1'
      }, {
        src: '/img_2.png',
        alt: 'Img 2'
      }, {
        src: '/img_3.png',
        alt: 'Img 3'
      }],
    }
  },
  methods: {
  }
}
</script>
  