<template>
  <svg width="400" height="100" class="title-scroll">
    <text x="0" y="65" id="title" class="text-[64px]">
      Our Concept
    </text>
    <line x1="0" y1="80" x2="30" y2="80" stroke="black" stroke-width="5" opacity="0" id="underline" />
    <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-width="5" opacity="0" id="overline" />
  </svg>
</template>

<script>
import gsap from 'gsap';
import utils from '@/helpers/utils';

export default {
  mounted() {
    window.addEventListener('scroll', () => {
      utils.handleScrollAnimation(document.querySelector(".title-scroll"), 75, this.animate, this.reset);
    })
  },
  methods: {
    animate() {
      gsap.to("#underline", {
        x: 150,
        opacity: 1,
        duration: 1,
        repeatRefresh: true
      })
      gsap.to("#overline", {
        x: 20,
        opacity: 1,
        duration: 1,
        repeatRefresh: true
      })
      gsap.to("#title", {
        x: 10,
        duration: 1,
      })
    },
    reset() {
      gsap.to("#underline", {
        x: 0,
        opacity: 0,
        duration: 1,
        repeatRefresh: true
      })
      gsap.to("#overline", {
        x: 0,
        opacity: 0,
        duration: 1,
        repeatRefresh: true
      })
    }
  }
}
</script>