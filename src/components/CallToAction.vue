<template>
  <div class="grid m-2 sm:h-96 content-start justify-items-center bg-[url('/img_6.png')] sm:bg-contain bg-center bg-no-repeat text-white">
    <p class="relative pt-2 m-2 sm:w-5/12 text-[24px] sm:pt-24 sm:pb-12 sm:-ml-24 min-[2130px]:w-1/3 min-[2130px]:-ml-12">
      {{ text }}
      <button class="sm:absolute sm:-bottom-16 sm:left-0 btn-secondary mb-2">
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

