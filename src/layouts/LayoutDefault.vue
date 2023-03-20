<template>
    <div class="h-full">
        <SiteSidebar />
        <main class="pl-16">
            <router-view />
        </main>
        <SiteFooter />
    </div>
</template>

<script setup>
    import SiteFooter from '@/layouts/partials/Footer.vue'
    import SiteSidebar from '@/layouts/partials/Sidebar.vue'
</script>