<template>
    <section class="max-w-2xl mx-auto px-4 my-10">
        <div>
            <div>
                <h2>Workflow questionnaire</h2>
            </div>
            <div class="question-container">
                <label for="fullName" class="h3">What's your name?</label>
                <input v-model="answers.fullName" id="fullName" type="text" class="mt-3 input-text">
            </div>
            <div v-if="fullNameValid()" class="question-container">
                <h3>How would you rate your technology proficiency?</h3>
                <div>
                    <input v-model="answers.proficiency" id="technology-proficiency" type="range" min="1" max="10" step="1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                    <label v-show="answers.proficiency > 0" for="technology-proficiency" class="block text-gray-500 dark:text-gray-400">{{proficiency(answers.proficiency) }}</label>
                </div>
            </div>
            <div  class="question-container">
                <label for="fullName" class="h3">Please select your role(s) from the following list?</label>
                <p>Choose all that apply to your current position within the business.</p>
                <div>
                    <button v-for="role in roles" class="my-1 mr-2" :class="roleBtnClass()">{{ role.name }}</button>
                </div>
            </div>
            <div v-if="answers.proficiency > 0" class="question-container">
                <div class="">
                    <div class="">
                        <label for="dailyrole" class="h3">Are there areas in your business where you see room for improvement?</label>
                        <input @keyup.enter="pushRoomForImprovement" type="text" name="dailyrole" id="dailyrole" v-model="roomForImprovement"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                            placeholder="Room for improvement" required />
                    </div>
                        <button @click="pushRoomForImprovement()" v-if="roomForImprovementValid()" class="btn-primary">Add</button>
                    <div v-if="answers.roomForImprovement.length" class="mt-3">
                        <h4>Answer</h4>
                        <div v-for="roomForImprovement in answers.roomForImprovement" class="card-sm">
                            {{ roomForImprovement }}
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div v-if="answers.roomForImprovement > 0" class="question-container"> -->
            <div  class="question-container">
                <h3>Can you describe a typical day in your role?</h3>
                <div class="">
                    <div class="">
                        <label for="dailyrole" class="block text-gray-500 dark:text-gray-400">Task</label>
                        <input type="text" name="dailyrole" id="dailyrole" v-model="task.task"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                            placeholder="Respond to emails" required />
                    </div>
                    <div class="checkbox-container">
                        <label for="dailyroletime" class="block text-gray-500 dark:text-gray-400">When</label>
                        <div class="flex">
                            <div v-for="(option, index) in timeOfDayOptions" :key="'timeOfDayOptions'+index">
                                <input type="checkbox" :id="'time'+option.value" v-model="task.when" :value='option.value' class="input-checkbox-h" />
                                <label :for="'time'+option.value" class="checkbox-label">{{ option.label }}</label>
                            </div>
                        </div>
                    </div>
                        <button @click="pushDailyRole()" v-if="taskValid()" class="btn-primary">Add</button>
                    <hr>
                    <div v-if="answers.tasks.length" class="mt-3">
                        <h4>Answer</h4>
                    </div>
                </div>
                <div>
                    <div v-for="task in answers.tasks" class="card-sm">
                        {{ task.task }} {{ task.when }}
                    </div>
                </div>
            </div>
            <div v-if="answers.tasks.length > 0" class="question-container">
                <h3>How much do you enjoy performing this task?</h3>
                <div v-for="task in answers.tasks">
                    <label for="dailyrolelikeability" class="block text-gray-500 dark:text-gray-400">{{ task.task }} - {{ likeability(task.like) }}</label>
                    <input v-model="task.like" id="steps-range-like" type="range" min="1" max="5" step="1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                </div>
            </div>
            <div v-if="answers.tasks.length > 0" class="question-container">
                <h3>How long does it take to perform this task?</h3>
                <div v-for="task in answers.tasks">
                    <label for="dailyroleduration" class="block text-gray-500 dark:text-gray-400">{{ task.task }} - {{duration(task.duration) }}</label>
                    <input v-model="task.duration" id="steps-range" type="range" min="1" max="5" step="1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                </div>
            </div>
        </div>
        <pre>
            {{ answers }}
        </pre>
    </section>
</template>
<script setup lang="ts">

interface Task {
  task: string;
  when: string[];
  like: number;
}

interface Answer {
    fullName: string;
    roles: string[];
    proficiency: number;
    roomForImprovement: string[];
    tasks: Task[];
}

const roomForImprovement = ref("")
const task = ref({task: "Respond to emails", when: [], like: 3, duration: 1})
const answers = ref({fullName: '', roles: [], proficiency: 0, roomForImprovement: [], tasks: []})


const pushRoomForImprovement = () => {
    answers.value.roomForImprovement.push(roomForImprovement.value)
    roomForImprovement.value = ""
}


const pushDailyRole = () => {
    answers.value.tasks.push({...task.value})
    task.value.task = ""
    task.value.when = []
}

