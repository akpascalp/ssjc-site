<template>
  <!-- FIXME v-if not working ? -->
  <svg v-show="screenWidth < 900" width="255" height="155">
    <text x="0" y="65" class="text-[64px]" id="bjj-title-small-up">
      Brazilian
    </text>
    <text x="0" y="140" class="text-[64px]" id="bjj-title-small-down">
      Jiu-Jitsu
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="bjj-underline-small" />
    <line x1="0" y1="150" x2="30" y2="150" stroke="black" stroke-width="5" opacity="0" id="bjj-overline-small" />
  </svg>
  <svg v-show="screenWidth >= 900" width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="bjj-title">
      Brazilian Jiu-Jitsu
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="bjj-underline" />
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="bjj-overline" />
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
      gsap.to("#bjj-underline-small", {
        x: 72,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#bjj-title-small-up"
      })
      gsap.to("#bjj-overline-small", {
        x: 48,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#bjj-title-small-up"
      })
      gsap.to("#bjj-title-small-up", {
        x: 10,
        duration: 1,
        scrollTrigger: "#bjj-title-small-up"
      })
      gsap.to("#bjj-title-small-down", {
        x: 10,
        duration: 1,
        scrollTrigger: "#bjj-title-small-up"
      })
    } else {
      gsap.to("#bjj-underline", {
        x: 72,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#bjj-title"
      })
      gsap.to("#bjj-overline", {
        x: 315,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#bjj-title"
      })
      gsap.to("#bjj-title", {
        x: 10,
        duration: 1,
        scrollTrigger: "#bjj-title"
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
