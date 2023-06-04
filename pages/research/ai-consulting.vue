<template>
    <!-- AI Consulting for Improved Workflow and Productivity -->
    <section>
        <!-- {{ userStore.user }}
        {{ userStore.session }}
        {{ status }}
        <div>
            {{ userStore.form }}
        </div> -->
        <div v-if="!userStore.session" class="container mx-auto px-4">
            <div class="mx-auto w-2/4 my-10">
                <div v-if="status" class="relative z-0 w-full mb-6 group">
                    <h2>A token has been sent to your email address. Please check your email and click on the link to verify
                        and continue.</h2>
                </div>
                <div v-else class="relative z-0 w-full mb-6 group">
                    <label for="email" class="block text-gray-500 dark:text-gray-400">Please enter business email
                        address</label>
                    <input type="email" name="email" id="email" v-model="userStore.user.email"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="business email" required />
                    <button @click="processEmail()" v-if="validateEmail()" class="btn-primary">Verify email</button>
                </div>
                <div v-if="userStore.form.email.mode" class="relative z-0 w-full mb-6 group">
                    <label for="email" class="block text-gray-500 dark:text-gray-400">Email verified!</label>
                    <h2>{{ userStore.user.email }}</h2>
                </div>
            </div>
        </div>
        <div v-else class="container mx-auto px-4">
            <div id="names" class="mx-auto w-2/4 my-10">
                <div class="grid md:grid-cols-2 md:gap-6">
                    <h2>Token confirmed!</h2>
                    <p>{{ userStore.user.email }}</p>
                </div>
                <div v-if="userStore.form.names.mode == 'edit'">
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <label for="first_name"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                                name</label>
                            <input type="text" name="first_name" id="first_name" v-model="userStore.user.first_name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                        </div>
                        <div v-if="userStore.user.first_name">
                            <div v-if="validateInput(userStore.user.first_name, 2)" class="relative z-0 w-full mb-6 group">
                                <input type="text" name="floating_last_name" id="floating_last_name"
                                    v-model="userStore.user.last_name"
                                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" " required />
                                <label for="floating_last_name"
                                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                                    name</label>
                            </div>
                        </div>
                    </div>

                    <div v-if="userStore.user.last_name" class="grid md:grid-cols-2 md:gap-6">
                        <div v-if="validateInput(userStore.user.last_name, 2)" class="relative z-0 w-full mb-6 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone"
                                v-model="userStore.user.phone"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_phone"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                                number (landline or mobile)</label>
                        </div>
                    </div>
                    <div v-if="userStore.user.phone" class="grid md:grid-cols-2 md:gap-6">
                        <div v-if="validatePhoneNumber(userStore.user.phone)" class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_company" id="floating_company"
                                v-model="userStore.user.business_name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required />
                            <label for="floating_company"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Business
                                name</label>
                        </div>
                    </div>
                    <div v-if="userStore.user.business_name">
                        <button @click="saveNamesAndNumber()" v-if="validateInput(userStore.user.business_name, 3)"
                            class="btn-primary">Save and continue</button>
                    </div>
                </div>
                <div v-else class="grid md:grid-cols-2 md:gap-6">
                    <div>
                        <h3 class=" mb-1">First Name</h3>
                        <p>{{ userStore.user.first_name }}</p>
                    </div>
                    <div>
                        <h3 class=" mb-1">Last Name</h3>
                        <p>{{ userStore.user.last_name }}</p>
                    </div>
                    <div>
                        <h3 class=" mb-1">Phone</h3>
                        <p>{{ userStore.user.phone }}</p>
                    </div>
                    <div>
                        <h3 class=" mb-1">Business Name</h3>
                        <p>{{ userStore.user.business_name }}</p>
                    </div>
                </div>
            </div>

            <div class="mx-auto w-2/4 my-10">
                <label for="budget" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Please select the
                    category that best describes the size of {{ userStore.user.business_name }} based on annual
                    turnover:</label>
                <div id="budget" class="space-y-2">
                    <template v-for="(option, index) in businessSizes" :key="index">
                        <div class="flex items-center">
                            <input @click="userStore.saveResearchByEmail()" :id="`business_size-radio-${index}`"
                                type="radio" :value="option.value" v-model="userStore.user.business_size"
                                :name="`business_size-radio-${index}`"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label :for="`business_size-radio-${index}`"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option.text
                                }}</label>
                        </div>
                    </template>
                </div>
            </div>
            <div class="mx-auto w-2/4 my-10">
            </div>

            <div v-if="userStore.user.business_size" class="mx-auto w-2/4 my-10">
                <label for="employees" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">How many
                    individuals are employed by {{ userStore.user.business_name }}, including both internal staff and
                    external contractors?</label>
                <div id="employees" class="space-y-2">
                    <template v-for="(option, index) in businessEmployeesOptions" :key="index">
                        <div class="flex items-center">
                            <input @change="userStore.saveResearchByEmail()" :id="`employees-radio-${index}`" type="radio"
                                :value="option.value" v-model="userStore.user.employee_count" name="employees"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label :for="`employees-radio-${index}`"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option.text
                                }}</label>
                        </div>
                    </template>
                </div>
            </div>

            <div v-if="userStore.user.employee_count" class="mx-auto w-2/4 my-10">
                <label for="business-industry" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What
                    industry
                    does {{ userStore.user.business_name }} operate in?</label>
                <select @change="userStore.saveResearchByEmail()" id="business-industry"
                    v-model="userStore.user.business_industry" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">Select industry</option>
                    <option v-for="option in sortedOptions(industry, 'text', 'asc')" :key="option.value"
                        :value="option.value">
                        {{ option.text }}
                    </option>
                </select>
            </div>

            <!-- This div contains a group of toggle buttons for selecting AI technologies or solutions previously implemented by the user's business. -->
            <div v-if="userStore.user.business_industry" class="mx-auto w-2/4 my-10">
                <label for="business-ai-tech" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Has
                    {{ userStore.user.business_name }} previously implemented any AI technologies or solutions?</label>
                <div id="aiUse" class="space-y-2">
                    <template v-for="(option, index) in aiUseOptions" :key="index">
                        <div class="flex items-center">
                            <input @change="userStore.saveResearchByEmail()" :id="`aiUse-radio-${index}`" type="radio"
                                :value="option.value" v-model="userStore.user.research.ai_use" name="aiUse"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label :for="`aiUse-radio-${index}`"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option.text
                                }}</label>
                        </div>
                    </template>
                </div>
                <div>{{ userStore.user.research.ai_tech }}</div>
                <div v-if="userStore.user.research.ai_use" id="business-ai-tech" class="space-y-2">
                    <label for="business-ai-tech"
                        class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Please select the AI
                        technologies previously implemented.</label>
                    <button v-for="option in aiTechnologies" :key="option.value"
                        @click="toggleOption(option.value, userStore.user.research.ai_tech)" :class="[
                            userStore.user.research.ai_tech.includes(option.value) ? 'dark:bg-purple-500 dark:text-white bg-blue-500 text-white' : 'bg-gray-50 text-gray-900',
                            'text-sm rounded-lg border border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white w-full transition-colors duration-200'
                        ]">
                        {{ option.text }}
                    </button>
                </div>
            </div>
            <div v-if="(!AIUse && userStore.user.research.ai_tech.length === 0) || userStore.user.research.ai_tech.length"
                class="mx-auto w-2/4 my-10">
                <label for="business-opportunities"
                    class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What specific business
                    challenges
                    or opportunities do you hope to address through AI consulting services? (Select all that
                    apply)</label>
                <div id="business-opportunities" class="space-y-2">
                    <button v-for="option in opportunities" :key="option.value"
                        @click="toggleOption(option.value, userStore.user.research.opportunities)" :class="[
                            userStore.user.research.opportunities.includes(option.value) ? 'dark:bg-purple-500 dark:text-white bg-blue-500 text-white' : 'bg-gray-50 text-gray-900',
                            'text-sm rounded-lg border border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white w-full transition-colors duration-200'
                        ]">
                        {{ option.text }}
                    </button>
                </div>
            </div>
            <div v-if="userStore.user.research.opportunities.length" class="mx-auto w-2/4 my-10">
                <label for="budget" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What is your
                    approximate budget for AI consulting services? (Please select the most appropriate range)</label>
                <div id="budget" class="space-y-2">
                    <template v-for="(option, index) in budgetOptions" :key="index">
                        <div class="flex items-center">
                            <input @change="userStore.saveResearchByEmail()" :id="`budget-radio-${index}`" type="radio"
                                :value="option.value" v-model="userStore.user.research.budget" name="budget"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label :for="`budget-radio-${index}`"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option.text
                                }}</label>
                        </div>
                    </template>
                </div>
            </div>
            <div class="mx-auto w-2/4 my-10" v-if="userStore.user.research.budget">
                <label for="implementation-timeline"
                    class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What is the anticipated timeline
                    for {{ userStore.user.business_name }} to initiate the use of AI solutions? (Please pick the most
                    relevant range)</label>
                <div id="implementation-timeline" class="space-y-2">
                    <template v-for="(option, index) in timelineOptions" :key="index">
                        <div class="flex items-center">
                            <input @change="userStore.saveResearchByEmail()" :id="`radio-${index}`" type="radio"
                                :value="option.value" v-model="userStore.user.research.implementation_timeline"
                                name="implementation-timeline"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label :for="`radio-${index}`"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option.text
                                }}</label>
                        </div>
                    </template>
                </div>
            </div>

            <!-- <div class="mx-auto w-2/4 my-10" v-if="userStore.user.research.implementation_timeline">
                <label for="specific-concerns" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Are
                    there any specific concerns or
                    requirements you would like us to address during the AI consulting process?
                </label>
                <textarea id="specific-concerns" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Please write your thoughts here..."></textarea>
            </div> -->

            <div class="mx-auto w-2/4 my-10" v-if="userStore.user.research.implementation_timeline">
                <button @click="saveResearch()" v-if="validateInput(userStore.user.business_name, 3)"
                    class="btn-primary">Save and continue</button>
            </div>


        </div>
    </section>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore()
