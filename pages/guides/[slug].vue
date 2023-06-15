<template>
    <main>
        <div v-if="content" class="container mx-auto px-4 py-8 prose lg:max-w-prose">
            <h1>{{ content.title }}</h1>
            <div v-html="content.body">
            </div>
        </div>
        <div v-else>
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
    </main>
</template>
<script setup lang="ts">
const title = ref("")
const type = "guides"
const slug = "/api/content/" + type + "/" + useRoute().params.slug
const { data: content } = await useFetch(slug)
if (content) {
    title.value = content.value.title
}
useHead({
    title: title
})

</script>