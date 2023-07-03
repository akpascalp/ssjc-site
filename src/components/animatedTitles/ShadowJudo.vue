<template>
  <!-- FIXME v-if not working ? -->
  <svg v-show="screenWidth < 900" width="255" height="155">
    <text x="0" y="65" class="text-[64px]" id="shadow-title-small-up">
      Shadow
    </text>
    <text x="0" y="140" class="text-[64px]" id="shadow-title-small-down">
      Judo
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="shadow-underline-small" />
    <line x1="0" y1="150" x2="30" y2="150" stroke="black" stroke-width="5" opacity="0" id="shadow-overline-small" />
  </svg>
  <svg v-show="screenWidth >= 900" width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="shadow-title">
      Shadow Judo
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="shadow-underline" />
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="shadow-overline" />
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
      gsap.to("#shadow-underline-small", {
        x: 83,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#shadow-title-small-up"
      })
      gsap.to("#shadow-overline-small", {
        x: 32,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#shadow-title-small-up"
      })
      gsap.to("#shadow-title-small-up", {
        x: 10,
        duration: 1,
        scrollTrigger: "#shadow-title-small-up"
      })
      gsap.to("#shadow-title-small-down", {
        x: 10,
        duration: 1,
        scrollTrigger: "#shadow-title-small-up"
      })
    } else {
      gsap.to("#shadow-underline", {
        x: 83,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#shadow-title"
      })
      gsap.to("#shadow-overline", {
        x: 280,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#shadow-title"
      })
      gsap.to("#shadow-title", {
        x: 10,
        duration: 1,
        scrollTrigger: "#shadow-title"
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
