<template>
    <div>
        <main class="px-4 my-10 mx-auto max-w-screen-md">
            <h1>Choose your own adventure GPT</h1>
            <div v-for="(message, index) in messages" :key="index" class="dark:bg-slate-700 bg-blue-300 rounded-lg">
                <div v-if="message.role === 'assistant'">
                    <p class="p-3">{{ message.story }}</p>
                    <div v-if="index === messages.length - 1" class="p-3">
                        <button class="btn-primary" v-for="(option, key) in message.options" :key="key"
                            @click="sendOption(option[Object.keys(option)[0]])">
                            {{ option[Object.keys(option)[0]] }}
                        </button>
                    </div>
                </div>
                <div v-else class="dark:bg-slate-700 bg-slate-300 rounded-lg">
                    <p class="p-3 ">
                        {{ message.content }}
                    </p>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
const messages = ref([]);

let loading = ref(false);
const storyApi = 'https://aitools.digitalsanctum.com.au/api/conversation'
// const storyApi = 'http://127.0.0.1:5010/api/conversation'


const sendOption = async (option) => {
    loading.value = true;
    const userMessage = { role: 'user', content: option };
    messages.value.push(userMessage);

    const fetch = useFetch('https://aitools.digitalsanctum.com.au/api/conversation', {
        body: JSON.stringify({ messages: [userMessage] }), // Send only the user message in the request
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    await fetch.execute();
    console.log("Fetch data value:", fetch.data.value); // Add this line
    if (fetch.data.value) {
        try {
            let messageData = JSON.parse(fetch.data.value.message); // Parse the response into a JSON object
            messages.value.push({ role: 'assistant', story: messageData.story, options: messageData.options });
        } catch (error) {
            console.error("Error parsing JSON:", error); // Log any parsing errors
        }
    }
    loading.value = false;
};

onMounted(async () => {
    loading.value = true;
    const fetch = useFetch('https://aitools.digitalsanctum.com.au/api/conversation', {
        body: JSON.stringify({ messages: [] }), // Send an empty array for the initial request
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    await fetch.execute();
    console.log("Fetch data value:", fetch.data.value); // Add this line
    if (fetch.data.value) {
        try {
            let messageData = JSON.parse(fetch.data.value.message); // Parse the response into a JSON object
            messages.value.push({ role: 'assistant', story: messageData.story, options: messageData.options });
        } catch (error) {
            console.error("Error parsing JSON:", error); // Log any parsing errors
        }
    }
    loading.value = false;
});

</script>