const technologyProficiency = {
    1: "Technophobe: Individuals who are uncomfortable using technology and might require a lot of hand-holding and support.",
    2: "Technology Novice: Individuals who have basic knowledge about technology but might struggle with more advanced concepts.",
    3: "Casual User: Individuals who are comfortable using common technology such as smartphones and laptops, but are not adept at handling complex software or hardware issues.",
    4: "Intermediate User: These individuals have a good understanding of technology and can navigate through most common software and applications with ease.",
    5: "Capable User: They are quite comfortable with a wide range of technologies and can handle some minor technical issues on their own.",
    6: "Tech-savvy: These individuals are very confident in their tech skills, they understand how to use most modern technologies proficiently.",
    7: "Advanced User: People in this category have deep knowledge about specific areas of technology, they can handle complex software or hardware issues.",
    8: "Expert User: They have extensive experience with various technology systems and platforms, these users rarely need assistance with technical issues.",
    9: "Tech Enthusiast: These clients love to explore new technologies, they always stay updated on the latest trends and advancements in the tech world",
    10: "Technology Professional/Expert: These individuals work in the field of technology or have a deep passion for it ensuring they stay ahead of new developments, they can easily adapt to new systems and platforms."
}

const timeOfDayOptions = [
    {value:"morning", label: "Morning"},
    {value:"midday", label: "Midday"},
    {value:"afternoon", label: "Afternoon"},
    {value:"evening",label: "Evening"},
    {value:"night",label: "Night"}
] 

const likeabilityLabels = {
  1: 'Hate it',
  2: 'Dislike it',
  3: 'Neutral',
  4: 'Like it',
  5: 'Love it'
}

const durationLabels = {
  1: 'Less than 5 minutes',
  2: '5-15 minutes',
  3: '15-30 minutes',
  4: '30-60 minutes',
  5: 'more than 60 minutes'
}

const fullNameValid = () => {
    let regex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    return regex.test(answers.value.fullName);
}

const roleBtnClass = () => {
    return "btn-primary-sm"
}

const roomForImprovementValid = () => {
    return roomForImprovement.value !== ""
}

const taskValid = () => {
    return task.value.task !== '' && task.value.when.length > 0 
}

const proficiency = (proficiency:number) => {
   return technologyProficiency[proficiency];
}

const likeability = (like:number) => {
   return likeabilityLabels[duration];
}
const duration = (duration:number) => {
   return durationLabels[duration];
}

const roles = [
  {name: "CEO", description: "The CEO is responsible for making major corporate decisions, managing the overall operations and resources of a company, including the implementation of long-term and short-term plans."},
  {name: "COO", description: "The COO oversees the organization’s ongoing business operations and procedures."},
  {name: "CFO", description: "The CFO manages the company's finances, including profit and loss reporting, budget allocation, financial forecasting and financial risk management."},
  {name: "CIO", description: "The CIO is responsible for information technology (IT) strategy to support the organization's goals."},
  {name: "HR Manager", description: "They manage employee-related services, regulatory compliance, employee benefits and grievances."},
  {name: "Sales Manager", description: "They are responsible for leading a sales team by providing guidance, training and mentorship, setting sales quotas and goals, creating sales plans, analyzing data etc."},
  {name: "Marketing Manager", description:"They oversee the promotion of a product or service that their company offers."},
  {name: "Operations Manager", description:"They are responsible for managing all aspects of production or service delivery in a firm."},
  {name:"Project Manager",description:"They oversee all aspects of projects within the company from planning to execution to closure."},
  {name:"Business Analyst",description:"They analyze a business domain or system and documents its processes or systems by assessing the business model or its integration with technology."},
  {name:"Customer Service Representative",description:"They interact with customers on behalf of an organization to provide information about products or services, take orders, handle complaints etc." },
  {name:"Administrative Assistant",description:"They support offices by answering phone calls,taking messages, scheduling appointments, preparing documents etc."},
  {name:"Accountant/Bookkeeper",description:"They record financial transactions of a business and maintains its financial records."},
  {name:"Product Manager",description:"They guide the success of a product line by developing product marketing strategies based on market research"},
  {name:"R&D Specialist",description:"Their role involves researching and developing new products or improvements to existing products."},
  {name:"Supply Chain Manager",description:"They oversee and manage every stage of the production flow, from sourcing raw materials to delivering the finished product to the customer."},
  {name: "QA Manager",description: "They ensure that all products or services meet quality standards before they go to market." },
  {name: "Legal Advisor", description: "They provide legal advice on a wide range of issues to ensure that the company is operating within its legal boundaries."},
  {name: "PR Officer", description: "They manage the communication between an organization and its public in order to create and maintain a positive image."},
  {name: "Health and Safety Officer", description: "They develop, implement and monitor safety policies to ensure compliance with health and safety regulations within the workplace."}
]

</script>