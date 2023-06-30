<template>
  <div class="relative z-40">
    <div class="sm:fixed grid grid-flow-col w-full h-16 items-center px-4 bg-white sm:justify-items-center sm:w-[120px] sm:h-screen sm:inset-y-0 sm:left-0 sm:grid-flow-row">
      <button class="justify-self-start sm:justify-self-center sm:mb-48 w-10 h-10 relative focus:outline-none bg-[#B4B4B4]/[.1] rounded-[12px]"
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
      <img src="/DOJO.png" class="justify-self-center"/>
      <div class="flex justify-self-end gap-2 pr-2 sm:grid-rows-2 sm:justify-self-center sm:mt-48 sm:grid">
        <button class="font-bold">EN</button>
        <button class="">VN</button>
      </div>
    </div>
  </div>
  <TransitionRoot as="template" :show="showMenu">
    <Dialog as="div" class="fixed top-10 w-full z-30 sm:top-0 sm:left-[120px]" @close="showMenu = false">
      <TransitionChild as="template" enter="transition ease-in-out duration-700" enter-from="-translate-x-60 opacity-50"
        enter-to="translate-x-0" leave="transition ease-in-out duration-700" leave-from="translate-x-0"
        leave-to="-translate-x-60 opacity-0">
        <div class="grid grid-cols-2 bg-white">
          <div class="relative flex flex-col flex-1">
            <div class="left-20 flex flex-col h-screen inset-y-0 ml-24 my-24 space-y-4">
              <div v-for="(menu, index) in menus" class="group" @mouseover="displayedIndex = index">
                <div v-if="menu.name === '_break'">
                  <div class="m-80" />
                </div>
                <button v-else class="text-[16px] text-black text-left flex relative" @click="showMenu = false">
                  <div class="transition ease-in-out duration-100" @mouseover="displayedSubIndex = null"
                    :class="(displayedSubIndex !== null && displayedIndex !== index) ? 'opacity-25' : 'opacity-100'">
                    <router-link v-if="menu.to !== undefined" :to="menu.to !== undefined ? menu.to : ''">
                      {{ menu.name }}
                    </router-link>
                    <button v-else
                      @click="displayedSubIndex === index ? displayedSubIndex = null : displayedSubIndex = index"
                      @click.stop>{{ menu.name }}
                    </button>
                  </div>
                  <svg v-if="menu.subMenu" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1" stroke="currentColor" class="w-4 h-4 ml-3 mt-1 transition duration-150 ease-in-out "
                    :class="displayedSubIndex == index ? 'transform -rotate-180' : ''"
                    @click="displayedSubIndex === index ? displayedSubIndex = null : displayedSubIndex = index"
                    @click.stop>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                  <TransitionRoot as="template" enter="transition ease-in-out duration-300"
                    enter-from="-translate-x-20 opacity-0" enter-to="translate-x-0 opacity-100"
                    leave="transition ease-in-out duration-300" leave-from="translate-x-0 opacity-100"
                    leave-to="-translate-x-20 opacity-0" :show="displayedSubIndex === index">
                    <div class="absolute ml-40 lg:ml-72 md:ml-48 space-y-4">
                      <button v-for="subMenu in menu.subMenu" class="text-[16px] w-56 text-left">
                        <router-link :to="subMenu.to">{{ subMenu.name }}</router-link>
                      </button>
                    </div>
                  </TransitionRoot>
                </button>
              </div>
            </div>
          </div>
          <img src="/img_menu.png" class="hidden sm:block pr-20 bg-contain bg-center" />
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
          'name': 'Brazilian Jiu-Jitsu',
          'to': '/bjj'
        }, {
          'name': 'Shadow Judo',
          'to': '/shadow-judo'
        }, {
          'name': 'Taïso',
          'to': '/taiso'
        }, {
          'name': 'Interval Training',
          'to': '/interval-training'
        }]
      }, {
        'name': 'Social',
        'to': '/social',
      }, {
        'name': 'Working Space',
        'to': '/working-space',
      }, {
        'name': 'Planning & Tarification',
        'to': '/planning'
      }, {
        'name': '_break'
      }, {
        'name': 'Contact',
        'to': '/contact'
      }],
      displayedIndex: null,
      displayedSubIndex: null
    }
  },
  methods: {
  },
}
</script>
