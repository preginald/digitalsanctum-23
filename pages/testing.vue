<template>
  <div>{{ user }}</div>
</template>
<script setup lang="ts">
const mongoose = useMongoose()
const user = await mongoose.db.collection('users').findOne()
</script>
