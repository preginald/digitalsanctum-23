<template>
    <div>
        <!-- Header and Navigation -->
        <Nav class="sticky top-0 z-50" />

        <!-- Page Content -->
        <main class="main-content">
            <slot />
        </main>

        <!-- Footer -->
        <Footer />

    </div>
</template>

<script setup lang="ts">
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue';
import { useSiteStore } from '~~/stores/siteStore';
const siteStore = useSiteStore()

const route = useRoute();
const headerVisible = ref(true);

useHead({
    title: 'Digital Sanctum - AI consulting and IT solutions for Boroondara businesses',
    meta: [
        { name: 'description', content: "Digital Sanctum specialises in AI consulting and IT solutions for Boroondara businesses. Experience our expert guidance, tailored strategies, and empathetic approach to unlock your organisation's potential." }
    ],
})

if (route.path === '/') {
    const headerVisible = ref(false);
}

const handleScroll = () => {
    if (route.path === '/') {
        if (window.scrollY === 0) {
            headerVisible.value = false;
        } else {
            headerVisible.value = true;
        }
    } else {
        headerVisible.value = true;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    const savedTheme = localStorage.getItem('theme');
    const defaultTheme = savedTheme ? savedTheme : 'dark';

    if (defaultTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.main-content {
    /* padding-top: 4rem; */
}

.router-link-exact-active {
    color: white;
}
</style>