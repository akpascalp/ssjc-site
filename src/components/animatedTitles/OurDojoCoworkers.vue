<template>
  <svg width="600" height="100">
    <text x="0" y="65" class="text-[64px]" id="coworkers-title">
      Our Dojo Coworkers
    </text>
    <line x1="0" y1="80" x2="30" y2="80" stroke="black" stroke-width="5" opacity="0" id="coworkers-underline" />
    <line x1="0" y1="80" x2="30" y2="80" stroke="black" stroke-width="5" opacity="0" id="coworkers-overline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#coworkers-underline", {
      x: 66,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#coworkers-title"
    })
    gsap.to("#coworkers-overline", {
      x: 340,
      opacity: 1,
      duration: 1.5,
      repeatRefresh: true,
      scrollTrigger: "#coworkers-title"
    })
    gsap.to("#coworkers-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#coworkers-title"
    })
  }
}
</script>
