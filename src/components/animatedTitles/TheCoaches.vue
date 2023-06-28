<template>
  <svg width="400" height="100">
    <text x="0" y="65" class="text-[64px]" id="coaches-title">
      The Coaches
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="coaches-underline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#coaches-underline", {
      x: 175,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#coaches-title"
    })
    gsap.to("#coaches-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#coaches-title"
    })
  }
}
</script>
