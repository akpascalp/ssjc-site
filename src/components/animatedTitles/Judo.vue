<template>
  <svg width="400" height="100">
    <text x="0" y="65" class="text-[64px]" id="judo-title">
      Judo
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="judo-underline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#judo-underline", {
      x: 103,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#judo-title"
    })
    gsap.to("#judo-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#judo-title"
    })
  }
}
</script>
