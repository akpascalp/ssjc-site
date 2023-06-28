<template>
  <svg width="400" height="200">
    <text x="0" y="65" class="text-[64px]" id="helping-title1">
      Helping those
    </text>
    <text x="0" y="150" class="text-[64px]" id="helping-title2">
      in needs
    </text>
    <line x1="0" y1="80" x2="30" y2="80" stroke="black" stroke-width="5" opacity="0" id="helping-underline" />
    <line x1="0" y1="162" x2="30" y2="162" stroke="black" stroke-width="5" opacity="0" id="helping-overline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#helping-underline", {
      x: 58,
      opacity: 1,
      duration: 1.5,
      repeatRefresh: true,
      scrollTrigger: "#helping-title2"
    })
    gsap.to("#helping-overline", {
      x: 215,
      opacity: 1,
      duration: 1.5,
      repeatRefresh: true,
      scrollTrigger: "#helping-title2"
    })
    gsap.to("#helping-title1", {
      x: 10,
      duration: 1,
      scrollTrigger: "#helping-title2"
    })
    gsap.to("#helping-title2", {
      x: 10,
      duration: 1.5,
      scrollTrigger: "#helping-title2"
    })
  }
}
</script>
