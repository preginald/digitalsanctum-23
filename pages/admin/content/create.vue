<template>
    <main class="container mx-auto px-4 pb-8">
        <Create v-if="userStore.isAdmin()" />
    </main>
</template>
<script setup lang="ts">
import Create from '~/components/content/Create.vue'

import { useUserStore } from '~/stores/userStore'
const userStore = useUserStore()
import { useContentStore } from '~/stores/contentStore';

definePageMeta({
    middleware: ["token"]
})

const contentStore = useContentStore()

useHead({
    title: contentStore.content.title
})

</script>