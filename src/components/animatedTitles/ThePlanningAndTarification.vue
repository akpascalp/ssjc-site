<template>
  <!-- FIXME v-if not working ? -->
  <svg v-show="screenWidth < 900" width="455" height="245">
    <text x="0" y="65" class="text-[64px]" id="planning-title-small1">
      The Planning
    </text>
    <text x="0" y="140" class="text-[64px]" id="planning-title-small2">
      &
    </text>
    <text x="0" y="220" class="text-[64px]" id="planning-title-small3">
      Tarification
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="planning-underline-small" />
    <line x1="0" y1="230" x2="30" y2="230" stroke="black" stroke-width="5" opacity="0" id="planning-overline-small" />
  </svg>
  <svg v-show="screenWidth >= 900" width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="planning-title1">
      The Planning & Tarification
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="planning-overline" />
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="planning-underline" />
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
      gsap.to("#planning-underline-small", {
        x: 172,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#planning-title-small1"
      })
      gsap.to("#planning-overline-small", {
        x: 170,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#planning-title-small1"
      })
      gsap.to("#planning-title-small1", {
        x: 5,
        duration: 1,
        scrollTrigger: "#planning-title-small1"
      })
      gsap.to("#planning-title-small2", {
        x: 5,
        duration: 1,
        scrollTrigger: "#planning-title-small1"
      })
      gsap.to("#planning-title-small3", {
        x: 5,
        duration: 1,
        scrollTrigger: "#planning-title-small1"
      })
    } else {
      gsap.to("#planning-overline", {
        x: 176,
        opacity: 1,
        duration: 1.5,
        repeatRefresh: true,
        scrollTrigger: "#planning-title1"
      })
      gsap.to("#planning-underline", {
        x: 478,
        opacity: 1,
        duration: 1.5,
        repeatRefresh: true,
        scrollTrigger: "#planning-title1"
      })
      gsap.to("#planning-title1", {
        x: 10,
        duration: 1,
        scrollTrigger: "#planning-title1"
      })
      gsap.to("#planning-title2", {
        x: 10,
        duration: 1,
        scrollTrigger: "#planning-title1"
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
