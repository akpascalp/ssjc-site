<template>
  <div class="bg-[url('/img_6.png')] bg-contain bg-center bg-no-repeat h-96">
    <p class="pl-72 mr-96 max-[1130px]:mr-16 max-[1130px]:pl-12 text-white text-[24px] pt-20 pb-12">
      {{ text }}
    </p>
    <button class="btn-secondary sm:ml-72 text-white px-16">
      {{ btnText }}
    </button>
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
  // computed: {  // FIXME not always working, why ??
  //   bgUrlFull() {
  //     return "bg-[url('" + this.bgUrl + "')]"
  //   }
  // }
}
</script>

