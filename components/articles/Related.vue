<template>
    <h2>Related</h2>
    <div v-for="article in related">
        <NuxtLink :to="article.slug">{{ article.title }}</NuxtLink>
    </div>
</template>
<script setup lang="ts">
const tag = encodeURIComponent('AI Basics')
console.log(tag)
const { data: related } = await useFetch('/api/content/related/' + tag)
</script>