<template>
    <SectionsHero :hero="content" top="100" />
    <main id="main" class="px-4 my-10 mx-auto max-w-screen-md">
        <h1 class="pl-5">Guides</h1>
        <NuxtLink v-if="contentStore.contents.length" :to="'/guides/' + content.slug"
            v-for="content in contentStore.contents">
            <div class="m-5 p-5 dark:hover:bg-gray-800 hover:bg-red-100 dark:bg-zinc-800 bg-white rounded">
                <h2 class="mb-1">{{ content.title }}</h2>
                <span v-for="tag in content.tags"
                    class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{
                        tag }}</span>
                <div v-html="content.description" class="text-sm mt-3"></div>
                <div class="text-xs my-0">{{ slug(content) }}</div>
            </div>
        </NuxtLink>
    </main>
</template>
<script setup lang="ts">
definePageMeta({
    layout: "guides",
})

import heroImg from '~/assets/images/guides-dark.jpg'

const content = {
    heading: "Guides to Understanding and Implementing AI",
    subHeading: "Explore our comprehensive collection of AI guides at Digital Sanctum. Understand AI basics, discover how to enhance customer experience, develop new revenue streams, improve workforce skills, and much more. Ideal for both novices and experts in the AI field, our guides are designed to help you leverage AI and automation technologies for business growth and innovation.",
    img: { dark: heroImg, light: heroImg },
    cta: { text: "Start reading", to: "#main" }
}


import { useContentStore } from '~/stores/contentStore.ts'
const contentStore = useContentStore()

await contentStore.getContents()
const slug = (content: {}) => {
    // Return the computed value
    return "guides/" + content.slug
};
</script>