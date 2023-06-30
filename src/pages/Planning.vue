<template>
  <div class="px-4 sm:px-12">
    <div>

      <div class="py-16 w-screen">
        <ThePlanningAndTarification />
      </div>

      <div class="flex flex-col sm:items-center gap-8 sm:flex-row sm:gap-20">
        <div class="flex flex-col sm:flex-row sm:items-center">
          <label class="pr-8">Select a day</label>
          <select class="p-4 pr-16 border-[#D2D2D2]">
            <option v-for="day in filters.days">{{ day }}</option>
          </select>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center">
          <label class="pr-8">Select a level</label>
          <select class="p-4 pr-16 border-[#D2D2D2]">
            <option v-for="level in filters.levels">{{ level }}</option>
          </select>
        </div>
        <div class="flex flex-col sm:flex-row sm:items-center">
          <label class="pr-8">Select a discipline</label>
          <select class="p-4 pr-16 border-[#D2D2D2]">
            <option v-for="discipline in filters.disciplines">{{ discipline }}</option>
          </select>
        </div>
      </div>

      <hr class="mt-12 sm:mt-24" />

      <div class="flex gap-12 my-12 ">
        <div v-for="category in categories" class="flex gap-4 items-center">
          <svg width="16" height="16">
            <rect width="16" height="16" rx="6" :style="'fill:' + category.color" />
          </svg>
          <p>{{ category.title }}</p>
        </div>
      </div>

      <hr class="mt-12" />

      <div v-for="(data, index) in dataAll">
        <p class="text-[24px] my-12">{{ data.day }}</p>

        <ul class="text-[16px]">
          <li v-for="activity in data.activities" class="grid grid-cols-2 py-3 hover:bg-slate-50">
            <p>{{ activity.text }}</p>
            <div class="flex gap-4 items-center justify-self-end">
              <svg width="16" height="16">
                <rect width="16" height="16" rx="6" :style="'fill:' + activity.color" />
              </svg>
              <p>{{ activity.category }}</p>
            </div>
          </li>
        </ul>

        <hr v-if="index !== dataAll.length - 1" class="mt-6" />
      </div>
    </div>

    <div class="h-36"></div>

    <div>
      <div class="pb-12 sm:pb-20">
        <PricingSystem />
      </div>
      <div class="grid sm:grid-cols-2">
        <p class="text-[16px] text-[#7C7C7C] pb-12 sm:mr-80">Our pricing system is divided into 3 different modes:</p>
        <div class="flex flex-col gap-8 justify-self-end">
          <p class="text-[24px]">Pack system (per term or annually):</p>
          <p class="text-[16px]">This system applies to all types of classes, including cardio, core training (taïso,
            Interval training, Shadow Judo), as well as Judo and Brazilian Jiu Jitsu. If you join during a term, we will
            calculate the fee proportionately based on the remaining number of classes.</p>
          <hr class="mx-8" />
          <p class="text-[24px]">À la carte system:</p>
          <p class="text-[16px]">We offer 10 and 20 class cards specifically for cardio and core training (taïso,
            Interval training, Shadow Judo) sessions.</p>
          <hr class="mx-8" />
          <p class="text-[24px]">Drop-in system:</p>
          <p class="text-[16px]">You have the freedom to come and attend classes whenever you want and pay per session.
            This method applies to all classes.</p>
        </div>
        <div class="pt-24 sm:mr-24 text-[#7C7C7C] text-[16px] pb-16">
          <p>
            We strive to provide maximum flexibility in our pricing system to cater to the needs and preferences of each
            individual.<br />
            Please don't hesitate to reach out to us if you have any questions or need further information. We are excited
            to welcome you to Dojo House and support you on your journey.
          </p>
        </div>
        <button class="btn-primary w-56 justify-self-center col-start-1 sm:justify-self-start">
          Contact Us
        </button>
      </div>
    </div>
  </div>
</template>
          
<script>
import ThePlanningAndTarification from '@/components/animatedTitles/ThePlanningAndTarification.vue';
import PricingSystem from '@/components/animatedTitles/PricingSystem.vue';

export default {
  components: {
    ThePlanningAndTarification,
    PricingSystem
  },
  data() {
    return {
      filters: {
        days: ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        levels: ["All", "Adults & Teens", "Kids"],
        disciplines: ["All", "Judo", "Brazilian Jiu-Jitsu", "Shadow Judo", "Taïso", "Interval Training"],
      },
      categories: [{
        title: "Adults & Teens",
        color: "#000000"
      }, {
        title: "Kids",
        color: "#1478CB"
      }],
      dataAll: [{
        day: "Monday",
        activities: [{
          text: "6:00 AM - 8:00 AM",
          color: "#000000",
          category: "Private"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#000000",
          category: "Interval Training"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#1478CB",
          category: "Tiny Kids Judo"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#1478CB",
          category: "Mini Kids Judo"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#1478CB",
          category: "Kids Judo"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#000000",
          category: "Judo Nage Waza"
        }]
      }, {
        day: "Tuesday",
        activities: [{
          text: "6:00 AM - 8:00 AM",
          color: "#000000",
          category: "Private"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#000000",
          category: "Interval Training"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#1478CB",
          category: "Tiny Kids Judo"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#1478CB",
          category: "Mini Kids Judo"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#1478CB",
          category: "Kids Judo"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#000000",
          category: "Judo Nage Waza"
        }]
      }, {
        day: "Wednesday",
        activities: [{
          text: "6:00 AM - 8:00 AM",
          color: "#000000",
          category: "Private"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#000000",
          category: "Interval Training"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#1478CB",
          category: "Tiny Kids Judo"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#1478CB",
          category: "Mini Kids Judo"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#1478CB",
          category: "Kids Judo"
        }, {
          text: "6:00 AM - 8:00 AM",
          color: "#000000",
          category: "Judo Nage Waza"
        }]
      }]
    }
  }
}
</script>
  