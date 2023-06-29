<template>
    <nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Logo />
            <button @click="toggleMenu" type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" :aria-expanded="menuOpen">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <div :class="{ hidden: !menuOpen, block: menuOpen }" class="w-full md:block md:w-auto" id="navbar-default">
                <ul :class="navClasses">
                    <li v-for="(item, index) in navigationItems" :key="index">
                        <a v-if="item.type === 'a'" :href="item.href" :class="item.classes">
                            {{ item.text }}
                        </a>
                        <NuxtLink v-else :to="item.to" :class="item.classes">
                            {{ item.text }}
                        </NuxtLink>
                    </li>
                    <!-- <li>
                        <NuxtLink to="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 dark:text-white" :class="{
                            'hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-blue-300 md:dark:hover:bg-transparent': route.path.startsWith('/guides') || route.path.startsWith('/policies'),
                            'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500': !(route.path.startsWith('/guides') || route.path.startsWith('/policies'))
                        }"
                            :aria-current="route.path.startsWith('/guides') || route.path.startsWith('/policies') ? undefined : 'page'">
                            Home
                        </NuxtLink>
                    </li>
                    <li v-for="(navItem, index) in navigationItems" :key="index">
                        <a v-if="navItem.type === 'a'" :href="navItem.href" :class="itemClass(navItem)" aria-current="page">
                            {{ navItem.text }}
                        </a>
                        <NuxtLink v-else :to="navItem.to" :class="itemClass(navItem)">
                            {{ navItem.text }}
                        </NuxtLink>
                    </li> -->
                    <li>
                        <button class="dark:text-white" v-if="userStore.session" @click="signOut()">Sign out</button>
                    </li>
                    <li>
                        <button @click="toggleTheme">
                            <Icon class="dark:text-white text-xl" :name="themeIcon()" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useSiteStore } from '~~/stores/siteStore';
const siteStore = useSiteStore()
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore()

const route = useRoute();
var menuOpen = ref(false)
const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
}

const themeIcon = () => {
    return siteStore.theme === "dark" ? "mdi:white-balance-sunny" : "mdi:weather-night";
}

// var signedIn = ref(false)

const tokenCookie = useCookie('token')
userStore.session = tokenCookie.value ? true : false


const signOut = () => {
    const tokenCookie = useCookie('token')
    tokenCookie.value = null
    userStore.session = false
}

const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    const newTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    siteStore.setTheme(newTheme);
}
const navClasses =
    "list-none space-y-0 font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 mb-0 mr-5";

const navigationItems = computed(() => {
    const defaultClasses = "block py-2 pl-3 pr-4 text-silver-light rounded md:p-0";
    const activeClassName = "text-electric-blue-dark dark:text-electric-blue-light";
    const hoverClasses = "dark:hover:text-blue-900 hover:text-blue-900 md:hover:bg-transparent";

    if (route.path === "/") {
        return [
            {
                type: "a",
                href: "#our-services",
                text: "Services",
                classes: `${defaultClasses} ${route.hash === "#our-services" ? activeClassName : ""} ${hoverClasses}`,
            },
            {
                type: "a",
                href: "#ai-consulting",
                text: "AI Consulting",
                classes: `${defaultClasses} ${route.hash === "#ai-consulting" ? activeClassName : ""} ${hoverClasses}`,
            },
            {
                type: "a",
                href: "#contact",
                text: "Contact",
                classes: `${defaultClasses} ${route.hash === "#contact" ? activeClassName : ""} ${hoverClasses}`,
            },
            {
                type: "NuxtLink",
                to: "/guides",
                text: "Guides",
                classes: `${defaultClasses} ${route.hash === "guides" ? activeClassName : ""} ${hoverClasses}`,
            },
            // ... other items for the home route
        ];
    } else if (route.path === "/services/ai-consulting") {
        return [
            {
                type: "NuxtLink",
                to: "/",
                text: "Home",
                classes: `${defaultClasses} ${route.hash === "/" ? activeClassName : ""} ${hoverClasses}`,
            },
            {
                type: "a",
                href: "#how-we-work",
                text: "How we work",
                classes: `${defaultClasses} ${route.hash === "#how-we-work" ? activeClassName : ""} ${hoverClasses}`,
            },
            {
                type: "a",
                href: "#value-proposition",
                text: "Why Choose Us",
                classes: `${defaultClasses} ${route.hash === "#value-proposition" ? activeClassName : ""} ${hoverClasses}`,
            },
            {
                type: "a",
                href: "#contact",
                text: "Contact",
                classes: `${defaultClasses} ${route.hash === "#contact" ? activeClassName : ""} ${hoverClasses}`,
            },
            // ... other items for the home route
        ];
    } else if (route.path.startsWith("/services")) {
        return [
            {
                type: "NuxtLink",
                to: "/services/ai",
                text: "Services",
                classes: `${defaultClasses} ${route.hash === "/services" ? activeClassName : ""} ${hoverClasses}`,
            },
            {
                type: "NuxtLink",
                to: "/services/ai-consulting",
                text: "AI Consulting",
                classes: `${defaultClasses} ${route.hash === "/services/ai-consulting" ? activeClassName : ""} ${hoverClasses}`,
            },
            // ... other items for the home route
        ];
    } else if (route.path.startsWith("/guides")) {
        return [
            {
                type: "NuxtLink",
                to: "/guides",
                text: "Guides",
                classes: `${defaultClasses} ${route.hash === "guides" ? activeClassName : ""} ${hoverClasses}`,
            },
            // ... other items for the home route
        ];
    } else if (route.path.includes("/policies")) {
        return [
            {
                type: "NuxtLink",
                to: "/policies/terms-and-conditions",
                text: "Terms & Conditions",
                classes: `${defaultClasses} ${route.path === "/policies/terms-and-conditions" ? activeClassName : ""} ${hoverClasses}`,
            },
            {
                type: "NuxtLink",
                to: "/policies/privacy",
                text: "Privacy",
                classes: `${defaultClasses} ${route.path === "/policies/privacy" ? activeClassName : ""} ${hoverClasses}`,
            },
            // ... other items for the policies route
        ];
    }
    return [];
});

const itemClass = (navItem) => {
    let baseClasses =
        "block py-2 pl-3 pr-4 rounded md:p-0 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-blue-300 md:dark:hover:bg-transparent";
    if (route.path === navItem.to) {
        return `${baseClasses} text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500`;
    }
    return `${baseClasses} text-gray-900`;
};


</script>