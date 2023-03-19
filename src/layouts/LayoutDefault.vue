<template>
    <div class="h-full">
        <SiteFooter />
        <SiteSidebar />
        <main class="pt-16 pb-16 h-screen h-screen-ios overflow-y-auto md:pl-56 xl:pl-56 min-h-0">
            <router-view />
        </main>
    </div>
</template>

<script setup>
    import SiteFooter from '@/layouts/partials/Footer.vue'
    import SiteSidebar from '@/layouts/partials/Sidebar.vue'
</script>