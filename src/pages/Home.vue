<template>
  <div class="relative h-screen">
    <!-- <video autoplay muted loop class="h-screen object-cover">
      <source src="/test-video.mp4" type="video/mp4">
    </video> -->
    <img src="/img_1.png" class="h-screen object-cover" />
    <p class="absolute top-[324px] left-[128px] text-[24px] text-white">A School Of Life</p>
    <p class="absolute top-[356px] left-[128px] text-[48px] text-white">Dojo House of SSJC</p>
    <p class="absolute bottom-[46px] left-[128px] text-[16px] text-white">Scroll down to learn more</p>
  </div>

  <br class="py-6" />

  <!-- Our Concept -->

  <div class="text-[16px] my-6 px-24 grid grid-cols-2">
    <p class="text-[#7C7C7C]">Introduction</p>
    <p class="justify-self-end">House of SSJC</p>
    <hr class="my-4 col-span-2">
  </div>

  <div>
    <Bloc1>
      <template #title>
        <p class="text-[64px]">Our Concept</p>
      </template>
      <template #text1>
        <i>"Judo in reality is not a mere sport or game. I regard it as a principle of life, art and science. In fact,
          it
          is a means for personal cultural attainment." Kano Jigoro</i>
      </template>
      <template #text2>
        Inspired by the Dojo essence, <b>Dojo House</b> of SSJC is a venue for learning, research, and the practice of
        martial arts.
        <br />
        <br />
        It is conceived and crafted according to traditional Japanese dojo codes and meets the French Judo Federation’s
        safety standards.
        <br />
        <br />
        <b>Dojo House</b> is a zen haven for practicing martial arts and for self-improvement, open to all ages (kids
        and adults) and to all levels of practitioners: a <i>place for immersive learning</i>.
      </template>
      <template #button>Book A Session</template>
    </Bloc1>

    <div class="grid grid-cols-3 pt-4 pb-16 mr-12 pl-12">
      <img src="/img_2.png" class="col-start-2 col-span-2" />
    </div>

    <div class="pb-24">
      <div class="bg-[#F6F6F6] mx-20 py-20 flex items-start">
        <img src="/citation.png" class="mx-20" />
        <div>
          <p class="text-[20px] mr-20 text-center">
            “A dojo represents, in its very essence, an exceptional, energetic space: a sacred location.
            <br />
            It is still a place where we respect the moral values of judo and the tradition of the original martial art,
            as defined by Kano Jigoro shihan in 1882.
            <br />
            <br />
            The dojo is a place where the student, as well as the instructor, can develop their personality and discover a
            step by step art of living.
            <br />
            <br />
            By pushing open the doors of the dojo, the practitioner leaves their daily life outside to become enriched
            internally, with a free spirit, with the content of the teaching.”
            <br />
          </p>
          <p class="pt-16 text-center">
            IJF
          </p>
        </div>
      </div>
    </div>
    <img src="/img_3.png" class="w-screen object-cover px-24 py-12" />
  </div>

  <br class="py-6" />

  <!-- The Martial Art School -->

  <div>
    <Bloc1>
      <template #title>
        <p class="text-[64px]">The Martial<br/> Art School</p>
      </template>
      <template #text1>
        <i>"Nothing under the sun is greater than education. By educating one person and sending him into the society of
          his generation, we make a contribution extending a hundred generations to come." Kano Jigoro</i>
      </template>
      <template #text2>
        Founded in 2020 by Soraya and Benjamin
        Nguyen, former high-level judo athletes,
        Dojo House is a place where one can not
        only practice martial arts, but also work,
        study and socialize.
        <br />
        <br />
        The aim of our project is to combine work and
        sports as a lifestyle. This is the discipline that
        we've applied from a young age as student
        athletes and later on as competitors who
        also held challenging jobs.
        <br />
        <br />
        Dojo House is a unique place to make improvements every day in your martial arts.
      </template>
      <template #button>
        See All Disciplines
      </template>
    </Bloc1>
    <Carousel :images="images" />
  </div>

  <br class="py-6" />

  <!-- Judo -->

  <div>
    <div class="grid grid-cols-3 pt-24 pb-96 bg-[#F6F6F6]">
      <img src="/img_4.png" class="pt-8 pb-8 pl-24" />
      <div class="col-span-2">
        <p class="text-[64px] pt-4 pb-24">Judo</p>
        <p class="text-[24px] text-[#7C7C7C] pr-12 mr-12 pb-12">
          "The purpose of the study of judo is to perfect yourself and to contribute to society” Kano Jigoro
        </p>
        <hr class="py-6 pr-12" />
        <p class="text-[16px] pr-16 pb-16 mr-12">
          Beyond being one of the most prestigious and universal Olympic disciplines, judo is more than a sport - it is
          also an acknowledged educational tool and a way of life enriched by a moral code and ethical values that have
          firmly withstood the trials of life.
          Respect, honesty, self-control, friendship, courtesy, honor, courage and modesty - the eight values of the
          judo
          moral code are taught to every judoka from the first time they enter a dojo. This code is entirely
          incompatible
          with procedures that would go against the spirit of the sport.
        </p>
        <button class="btn-secondary">
          Book A Session
        </button>
      </div>
    </div>
  </div>

  <div class="flex place-content-center">
    <img src="/img_5.png" class="relative -top-64 -mb-48" width="972" />
  </div>

  <div class="bg-[url('/img_6.png')] bg-contain bg-center bg-no-repeat h-96">
    <p class="pl-72 mr-[500px] text-white text-[24px] pt-20 pb-12">Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    <button class="btn-secondary ml-72 text-white px-16">
      Contact Us
    </button>
  </div>

  <br class="py-6" />

  <!-- The Founders -->

  <div>
    <p class="text-[64px] pt-28 pb-24 pl-24">The Founders</p>

    <PersonLayout v-for="person in founders" :title="person.name" :dataList="person.dataList"
      :descriptionText="person.descriptionText" :img="person.img" />

  </div>
</template>
  
<script>
import Carousel from '@/components/Carousel.vue';
import Bloc1 from '@/layouts/Bloc1.vue';
import PersonLayout from '@/layouts/PersonLayout.vue';

export default {
  components: {
    Carousel,
    Bloc1,
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
      founders: [{
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

<!-- WIP modulariser founders + planning -->