<template>
    <footer class="bg-gray-800 py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 text-white mb-8">
                <!-- Elevator Pitch -->
                <div class="flex flex-col md:col-span-2 lg:col-span-2">
                    <h3 class="text-xl font-bold mb-4 dark:text-silver-dark text-silver-dark">Digital Sanctum</h3>
                    <div class="flex space-x-4">
                        <p class=" dark:text-silver-dark text-silver-dark">Digital Sanctum specialises in AI consulting
                            and IT solutions for
                            Boroondara businesses.
                            Experience our expert guidance, tailored strategies, and empathetic approach to unlock your
                            organisation's potential.</p>
                    </div>
                </div>
                <!-- Company Information -->
                <!-- <div class="md:col-span-1 lg:col-span-1">
                        <h3 class="text-xl font-bold mb-4 text-silver-light">Connect with us</h3>
                        <p class="text-silver-light">55 Baker Ave</p>
                        <p class="text-silver-light">Kew East VIC 3102</p>
                        <p>Phone: (555) 123-4567</p>
                        <p>Email: info@digitalsanctum.com</p>
                    </div> -->

                <!-- Policies -->
                <div class="md:col-span-1 lg:col-span-1">
                    <h5 class="text-sm font-bold mb-4 uppercase">Policies</h5>
                    <ul class="space-y-2">
                        <li>
                            <NuxtLink to="/policies/privacy" class="text-blue-400 hover:text-blue-300">
                                Privacy
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/policies/terms-and-conditions" class="text-blue-400 hover:text-blue-300">
                                Terms & conditions
                            </NuxtLink>
                        </li>
                        <!-- <li>
                                <a href="#" class="text-blue-400 hover:text-blue-300">Contact Us</a>
                            </li> -->
                    </ul>
                </div>

                <!-- Guides -->
                <div class="md:col-span-2 lg:col-span-2">
                    <h5 class="text-sm font-bold mb-4 uppercase">Guides</h5>
                    <ul class="space-y-2">
                        <li v-for="(guide, index) in guides" :key="index">
                            <NuxtLink :to="guide.to" class="text-blue-400 hover:text-blue-300">
                                {{ guide.text }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Copyright -->
            <div class="text-center text-white text-sm">
                <p class="text-silver-light">&copy; 2023 Digital Sanctum. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
const guides = [
    {
        to: '/guides/how-chatgpt-can-do-the-jobs-of-professionals-youve-held-off-hiring-in-your-small-business',
        text: 'Leveraging ChatGPT for Unfilled Roles in Small Businesses'
    },
    {
        to: '/guides/app-success-evaluation-framework',
        text: 'App Success Evaluation Framework'
    },
    {
        to: '/guides/introduction-to-gpt',
        text: 'Introduction to GPT'
    },
    {
        to: '/guides/introduction-to-privategpt',
        text: 'Introduction to PrivateGPT'
    },
    {
        to: '/guides/introduction-to-prompt-engineering',
        text: 'Introduction to Prompt Engineering'
    },
    {
        to: '/guides/introduction-to-large-language-models-llm',
        text: 'Introduction to Large Language Models'
    },
    {
        to: '/guides/introduction-to-midjourney',
        text: 'Introduction to Midjourney'
    },
    // Add more guide objects as needed
]
</script>