<template>
  <div class="px-12">
    <p class="text-[48px] py-16">Social</p>
    <img src="/img_7.png" class="place-self-center pb-24" width="1200" />

    <div class="grid grid-cols-3 px-24">
      <p class="text-[36px]">Sponsoring</p>
      <p class="text-[16px] col-span-2 pl-24">Why should you sponsor us?
        <br />
        Sponsoring the Dojo House will allow kids in precarious conditions to learn a martial art with great values and
        will
        give them access to a unique framework. At the Dojo House we also have long term goal. We want to contribute to
        put
        Vietnamese judo on the international stage.
        The sponsors will also help the Dojo House to achieve this goal.
      </p>

      <div class="text-[16px] col-span-2 col-start-2 pl-24">
        <br />
        <p class="text-[28px] pb-3">Sponsoring Benefits</p>
        A company's contribution as a sponsor will:
        <ul class="list-disc pl-12 pt-3">
          <li>help company employees gain discounted access to dojo activities</li>
          <li>contribute to training sessions and team building exercises at your company</li>
          <li>result in the production of a monthly report, following up on sponsored students</li>
          <li>allow you to use your company logo on our equipment</li>
          <li>allow the placement of an advertisement on our dojo walls</li>
          <li>allow brochures to be displayed at the dojo</li>
        </ul>
      </div>
    </div>

    <div class="flex gap-24 pt-24 h-[600px] place-content-center">
      <img src="/img_2.png" />
      <img src="/img_3.png" />
    </div>


    <div class="grid grid-cols-1 place-content-center pt-24 mx-64">
      <p class="text-[48px] text-center">Our Vision</p>
      <br />
      <p class="text-[24px] text-center pb-6 text-[#7C7C7C]">The Social Program:
        Our Vision’s Key Points</p>
      <hr class="pt-12" />
      <p class="text-[16px] text-center pb-16">The Dojo House aims to welcome
        everyone.
        Since we are a private organization, the companies would be essential partners to make social diversity possible.
        Our social program keeps the dojo’s doors open to everyone.
        Thanks to corporate sponsors, individuals who normally wouldn't be able to afford a membership would gain access
        to our equipment and expertise. To make it possible we collaborate with NGO (Name) who share the same vision.
      </p>
      <button class="btn-primary justify-self-center">
        More Infos
      </button>
    </div>

    <div class="flex flex-wrap gap-12 object-none items-start pt-24">
      <img src="/img_11.png" class="object-none" />
      <img src="/img_12.png" class="object-none" />
      <img src="/img_13.png" class="object-none" />
    </div>

    <Bloc1>
      <template #title>
        <p class="text-[64px]">Helping those<br/>in needs</p>
      </template>
      <template #text1>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua”
      </template>
      <template #text2>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id
        est laborum."
      </template>
      <template #button>
        See All Disciplines
      </template>
    </Bloc1>
    <Carousel :images="images" />

    <br />
  </div>
</template>
      
<script>
import Carousel from '@/components/Carousel.vue';
import Bloc1 from '@/layouts/Bloc1.vue';

export default {
  components: {
    Carousel,
    Bloc1
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
      planning: [
        { time: '6:00 AM', name: 'Fundamentals' },
        { time: '6:00 AM', name: 'Basics' },
        { time: '7:00 AM', name: 'Pro Training' },
        { time: '8:00 AM', name: 'Kids 3-5 / Kids 5-7' },
        { time: '3:00 PM', name: 'Fundamentals' },
        { time: '4:00 PM', name: 'Basics' },
        { time: '5:00 PM', name: 'Pro Training' },
        { time: '6:00 PM', name: 'Kids 3-5 / Kids 5-7' },
      ]
    }
  },
  methods: {
  }
}
</script>
    