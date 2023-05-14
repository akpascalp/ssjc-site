<template>
  <div class="grid pr-24">
    <div class="grid grid-cols-2">
      <div class="text-[36px] pl-24 w-3"><b>{{ title }}</b>
      </div>
      <div>
        <div v-for="data in dataList">
          <p class="text-[24px] pb-2"><b>{{ data.title }}</b></p>
          <p v-for="description in data.description" class="text-[18px] pb-2">{{ description }}</p>
          <hr class="pb-2">
        </div>
        <div class="text-[16px] pt-12">
          {{ descriptionText }}
        </div>
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