<template>
    <div v-if="userStore.isAdmin()" class="mx-auto px-4 prose lg:max-w-prose">
        <button @click="toggleMode()" class="btn-primary">{{ mode === 'edit' ? 'Cancel' : 'Edit' }}</button>
        <button v-if="mode === 'edit'" @click="updateContent()" class="btn-primary">Update</button>
    </div>
    <main class="container mx-auto px-4 pb-8">
        <Edit v-if="mode == 'edit'" />
    </main>
    <main class="container mx-auto px-4 pb-8 prose lg:max-w-prose">
        <Read v-if="mode == 'read'" />
        <Related />
    </main>
</template>
<script setup lang="ts">
import Read from '~/components/content/Read.vue'
import Edit from '~/components/content/Edit.vue'
import Related from '~/components/content/Related.vue';

import { useUserStore } from '~/stores/userStore'
const userStore = useUserStore()
import { useContentStore } from '~/stores/contentStore';

definePageMeta({
    middleware: ["token"]
})

const contentStore = useContentStore()
const type = "guides"
const slug = "/api/content/" + type + "/" + useRoute().params.slug
contentStore.getContentBySlug(slug, "AI Basics")
const mode = ref("read")

const toggleMode = () => {
    mode.value = mode.value == "read" ? "edit" : "read"
}

const updateContent = async () => {
    contentStore.updateContent()
}

useHead({
    title: contentStore.content.title
})

</script>