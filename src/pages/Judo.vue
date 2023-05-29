<template>
  <div class="relative w-screen pl-16 bg-white">
    <img src="/img_9.png" class="h-screen object-cover" />
  </div>


  <br class="py-6" />

  <div class="text-[16px] my-6 px-24 grid grid-cols-2">
    <p class="text-[#7C7C7C]">Introduction</p>
    <hr class="my-4 col-span-2">
  </div>

  <!-- Judo -->

  <div>
    <img src="/Judo.png" class="text-[48px] pt-8 pb-8 pl-24" />
    <div class="grid grid-cols-2 pt-2">
      <p class="text-[16px] mx-20">
        <i>“The purpose of the study of judo is to perfect yourself and to contribute to society” Kano Jigoro</i>
      </p>
      <div class="">
        <p class="text-[20px] pr-16 pb-4">
          Beyond being one of the most prestigious and universal Olympic disciplines, judo is more than a sport - it is
          also an acknowledged educational tool and a way of life enriched by a moral code and ethical values that have
          firmly withstood the trials of life.
          Respect, honesty, self-control, friendship, courtesy, honor, courage and modesty - the eight values of the judo
          moral code are taught to every judoka from the first time they enter a dojo. This code is entirely incompatible
          with procedures that would go against the spirit of the sport.
        </p>
        <div class="pr-16 pb-16">
          <h1>What is Judo?</h1>
          <p class="text-[20px]">
            Judo literally means "the gentle way." It is a sport developed from <u>JIU-JITSU</u>, a group of self-defence
            methods,
            but with certain harmful techniques eliminated or modified for safety's sake. Judo incorporates ethics, art
            and
            science into a sport that uses the opponent’s strength against themselves. Judo was developed in June 1882 in
            Tokyo, Japan, by Dr Jigoro Kano in a small hall that became the Kodokan, the mecca of judo. Kano defined the
            purpose of judo as the training of one's mind and body to use energy efficiently, in competition and everyday
            life, toward the goals of physical development, contest proficiency and mental and moral development.
            <br />
            <br />
            Judo is a combat sport in which the object is to <u>throw</u> (<b>Nage Waza</b>) your opponent properly but
            also help you to
            learn how to fall.
            <br />
            <br />

            The second part of Judo is <b>Ne Waza</b>, the object is to hold on the ground, or otherwise force an opponent
            to
            submit (using methods such as arm bars and chokes*) using the minimum required physical exertion.
            <br />
            *only for adults

            <br />
            <br />
          </p>
          <h1>Why Practice Judo?</h1>
          <p class="text-[20px]">
            Thanks to judo, you develop self-control, cooperative learning and respect for yourself and each other. Judo
            develops physical abilities such as flexibility, coordination, reflexes and balance as well as psychological
            abilities including focus, self-confidence and body awareness.
          </p>
          <br />
          <br />

          <h1>Who is it For?</h1>
          <p class="text-[20px]">
            Judo is a sport for everyone, including children from as young as 4 years old. According to UNESCO, “Judo is
            the
            best initial training sport for children and young people”. It can be practiced at any age and any level.
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
      <img src="/img_2.png" class="w-2/3" />
      <img src="/img_10.png" class="w-2/3" />
    </div>
  </div>

  <br class="py-6" />

  <!-- The Coaches -->

  <div>
    <img src="/coaches.png" class="pt-28 pb-24 pl-24" />

    <PersonLayout v-for="person in coaches" :title="person.name" :dataList="person.dataList"
      :descriptionText="person.descriptionText" :img="person.img" />

  </div>

  <!-- The Planning -->
  <div>
    <img src="/planning.png" class="text-[48px] pt-8 pb-8 pl-24" />
    <div class="grid grid-cols-2 pl-24">
      <div class="text-[36px] mr-96">
        <ul>
          <li><b>Monday,</b></li>
          <li><b>Wednesday,</b></li>
          <li><b>Friday</b></li>
        </ul>
      </div>
      <ul class="divide-y pr-20">
        <li v-for="classData in planning" class="grid grid-cols-2 items-center py-4">
          <p class="text-[24px]"><b>{{ classData.time }}</b></p>
          <p class="text-[16px] justify-self-end">{{ classData.name }}</p>
        </li>
      </ul>
    </div>
  </div>

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

  <div class="text-[16px] px-72 w-4/5">
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  </div>

  <div class="py-12" />

  <div class="bg-[url('/img_6.png')] bg-contain bg-center bg-no-repeat h-96">
    <p class="pl-72 mr-[600px] text-white text-[24px] pt-24 pb-12">Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    <button class="btn-primary text-white ml-72">
      Book a Session
    </button>
  </div>
</template>
    
<script>
import Carousel from '@/components/Carousel.vue';
import PersonLayout from '@/layouts/PersonLayout.vue';

export default {
  components: {
    Carousel,
    PersonLayout
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
      ],
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
  