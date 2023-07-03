<template>
  <!-- FIXME v-if not working ? -->
  <svg v-show="screenWidth < 900" width="315" height="155">
    <text x="0" y="65" class="text-[64px]" id="coworkers-title-small-up">
      Our Dojo
    </text>
    <text x="0" y="140" class="text-[64px]" id="coworkers-title-small-down">
      Coworkers
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="coworkers-underline-small" />
    <line x1="0" y1="25" x2="30" y2="25" stroke="black" stroke-width="5" opacity="0" id="coworkers-overline-small" />
  </svg>
  <svg v-show="screenWidth >= 900" width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="coworkers-title">
      Our Dojo Coworkers
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="coworkers-underline" />
    <line x1="0" y1="25" x2="30" y2="25" stroke="black" stroke-width="5" opacity="0" id="coworkers-overline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    this.updateScreenWidth()
    if (this.screenWidth < 900) {
      gsap.to("#coworkers-underline-small", {
        x: 184,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#coworkers-title-small-up"
      })
      gsap.to("#coworkers-overline-small", {
        x: 238,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#coworkers-title-small-up"
      })
      gsap.to("#coworkers-title-small-up", {
        x: 10,
        duration: 1,
        scrollTrigger: "#coworkers-title-small-up"
      })
      gsap.to("#coworkers-title-small-down", {
        x: 10,
        duration: 1,
        scrollTrigger: "#coworkers-title-small-up"
      })
    } else {
      gsap.to("#coworkers-underline", {
        x: 184,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#coworkers-title"
      })
      gsap.to("#coworkers-overline", {
        x: 238,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#coworkers-title"
      })
      gsap.to("#coworkers-title", {
        x: 10,
        duration: 1,
        scrollTrigger: "#coworkers-title"
      })
    }
  },
  data() {
    return {
      screenWidth: 0,
    };
  },
  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    }
  },
}
</script>
