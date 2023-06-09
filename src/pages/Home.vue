<template>
  <div class="h-screen text-white bg-[url('/img_1.png')] bg-cover">
    <!-- <video autoplay muted loop class="h-screen object-cover">
      <source src="/test-video.mp4" type="video/mp4">
    </video> -->
    <div class="flex flex-col h-screen ml-12 sm:ml-36">
      <div class="flex flex-col grow justify-center pt-24">
        <p class="text-[24px]">A School Of Life</p>
        <p class="text-[48px]">Dojo House of SSJC</p>
      </div>
      <p class="text-[16px] pb-24 md:pb-12">Scroll down to learn more</p>
    </div>
  </div>

  <br class="py-6" />

  <!-- Our Concept -->

  <div class="text-[16px] my-3 px-4 sm:px-24 grid grid-cols-2">
    <p class="text-[#7C7C7C]">Introduction</p>
    <p class="justify-self-end">House of SSJC</p>
    <hr class="my-4 col-span-2">
  </div>

  <div>
    <Bloc1>
      <template #title>
        <OurConcept />
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

    <div class="grid grid-cols-3 mr-20 pl-12">
      <img src="/img_2.png" class="w-full col-span-3 sm:col-start-2 sm:col-span-2" />
    </div>

    <div class="pb-20"></div>

    <div>
      <div class="bg-[#F6F6F6] mx-2 sm:mx-20 py-20 flex flex-col items-center sm:items-start sm:flex-row">
        <img src="/citation.png" class="pb-8 mx-20" />
        <div>
          <p class="sm:text-[20px] sm:mr-20 text-left mx-2">
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
    <div class="pb-20"></div>
    <img src="/img_3.png" class="w-screen object-cover px-2 sm:px-20" />
  </div>

  <div class="pb-20"></div>

  <!-- The Martial Art School -->

  <div>
    <Bloc1>
      <template #title>
        <TheMartialArtSchool />
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

  <div class="pb-20"></div>

  <!-- Judo -->

  <div>
    <div class="grid grid-cols-3 py-4 sm:pt-24 pb-96 bg-[#F6F6F6]">
      <img src="/img_4.png" class="pt-8 pb-8 pl-4 sm:pl-24" />
      <div class="col-span-2">
        <div class="pt-4 pb-24">
          <Judo />
        </div>
      </div>
      <div class="grid col-span-3 px-2 sm:col-span-2 sm:col-start-2">
        <p class="text-[24px] text-[#7C7C7C] sm:pr-12 sm:mr-12 pb-12">
          "The purpose of the study of judo is to perfect yourself and to contribute to society” Kano Jigoro
        </p>
        <hr class="py-6 pr-12" />
        <p class="text-[16px] sm:pr-16 pb-16 sm:mr-12">
          Beyond being one of the most prestigious and universal Olympic disciplines, judo is more than a sport - it is
          also an acknowledged educational tool and a way of life enriched by a moral code and ethical values that have
          firmly withstood the trials of life.
          Respect, honesty, self-control, friendship, courtesy, honor, courage and modesty - the eight values of the
          judo
          moral code are taught to every judoka from the first time they enter a dojo. This code is entirely
          incompatible
          with procedures that would go against the spirit of the sport.
        </p>
        <button class="btn-secondary justify-self-center sm:justify-self-start">
          Book A Session
        </button>
      </div>
    </div>
  </div>

  <div class="flex place-content-center">
    <img src="/img_5.png" class="relative -top-64 -mb-48" width="1162" />
  </div>

  <CallToAction
    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    btnText="Contact Us" bgUrl="/img_6.png" />

  <div class="pb-20"></div>

  <!-- The Founders -->

  <div>
    <div class="pt-20 pb-24 pl-2 sm:pl-24">
      <TheFounders />
    </div>

    <PersonLayout v-for="person in founders" :title="person.name" :dataList="person.dataList"
      :descriptionText="person.descriptionText" :img="person.img" />

  </div>
</template>
  
<script>
import Carousel from '@/components/Carousel.vue';
import Bloc1 from '@/layouts/Bloc1.vue';
import PersonLayout from '@/layouts/PersonLayout.vue';
import OurConcept from '@/components/animatedTitles/OurConcept.vue';
import Judo from '@/components/animatedTitles/Judo.vue';
import TheFounders from '@/components/animatedTitles/TheFounders.vue';
import TheMartialArtSchool from '@/components/animatedTitles/TheMartialArtSchool.vue';
import CallToAction from '@/components/CallToAction.vue';

export default {
  components: {
    Carousel,
    Bloc1,
    PersonLayout,
    OurConcept,
    TheMartialArtSchool,
    Judo,
    TheFounders,
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
  }
}
</script>
