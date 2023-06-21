<template>
    <div v-if="userStore.isAdmin()" class="mx-auto px-4 prose lg:max-w-prose">
        <button class="btn-primary">Edit</button>
    </div>
    <main class="container mx-auto px-4 pb-8 prose lg:max-w-prose">
        <!-- <div v-if="userStore.session && userStore.isAdmin()"> -->
        <Read />
        <Related />
    </main>
</template>
<script setup lang="ts">
import Read from '~/components/content/Read.vue'
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
useHead({
    title: contentStore.content.title
})

</script>