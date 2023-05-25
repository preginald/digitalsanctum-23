<template>
  <div>{{ userStore.user }}</div>
</template>
<script setup lang="ts">
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore()
const email = ""
await userStore.getUserByEmail(email)
</script>
