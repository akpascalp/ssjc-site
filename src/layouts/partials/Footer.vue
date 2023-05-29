<template>
  <footer class="bottom-0">
    <br class="py-12" />
    <div class="grid">
      <button href="#" class="text-[16px] place-self-end m-6" @click="toTop"><b>Back to top</b></button>
    </div>
    <hr />
    <br class="py-24" />

    <div class="pl-12 py-4">
      <img src="/DOJO.png" class="w-8" />
      <div class="grid grid-cols-6 pt-6 text-[16px]">
        <div class="col-span-2 mr-12">
          <p>
            Welcome to Dojo House, your family's ultimate destination for martial arts excellence. Step into a world where
            children and adults alike discover the power within. Our premier facility offers a harmonious blend of
            training, work, and community, creating an environment where families thrive together. Unleash your potential,
            strengthen your bonds, and embark on a journey of growth. Join us at Dojo House and experience the
            transformative power of martial arts for the whole family.
          </p>
          <div class="flex gap-x-4 pt-4">
            <button>
              <img src="/fb.png" href="#" />
            </button>
            <button>
              <img src="/instagram.png" href="#" />
            </button>
          </div>
        </div>
        <div class="flex flex-col gap-y-2 col-start-4">
          <div class="hover:underline underline-offset-4">
            <router-link to="/">Home</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/disciplines">Disciplines</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/news">News</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/social">Social</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/planning">Planning & Tarification</router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/shop">Shop</router-link>
          </div>
        </div>
        <div class="flex flex-col gap-y-2">
          <div class="hover:underline underline-offset-4">
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
          <div class="hover:underline underline-offset-4">
            <router-link to="/"><b>English</b></router-link>
          </div>
          <div class="hover:underline underline-offset-4">
            <router-link to="/">Vietnamese</router-link>
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
  