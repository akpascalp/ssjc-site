<template>
  <svg width="400" height="100">
    <text x="0" y="65" class="text-[64px]" id="concept-title">
      Our Concept
    </text>
    <line x1="0" y1="80" x2="30" y2="80" stroke="black" stroke-width="5" opacity="0" id="concept-underline" />
    <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-width="5" opacity="0" id="concept-overline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#concept-underline", {
      x: 150,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#concept-title"
    })
    gsap.to("#concept-overline", {
      x: 20,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#concept-title"
    })
    gsap.to("#concept-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#concept-title"
    })
  }
}
</script>
