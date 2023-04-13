<template>
    <div class="flex flex-col h-full">
        <div class="flex flex-1">
            <SiteSidebar />
            <main class="pl-20 z-0 overflow-x-hidden">
                <router-view />
            </main>
        </div>
        <SiteFooter class="pl-20" />
    </div>
</template>

<script setup>
    import SiteFooter from '@/layouts/partials/Footer.vue'
    import SiteSidebar from '@/layouts/partials/Sidebar.vue'
</script>