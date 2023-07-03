<template>
  <!-- FIXME v-if not working ? -->
  <svg v-show="screenWidth < 900" width="255" height="155">
    <text x="0" y="65" class="text-[64px]" id="working-title-small-up">
      Working
    </text>
    <text x="0" y="140" class="text-[64px]" id="working-title-small-down">
      Space
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="working-underline-small" />
    <line x1="0" y1="150" x2="30" y2="150" stroke="black" stroke-width="5" opacity="0" id="working-overline-small" />
  </svg>
  <svg v-show="screenWidth >= 900" width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="working-title">
      Working Space
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="working-underline" />
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="working-overline" />
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
      gsap.to("#working-underline-small", {
        x: 76,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#working-title-small-up"
      })
      gsap.to("#working-overline-small", {
        x: 86,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#working-title-small-up"
      })
      gsap.to("#working-title-small-up", {
        x: 10,
        duration: 1,
        scrollTrigger: "#working-title-small-up"
      })
      gsap.to("#working-title-small-down", {
        x: 10,
        duration: 1,
        scrollTrigger: "#working-title-small-up"
      })
    } else {
      gsap.to("#working-underline", {
        x: 76,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#working-title"
      })
      gsap.to("#working-overline", {
        x: 345,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#working-title"
      })
      gsap.to("#working-title", {
        x: 10,
        duration: 1,
        scrollTrigger: "#working-title"
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
