<template>
  <div class="grid px-4 sm:pr-24">
    <div class="sm:grid sm:grid-cols-2">
      <div class="text-[36px] sm:pl-24 w-3 font-[500]">{{ title }}
      </div>
      <div>
        <div v-for="data in dataList">
          <p class="text-[24px] py-6">{{ data }}</p>
          <hr class="pb-2">
        </div>
      </div>
      <div class="text-[16px] justify-self-center pt-20 pb-12 col-start-1 col-span-2 min-[1100px]:col-start-2">
        {{ descriptionText }}
      </div>
    </div>
    <img :src="img" class="pt-12 pr-2 justify-self-end" />
    <div class="py-12" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    dataList: {
      type: Array,
      required: true
    },
    descriptionText: {
      type: String,
    },
    img: {
      type: String
    }
  },
}
</script>