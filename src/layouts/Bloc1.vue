<template>
  <div class="py-8">
    <div class="py-8 pl-24">
      <slot name="title" />
    </div>
    <div class="grid grid-cols-3 pt-2">
      <p class="font-barlow text-[16px] col-start-2 mr-32">
        <slot name="text1" />
      </p>
      <div class="-ml-20">
        <p class="font-barlow text-[20px] pr-16 pb-12">
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