<template>
  <svg width="315" height="100">
    <text x="0" y="65" class="text-[64px] text-center" id="vision-title">
      Our Vision
    </text>
    <line x1="0" y1="80" x2="30" y2="80" stroke="black" stroke-width="5" opacity="0" id="vision-underline" />
    <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-width="5" opacity="0" id="vision-overline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#vision-underline", {
      x: 242,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#vision-title"
    })
    gsap.to("#vision-overline", {
      x: 20,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#vision-title"
    })
    gsap.to("#vision-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#vision-title"
    })
  }
}
</script>
