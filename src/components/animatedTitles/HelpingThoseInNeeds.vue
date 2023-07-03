<template>
  <!-- FIXME v-if not working ? -->
  <svg v-show="screenWidth < 900" width="255" height="245">
    <text x="0" y="65" class="text-[64px]" id="helping-title-small1">
      Helping
    </text>
    <text x="0" y="140" class="text-[64px]" id="helping-title-small2">
      those
    </text>
    <text x="0" y="220" class="text-[64px]" id="helping-title-small3">
      in needs
    </text>
    <line x1="0" y1="230" x2="30" y2="230" stroke="black" stroke-width="5" opacity="0" id="helping-underline-small" />
    <line x1="0" y1="180" x2="30" y2="180" stroke="black" stroke-width="5" opacity="0" id="helping-overline-small" />
  </svg>
  <svg v-show="screenWidth >= 900" width="400" height="200">
    <text x="0" y="65" class="text-[64px]" id="helping-title1">
      Helping those
    </text>
    <text x="0" y="150" class="text-[64px]" id="helping-title2">
      in needs
    </text>
    <line x1="0" y1="110" x2="30" y2="110" stroke="black" stroke-width="5" opacity="0" id="helping-overline" />
    <line x1="0" y1="162" x2="30" y2="162" stroke="black" stroke-width="5" opacity="0" id="helping-underline" />
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
      gsap.to("#helping-underline-small", {
        x: 115,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#helping-title-small1"
      })
      gsap.to("#helping-overline-small", {
        x: 150,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#helping-title-small1"
      })
      gsap.to("#helping-title-small1", {
        x: 10,
        duration: 1,
        scrollTrigger: "#helping-title-small1"
      })
      gsap.to("#helping-title-small2", {
        x: 10,
        duration: 1,
        scrollTrigger: "#helping-title-small1"
      })
      gsap.to("#helping-title-small3", {
        x: 10,
        duration: 1,
        scrollTrigger: "#helping-title-small1"
      })
    } else {
      gsap.to("#helping-overline", {
        x: 148,
        opacity: 1,
        duration: 1.5,
        repeatRefresh: true,
        scrollTrigger: "#helping-title1"
      })
      gsap.to("#helping-underline", {
        x: 115,
        opacity: 1,
        duration: 1.5,
        repeatRefresh: true,
        scrollTrigger: "#helping-title1"
      })
      gsap.to("#helping-title1", {
        x: 10,
        duration: 1,
        scrollTrigger: "#helping-title1"
      })
      gsap.to("#helping-title2", {
        x: 10,
        duration: 1,
        scrollTrigger: "#helping-title1"
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
