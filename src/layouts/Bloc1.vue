<template>
  <div class="pt-4 pb-20">
    <div class="pt-2 pb-4 pl-2 sm:pl-24">
      <slot name="title" />
    </div>
    <div class="grid px-4 gap-y-6 min-[1100px]:grid-cols-3 sm:grid-cols-2 sm:px-0 pt-2">
      <p class="text-[16px] text-[#7C7C7C] min-[1100px]:col-start-2 sm:mr-32">
        <slot name="text1" />
      </p>
      <div class="grid sm:-ml-20">
        <p class="text-[16px] sm:pr-24 pb-12">
          <slot name="text2" />
        </p>
        <button class="btn-primary justify-self-center sm:justify-self-start">
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