<template>
  <svg width="500" height="100">
    <text x="0" y="65" class="text-[64px]" id="sport-title">
      Work & Sport
    </text>
    <line x1="0" y1="80" x2="30" y2="80" stroke="black" stroke-width="5" opacity="0" id="sport-underline" />
    <line x1="0" y1="80" x2="30" y2="80" stroke="black" stroke-width="5" opacity="0" id="sport-overline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#sport-underline", {
      x: 75,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#sport-title"
    })
    gsap.to("#sport-overline", {
      x: 320,
      opacity: 1,
      duration: 1.5,
      repeatRefresh: true,
      scrollTrigger: "#sport-title"
    })
    gsap.to("#sport-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#sport-title"
    })
  }
}
</script>
