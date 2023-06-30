<template>
  <footer class="bottom-0">
    <br class="py-12" />
    <div class="grid">
      <button
        class="fixed z-90 bottom-20 right-8 bg-gray-600 w-10 h-10 rounded-full drop-shadow-lg flex justify-center
        items-center text-white text-xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300
        sm:hidden"
        @click="toTop">
        ↑
      </button>
      <button href="#" class="text-[16px] place-self-end m-6" @click="toTop"><b>Back to top</b></button>
    </div>
    <hr />
    <br class="py-20" />

    <div class="px-4 sm:pl-12 py-4 text-[16px]">
      <img src="/DOJO.png" class="w-8" />
      <div class="flex flex-col gap-y-8 sm:grid sm:grid-cols-6 pt-6">
        <div class="sm:col-span-2 sm:-mr-8">
          <p>
            Welcome to Dojo House, your family's ultimate destination for martial arts excellence. Step into a world where
            children and adults alike discover the power within. Our premier facility offers a harmonious blend of
            training, work, and community, creating an environment where families thrive together. Unleash your potential,
            strengthen your bonds, and embark on a journey of growth. Join us at Dojo House and experience the
            transformative power of martial arts for the whole family.
          </p>
          <div class="flex gap-x-4 pt-4">
            <a href="https://www.facebook.com/DOJOHOUSEOFSSJC" target="_blank" rel="noopener noreferrer"><img
                src="/fb.png"></a>
            <a href="https://www.instagram.com/dojohouseofssjc/" target="_blank" rel="noopener noreferrer"><img
                src="/instagram.png"></a>
          </div>
        </div>
        <div class="flex flex-col gap-y-2 col-start-4">
          <div class="hover:underline underline-offset-4">
            <router-link to="/">Home</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/judo">Judo</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/bjj">Brazilian Jiu-Jitsu</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/shadow-judo">Shadow Judo</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/taiso">Taïso</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/interval-training">Interval Training</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/social">Social</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/working-space">Working Space</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/planning">Planning & Tarification</router-link>
          </div>
        </div>
        <div class="flex flex-col gap-y-2 text-[#606060]">
          <div class="hover:underline underline-offset-4 text-">
            <router-link to="/contact">Contact</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/press">Press</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/member">Member</router-link>
          </div>
        </div>
        <div class="flex flex-col gap-y-2">
          <div class="hover:underline underline-offset-4 font-bold">
            <router-link to="/">English</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/">Tiếng Việt</router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

import utils from '@/helpers/utils';

export default {
  methods: {
    toTop() {
      utils.toTop()
    }
  }
}
</script>
