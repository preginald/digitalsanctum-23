<template>
    <SectionsHero :hero="content" top="100" />
    <div v-if="userStore.isAdmin()" class="mx-auto px-4 prose lg:max-w-prose">
        <button @click="toggleMode()" class="btn-primary">{{ mode === 'edit' ? 'Cancel' : 'Edit' }}</button>
        <button v-if="mode === 'edit'" @click="updateContent()" class="btn-primary">Update</button>
    </div>
    <Edit v-if="mode == 'edit'" />
    <main class="px-4 my-10 mx-auto max-w-screen-md">
        <Read v-if="mode == 'read'" id="read" class="pt-10" />
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
const contentStore = useContentStore()

import heroImg from '~/assets/images/services-ai-consulting-dark.jpg'
import heroImgLight from '~/assets/images/services-ai-consulting-light.jpg'


definePageMeta({
    middleware: ["token"],
    layout: "guides",
})

const type = "guides"
const slug = "/api/content/" + type + "/" + useRoute().params.slug
await contentStore.getContentBySlug(slug, "AI Basics")
const mode = ref("read")

const content = {
    heading: contentStore.content.title,
    subHeading: contentStore.content.description.replace(/<[^>]*>/g, ""),
    img: { dark: heroImg, light: heroImgLight },
    cta: { text: "Start reading", to: "#read" }
}

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