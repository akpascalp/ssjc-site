<template>
    <div class="flex flex-col h-full">
        <div class="flex">
            <SiteSidebar />
            <main class="sm:pl-[120px] z-0 overflow-x-hidden">
                <router-view />
            </main>
        </div>
        <SiteFooter class="sm:pl-[120px]" />
    </div>
</template>

<script setup>
    import SiteFooter from '@/layouts/partials/Footer.vue'
    import SiteSidebar from '@/layouts/partials/Sidebar.vue'
</script>