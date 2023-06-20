<template>
    <!-- <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"> -->
    <nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NuxtLink to="/"
                class="flex items-center dark:text-silver-light dark:hover:text-vibrant-red-light text-vibrant-red-light">
                <!-- <img :src="logo" class="h-10 mr-3 svg-fill" alt="Digital Sanctum Logo" /> -->
                <div class="mr-3">
                    <svg class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        viewBox="0 0 717.81 776.84">
                        <path
                            d="m 306.0293,782.71025 c -14.6806,-1.34553 -40.00149,-4.87477 -53.5,-7.45685 -21.203,-4.05584 -34.60754,-7.38952 -56.5,-14.05142 -16.25118,-4.94526 -36.73136,-12.49511 -48.68807,-17.94846 -2.85345,-1.30143 -5.49483,-2.36624 -5.86975,-2.36624 -0.8862,0 -28.1686,-13.64653 -35.94218,-17.97811 -18.98953,-10.58132 -40.68974,-25.37992 -58.5,-39.89447 -11.05054,-9.00568 -34.57433,-31.91267 -42.0750197,-40.97179 -2.43374,-2.9394 -5.65529002,-6.7644 -7.15901,-8.5 -1.50371,-1.73559 -2.74121,-3.92716 -2.75,-4.87015 -0.0147,-1.57881 2.60316,-6.81843 7.13743,-14.28548 1.00194,-1.65 2.26458,-3.9 2.80585,-5 0.5412694,-1.1 2.2343694,-4.09508 3.7624394,-6.65573 1.5280703,-2.56066 4.5723503,-7.73566 6.7650703,-11.5 2.19272,-3.76435 4.44272,-7.59491 5,-8.51235 0.55728,-0.91745 1.7172,-2.94245 2.57759,-4.5 5.07157,-9.18096 8.5264,-15.19541 15.32742,-26.68325 4.18452,-7.06823 7.60823,-12.98514 7.60823,-13.14867 0,-0.16353 3.28665,-5.85544 7.30367,-12.64867 4.01703,-6.79323 7.62296,-13.02633 8.01318,-13.85133 0.39023,-0.825 2.06631,-3.75 3.72464,-6.5 1.65832,-2.75 3.45799,-5.9 3.99926,-7 0.54127,-1.1 1.80391,-3.35 2.80585,-5 1.00194,-1.65 2.95339,-5.025 4.33654,-7.5 1.38316,-2.475 4.29949,-7.425 6.48073,-11 2.18123,-3.575 4.27806,-7.175 4.6596,-8 0.38155,-0.825 1.5158,-2.85 2.52055,-4.5 1.00475,-1.65 3.20393,-5.475 4.88707,-8.5 3.789469,-6.81057 14.92924,-25.96623 16.2831,-28 0.5492,-0.825 1.3078,-2.16409 1.68579,-2.97575 0.75422,-1.61954 14.72254,-25.61408 16.3142,-28.02425 0.54483,-0.825 1.42678,-2.4 1.9599,-3.5 0.53311,-1.1 2.32611,-4.25 3.98443,-7 1.65833,-2.75 3.32249,-5.675 3.69815,-6.5 0.37566,-0.825 2.18159,-3.87124 4.01318,-6.76942 1.83159,-2.89818 3.33016,-5.47775 3.33016,-5.73238 0,-0.25464 1.8,-3.40383 4,-6.9982 2.2,-3.59437 4,-6.76124 4,-7.03749 0,-0.27624 1.05349,-2.18081 2.34109,-4.23238 1.28759,-2.05157 3.476,-5.75513 4.86312,-8.23013 4.46726,-7.97082 15.7504,-27.45313 16.79529,-29 0.55728,-0.825 1.32249,-2.16409 1.70048,-2.97575 0.75422,-1.61954 14.72254,-25.61408 16.3142,-28.02425 0.54483,-0.825 1.42678,-2.4 1.9599,-3.5 0.53311,-1.1 2.32611,-4.25 3.98443,-7 1.65833,-2.75 3.33441,-5.675 3.72464,-6.5 0.39022,-0.825 3.99615,-7.0581 8.01318,-13.85133 4.01702,-6.79323 7.30367,-12.48514 7.30367,-12.64867 0,-0.16353 3.375,-5.99878 7.5,-12.9672 4.125,-6.96843 7.5,-12.8561 7.5,-13.08372 0,-0.38522 6.84624,-12.0919 9.03485,-15.44908 0.53783,-0.825 1.28836,-2.175 1.66784,-3 0.37948,-0.825 3.88949,-6.91091 7.80002,-13.52425 3.91053,-6.61334 7.42605,-12.68834 7.81227,-13.5 0.38622,-0.81166 1.52429,-2.82575 2.52904,-4.47575 1.00475,-1.65 3.31461,-5.7 5.13302,-9 1.81841,-3.3 4.07875,-7.125 5.02296,-8.5 0.94421,-1.375 3.20455,-5.2 5.02296,-8.5 1.81841,-3.3 4.12827,-7.35 5.13302,-9 1.00475,-1.65 2.14282,-3.66409 2.52904,-4.47575 0.38622,-0.81166 3.99008,-7.03 8.0086,-13.81853 4.01851,-6.788543 7.30638,-12.529023 7.30638,-12.756643 0,-0.22762 1.71669,-3.23428 3.81488,-6.68147 2.09818,-3.44718 4.12705,-6.94261 4.50859,-7.76761 0.38155,-0.825 1.52592,-2.85 2.54304,-4.5 2.15021,-3.48811 12.84169,-21.83077 14.86332,-25.5 0.75758,-1.375 2.17923,-3.85 3.15921,-5.5 0.97999,-1.65 3.26545,-5.7 5.0788,-9 1.81336,-3.3 3.64097,-6.45 4.06137,-7 1.66561,-2.1791 10.97079,-18.8402802 10.97079,-19.6435003 0,-0.47107 0.9,-0.8565009 2,-0.8565009 1.1,0 2,0.4191609 2,0.9314609 0,0.7676201 12.58849,22.8731603 15.98426,28.0685403 0.53923,0.825 1.89631,3.3 3.01574,5.5 1.11943,2.2 2.47651,4.675 3.01574,5.5 0.53923,0.825 4.36159,7.35 8.49413,14.5 4.13255,7.15 7.96123,13.675 8.50833,14.5 0.547,0.825 1.3,2.175 1.6733,3 0.3733,0.825 2.3954,4.32043 4.4936,7.76761 2.0982,3.44719 3.8149,6.45385 3.8149,6.68147 0,0.4199 14.164,24.796723 16.0083,27.550923 0.5524,0.825 1.3164,2.175 1.6977,3 0.3812,0.825 3.3503,6 6.5979,11.5 3.2476,5.5 7.2819,12.475 8.965,15.5 1.6831,3.025 3.8823,6.85 4.8871,8.5 1.0047,1.65 2.1428,3.66409 2.529,4.47575 0.8064,1.69458 14.8348,25.76439 16.3332,28.02425 0.547,0.825 1.3,2.175 1.6733,3 0.3733,0.825 2.3954,4.32043 4.4936,7.76761 2.0982,3.44719 3.8149,6.45385 3.8149,6.68147 0,0.22762 3.375,6.11529 7.5,13.08372 4.12504,6.96842 7.50004,12.80367 7.50004,12.9672 0,0.3253 14.4116,25.07326 16.0142,27.5 0.5448,0.825 1.4268,2.4 1.9599,3.5 0.5331,1.1 2.3261,4.25 3.9844,7 1.6583,2.75 3.3344,5.675 3.7246,6.5 0.826,1.74626 14.8391,25.7808 16.3252,28 0.5524,0.825 1.3149,2.175 1.6944,3 0.3795,0.825 3.9766,7.0581 7.9936,13.85133 4.017,6.79323 7.3037,12.52281 7.3037,12.73239 0,0.20958 1.8,3.32191 4,6.91628 2.2,3.59437 4,6.7067 4,6.91628 0,0.38388 14.1705,24.79188 16.0142,27.58372 0.5448,0.825 1.4268,2.4 1.9599,3.5 0.5331,1.1 2.3261,4.25 3.9844,7 1.6583,2.75 3.3344,5.675 3.7246,6.5 0.826,1.74626 14.8391,25.7808 16.3252,28 0.5524,0.825 1.3149,2.175 1.6944,3 0.3795,0.825 3.9766,7.0581 7.9936,13.85133 4.017,6.79323 7.3037,12.52281 7.3037,12.73239 0,0.20958 1.8,3.32191 4,6.91628 2.2,3.59437 4,6.74437 4,7 0,0.25563 1.868,3.5102 4.151,7.23239 2.2831,3.72218 5.2827,8.79261 6.6659,11.26761 1.3831,2.475 3.3346,5.85 4.3365,7.5 1.0019,1.65 2.2646,3.9 2.8058,5 0.5413,1.1 2.341,4.25 3.9993,7 1.6583,2.75 3.3344,5.675 3.7246,6.5 0.3903,0.825 3.9962,7.0581 8.0132,13.85133 4.017,6.79323 7.3037,12.48514 7.3037,12.64867 0,0.16353 3.4237,6.08044 7.6082,13.14867 4.1846,7.06823 8.9836,15.32633 10.6646,18.35133 1.681,3.025 3.8784,6.85 4.8832,8.5 1.0047,1.65 2.139,3.675 2.5205,4.5 0.3816,0.825 2.478,4.425 4.6587,8 3.9434,6.46478 6.1787,10.31645 9.8657,17 1.0619,1.925 2.7265,4.85 3.6991,6.5 7.9676,13.51728 8.2819,14.71988 4.8374,18.51022 -1.2444,1.36938 -5.689,6.53978 -9.8769,11.48978 -26.7709,31.64284 -67.3976,62.71089 -112.3944,85.9504 -7.9141,4.0874 -12.6263,6.28738 -28.9661,13.52346 -24.9008,11.02729 -61.9559,22.71674 -92.00004,29.02245 -34.1358,7.16448 -69.0847,11.10461 -96.1116,10.83559 -9.28862,-0.0925 -15.0884,-0.30244 -12.8884,-0.46663 10.26871,-0.76635 23.55201,-2.593 29,-3.98792 3.3,-0.84494 7.8,-1.99887 10,-2.56427 2.2,-0.56541 5.8,-1.70852 8,-2.54026 2.2,-0.83174 4.9,-1.84863 6,-2.25975 4.7998,-1.79396 16.4287,-7.63916 21.2694,-10.69097 2.8982,-1.82715 5.5157,-3.3221 5.8167,-3.3221 1.6,0 18.0676,-13.60515 25.4139,-20.99624 2.475,-2.4901 6.3,-6.77212 8.5,-9.51561 2.2,-2.74348 4.2754,-5.21315 4.612,-5.48815 1.5665,-1.27965 10.98434,-16.23085 14.17294,-22.5 13.2988,-26.1467 19.4571,-56.31903 16.8836,-82.71921 -2.9271,-30.02635 -12.7677,-56.30385 -29.80704,-79.59396 -10.8113,-14.77748 -34.5283,-36.11995 -46.8615,-42.16985 -1.65,-0.80938 -4.5773,-2.4304 -6.5051,-3.60226 -5.6926,-3.46034 -28.4735,-11.92969 -36.4949,-13.56786 -8.52307,-1.74062 -27.34743,-3.83088 -34.5,-3.83088 -12.88078,0 -29.87491,2.57836 -45.5,6.90328 -7.73737,2.14166 -22.38417,8.54835 -31.5,13.7785 -21.1615,12.14127 -44.52758,35.2923 -56.00454,55.48907 -11.7432,20.66529 -17.60745,38.14445 -20.57055,61.31317 -1.77378,13.86936 -1.76822,20.12 0.0307,34.53986 3.15946,25.32547 11.35319,47.76085 24.82004,67.96014 2.75013,4.125 5.27567,7.725 5.61229,8 0.33663,0.275 2.24066,2.525 4.23118,5 5.14079,6.392 12.34449,13.66107 19.88087,20.06125 7.14722,6.0697 13.56311,10.93875 14.41386,10.93875 0.30102,0 2.95174,1.5381 5.89049,3.418 4.60071,2.94303 14.48185,7.85794 21.19565,10.54278 8.53158,3.41175 10.76056,4.11201 23.5,7.38275 5.25885,1.35016 20.45283,3.38135 30,4.01051 2.475,0.1631 -4.275,0.30624 -15,0.3181 -10.725,0.0118 -23.775,-0.37028 -29,-0.84917 z"
                            id="path271" />
                    </svg>
                </div>
                <span class="self-center text-2xl font-semibold whitespace-nowrap">Digital
                    Sanctum</span>
            </NuxtLink>
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
                    <li>
                        <NuxtLink to="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0 dark:text-white" :class="{
                            'hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-blue-300 md:dark:hover:bg-transparent': route.path.startsWith('/policies'),
                            'text-white bg-blue-700 md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500': !route.path.startsWith('/policies')
                        }" :aria-current="route.path.startsWith('/policies') ? undefined : 'page'">
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
                    </li>
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
    const activeClassName = "md:text-electric-blue-light";
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
            // ... other items for the home route
        ];
    } else if (route.path === "/services/ai-consulting") {
        return [
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