<template>
    <main class="container mx-auto px-4 py-8 prose lg:max-w-prose">
        <div v-if="Object.keys(contentStore.content).length">
            <h1>{{ contentStore.content.title }}</h1>
            <div class="mb-5">
                <span v-for="tag in contentStore.content.tags"
                    class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{
                        tag }}</span>
            </div>
            <div v-if="contentStore.content.body" v-html="contentStore.content.body">
            </div>
        </div>
        <div v-else class="mb-10">
            <div role="status" class="max-w-sm animate-pulse">
                <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <Related />
    </main>
</template>
<script setup lang="ts">
import Related from '~/components/articles/Related.vue';
import { useContentStore } from '~/stores/contentStore';
const contentStore = useContentStore()
const type = "guides"
const slug = "/api/content/" + type + "/" + useRoute().params.slug
contentStore.getContentBySlug(slug, "AI Basics")
useHead({
    title: contentStore.content.title
})

</script>