<template>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <div class="py-5">
                <div>
                    <input type="text" v-model="newTag" @keyup.enter="addTag" placeholder="Add a tag"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="mt-2">
                    <span v-for="(tag, index) in contentStore.content.tags" :key="index"
                        class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">

                        {{ tag }}
                        <button @click="removeTag(index)">X</button>
                    </span>
                </div>
            </div>
            <div class="my-5">
                <label for="heading" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <textarea id="heading" rows="2"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..." v-model="contentStore.content.title"></textarea>
            </div>
            <div class="my-5">
                <label for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" rows="2"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..." v-model="contentStore.content.description"></textarea>
            </div>
            <div class="my-5">
                <label for="body" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
                <textarea id="body" rows="10"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..." v-model="contentStore.content.body"></textarea>
            </div>
        </div>
        <div>
            <h1>{{ contentStore.content.title }}</h1>
            <span v-for="tag in contentStore.content.tags"
                class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{
                    tag }}</span>
            <div class="my-5" v-html="contentStore.content.description"></div>
            <div v-html="contentStore.content.body"></div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useContentStore } from '~/stores/contentStore';
const contentStore = useContentStore()
const body = ref(contentStore.content.body)
const newTag = ref('')
const addTag = () => {
    contentStore.content.tags.value.push(newTag.value)
    newTag.value = ''
}
const removeTag = (index: number) => {
    contentStore.content.tags.value.splice(index, 1)
}
const calculateRows = () => {
    const lines = body.split('\n').length;
    return Math.min(lines + 1, 100); // Set a maximum of 100 rows
}
useHead({
    title: contentStore.content.title
})

</script>