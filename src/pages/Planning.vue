<template>
  <div class="px-12">
    <p class="text-[48px] py-16 w-screen">The Planning</p>

    <div class="flex gap-20">
      <div>
        <label class="pr-8">Select a day</label>
        <select class="p-4 pr-16 border-[#D2D2D2]">
          <option v-for="day in filters.days">{{ day }}</option>
        </select>
      </div>
      <div>
        <label class="pr-8">Select a level</label>
        <select class="p-4 pr-16 border-[#D2D2D2]">
          <option v-for="level in filters.levels">{{ level }}</option>
        </select>
      </div>
    </div>

    <hr class="mt-24" />

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

      <hr  v-if="index !== dataAll.length - 1" class="mt-6" />
    </div>

  </div>
</template>
          
<script>

export default {
  data() {
    return {
      filters: {
        days: ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        levels: ["All", "Adults & Teens", "Kids"]
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
  