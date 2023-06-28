<template>
  <svg width="900" height="100">
    <text x="0" y="65" class="text-[64px]" id="bjj-title">
      Brazilian Jiu-Jitsu
    </text>
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="bjj-underline" />
    <line x1="0" y1="75" x2="30" y2="75" stroke="black" stroke-width="5" opacity="0" id="bjj-overline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#bjj-underline", {
      x: 72,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#bjj-title"
    })
    gsap.to("#bjj-overline", {
      x: 315,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#bjj-title"
    })
    gsap.to("#bjj-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#bjj-title"
    })
  }
}
</script>
