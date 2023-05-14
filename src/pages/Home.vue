<template>
  <div class="relative h-screen">
    <!-- <video autoplay muted loop class="h-screen object-cover">
      <source src="/test-video.mp4" type="video/mp4">
    </video> -->
    <img src="/img_1.png" class="h-screen object-cover" />
    <p class="absolute top-[324px] left-[128px] text-[24px] text-white font-light">A School Of Life</p>
    <p class="absolute top-[356px] left-[128px] text-[48px] text-white font-light">DOJO HOUSE OF SSJC</p>
    <p class="absolute bottom-[46px] left-[128px] text-[16px] text-white font-light">Scroll down to learn more</p>
  </div>

  <br class="py-6" />

  <!-- Our Concept -->

  <div class="font-light text-[16px] my-6 px-24 grid grid-cols-2">
    <p class="text-[#7C7C7C]">Introduction</p>
    <p class="justify-self-end">House of SSJC</p>
    <hr class="my-4 col-span-2">
  </div>

  <div>
    <Bloc1>
      <template #title>
        <img src="/our_concept.png" class="font-light text-[48px]" />
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

    <div class="grid grid-cols-3 py-4">
      <img src="/img_2.png" class="col-start-2 col-span-2" />
    </div>

    <div class="pb-24">
      <div class="bg-[#F6F6F6] mx-20 py-20 grid grid-cols-3">
        <img src="/citation.png" class="mx-24" />
        <div>
          <p class="text-[24px] col-span-2">
            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</b>
            <br />
          </p>
          <p class="pt-16">
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
        <img src="/martial_art_school.png" class="text-[48px]">
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
    <div class="relative">
      <div class="grid grid-cols-3 pt-24 pb-96 bg-[#F6F6F6]">
        <img src="/img_4.png" class="pt-8 pb-8 pl-24" />
        <div class="col-span-2">
          <img src="/Judo.png" class="pt-4 pb-24" />
          <p class="text-[24px] text-[#7C7C7C] pr-12 mr-12 pb-12">
            "The purpose of the study of judo is to perfect yourself and to contribute to society” Kano Jigoro
          </p>
          <hr class="py-6 pr-12" />
          <p class="text-[18px] pr-16 pb-16 mr-12">
            Beyond being one of the most prestigious and universal Olympic disciplines, judo is more than a sport - it is
            also an acknowledged educational tool and a way of life enriched by a moral code and ethical values that have
            firmly withstood the trials of life.
            Respect, honesty, self-control, friendship, courtesy, honor, courage and modesty - the eight values of the
            judo
            moral code are taught to every judoka from the first time they enter a dojo. This code is entirely
            incompatible
            with procedures that would go against the spirit of the sport.
          </p>
          <button class="btn-primary">
            Book A Session
          </button>
        </div>
      </div>
      <img src="/img_5.png" class="relative -top-64 left-36 -mb-48" />

      <div class="bg-[url('/img_6.png')] bg-contain bg-center bg-no-repeat h-96">
        <p class="pl-72 mr-[600px] text-white text-[24px] pt-24 pb-12">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <button class="btn-primary ml-72 text-white">
          Contact Us
        </button>
      </div>
    </div>
  </div>

  <br class="py-6" />

  <!-- The Founders -->

  <div>
    <img src="/founders.png" class="pt-28 pb-24 pl-24" />

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
        dataList: [{
          title: "National Senior Championships Vietnam",
          description: ["1st: Vietnam Championships, Vung Tau. Team. 2022"]
        }, {
          title: "National Cadet Championships",
          description: ["1st: French U17 Championships, Paris. U55. 2002"]
        }, {
          title: "National Senior Championships",
          description: [
            "3rd: French Championships, Paris. U55. 2008",
            "3rd: French Championships, Clermont Ferrand. U60. 2007"
          ]
        }, {
          title: "International Tournaments",
          description: [
            "2nd: Coupe Paris Kyoto. Open M.U66 2009",
            "1st: Coupe Paris Tokyo. U66. 2009",
            "1st: International U20 Tournament Open Sens U60. 2005",
            "3rd: Tournoi European Cadet Strasbourg U55. 2001"
          ]
        }],
        descriptionText: "A French entrepreneur and ex high level judo athlete, Benjamin created his own graphics studio in 2010. In 2018, he came back to his grandparents’ country, Vietnam, to start his new project the Dojo House.",
        img: "/img_7.png"
      }, {
        name: "SORAYA FERHANI NGUYEN",
        dataList: [{
          title: "World Cup Cadets",
          description: ["3rd: Tournoi de France, Paris. U52. 2003"]
        }, {
          title: "National Junior Championships",
          description: ["1st: French U20 Championships Paris. U52. 2005", "3rd: French U20 Championships Paris. U52. 2006"]
        }, {
          title: "International Junior Tournaments",
          description: ["3rd: International U20 Tournament Open Sens U52. 2006"]
        }, {
          title: "University Championships seniors",
          description: ["1st: French UNSS Championships. U52. 2007"]
        }],
        descriptionText: "A French former judo high level judo athlete, Soraya is the cofounder of the Dojo House. Passionate about the sport, she started judo when she was 6 years old, and competed at a high level before being forced to discontinue due to injury. The Dojo House is now a means for her to transmit her passion to her students.",
        img: "/img_8.png"
      }]
    }
  },
  methods: {
  }
}
</script>

<!-- WIP modulariser founders + planning -->