<template>
  <div class="py-4">
    <div class="pt-2 pb-4 pl-24">
      <slot name="title" />
    </div>
    <div class="grid min-[1100px]:grid-cols-3 grid-cols-2 pt-2">
      <p class="text-[16px] text-[#7C7C7C] min-[1100px]:col-start-2 mr-32">
        <slot name="text1" />
      </p>
      <div class="-ml-20">
        <p class="text-[16px] pr-24 pb-12">
          <slot name="text2" />
        </p>
        <button class="btn-primary">
          <!-- Need to be a slot ?? -->
          <slot name="button" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: 
}
</script>