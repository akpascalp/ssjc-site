<template>
  <svg width="400" height="100">
    <text x="0" y="65" class="text-[64px]" id="founders-title">
      The Founders
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="founders-underline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#founders-underline", {
      x: 160,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#founders-title"
    })
    gsap.to("#founders-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#founders-title"
    })
  }
}
</script>
