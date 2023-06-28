<template>
  <svg width="500" height="100">
    <text x="0" y="65" class="text-[64px]" id="working-title">
      Working Space
    </text>
    <line x1="0" y1="80" x2="30" y2="80" stroke="black" stroke-width="5" opacity="0" id="working-underline" />
    <line x1="0" y1="80" x2="30" y2="80" stroke="black" stroke-width="5" opacity="0" id="working-overline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#working-underline", {
      x: 75,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#working-title"
    })
    gsap.to("#working-overline", {
      x: 345,
      opacity: 1,
      duration: 1.5,
      repeatRefresh: true,
      scrollTrigger: "#working-title"
    })
    gsap.to("#working-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#working-title"
    })
  }
}
</script>
