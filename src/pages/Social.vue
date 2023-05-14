<template>
  <div>
    <div class="grid grid-cols-3 px-24">
      <img src="@/assets/social.png" class="font-barlow text-[48px] py-16 place-self-center col-span-3" />
      <img src="/img_7.png" class="place-self-center col-span-3 pb-12" />

      <p class="font-barlow text-[56px]">Sponsoring</p>
      <p class="font-barlow text-[18px] col-span-2 pl-24">Why should you sponsor us?
        Sponsoring the Dojo House will allow kids in precarious conditions to learn a martial art with great values and
        will
        give them access to a unique framework. At the Dojo House we also have long term goal. We want to contribute to
        put
        Vietnamese judo on the international stage.
        The sponsors will also help the Dojo House to achieve this goal.
      </p>


      <div class="font-barlow text-[18px] col-span-2 col-start-2 pl-24">
        <br />
        <p class="font-barlow text-[28px] pb-3">Sponsoring Benefits</p>
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

      <img src="@/assets/img_2.png" class="pt-12" />
      <img src="@/assets/img_3.png" class="col-span-2 pl-24 pt-12" />


      <img src="@/assets/vision.png" class="font-barlow text-[48px] place-self-center col-span-3 py-16" />
      <p class="col-span-1 col-start-2 -mx-40 font-barlow text-[24px] text-center pb-6 text-[#7C7C7C]">The Social Program:
        Our Vision’s Key Points</p>
      <hr class="col-span-1 col-start-2 -mx-40 pt-12" />
      <p class="col-span-1 col-start-2 -mx-40 font-barlow text-[16px] text-center pb-16">The Dojo House aims to welcome
        everyone.
        Since we are a private organization, the companies would be essential partners to make social diversity possible.
        Our social program keeps the dojo’s doors open to everyone.
        Thanks to corporate sponsors, individuals who normally wouldn't be able to afford a membership would gain access
        to our equipment and expertise. To make it possible we collaborate with NGO (Name) who share the same vision.
      </p>
      <button class="btn-primary col-start-2 justify-self-center">
        Book A Session
      </button>
    </div>

    <Bloc1>
      <template #title>
        <img src="@/assets/helping.png" />
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
        src: 'src/assets/img_1.png',
        alt: 'Img 1'
      }, {
        src: 'src/assets/img_2.png',
        alt: 'Img 2'
      }, {
        src: 'src/assets/img_3.png',
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
    