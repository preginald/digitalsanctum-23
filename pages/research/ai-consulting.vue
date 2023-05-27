<template>
    <!-- AI Consulting for Improved Workflow and Productivity -->
    <section id="ai-consulting" class="py-16 bg-gray-100 dark:text-silver-light text-charcoal-dark"
        :style="{ backgroundImage: aiBackgroundImage }" -->

        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mt-10 mb-12">
                AI Consulting for Improved Workflow and Productivity
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- <div class="grid grid-cols-2 gap-8"> -->
                <div class="flex flex-col dark:bg-text-dark bg-text-light p-10 rounded-lg">
                    <p class="mb-6">
                        Our AI consulting services help businesses leverage the power of
                        artificial intelligence to optimise their workflow, enhance
                        productivity, and drive innovation.
                    </p>
                    <p>
                        With our expertise in AI technologies, we can help you implement
                        advanced solutions like machine learning, natural language
                        processing, and computer vision to automate repetitive tasks,
                        improve decision-making, and uncover hidden patterns in your data.
                    </p>
                </div>
                <div class="flex flex-col dark:bg-text-dark bg-text-light p-10 rounded-lg">
                    <p class="mb-6">
                        We also specialise in prompt engineering, a technique used to improve
                        the performance and efficiency of AI language models. By crafting
                        effective prompts, we can ensure that your AI-driven solutions
                        generate more accurate and relevant responses, ultimately enhancing
                        your business operations.
                    </p>
                    <p>
                        Whether you're a small business or a large enterprise, our AI
                        consultants can guide you through the process of adopting AI
                        technologies, ensuring a seamless integration with your existing
                        systems and a positive impact on your bottom line.
                    </p>
                </div>

            </div>

        </div>
    </section>
    <section>

        <div class="container mx-auto px-4">
            <div class="mx-auto w-2/4 my-10">
                <div class="relative z-0 w-full mb-6 group">
                    <label for="email" class="block text-gray-500 dark:text-gray-400">Please enter business email
                        address</label>
                    <input type="email" name="email" id="email" v-model="businessEmail"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                        placeholder="business email" required />

                </div>
                <button @click="fetchUser()" v-if="validateEmail()" class="btn-primary">Start</button>
                <div class="grid md:grid-cols-2 md:gap-6" v-if="false">
                    <div class="relative z-0 w-full mb-6 group">
                        <label for="first_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                            name</label>
                        <input type="text" name="first_name" id="first_name" v-model="user.first_name"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" v-model="user.last_name"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_last_name"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                            name</label>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 md:gap-6" v-if="user.first_name && user.last_name">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone"
                            v-model="businessPhone"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_phone"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                            number (landline or mobile)</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_company" id="floating_company" v-model="businessName"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_company"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Business
                            name</label>
                    </div>
                </div>
            </div>

            <div class="mx-auto w-2/4 my-10" v-if="businessName && validateInput(businessName)">
                <label for="budget" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What is your
                    approximate budget for AI consulting services? (Please select the most appropriate range)</label>
                <div id="budget" class="space-y-2">
                    <template v-for="(option, index) in businessSizes" :key="index">
                        <div class="flex items-center">
                            <input :id="`budget-radio-${index}`" type="radio" :value="option.value" v-model="businessSize"
                                name="budget"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label :for="`budget-radio-${index}`"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option.text }}</label>
                        </div>
                    </template>
                </div>
            </div>

            <div v-if="businessSize" class="mx-auto w-2/4 my-10">
                <label for="business-industry" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What
                    industry
                    does your business operate in?</label>
                <select id="business-industry" v-model="businessIndustry" required
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="">Select industry</option>
                    <option v-for="option in sortedOptions(industry, 'text', 'asc')" :key="option.value"
                        :value="option.value">
                        {{ option.text }}
                    </option>
                </select>
            </div>

            <!-- This div contains a group of toggle buttons for selecting AI technologies or solutions previously implemented by the user's business. -->
            <div v-if="businessIndustry" class="mx-auto w-2/4 my-10">
                <label for="business-ai-tech" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Has your
                    business previously implemented any AI technologies or solutions?</label>
                <div>{{ businessAiTech }}</div>
                <div id="business-ai-tech" class="space-y-2">
                    <button v-for="option in aiTechnologies" :key="option.value"
                        @click="toggleOption(option.value, businessAiTech)" :class="[
                            businessAiTech.includes(option.value) ? 'dark:bg-purple-500 dark:text-white bg-blue-500 text-white' : 'bg-gray-50 text-gray-900',
                            'text-sm rounded-lg border border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white w-full transition-colors duration-200'
                        ]">
                        {{ option.text }}
                    </button>
                </div>
            </div>

            <div v-if="businessAiTech.length" class="mx-auto w-2/4 my-10">
                <label for="business-opportunities"
                    class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What specific business challenges
                    or opportunities do you hope to address through AI consulting services? (Select all that apply)</label>
                <div id="business-opportunities" class="space-y-2">
                    <button v-for="option in opportunities" :key="option.value"
                        @click="toggleOption(option.value, businessOpportunities)" :class="[
                            businessOpportunities.includes(option.value) ? 'dark:bg-purple-500 dark:text-white bg-blue-500 text-white' : 'bg-gray-50 text-gray-900',
                            'text-sm rounded-lg border border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:hover:bg-blue-500 dark:hover:text-white w-full transition-colors duration-200'
                        ]">
                        {{ option.text }}
                    </button>
                </div>
            </div>
            <div v-if="businessOpportunities.length" class="mx-auto w-2/4 my-10">
                <label for="budget" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What is your
                    approximate budget for AI consulting services? (Please select the most appropriate range)</label>
                <div id="budget" class="space-y-2">
                    <template v-for="(option, index) in budgetOptions" :key="index">
                        <div class="flex items-center">
                            <input :id="`budget-radio-${index}`" type="radio" :value="option.value" v-model="businessBudget"
                                name="budget"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label :for="`budget-radio-${index}`"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option.text }}</label>
                        </div>
                    </template>
                </div>
            </div>
            <div class="mx-auto w-2/4 my-10" v-if="businessBudget">
                <label for="implementation-timeline"
                    class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">What is your preferred timeline for
                    implementing AI solutions in your organization? (Please select the most appropriate range)</label>
                <div id="implementation-timeline" class="space-y-2">
                    <template v-for="(option, index) in timelineOptions" :key="index">
                        <div class="flex items-center">
                            <input :id="`radio-${index}`" type="radio" :value="option.value"
                                v-model="implementationTimeline" name="implementation-timeline"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label :for="`radio-${index}`"
                                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{{ option.text }}</label>
                        </div>
                    </template>
                </div>
            </div>

            <div class="mx-auto w-2/4 my-10" v-if="implementationTimeline">
                <label for="specific-concerns" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Are
                    there any specific concerns or
                    requirements you would like us to address during the AI consulting process?
                </label>
                <textarea id="specific-concerns" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Please write your thoughts here..."></textarea>
            </div>

            <div>
            </div>


        </div>
    </section>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/userStore';
