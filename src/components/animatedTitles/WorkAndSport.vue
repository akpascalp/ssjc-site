<template>
  <!-- FIXME v-if not working ? -->
  <svg v-show="screenWidth < 900" width="255" height="155">
    <text x="0" y="65" class="text-[64px]" id="sport-title-small-up">
      Work &
    </text>
    <text x="0" y="140" class="text-[64px]" id="sport-title-small-down">
      Sport
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="sport-underline-small" />
    <line x1="0" y1="150" x2="30" y2="150" stroke="black" stroke-width="5" opacity="0" id="sport-overline-small" />
  </svg>
  <svg v-show="screenWidth >= 900" width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="sport-title">
      Work & Sport
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="sport-underline" />
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="sport-overline" />
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
      gsap.to("#sport-underline-small", {
        x: 76,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#sport-title-small-up"
      })
      gsap.to("#sport-overline-small", {
        x: 86,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#sport-title-small-up"
      })
      gsap.to("#sport-title-small-up", {
        x: 10,
        duration: 1,
        scrollTrigger: "#sport-title-small-up"
      })
      gsap.to("#sport-title-small-down", {
        x: 10,
        duration: 1,
        scrollTrigger: "#sport-title-small-up"
      })
    } else {
      gsap.to("#sport-underline", {
        x: 76,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#sport-title"
      })
      gsap.to("#sport-overline", {
        x: 320,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#sport-title"
      })
      gsap.to("#sport-title", {
        x: 10,
        duration: 1,
        scrollTrigger: "#sport-title"
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
