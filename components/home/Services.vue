<template>
    <!-- Our Services -->
    <section id="our-services" class="py-16 dark:bg-charcoal-dark dark:text-silver-light bg-gray-100 text-charcoal-dark">
        <div class="container mx-auto px-4">
            <h2 class="text-4xl font-bold text-center mt-10 mb-12">Our Services</h2>
            <div class="grid grid-cols-6 gap-4">
                <div class="col-start-2 col-span-4">
                    <p class="text-center">
                        Experience the dynamic blend of technology and creativity that is Digital Sanctum, and let's
                        redefine the boundaries of what's possible together.
                    </p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <!-- AI Consulting -->
                <NuxtLink to="/services/ai-consulting" class="flex flex-col items-center mb-10 p-10 dark:hover:bg-rose-950">
                    <!-- <img src="ai-consulting-icon.png" alt="AI Consulting Icon" class="w-20 h-20 mb-4" /> -->
                    <aiConsultingIcon class="section-icon" />
                    <h3 class="text-2xl font-semibold mb-2">AI Consulting</h3>
                    <p class="text-left">
                        Embark on an exhilarating journey with our AI Consulting service, where we integrate cutting-edge AI
                        into your workflow to drive innovation and unlock untapped potential. Our service combines the power
                        of automation and IT support to streamline operations, making your business more efficient and
                        competitive.
                    </p>
                </NuxtLink>

                <!-- Product Development -->
                <div class="flex flex-col items-center mb-10 p-10 dark:hover:bg-slate-900">
                    <!-- <img src="workflow-automation-icon.png" alt="Workflow Automation Icon" class="w-20 h-20 mb-4" /> -->
                    <workflowIcon class="section-icon" />
                    <h3 class="text-2xl font-semibold text-center mb-2">
                        Product Development
                    </h3>
                    <p class="text-left">
                        Ignite change with our Product Development service, transforming your visionary ideas into
                        tangible
                        products.<br />
                        Our energetic and enthusiastic team collaborates closely with you, building innovative and
                        user-friendly solutions that deliver value and resonate with your target audience.
                    </p>
                </div>

            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import workflowIcon from '~/components/icons/workflow.vue'
import aiConsultingIcon from '~/components/icons/aiconsulting.vue'
</script>