const userStore = useUserStore()
import { useSiteStore } from '~/stores/siteStore';
const siteStore = useSiteStore()
import aiImg from '~/assets/images/ai-consulting-light-01.jpg'
import aiImgDark from '~/assets/images/ai-consulting-dark-01.jpg'

const aiBackgroundImage = computed(() => {
    return `url(${siteStore.theme === 'light' ? aiImg : aiImgDark})`;
});

let user = ref({
    email: "",
    name: "",
    first_name: "",
    last_name: ""
})

interface Option {
    value: string;
    text: string;
}

async function fetchUser() {
    await userStore.getUserByEmail(businessEmail.value)
    user.value.first_name = userStore.user.first_name
    user.value.last_name = userStore.user.last_name
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
}

function validateInput(field: string) {
    return field.length > 3
}


function validateEmail() {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (regex.test(businessEmail.value)) {
        return true
    } else {
        return false
    }
}

const businessSizes: Option[] = [
    { value: 'micro', text: 'Micro (less than $2 million)' },
    { value: 'small', text: 'Small (between $2 and $10 million)' },
    { value: 'large', text: 'Large (greater than $250 million)' },
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

const businessEmail = ref('')
const businessFirstName = ref('')
const businessLastName = ref('')
const businessPhone = ref('')
const businessName = ref('')
const businessSize = ref('');
const businessIndustry = ref('')
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