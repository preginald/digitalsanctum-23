<template>
    <div v-if="contentStore.related.length">
        <h2>Related</h2>
        <ul>
            <li v-for="article in contentStore.related">
                <NuxtLink :to="article.slug">{{ article.title }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { useContentStore } from '~/stores/contentStore';
const contentStore = useContentStore()
const tag = encodeURIComponent('AI Basics')
</script>