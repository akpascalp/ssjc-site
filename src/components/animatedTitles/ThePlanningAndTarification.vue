<template>
  <svg width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="planning-title">
      The Planning & Tarification
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="planning-underline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#planning-underline", {
      x: 176,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#planning-title"
    })
    gsap.to("#planning-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#planning-title"
    })
  }
}
</script>
