<template>
  <!-- FIXME v-if not working ? -->
  <svg v-show="screenWidth < 900" width="255" height="160">
    <text x="0" y="65" class="text-[64px]" id="interval-title-small-up">
      Interval
    </text>
    <text x="0" y="140" class="text-[64px]" id="interval-title-small-down">
      Training
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="interval-underline-small" />
    <line x1="0" y1="150" x2="30" y2="150" stroke="black" stroke-width="5" opacity="0" id="interval-overline-small" />
  </svg>
  <svg v-show="screenWidth >= 900" width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="interval-title">
      Interval Training
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="interval-underline" />
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="interval-overline" />
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
      gsap.to("#interval-underline-small", {
        x: 76,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#interval-title-small-up"
      })
      gsap.to("#interval-overline-small", {
        x: 90,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#interval-title-small-up"
      })
      gsap.to("#interval-title-small-up", {
        x: 10,
        duration: 1,
        scrollTrigger: "#interval-title-small-up"
      })
      gsap.to("#interval-title-small-down", {
        x: 10,
        duration: 1,
        scrollTrigger: "#interval-title-small-up"
      })
    } else {
      gsap.to("#interval-underline", {
        x: 76,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#interval-title"
      })
      gsap.to("#interval-overline", {
        x: 315,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#interval-title"
      })
      gsap.to("#interval-title", {
        x: 10,
        duration: 1,
        scrollTrigger: "#interval-title"
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
