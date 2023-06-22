<template>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <div class="py-5">
                <div>
                    <label for="types" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content
                        type</label>
                    <select v-model="type" id="types"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose content type</option>
                        <option v-for="content in contentTypes" :value="content.value">{{ content.text }}</option>
                    </select>
                </div>
                <div>
                    <label for="tags" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
                    <input type="text" v-model="newTag" @keyup.enter="addTag" id="tags" placeholder="Add a tag"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div class="mt-2">
                    <span v-for="(tag, index) in tags" :key="index"
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
                    placeholder="Write your thoughts here..." v-model="title"></textarea>
            </div>
            <div>
                <label for="slug" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Slug</label>
                <input type="text" v-model="slug" id="slug" placeholder="Add a slug"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class="my-5">
                <label for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <textarea id="description" rows="2"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..." v-model="description"></textarea>
            </div>
            <div class="my-5">
                <label for="body" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body</label>
                <textarea id="body" rows="10"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Write your thoughts here..." v-model="body"></textarea>
            </div>
        </div>
        <div>
            <h1>{{ title }}</h1>
            <span v-for="tag in tags"
                class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{
                    tag }}</span>
            <div class="my-5" v-html="description"></div>
            <div v-html="body"></div>
        </div>
        <div>
            <button @click="saveContent()" class="btn-primary">Save</button>
        </div>
    </div>
</template>
<script setup lang="ts">

definePageMeta({
    middleware: ["token"]
})

import { useContentStore } from '~/stores/contentStore';
const contentStore = useContentStore()
const type = ref("")
const title = ref("")
const description = ref("")
const body = ref("")
const tags = ref([])
const slug = ref("")
const newTag = ref('')
const addTag = () => {
    tags.value.push(newTag.value)
    newTag.value = ''
}
const removeTag = (index: number) => {
    tags.value.splice(index, 1)
}

const contentTypes = [
    { value: 'guides', text: 'Guides' },
    { value: 'about', text: 'About' },
]

const slugFromTitle = () => {
    return title.value.trim().toLowerCase().replace(/ /g, '-');
}

const saveContent = async () => {

    // Prepare the data object
    const data = {
        type: type.value,
        title: title.value,
        description: description.value,
        body: body.value,
        tags: tags.value,
        slug: slug.value == '' ? slugFromTitle() : slug.value,
    };

    try {
        await contentStore.createContent(data);

        type.value = '';
        title.value = '';
        description.value = '';
        body.value = '';
        tags.value = [];
    } catch (error) {
        console.error('An error occurred while creating the content:', error);
    }
}

// useHead({
//     title: contentStore.content.title
// })

</script>