import { useTokenStore } from '~/stores/tokenStore';
const tokenStore = useTokenStore()
import { useSiteStore } from '~/stores/siteStore';
const siteStore = useSiteStore()
import aiImg from '~/assets/images/ai-consulting-light-01.jpg'
import aiImgDark from '~/assets/images/ai-consulting-dark-01.jpg'

const path: string = useRoute().path;

const aiBackgroundImage = computed(() => {
    return `url(${siteStore.theme === 'light' ? aiImg : aiImgDark})`;
});

let user = ref({
    email: "",
    name: "",
    first_name: "",
    last_name: ""
})

const form = { email: false, names: false }
const status = ref("")

checkResearch()

interface Option {
    value: string;
    text: string;
}

function checkResearch() {
    if (userStore.user.research === undefined) {
        userStore.user.research = {
            ai_use: null,
            ai_tech: [],
            opportunities: [],
            budget: "",
            implementation_timeline: ""
        }
    }
}

async function processEmail() {
    status.value = await userStore.getUserByEmailAndSaveToken(path)
}

async function saveNamesAndNumber() {
    const result = await userStore.saveUserInfoByEmail()
    if (result.value) {
        form.names = true
        console.log(form)
    }
}

async function saveResearch() {
    const result = await userStore.saveUserResearchByEmail()
    if (result.value) {
        form.names = true
        console.log(form)
    }
}

