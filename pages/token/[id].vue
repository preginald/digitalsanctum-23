<template>
    <div class="container mx-auto px-4">
        <div class="mx-auto w-2/4 my-10">
        </div>
    </div>
    <div>
        {{ token }}
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: ["token"]
})

import { useUserStore } from "~/stores/userStore"
const userStore = useUserStore()
const router = useRouter()
const token = ref({ status: "", referrer: "" })

const id = useRoute().params.id


async function processToken() {
    token.value = await userStore.getTokenById(id)
    if (token.value && token.value.status === "active") {
        router.push(token.value.referrer);
    } else {
        // Handle case when token is not found or not active
        console.log("Token not found or not active");
        // You can perform any necessary actions or return an appropriate value
        // For example, you can show an error message to the user or redirect to a default page
    }
}

onMounted(processToken)


</script>