<template>
  <div class="grid pr-12">
    <div class="grid grid-cols-2">
      <div class="font-barlow text-[36px] font-bold pl-24 w-3">{{ title }}
      </div>
      <div>
        <div v-for="data in dataList">
          <p class="font-barlow text-[20px] font-bold pb-2">{{ data.title }}</p>
          <p v-for="description in data.description" class="font-barlow text-[18px] pb-2">{{ description }}</p>
          <hr class="pb-2">
        </div>
        <div class="font-barlow text-[20px] pt-12">
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