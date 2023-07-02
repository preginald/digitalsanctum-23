<template>
    <div>
        <main class="px-4 my-10 mx-auto max-w-screen-md">
            <h1>Choose your own adventure GPT</h1>
            <div>
                <form @submit.prevent="startStory">
                    <label for="genre">Choose a genre:</label>
                    <select id="genre" v-model="form.genre">
                        <option>fantasy</option>
                        <option>science fiction</option>
                        <option>mystery</option>
                        <option>horror</option>
                        <option>adventure</option>
                    </select>
                    <label for="name">Enter your first name:</label>
                    <input id="name" v-model="form.name" />
                    <button type="submit">Start Story</button>
                </form>
            </div>
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
let form = ref({
    genre: 'fantasy', // The default genre
    name: '', // The user's name
});
const storyApi = 'https://aitools.digitalsanctum.com.au/api/conversation'
// const storyApi = 'http://127.0.0.1:5010/api/conversation'


const sendOption = async (option) => {
    loading.value = true;
    const userMessage = { role: 'user', content: option };
    messages.value.push(userMessage);

    const fetch = useFetch(storyApi);

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

let startStory = async () => {
    loading.value = true;
    const bodyData = { "messages": [], "genre": form.value.genre, "name": form.value.name }
    const fetchOptions = {
        method: 'POST',
        body: bodyData,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const fetch = useFetch(storyApi, fetchOptions);

    // const fetch = useFetch('https://aitools.digitalsanctum.com.au/api/conversation', {
    //     body: JSON.stringify({
    //         messages: [], // Start the story with no prior messages
    //         genre: form.value.genre, // Include the selected genre
    //         name: form.value.name, // Include the user's name
    //     }),
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    // });

    await fetch.execute();
    if (fetch.data.value) {
        let messageData = JSON.parse(fetch.data.value.message);
        messages.value.push({ role: 'assistant', story: messageData.story, options: messageData.options });
    }
    loading.value = false;
};

// onMounted(async () => {
//     loading.value = true;
//     const bodyData = { "messages": [] }
//     const fetchOptions = {
//         method: 'POST',
//         body: bodyData,
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     };
//     const fetch = useFetch(storyApi, fetchOptions);

//     await fetch.execute();
//     console.log("Fetch data value:", fetch.data.value); // Add this line
//     if (fetch.data.value) {
//         try {
//             let messageData = JSON.parse(fetch.data.value.message); // Parse the response into a JSON object
//             messages.value.push({ role: 'assistant', story: messageData.story, options: messageData.options });
//         } catch (error) {
//             console.error("Error parsing JSON:", error); // Log any parsing errors
//         }
//     }
//     loading.value = false;
// });

</script>