<template>
    <section class="container mx-auto px-4 my-10">
        <div>
            <div>
                <h2>Workflow questionnaire</h2>
            </div>
            <div>
                <h3>Can you describe a typical day in your role?</h3>
                <div class="flex">
                    <div class="w-2/4">
                        <label for="dailyrole" class="block text-gray-500 dark:text-gray-400">Task</label>
                        <input type="text" name="dailyrole" id="dailyrole" v-model="task.task"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
                            placeholder="Respond to emails" required />
                    </div>
                    <div class="">
                        <label for="dailyroletime" class="block text-gray-500 dark:text-gray-400">When</label>
                        <select v-model="task.when" name="dailyroletime" id="" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600">
                            <option value="">Select when this task is performed</option>
                            <option value="morning">Morning</option>
                            <option value="midday">Midday</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                            <option value="night">Night</option>
                        </select>
                    </div>
                    <div>
                        <button @click="pushDailyRole()">Add</button>
                    </div>
                </div>
            </div>
            <div>
                <ul class="my-5">
                    <li v-for="task in answers.tasks">
                        {{ task.task }} {{ task.when }}
                    </li>
                </ul>
            </div>
        </div>
        <pre>
            {{ answers }}
        </pre>
    </section>
</template>
<script setup lang="ts">
const task = ref({task: "", when: ""})
const answers = ref({tasks: []})
const pushDailyRole = () => {
    answers.value.tasks.push({...task.value})
    task.value.task = ""
    task.value.when = ""

}
</script>