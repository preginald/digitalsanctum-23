<template>
    <section ref="heroSection"
        class="hero-section p-10 flex items-center justify-center bg-electric-blue-light dark:bg-electric-blue-dark"
        :style="{ backgroundImage: backgroundImage }">
        <div @click="scrollToSection(hero.cta.to)"
            class="container p-10 mx-auto px-8 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg dark:bg-black/60  hover:dark:bg-black/80  bg-white/60  hover:bg-white/80 hover:cursor-pointer rounded-lg">
            <h1
                class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                <span
                    class="text-transparent bg-clip-text bg-gradient-to-r dark:to-orange-600 dark:from-orange-400  to-blue-900 from-blue-600">{{
                        hero.heading
                    }}</span>
            </h1>
            <h2 class="text-xl md:text-2xl mt-4 text-charcoal-dark dark:text-silver-light">
                {{ hero.subHeading }}
            </h2>
            <button type="button" class="btn-primary-lg mt-4 inline-flex">
                {{ hero.cta.text }}
                <svg class="w-6 h-6 ml-2 pt-1 text-white svg-animate" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 10 15">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 7 4 4 4-4M1 1l4 4 4-4" />
                </svg>
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
    top: {
        type: Number,
        required: true,
    },
});

const backgroundImage = computed(() => {
    if (props.hero.img)
        return `url(${siteStore.theme === 'light' ? props.hero.img.light : props.hero.img.dark})`;
});

const heroSection = ref(null);
let scrollPosition = 0;

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
    const offset = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Only start parallax effect after scrolling past y% of the viewport height
    const minHeight = 0.05
    if (offset > viewportHeight * minHeight) {
        // Use a square function to create a curve effect
        scrollPosition = Math.pow(offset - viewportHeight * minHeight, 2) * -0.0005; // Change 0.001 to control the speed of the parallax
        heroSection.value.style.backgroundPosition = `center ${scrollPosition}px`;
    } else {
        // Reset the background position when scrolling back to the top
        heroSection.value.style.backgroundPosition = `center bottom`;
    }
};

function scrollToSection(to: string) {
    const scrollTo: any = document.querySelector(to);
    const rect = scrollTo.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;
    window.scrollTo({
        top: absoluteTop - props.top, // subtract 50px to move 50px above
        behavior: 'smooth'
    });
}
</script>

<style scoped>
.hero-section {
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
}

@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-8px);
    }

    60% {
        transform: translateY(-5px);
    }
}

.svg-animate {
    animation: bounce 2s infinite;
}
</style>
