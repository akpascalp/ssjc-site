<template>
  <div class="px-4 sm:px-12">
    <div class="py-16">
      <GetInTouch />
    </div>
    <img src="/img_14.png" class="place-self-center pb-24" width="1200" />

    <div class="grid gap-y-8 sm:grid-cols-2 place-content-between">
      <div>
        <p class="text-[24px] pb-8">Dojo House of SSJC</p>
        <p class="text-[16px] text-[#7C7C7C] underline">17 Đường Số 16, Thảo Điền, Quận 2,<br />
          Thành phố Hồ Chí Minh, <br />
          Viêt Nam
          <a href="https://maps.google.com/" class="text-blue-500">(View on map)</a>
        </p>
      </div>
      <div class="sm:ml-28">
        <p class="text-[24px] pb-8">Opening Hours</p>
        <div class="grid grid-rows-4 grid-flow-col gap-1 text-[16px] text-[#7C7C7C]">
          <p>Mon 8am-20:30pm</p>
          <p>Tue 6:30am-22pm</p>
          <p>Wed 8am-20:30pm</p>
          <p>Thu 6:30am-22pm</p>
          <p>Fri 8am-20:30pm</p>
          <p>Sat 6:30am-22pm</p>
          <p>Sun Closed</p>
        </div>

        <p class="text-[24px] pt-12 pb-8">Phone Number</p>
        <p class="text-[16px] text-[#7C7C7C] underline">
          +84 342 688 461
        </p>
      </div>
    </div>

    <hr class="mt-24" />

    <div class="grid grid-cols-2 pt-12 pb-8">
      <p class="text-[36px]">Contact Us</p>
      <p class="text-[16px] text-[#7C7C7C] justify-self-end place-self-center">All fields are required</p>
    </div>

    <form>
      <div v-for="field in fields" class="grid grid-cols-1 gap-3 pb-8">
        <label class="text-[16px]">{{ field.title }}</label>
        <label class="text-[16px] text-[#7C7C7C]">{{ field.placeholder }}</label>
        <input type="text" v-model="dataForm[field.key]"
          class="w-full border-0 border-b-2 border-gray-200 p-0 focus:ring-gray-100 active:ring-gray-100">
      </div>

      <div class="my-8 grid gap-y-8 sm:grid-cols-2">
        <div>
          <label class="pr-8">I'm interested in</label>
          <select class="p-4 pr-16 border-[#D2D2D2]">
            <option>Parents&Kids (2-3yo)</option>
          </select>
        </div>
        <button class="btn-secondary justify-self-center sm:justify-self-end w-56" :disabled=disabled>
          Send
        </button>
      </div>
    </form>

  </div>
</template>
        
<script>
import GetInTouch from '@/components/animatedTitles/GetInTouch.vue';

export default {
  components: {
    GetInTouch
  },
  data() {
    return {
      fields: [
        { title: 'Your Name', placeholder: 'e.g, Benjamin', key: 'name' },
        { title: 'Your Surname', placeholder: 'e.g, Nguyen', key: 'surname' },
        { title: 'Your Date of Birth', placeholder: 'dd/mm/yyyy', key: 'dateOfBirth' },
        { title: 'Your Email', placeholder: 'mail@ssjc.com', key: 'email' },
        { title: 'Your Phone Number', placeholder: '+84 02xx xxx xxxx', key: 'phoneNumber' },
      ],
      dataForm: {
        'name': '', 'surname': '', 'dateOfBirth': '', 'email': '', 'phoneNumber': ''
      }
    }
  },
  computed: {
    disabled() {
      return !Object.keys(this.dataForm).every((k) => this.dataForm[k] !== '')
    }
  }
}
</script>
