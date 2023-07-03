<template>
  <svg width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="taiso-title">
      Taïso
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="taiso-underline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#taiso-underline", {
      x: 116,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#taiso-title"
    })
    gsap.to("#taiso-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#taiso-title"
    })
  }
}
</script>
