<template>
  <svg width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="shadow-title">
      Shadow Judo
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="shadow-underline" />
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="shadow-overline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#shadow-underline", {
      x: 83,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#shadow-title"
    })
    gsap.to("#shadow-overline", {
      x: 280,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#shadow-title"
    })
    gsap.to("#shadow-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#shadow-title"
    })
  }
}
</script>