function sortByKey<T>(key: keyof T, order: 'asc' | 'desc' = 'desc') {
    return function (a: T, b: T) {
        const comparison = a[key].localeCompare(b[key]);
        return order === 'asc' ? comparison : -comparison;
    }
}

const sortedOptions = (options: Option[], key: keyof Option, order: 'asc' | 'desc' = 'desc') => options.sort(sortByKey(key, order));

function toggleOption(value: any, array: any[]) {
    const index = array.indexOf(value);
    if (index !== -1) {
        array.splice(index, 1);
        console.log(array)
    } else {
        array.push(value);
    }
    userStore.saveResearchByEmail()
}

function validateInput(field: string, length: number) {
    return field.length > length
}


function validateEmail() {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (regex.test(userStore.user.email)) {
        return true
    } else {
        return false
    }
}


function validatePhoneNumber(phoneNumber: string): boolean {
    // Remove white spaces from the phone number
    phoneNumber = phoneNumber.replace(/\s/g, "");

    // Mobile number (starts with 04), 10 characters long
    if (/^04\d{8}$/.test(phoneNumber) && phoneNumber.length === 10) {
        return true;
    }

    // Landline (starts with any Australian area code), 10 characters long
    if (/^(02|03|07|08)\d{8}$/.test(phoneNumber) && phoneNumber.length === 10) {
        return true;
    }

    // Local Melbourne number, 8 characters long
    if (/^\d{8}$/.test(phoneNumber) && phoneNumber.length === 8) {
        return true;
    }

    return false;
}

const businessSizes: Option[] = [
    { value: 'micro', text: 'Micro (less than $2 million)' },
    { value: 'small', text: 'Small (between $2 and $10 million)' },
    { value: 'large', text: 'Large (greater than $250 million)' },
];

const businessEmployeesOptions: Option[] = [
    { value: '< 10', text: 'Fewer than 10' },
    { value: '10 and 50', text: 'Between 10 and 50' },
    { value: '51 and 100', text: 'Between 51 and 100' },
    { value: '101 and 500', text: 'Between 101 and 500' },
    { value: '> 500', text: 'More than 500' },
];

