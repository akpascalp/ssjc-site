<template>
  <div class="px-24">
    <p class="text-[64px] py-16">Working Space</p>
    <img src="/img_7.png" class="place-self-center pb-24" width="1200" />

    <div class="grid grid-cols-2 pr-12">
      <div class="flex gap-y-24 flex-col col-start-2 -ml-20">
        <p class="text-[16px] mr-48">The working space is an integral part of the Dojo House concept.
          Indeed, throughout their respective careers, Benjamin and Soraya have always pursued their sports and
          professional
          paths in parallel, creating a fundamental balance in their development. The workspace allows its residents to
          work
          on a daily basis in a unique environment while practicing a sport or discipline within the same place: Dojo
          House.
        </p>
        <button class="btn-primary w-48">
          Contact Us
        </button>
        <img src="/img_3.png" />
      </div>
    </div>

    <div class="h-36"></div>

    <div>
      <p class="text-[64px] pb-24">Work & Sport</p>
      <p class="text-[24px] text-[#7C7C7C] pb-24">Incorporating sports activities in the company's daily life can
        significantly
        improve the overall work environment. Physical and psychological benefits such as better posture, focus, team
        spirit, relaxation, and positivity contribute to employee well-being.
      </p>
      <div class="grid grid-cols-2 pr-12 gap-24">
        <img src="/img_12.png" class="w-3/4" />
        <div class="flex gap-y-24 flex-col col-start-2">
          <p class="text-[16px] mr-24">
            With the rise of "caring management," companies now prioritize their employees' wellness. Our project aims to
            bring the world of sports to the corporate setting.
            <br />
            <br />
            Corporate sports programs not only improve serenity but also increase work effectiveness and productivity by
            reducing stress. This, in turn, leads to savings for the company and boosts profitability. Additionally,
            offering sports activities during work hours creates a positive corporate image. Companies that prioritize
            their employees' health are seen as caring, energetic, modern, innovative, and attractive to young talent.
            <br />
            <br />
            At our organization, we believe in the transformative power of integrating work and sport, creating a
            harmonious and thriving environment for both employees and businesses.
          </p>
          <button class="btn-primary w-56">
            Book A Session
          </button>
        </div>
      </div>
    </div>

    <div class="h-36"></div>

    <div>
      <p class="text-[64px] pb-24">Our Dojo Coworkers</p>

      <div v-for="coworker in coworkers" class="flex flex-col gap-y-6 pb-12">
        <hr class="pt-6" />
        <Disclosure v-slot="{ open }">
          <DisclosureButton class="flex justify-between items-center">
            <p class="text-[24px]">{{ coworker.title }}</p>
            <button class="flex">
              <p class="text-[16px]">Expand</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1"
                stroke="currentColor" class="w-4 h-4 ml-3 mt-1 transition duration-150 ease-in-out"
                :class="open ? 'rotate-180 transform' : ''">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </DisclosureButton>
          <transition
            enter-active-class="transition duration-200 ease-in-out"
            enter-from-class="transform opacity-50 -translate-y-16"
            enter-to-class="transform opacity-100"
            leave-active-class="transition duration-200 ease-in-out"
            leave-from-class="transform opacity-50"
            leave-to-class="transform opacity-0 -translate-y-8">
            <DisclosurePanel>
              <img :src="coworker.img" class="object-cover py-8" />
              <div class="grid grid-cols-2 gap-y-8 gap-x-8 pr-8">
                <p v-if="coworker.subtitle" class="text-[24px] text-[#7C7C7C] pb-8">{{ coworker.subtitle }}</p>
                <p class="text-[16px] mr-56 max-[1100px]:mr-4" :class="coworker.subtitle ? 'text-[#7C7C7C] col-start-1' : 'col-start-2'"> {{
                  coworker.subtitle1 }}</p>
                <div :class="coworker.subtitle ? 'text-[16px]' : 'text-[24px] text-[#7C7C7C]'" class="col-start-2"
                  v-html="coworker.subtitle2"></div>
              </div>
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </div>
    </div>
  </div>
</template>
      
<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel
  },
  data() {
    return {
      coworkers: [
        {
          title: 'Thirty Dirty Fingers',
          img: '/img_15.png',
          subtitle: 'Thirty Dirty Fingers is a creative studio specialised in graphic design founded in 2011 in Paris by 3 friends, each with a unique creative taste.',
          subtitle1: 'Since then, the team and the work have grown but the motivation remains the same: taking on creative challenges.',
          subtitle2: 'With a more diverse team, the studio now offers well crafted solutions for print, content production and digital. The agile structure allows the core in-house creatives to rely on a wide network of talent in order to deliver custom-made commercial and creative solutions.<br/><br/>Since 2016, Thirty Dirty Finger’s horizons have widened, as our hand heads spread all the way to Ho-Chi-Minh City. Our daily drive remains the same, to get our hands dirty and unlock your brief, challenges and collaboration. Talk the talk and walk the walk.'
        }, {
          title: 'Acte Technology',
          img: '/img_15.png',
          subtitle1: 'With our team of experts in various domains, ACTE Technology within the years became a trusted technical partner for digital solutions, IT infrastructure and complex electrical control systems.',
          subtitle2: 'We create user friendly applications to help our users manage their data easily and effectively. Our company based in Vietnam provides quality solutions at affordable costs. We implement clean and secured services with a high level of performance.',
        }, {
          title: 'Letitia Fernandez',
          img: '/img_15.png',
          subtitle: 'Meet Leticia Fernandez, a seasoned Fashion & Textile Designer with a wealth of experience spanning over 15 years in the industry. Being based in Asia has allowed her to work closely with renowned street and luxury brands, taking on diverse roles such as product development, print design, and illustration.',
          subtitle1: 'Driven by a deep passion for sharing her expertise and boundless creativity, Leticia embarked on a journey to establish a space for collaboration and inspiration. Thus, Dojo Design Studio was born, nestled within the vibrant Dojo House in Saigon, Vietnam.',
          subtitle2: 'At DDS, Leticia believes that fashion is an intimate exploration, where individuals can unleash their imagination and create something truly unique while acquiring new skills. The studio offers engaging fashion and sewing lessons designed for both children and adults.<br/><br/>Here, the focus is on seeking out and crafting one-of-a-kind fashion pieces that reflect personal style and individuality. Join Leticia at Dojo Design Studio, where the art of fashion merges with the joy of learning, fostering a warm and supportive environment for all who share a passion for creativity and self-expression.',
        }
      ]
    }
  },
  methods: {
  }
}
</script>
    