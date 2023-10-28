<template>
    <section class="max-w-2xl mx-auto px-4 my-10">
        <div>
            <div>
                <h2>Workflow questionnaire</h2>
            </div>
            <div class="question-container">
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
                    <hr>
                    <div class="mt-3">
                        <h4>Answer</h4>
                        <button @click="pushDailyRole()" v-if="taskValid()" class="btn-primary">Add</button>
                    </div>
                </div>
                <div>
                    <div v-for="task in answers.tasks" class="card-sm">
                        {{ task.task }} {{ task.when }}
                    </div>
                </div>
            </div>
            <div class="question-container">
                <h3>How much do you enjoy performing this task?</h3>
                <div v-for="task in answers.tasks">
                    <label for="dailyroletime" class="block text-gray-500 dark:text-gray-400">{{ task.task }} - {{ likeability(task.like) }}</label>
                    <input v-model="task.like" id="steps-range" type="range" min="1" max="5" step="1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                </div>
            </div>
        </div>
        <pre>
            {{ answers }}
        </pre>
    </section>
</template>
<script setup lang="ts">
const task = ref({task: "", when: [], like: 3})
const answers = ref({tasks: []})
const pushDailyRole = () => {
    answers.value.tasks.push({...task.value})
    task.value.task = ""
    task.value.when = []
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

const taskValid = () => {
    return task.value.task !== '' && task.value.when !== ''
}

const likeability = (like) => {
   return likeabilityLabels[like];
}

</script>