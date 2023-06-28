<template>
  <svg width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="pricing-title">
      Pricing System
    </text>
    <line x1="0" y1="80" x2="30" y2="80" stroke="black" stroke-width="5" opacity="0" id="pricing-underline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#pricing-underline", {
      x: 57,
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
}
</script>
