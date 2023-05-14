<template>
  <div class="relative z-40">
    <div class="fixed grid place-items-center w-20 h-screen inset-y-0 left-0">
      <button class="mb-48 w-10 h-10 relative focus:outline-none bg-[#B4B4B4]/[.1] rounded-[12px]"
        @click="showMenu = !showMenu">
        <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span aria-hidden="true"
            class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
            :class="{ 'rotate-45': showMenu, ' -translate-y-1.5': !showMenu }"></span>
          <span aria-hidden="true"
            class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out"
            :class="{ '-rotate-45': showMenu, ' translate-y-0.5': !showMenu }"></span>
        </div>
      </button>
      <img src="@/assets/DOJO.png" />
      <div class="grid grid-rows-2 place-content-end mt-48">
        <button class="font-bold">EN</button>
        <button class="">VN</button>
      </div>
    </div>
  </div>
  <TransitionRoot as="template" :show="showMenu">
    <Dialog as="div" class="fixed left-20 inset-0 z-30" @close="showMenu = false">
      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
        enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
        leave-to="opacity-0">
        <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-50" />
      </TransitionChild>

      <TransitionChild as="template" enter="transition ease-in-out duration-300" enter-from="-translate-x-full"
        enter-to="translate-x-0" leave="transition ease-in-out duration-300" leave-from="translate-x-0"
        leave-to="-translate-x-full">
        <div class="relative grid grid-cols-2 w-full max-w-3xl bg-white">
          <div class="relative flex flex-col flex-1">
            <div class="sticky top-0 left-20 flex flex-col h-screen inset-y-0 ml-24 mt-24 space-y-4">
              <div v-for="(menu, index) in menus" class="group" @mouseover="displayedIndex = index">
                <div v-if="menu.name === '_break'">
                  <br class="py-16" />
                  <br class="py-16" />
                  <br class="py-16" />
                </div>
                <button v-else class="font-barlow text-[20px] text-black text-left flex relative"
                  @click="showMenu = false">
                  <div class="hover:underline underline-offset-4">
                    <router-link v-if="menu.to !== undefined" :to="menu.to !== undefined ? menu.to : ''">{{ menu.name
                    }}</router-link>
                    <div v-else @click.stop style="cursor: auto">{{ menu.name }}</div>
                  </div>
                  <svg v-if="menu.subMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1" stroke="currentColor" class="w-4 h-4 ml-3 mt-2 transition duration-150 ease-in-out "
                    :class="displayedIndex === index ? 'transform -rotate-180' : ''">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                  <div class="absolute left-72 space-y-4 invisible group-hover:visible">
                    <button v-for="subMenu in menu.subMenu"
                      class="font-barlow text-[20px] hover:underline w-56 text-left">
                      <router-link :to="subMenu.to">{{ subMenu.name }}</router-link>
                    </button>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </TransitionChild>

      <div class="shrink-0 w-14">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
  name: "Sidebar",
  components: { Dialog, DialogOverlay, TransitionChild, TransitionRoot },
  data() {
    return {
      showMenu: false,
      menus: [{
        'name': 'Home',
        'to': '/'
      }, {
        'name': 'Disciplines',
        'subMenu': [{
          'name': 'Judo',
          'to': '/judo'
        }, {
          'name': 'Shadow Judo',
          'to': '/shadow-judo'
        }]
      }, {
        'name': 'News',
        'to': '/news'
      }, {
        'name': 'Social',
        'to': '/social',
      }, {
        'name': 'Planning & Tarification',
        'to': '/planning'
      }, {
        'name': 'Shop',
        'to': '/shop'
      }, {
        'name': '_break'
      }, {
        'name': 'Contact',
        'to': '/contact'
      }, {
        'name': 'Press',
        'to': '/press'
      }, {
        'name': 'Member',
        'to': '/member'
      }],
      displayedIndex: null
    }
  },
  methods: {
  },
}
</script>
