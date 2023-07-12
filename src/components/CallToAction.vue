<template>
  <div class="grid mx-20 sm:h-[421px] content-start bg-[url('/img_6.png')] bg-center bg-cover bg-no-repeat text-white">
    <p class="relative m-2 sm:w-5/12 md:w-3/4 lg:w-1/2 text-[24px] sm:pt-24 sm:pb-12 sm:ml-40">
      {{ text }}
      <button class="sm:absolute sm:-bottom-20 sm:left-0 btn-secondary">
        {{ btnText }}
      </button>
    </p>
  </div>
</template>

<script>
import { stringifyQuery } from 'vue-router';

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    btnText: {
      type: String,
      required: true
    },
    bgUrl: {
      type: String,
      required: true
    }
  },
}
</script>

