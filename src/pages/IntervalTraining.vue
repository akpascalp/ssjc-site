<template>
  <div class="relative flex h-screen bg-white justify-center text-white p-6">
    <div class="absolute w-4/5 flex flex-col items-center pt-8">
      <p class="text-[16px] justify-self-center">House of SSJC</p>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="100" y2="2" stroke="white" stroke-width='0.03' />
      </svg>
    </div>
    <div class="absolute h-screen flex flex-col justify-center items-center">
      <p class="text-[48px]">Interval Training</p>
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
      <IntervalTraining />
    </div>
    <div class="grid px-4 pt-2 gap-y-4 sm:grid-cols-2 ">
      <p class="text-[16px] sm:mx-20">
        <i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua” ??</i>
      </p>
      <div class="grid">
        <div class="text-[16px] pr-16 pb-16">
          <p>
          <p class="font-bold">What is Interval Training?</p>
          Interval training is a dynamic and high-intensity workout program designed to target all aspects of physical
          fitness and strength in a fun and engaging way! Drawing inspiration from HIIT (High-Intensity Interval Training)
          programs, this session will push you to surpass your limits, regardless of your fitness level. By incorporating
          interval training into your routine, you can enhance your oxygen consumption, increase muscle mass, reduce body
          fat, and improve both aerobic and anaerobic performance.
          <br />
          <br />
          <p class="font-bold">For Whom?</p>
          Interval training is suitable for individuals who are looking to elevate their overall conditioning and excel in
          their respective sports. Whether you're a seasoned athlete or just starting your fitness journey, interval
          training can help you achieve your goals and take your performance to new heights.
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
import IntervalTraining from '@/components/animatedTitles/IntervalTraining.vue';

export default {
  components: {
    Carousel,
    PersonLayout,
    CallToAction,
    IntervalTraining
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
  