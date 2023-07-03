<template>
  <svg width="370" height="200">
    <text x="0" y="65" class="text-[64px]" id="martial-title1">
      The Martial
    </text>
    <text x="0" y="150" class="text-[64px]" id="martial-title2">
      Art School
    </text>
    <line x1="0" y1="160" x2="30" y2="160" stroke="black" stroke-width="5" opacity="0" id="martial-underline" />
    <line x1="0" y1="110" x2="30" y2="110" stroke="black" stroke-width="5" opacity="0" id="martial-overline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#martial-underline", {
      x: 215,
      opacity: 1,
      duration: 1.5,
      repeatRefresh: true,
      scrollTrigger: "#martial-title2"
    })
    gsap.to("#martial-overline", {
      x: 251,
      opacity: 1,
      duration: 1.5,
      repeatRefresh: true,
      scrollTrigger: "#martial-title2"
    })
    gsap.to("#martial-title1", {
      x: 10,
      duration: 1,
      scrollTrigger: "#martial-title2"
    })
    gsap.to("#martial-title2", {
      x: 10,
      duration: 1.5,
      scrollTrigger: "#martial-title2"
    })
  }
}
</script>
