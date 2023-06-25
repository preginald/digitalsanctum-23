<template>
    <div>
        <!-- Header and Navigation -->
        <Nav class="sticky top-0 z-50" />

        <main class="px-4 my-10 mx-auto max-w-screen-md">
            <slot />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>
<script setup lang="ts">
</script>