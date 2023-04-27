<template>
    <div>
        <!-- Header and Navigation -->
        <header v-show="headerVisible" class="sticky bg-deep-blue p-4">
            <div class="container mx-auto flex items-center justify-between">
                <div class="text-white text-xl font-bold">Digital Sanctum</div>
                <nav>
                    <ul class="flex space-x-4">
                        <NuxtLink to="/">Home</NuxtLink>
                        <NuxtLink to="#our-services" class="text-white">Services</NuxtLink>

                        <NuxtLink to="#ai-consulting" class="text-white">AI Consulting</NuxtLink>
                        <li><a href="#" class="text-white">About Us</a></li>
                        <!-- <li><a href="#" class="text-white">Testimonials</a></li> -->
                        <NuxtLink to="#contact" class="text-white">Contact</NuxtLink>
                    </ul>
                </nav>
            </div>
        </header>

        <!-- Page Content -->
        <main>
            <slot />
        </main>

        <!-- Footer -->
        <footer class="bg-blue-950 p-8">
            <div class="container mx-auto text-white">
                <div class="flex flex-wrap justify-between">
                    <div>
                        <h3 class="text-xl font-bold mb-4">Digital Sanctum</h3>
                        <p>Address: 123 Street, City, Country</p>
                        <p>Phone: +44 20 7123 4567</p>
                        <p>Email: info@digitalsanctum.com</p>
                    </div>
                    <div>
                        <ul class="flex space-x-4">
                            <li><a href="#" class="text-white">Privacy Policy</a></li>
                            <li><a href="#" class="text-white">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div class="mt-4">
                    <p class="text-center">&copy; 2023 Digital Sanctum. All rights reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
const headerVisible = ref(false);

const handleScroll = () => {
    if (window.scrollY === 0) {
        headerVisible.value = false;
    } else {
        headerVisible.value = true;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.sticky {
    position: sticky;
    top: 0;
}
</style>