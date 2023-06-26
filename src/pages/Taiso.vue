<template>
  <div class="relative flex h-screen bg-white justify-center text-white">
    <div class="absolute w-4/5 flex flex-col items-center pt-8">
      <p class="text-[16px] justify-self-center">House of SSJC</p>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="100" y2="2" stroke="white" stroke-width='0.03' />
      </svg>
    </div>
    <div class="absolute h-screen flex flex-col justify-center items-center">
      <p class="text-[48px]">Taïso</p>
      <p class="text-[16px]">Scroll down to learn more</p>
    </div>
    <img src="/judo_bg.png" class="object-cover rounded" />
  </div>


  <br class="py-6" />

  <div class="text-[16px] my-6 px-24 grid grid-cols-2">
    <p class="text-[#7C7C7C]">Introduction</p>
    <hr class="my-4 col-span-2">
  </div>

  <div>
    <p class="text-[64px] pt-8 pb-8 pl-24">Taïso</p>
    <div class="grid grid-cols-2 pt-2">
      <p class="text-[16px] mx-20">
        <i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua” ??</i>
      </p>
      <div class="">
        <div class="text-[16px] pr-16 pb-16">
          <p>
          <p class="font-bold">What is Taïso?</p>
          Taïso is a holistic fitness program offered at Dojo House, designed to enhance physical conditioning and promote
          overall well-being. Drawing inspiration from various martial arts disciplines, Taïso incorporates a wide range
          of exercises and movements to improve strength, flexibility, balance, and mental focus.

          <br />
          <br />
          In Taïso, participants engage in a series of dynamic warm-up exercises, cardiovascular activities, and
          bodyweight exercises that target different muscle groups. The program is carefully designed to cater to
          individuals of all fitness levels, allowing everyone to progress at their own pace.
          Taïso sessions include elements of stretching, joint mobility exercises, and body conditioning drills, providing
          a comprehensive workout experience. The focus is on developing functional strength, increasing flexibility, and
          enhancing body awareness.

          <br />
          With an emphasis on mind-body connection, Taïso also incorporates relaxation techniques, breathing exercises,
          and mindfulness practices to promote mental clarity and reduce stress. By integrating physical and mental
          aspects, Taïso offers a well-rounded approach to fitness and personal development.

          <br />
          <br />
          <p class="font-bold">Who is it for?</p>
          Taïso is suitable for individuals of all ages and fitness backgrounds who are looking to improve their overall
          physical conditioning, flexibility, and mental well-being. Whether you are a beginner starting your fitness
          journey or an experienced athlete seeking to complement your training, Taïso provides a welcoming and inclusive
          environment for everyone to enhance their fitness levels and discover the transformative benefits of martial
          arts-inspired exercise.
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
        <button class="btn-primary">
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
    <div class="relative bg-[#F6F6F6] pt-24 pb-80 grid justify-items-center gap-14 -bottom-40">
      <img src="/citation.png" class="w-4" />
      <div class="text-[16px]">
        Dojo House of SSJC
      </div>
      <div class="text-[36px] w-1/3 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua
      </div>
      <img src="/citation.png" class="w-4" />
    </div>
  </div>

  <Carousel :images="images" />

  <div class="py-8" />

  <div class="text-[16px] pl-80 max-[1130px]:px-6 w-4/5">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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

export default {
  components: {
    Carousel,
    PersonLayout,
    CallToAction
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
  