<template>
    <div class="container mx-auto px-4">
        <div class="mx-auto w-2/4 my-10">
            <div v-if="!token.status" class="relative z-0 w-full mb-6 group">
                <label for="token" class="block text-gray-500 dark:text-gray-400">Please enter the security token</label>
                <input type="email" name="email" id="email" v-model="id"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                    placeholder="business email" required />
                <button @click="processToken()" class="btn-primary">{{ tokenButton.text }}</button>
            </div>
            <div v-else-if="token.status == 'invalid'" class="relative z-0 w-full mb-6 group">
                <h2>Invalid token!</h2>
            </div>
            <div v-else class="relative z-0 w-full mb-6 group">
                <h2>The token has expired!</h2>
                <button @click="router.push(token.referrer)" class="btn-primary">Click here to get fresh
                    token</button>
            </div>

        </div>
    </div>
    <div>
        {{ token }}
    </div>
</template>
<script setup lang="ts">
import { useUserStore } from "~/stores/userStore"
const userStore = useUserStore()
const router = useRouter()
const token = ref({ status: "", referrer: "" })
const tokenButton = ref({ text: "Verify Token", class: "btn-primary" })

const id = useRoute().params.id || ref("");

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

</script>