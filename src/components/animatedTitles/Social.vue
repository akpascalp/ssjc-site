<template>
  <svg width="200" height="100">
    <text x="0" y="65" class="text-[64px]" id="social-title">
      Social
    </text>
    <line x1="0" y1="80" x2="30" y2="80" stroke="black" stroke-width="5" opacity="0" id="social-underline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to("#social-underline", {
      x: 133,
      opacity: 1,
      duration: 1,
      repeatRefresh: true,
      scrollTrigger: "#social-title"
    })
    gsap.to("#social-title", {
      x: 10,
      duration: 1,
      scrollTrigger: "#social-title"
    })
  }
}
</script>
