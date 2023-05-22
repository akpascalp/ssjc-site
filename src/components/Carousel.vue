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
      <button @click="prev" class="absolute top-1/2 left-20 m-4 opacity-50 hover:opacity-100 ease-in duration-100">
        <svg width="55" height="55" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="35" r="35" fill="black" />
          <path d="M29 31V34H45V36H29V39L25 35L29 31Z" fill="white" />
        </svg>
      </button>
      <button @click="next" class="absolute top-1/2 right-20 m-4 opacity-50 hover:opacity-100 ease-in duration-100">
        <svg width="55" height="55" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="35" cy="35" r="35" fill="black" />
          <path d="M41 31V34H25V36H41V39L45 35L41 31Z" fill="white" />
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
