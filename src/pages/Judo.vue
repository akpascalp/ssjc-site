<template>
  <div class="relative flex h-screen bg-white justify-center text-white">
    <div class="absolute w-4/5 flex flex-col items-center pt-8">
      <p class="text-[16px] justify-self-center">House of SSJC</p>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="100" y2="2" stroke="white" stroke-width='0.03' />
      </svg>
    </div>
    <div class="absolute h-screen flex flex-col justify-center items-center">
      <p class="text-[48px]">Judo</p>
      <p class="text-[16px]">Scroll down to learn more</p>
    </div>
    <img src="/judo_bg.png" class="object-cover rounded" />
  </div>


  <br class="py-6" />

  <div class="text-[16px] my-6 px-4 sm:px-24 grid grid-cols-2">
    <p class="text-[#7C7C7C]">Introduction</p>
    <hr class="my-4 col-span-2">
  </div>

  <!-- Judo -->

  <div>
    <div class="pt-8 pb-8 pl-2 sm:pl-24">
      <Judo />
    </div>
    <div class="grid px-4 pt-2 gap-y-4 sm:grid-cols-2 ">
      <p class="text-[16px] sm:mx-20">
        <i>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua” ??</i>
      </p>
      <div class="grid">
        <div class="text-[16px] pr-16 pb-16">
          <p>
          <p class="font-bold">What is Judo?</p>
          Judo, derived from Jujutsu, is a sport that embraces the philosophy of "the gentle way." It evolved from a group
          of self-defense techniques, with harmful elements removed or modified for safety. Judo combines ethics, art, and
          science, using the opponent's strength against them. In June 1882, Dr. Jigoro Kano founded Judo in Tokyo, Japan,
          establishing the Kodokan, which became the mecca of Judo. Kano's vision for Judo encompassed the training of the
          mind and body, promoting efficient energy usage in both competition and daily life. The goals include physical
          development, contest proficiency, and mental and moral growth.
          <br />
          <br />
          <p class="font-bold">Judo Techniques:</p>
          Judo consists of two main components. Nage Waza focuses on throwing techniques, teaching proper ways to execute
          throws while also emphasizing the essential skill of falling safely. <br />
          The second part is Ne Waza, which focuses on ground techniques, including holds and submissions, aiming to
          immobilize or force an opponent to surrender using minimal physical force (adults only for techniques like arm
          bars and chokes).
          <br />
          <br />
          <p class="font-bold">Why Practice Judo?</p>
          Judo cultivates self-control, cooperative learning, and respect for oneself and others. Through Judo,
          individuals develop physical abilities such as flexibility, coordination, reflexes, balance, as well as
          psychological skills like focus, self-confidence, and body awareness.
          <br />
          <br />
          <p class="font-bold">Who Can Practice Judo?</p>
          Judo is suitable for children starting from the age of 4. <br />
          UNESCO recognizes Judo as the ideal initial sport for young children. However, Judo can be practiced by
          individuals of any age or skill level, allowing for continuous growth and development.
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

  <div class="sm:py-6" />

  <!-- The Coaches -->

  <div>
    <div class="py-16 pl-2 sm:pb-24 sm:pt-28 sm:pl-24">
      <!-- <TheCoaches /> -->
    </div>

    <PersonLayout v-for="person in coaches" :title="person.name" :dataList="person.dataList"
      :descriptionText="person.descriptionText" :img="person.img" />

  </div>

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
import Judo from '@/components/animatedTitles/Judo.vue';
import TheCoaches from '@/components/animatedTitles/TheCoaches.vue';

export default {
  components: {
    Carousel,
    PersonLayout,
    CallToAction,
    Judo,
    TheCoaches
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
      coaches: [{
        name: "Benjamin Nguyen",
        dataList: [
          "1st French U17 Championships Paris. U55. 2002",
          "1st Coupe Paris Tokyo. U66. 2009",
          "1st division athlete from 2009 to 2017"],
        descriptionText: "Benjamin began practicing judo at the age of 4, thanks to his black belt uncle. He quickly became passionate about the discipline and the extraordinary sensations that judo provides. This martial art taught him how to focus and gain self-confidence. At the age of 15, he joined the sports-study program in Orléans. During this period, he won the French Cadet Championship (-17 years) and earned a spot on the French national team. Alongside his studies, he continued practicing judo at an elite level and joined the senior elite at the age of 19 (1st division). At 25, freshly graduated with a Master's degree in management, Benjamin founded a graphic design company with two partners while still pursuing high-level judo. At 31, Benjamin decided to retire from competition to embark on a new challenge with Soraya: spreading the teachings of judo and its values in Vietnam. In October 2020, the Dojo House of SSJC came to life.",
        img: "/img_7.png"
      }, {
        name: "Soraya Ferhani Nguyen",
        dataList: [
          "3rd Tournoi de France Paris. U52. 2003",
          "1st French U20 Championships Paris. U52. 2005",
          "1st French UNSS Championships. U52. 2007"],
        descriptionText: "Soraya's journey in judo began at the age of 6, where her love for this unique martial art blossomed. Thriving as a Minimes competitor, she later joined a renowned sport and study center in Bretigny sur Orge (France). Soraya's dedication and skill led her to claim two national championships in the Juniors category, competing at -52 kg, and earning numerous selections to represent the French team. Alongside her judo pursuits, she pursued studies in geography and communication, ultimately earning a Master's degree in communication. Judo is more than just a passion to Soraya; it serves as a vessel to impart the values and wisdom she has acquired throughout her years of training and competition, inspiring others to experience the physical and mental rewards of this discipline. At Dojo House, Soraya has discovered a distinctive and captivating approach to sharing her passion with students through her teaching methods.",
        img: "/img_8.png"
      }]
    }
  },
  methods: {
  }
}
</script>
  