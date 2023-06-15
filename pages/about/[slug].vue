<template>
    <main>
        <div class="container mx-auto px-4 py-8 prose lg:max-w-prose">
            {{ slug }}
        </div>
    </main>
</template>
<script setup lang="ts">
const slug = useRoute().params.slug
</script>