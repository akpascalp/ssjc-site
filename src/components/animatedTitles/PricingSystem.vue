<template>
  <!-- FIXME v-if not working ? -->
  <svg v-show="screenWidth < 900" width="315" height="155">
    <text x="0" y="65" class="text-[64px]" id="pricing-title-small-up">
      Pricing
    </text>
    <text x="0" y="140" class="text-[64px]" id="pricing-title-small-down">
      System
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="pricing-underline-small" />
    <line x1="0" y1="150" x2="30" y2="150" stroke="black" stroke-width="5" opacity="0" id="pricing-overline-small" />
  </svg>
  <svg v-show="screenWidth >= 900" width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="pricing-title">
      Pricing System
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="pricing-underline" />
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="pricing-overline" />
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
      gsap.to("#pricing-underline-small", {
        x: 58,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#pricing-title-small-up"
      })
      gsap.to("#pricing-overline-small", {
        x: 120,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#pricing-title-small-up"
      })
      gsap.to("#pricing-title-small-up", {
        x: 10,
        duration: 1,
        scrollTrigger: "#pricing-title-small-up"
      })
      gsap.to("#pricing-title-small-down", {
        x: 10,
        duration: 1,
        scrollTrigger: "#pricing-title-small-up"
      })
    } else {
      gsap.to("#pricing-underline", {
        x: 58,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#pricing-title"
      })
      gsap.to("#pricing-overline", {
        x: 328,
        opacity: 1,
        duration: 1,
        repeatRefresh: true,
        scrollTrigger: "#pricing-title"
      })
      gsap.to("#pricing-title", {
        x: 10,
        duration: 1,
        scrollTrigger: "#pricing-title"
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
