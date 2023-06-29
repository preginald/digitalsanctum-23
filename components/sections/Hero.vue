<template>
    <section ref="heroSection"
        class="hero-section p-8 flex items-center justify-center bg-electric-blue-light dark:bg-electric-blue-dark"
        :style="{ backgroundImage: backgroundImage }">
        <div
            class="container p-10 mx-auto px-8 sm:max-w-screen-md dark:bg-black/60  hover:dark:bg-black/80  bg-white/60  hover:bg-white/80 rounded-lg">
            <!-- <div class="p-10 mx-auto  dark:bg-black/50 rounded-lg"> -->
            <h1
                class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <span
                    class="text-transparent bg-clip-text bg-gradient-to-r dark:to-orange-600 dark:from-orange-400  to-blue-900 from-blue-600">{{
                        hero.heading
                    }}</span>
            </h1>
            <h2 class="text-2xl mt-4 text-charcoal-dark dark:text-silver-light">
                {{ hero.subHeading }}
            </h2>
            <button @click="scrollToSection(hero.cta.to)" class="btn-primary-lg mt-4">
                {{ hero.cta.text }}
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useSiteStore } from '~~/stores/siteStore';
const siteStore = useSiteStore()

const props = defineProps({
    hero: {
        type: Object,
        required: true,
    },
});

const backgroundImage = computed(() => {
    return `url(${siteStore.theme === 'light' ? props.hero.img.light : props.hero.img.dark})`;
});

function scrollToSection(to: string) {
    const scrollTo: any = document.querySelector(to);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped>
.hero-section {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
}
</style>
