<template>
  <div class="relative mx-24 py-12 h-96 pb-96">
    <div>
      <div v-for="(image, index) in images" :key="index"
        class="transition-opacity duration-150 ease-in mx-24 bg-neutral-300"
        :class="index === current ? 'opacity-1' : 'opacity-0'">
        <img :src="image.src" :alt="image.alt" class="object-contain h-96 absolute left-0 right-0 m-auto">
      </div>
    </div>
    <div>
      <button @click="prev" class="absolute top-1/2 m-4 opacity-50 hover:opacity-100 ease-in duration-100">
        <svg width="45" height="45" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="35" r="35" transform="matrix(-1 0 0 1 70 0)" fill="black" />
          <path
            d="M25.5 34.134C24.8333 34.5189 24.8333 35.4811 25.5 35.866L40.5 44.5263C41.1667 44.9112 42 44.4301 42 43.6603L42 26.3397C42 25.5699 41.1667 25.0888 40.5 25.4737L25.5 34.134Z"
            fill="white" />
        </svg>
      </button>
      <button @click="next" class="absolute top-1/2 right-0 m-4 opacity-50 hover:opacity-100 ease-in duration-100">
        <svg width="45" height="45" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="35" r="35" fill="black" />
          <path
            d="M45.5 34.134C46.1667 34.5189 46.1667 35.4811 45.5 35.866L30.5 44.5263C29.8333 44.9112 29 44.4301 29 43.6603L29 26.3397C29 25.5699 29.8333 25.0888 30.5 25.4737L45.5 34.134Z"
            fill="white" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      current: 0
    }
  },
  methods: {
    next() {
      this.current = (this.current + 1) % this.images.length
    },
    prev() {
      this.current = (this.current - 1 + this.images.length) % this.images.length
    }
  }
}
</script>