const industry: Option[] = [
    { value: 'agri', text: 'Agriculture, Forestry, and Fishing' },
    { value: 'mining', text: 'Mining, Quarrying, and Oil & Gas Extraction' },
    { value: 'construction', text: 'Construction' },
    { value: 'manufacturing', text: 'Manufacturing' },
    { value: 'wholesale', text: 'Wholesale Trade' },
    { value: 'retail', text: 'Retail Trade' },
    { value: 'transport', text: 'Transportation and Warehousing' },
    { value: 'utilities', text: 'Utilities' },
    { value: 'ict', text: 'Information and Communications Technology' },
    { value: 'finance', text: 'Finance and Insurance' },
    { value: 'realestate', text: 'Real Estate, Rental, and Leasing' },
    { value: 'profserv', text: 'Professional, Scientific, and Technical Services' },
    { value: 'management', text: 'Management of Companies and Enterprises' },
    { value: 'admin', text: 'Administrative and Support Services' },
    { value: 'education', text: 'Educational Services' },
    { value: 'health', text: 'Healthcare and Social Assistance' },
    { value: 'arts', text: 'Arts, Entertainment, and Recreation' },
    { value: 'accommodation', text: 'Accommodation and Food Services' },
    { value: 'publicadmin', text: 'Public Administration and Government' },
    { value: 'nonprofit', text: 'Nonprofit Organisations' },
    { value: 'otherserv', text: 'Other Services' },
];

const aiUseOptions = [
    { text: 'Yes', value: true },
    { text: 'No', value: false }
]

const aiTechnologies: Option[] = [
    { value: 'machine_learning', text: 'Machine learning (e.g., predictive analytics, recommendation systems)' },
    { value: 'nlp', text: 'Natural language processing (e.g., sentiment analysis, chatbots)' },
    { value: 'computer_vision', text: 'Computer vision (e.g., image recognition, video analytics)' },
    { value: 'speech_recognition', text: 'Speech recognition and synthesis (e.g., voice assistants, transcription services)' },
    { value: 'robotics', text: 'Robotics and automation (e.g., robotic process automation, autonomous vehicles)' },
    { value: 'expert_systems', text: 'Expert systems (e.g., rule-based systems, decision support systems)' },
    { value: 'ai_analytics', text: 'AI-powered analytics and business intelligence tools' },
    { value: 'ai_marketing', text: 'AI-driven marketing and customer engagement platforms' },
    { value: 'ai_cybersecurity', text: 'AI-enabled cybersecurity solutions' },
    { value: 'ai_supply_chain', text: 'AI-powered supply chain and logistics management systems' },
    { value: 'other_ai', text: 'Other AI technologies or solutions' },
];

const opportunities: Option[] = [
    { value: 'customer_experience', text: 'Enhancing customer experiences and personalisation' },
    { value: 'new_revenue', text: 'Developing new revenue streams through innovative products or services' },
    { value: 'market_expansion', text: 'Expanding into new markets or customer segments' },
    { value: 'industry_trends', text: 'Identifying and exploiting emerging industry trends' },
    { value: 'competitive_advantage', text: 'Gaining a competitive advantage through innovation and technology adoption' },
    { value: 'workforce_skills', text: 'Improving workforce skills and capabilities through AI-driven training and development' },
    { value: 'pricing_strategy', text: 'Optimising pricing and revenue management strategies' },
    { value: 'collaboration', text: 'Streamlining collaboration and knowledge sharing within the organisation' },
    { value: 'untapped_data', text: 'Unlocking insights from untapped data sources' },
    { value: 'sustainability', text: 'Enhancing sustainability and environmental initiatives' },
    { value: 'social_media', text: 'Improving social media presence and online reputation management' },
    { value: 'mergers_acquisitions', text: 'Leveraging AI-driven tools for mergers and acquisitions or strategic partnerships' },
    { value: 'brand_awareness', text: 'Boosting brand awareness and market share' },
    { value: 'csr', text: 'Enhancing corporate social responsibility efforts through AI-powered solutions' },
    { value: 'other_opportunities', text: 'Other business opportunities' },
];

const AIUse = ref<boolean>()
const businessAiTech = ref<string[]>([]);
const businessOpportunities = ref<string[]>([]);
const businessBudget = ref('');

const budgetOptions = [
    { value: 'less_than_10000', text: 'Less than $10,000' },
    { value: '10000_to_24999', text: '$10,000 - $24,999' },
    { value: '25000_to_49999', text: '$25,000 - $49,999' },
    { value: '50000_to_99999', text: '$50,000 - $99,999' },
    { value: '100000_to_249999', text: '$100,000 - $249,999' },
    { value: '250000_to_499999', text: '$250,000 - $499,999' },
    { value: '500000_to_999999', text: '$500,000 - $999,999' },
    { value: '1000000_or_more', text: '$1,000,000 or more' },
];

const timelineOptions = [
    { value: '3_months', text: 'Within the next 3 months' },
    { value: '3_to_6_months', text: '3 to 6 months' },
    { value: '6_to_12_months', text: '6 to 12 months' },
    { value: '12_to_18_months', text: '12 to 18 months' },
    { value: '18_to_24_months', text: '18 to 24 months' },
    { value: 'more_than_24_months', text: 'More than 24 months' },
];

const implementationTimeline = ref('');


</script>