<template>
    <div>
        <!-- Header and Navigation -->
        <Nav />


        <!-- Page Content -->
        <main class="main-content">
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-gray-800 py-12">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white mb-8">
                    <!-- Company Information -->
                    <div>
                        <h3 class="text-xl font-bold mb-4 text-silver-light">Digital Sanctum</h3>
                        <p class="text-silver-light">55 Baker Ave</p>
                        <p class="text-silver-light">Kew East VIC 3102</p>
                        <!-- <p>Phone: (555) 123-4567</p> -->
                        <!-- <p>Email: info@digitalsanctum.com</p> -->
                    </div>

                    <!-- Social Media Icons -->
                    <!-- <div class="flex flex-col md:col-span-2 lg:col-span-1">
                        <h3 class="text-xl font-bold mb-4">Connect with Us</h3>
                        <div class="flex space-x-4">
                            <a href="https://www.facebook.com/DigitalSanctum" target="_blank" rel="noopener noreferrer"><img
                                    src="facebook-icon.png" alt="Facebook Icon" class="w-8 h-8" /></a>
                            <a href="https://twitter.com/DigitalSanctum" target="_blank" rel="noopener noreferrer"><img
                                    src="twitter-icon.png" alt="Twitter Icon" class="w-8 h-8" /></a>
                            <a href="https://www.linkedin.com/company/digital-sanctum" target="_blank"
                                rel="noopener noreferrer"><img src="linkedin-icon.png" alt="LinkedIn Icon"
                                    class="w-8 h-8" /></a>
                        </div>
                    </div> -->

                    <!-- Quick Links -->
                    <!-- <div>
                        <h3 class="text-xl font-bold mb-4">Quick Links</h3>
                        <ul class="space-y-2">
                            <li>
                                <a href="#" class="text-blue-400 hover:text-blue-300">Home</a>
                            </li>
                            <li>
                                <a href="#" class="text-blue-400 hover:text-blue-300">Services</a>
                            </li>
                            <li>
                                <a href="#" class="text-blue-400 hover:text-blue-300">AI Consulting</a>
                            </li>
                            <li>
                                <a href="#" class="text-blue-400 hover:text-blue-300">About Us</a>
                            </li>
                            <li>
                                <a href="#" class="text-blue-400 hover:text-blue-300">Testimonials</a>
                            </li>
                            <li>
                                <a href="#" class="text-blue-400 hover:text-blue-300">Contact Us</a>
                            </li>
                        </ul>
                    </div> -->
                    <!-- Policies -->
                    <div>
                        <h5 class="text-sm font-bold mb-4 uppercase">Policies</h5>
                        <ul class="space-y-2">
                            <li>
                                <NuxtLink to="/policies/privacy" class="text-blue-400 hover:text-blue-300">
                                    Privacy
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/policies/terms-of-use" class="text-blue-400 hover:text-blue-300">
                                    Terms of Use
                                </NuxtLink>
                            </li>
                            <!-- <li>
                                <a href="#" class="text-blue-400 hover:text-blue-300">Contact Us</a>
                            </li> -->
                        </ul>
                    </div>
                </div>

                <!-- Copyright -->
                <div class="text-center text-white text-sm">
                    <p class="text-silver-light">&copy; 2023 Digital Sanctum. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import Nav from '~/components/Nav.vue'
import { useSiteStore } from '~~/stores/siteStore';
const siteStore = useSiteStore()

const route = useRoute();
const headerVisible = ref(true);

if (route.path === '/') {
    const headerVisible = ref(false);
}

const handleScroll = () => {
    if (route.path === '/') {
        if (window.scrollY === 0) {
            headerVisible.value = false;
        } else {
            headerVisible.value = true;
        }
    } else {
        headerVisible.value = true;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    const savedTheme = localStorage.getItem('theme');
    const defaultTheme = savedTheme ? savedTheme : 'dark';

    if (defaultTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.main-content {
    padding-top: 4rem;
}

.router-link-exact-active {
    color: white;
}

.sticky {
    position: sticky;
    top: 0;
}
</style>