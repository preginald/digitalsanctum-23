<template>
    <div>
        <!-- Page Content -->
        <main class="main-content">
            <slot />
        </main>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import { useSiteStore } from '~~/stores/siteStore';
const siteStore = useSiteStore()

const route = useRoute();

useHead({
    title: 'Digital Sanctum - AI consulting and IT solutions for Boroondara businesses',
    meta: [
        { name: 'description', content: "Digital Sanctum specialises in AI consulting and IT solutions for Boroondara businesses. Experience our expert guidance, tailored strategies, and empathetic approach to unlock your organisation's potential." }
    ],
})

if (route.path === '/') {
    const headerVisible = ref(false);
}

onMounted(() => {
    const savedTheme = localStorage.getItem('theme');
    const defaultTheme = savedTheme ? savedTheme : 'dark';

    if (defaultTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

</script>


<style scoped>
.router-link-exact-active {
    color: white;
}
</style>