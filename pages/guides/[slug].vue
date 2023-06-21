<template>
    <main class="container mx-auto px-4 py-8 prose lg:max-w-prose">
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

const contentStore = useContentStore()
const type = "guides"
const slug = "/api/content/" + type + "/" + useRoute().params.slug
contentStore.getContentBySlug(slug, "AI Basics")
useHead({
    title: contentStore.content.title
})

</script>