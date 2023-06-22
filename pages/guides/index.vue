<template>
    <main class="py-3 px-4 mx-auto max-w-screen-md">
        <h1 class="pl-5">Guides</h1>
        <NuxtLink v-if="contentStore.contents.length" :to="'/guides/' + content.slug"
            v-for="content in contentStore.contents">
            <div class="p-5 dark:hover:bg-gray-800">
                <h2 class="mb-1">{{ content.title }}</h2>
                <p v-html="content.description" class="text-sm"></p>
                <span v-for="tag in content.tags"
                    class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{
                        tag }}</span>
                <div class="text-xs my-3">{{ slug(content) }}</div>
            </div>
        </NuxtLink>
    </main>
</template>
<script setup lang="ts">
import { useContentStore } from '~/stores/contentStore.ts'
const contentStore = useContentStore()

await contentStore.getContents()
const slug = (content: {}) => {
    // Return the computed value
    return "/guides/" + content.slug
};
</script>