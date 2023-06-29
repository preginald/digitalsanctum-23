<template>
    <div>
        <SectionsHero :hero="heroData" :top="60" />
        <SectionsGrid :section="sectionData" :sectionItems="assessmentKeyAreas" id="testing" />
    </div>
</template>
<script setup lang="ts">
import heroImg from '~/assets/images/services-ai-consulting-dark.jpg'
import heroImgLight from '~/assets/images/services-ai-consulting-light.jpg'

const heroData = {
    heading: "What is an AI Readiness Assessment?",
    subHeading: "An AI Readiness Assessment is the first step on your journey to harnessing the power of artificial intelligence (AI) in your business. It's about understanding where your business stands today, and identifying the opportunities where AI can make the biggest impact.",
    img: { dark: heroImg, light: heroImgLight },
    cta: { text: "Why do you need an AI Readiness Assessment?", to: "#testing" }
}


const sectionData = {
    heading: "Why do you need an AI Readiness Assessment?",
    intro: "AI can be transformative, but it's not a one-size-fits-all solution. Every business is unique, with its own goals, challenges, and processes. An AI Readiness Assessment takes a deep dive into your business to identify where and how AI can add value.",
    subHeading: "The assessment covers several key areas"
}
const assessmentKeyAreas = [
    {
        heading: "Technical Infrastructure",
        content: "We review your existing IT systems to understand their capacity to support AI technologies."
    },
    {
        heading: "Data Availability and Quality",
        content: "AI thrives on data. We'll look at what data you're collecting, how it's stored, and how it can be used for AI."
    },
    {
        heading: "Skills and Expertise",
        content: "We'll assess the AI-related skills and expertise within your team, and identify any areas where additional training or support might be needed."
    },
    {
        heading: "Business Processes",
        content: "We'll map out your business processes to find areas where AI could improve efficiency, effectiveness, or customer satisfaction."
    },
    {
        heading: "Organisational Culture",
        content: "Successful AI implementation requires more than just technology. We'll look at your organization's readiness for change and capacity to adopt new technologies."
    }
]







</script>
<style scoped>
.navbar {
    left: 0;
    width: 100%;
    z-index: 1000;
    transition: top 0.3s;
}
</style>