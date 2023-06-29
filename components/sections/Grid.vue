<template>
  <section id="how-we-work" class="py-16 dark:bg-indigo-950 bg-gray-100 dark:text-silver-light text-charcoal-dark">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mt-10">
        {{ section.heading }}
      </h2>
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4">
          <p class="text-center mt-6 mb-12">
            {{ section.intro }}
          </p>
          <h3 class="text-center my-6">{{ section.subHeading }}</h3>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="item in sectionItems" :key="item.heading"
          class="flex flex-col dark:bg-text-dark hover:dark:bg-gray-950 hover:bg-red-100 bg-text-light p-10 rounded-lg">
          <h3>{{ item.heading }}</h3>
          <p class="mb-6">
            {{ item.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

defineProps({
  section: {
    type: Object,
    required: true,
  },
  sectionItems: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
