<template>
    <div class="relative mx-24 py-12 h-96 pb-96">
        <div>
            <div v-for="(image, index) in images" :key="index"
                class="transition-opacity duration-150 ease-in mx-24 bg-neutral-300"
                :class="index === current ? 'opacity-1' : 'opacity-0'">
                <img :src="image.src" :alt="image.alt" class="object-contain h-96 absolute left-0 right-0 m-auto">
            </div>
        </div>
        <div>
            <button @click="prev"
                class="absolute top-1/2 m-4 bg-black rounded-full w-10 opacity-50 hover:opacity-100 ease-in duration-100">
                <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 123.96 123.96" xml:space="preserve"
                    stroke="#000000" stroke-width="0.00123959" class="m-3">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                        stroke-width="0.247918"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <path
                                d="M85.742,1.779l-56,56c-2.3,2.3-2.3,6.1,0,8.401l56,56c3.801,3.8,10.2,1.1,10.2-4.2v-112 C95.942,0.679,89.543-2.021,85.742,1.779z">
                            </path>
                        </g>
                    </g>
                </svg>
            </button>
            <button @click="next"
                class="absolute top-1/2 right-0 m-4 bg-black rounded-full w-10 opacity-50 hover:opacity-100 ease-in duration-100">
                <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 123.959 123.959" xml:space="preserve"
                    transform="matrix(-1, 0, 0, 1, 0, 0)" class="m-3">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <g>
                            <path
                                d="M85.742,1.779l-56,56c-2.3,2.3-2.3,6.1,0,8.401l56,56c3.801,3.8,10.2,1.1,10.2-4.2v-112 C95.942,0.679,89.543-2.021,85.742,1.779z">
                            </path>
                        </g>
                    </g>
                </svg>
            </button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'Carousel',
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            current: 0
        }
    },
    methods: {
        next() {
            this.current = (this.current + 1) % this.images.length
        },
        prev() {
            this.current = (this.current - 1 + this.images.length) % this.images.length
        }
    }
}
</script>
