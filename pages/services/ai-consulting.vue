<template>
  <div>
    <SectionsHero :hero="heroData" :top="0" />

    <!-- Header and Navigation -->
    <div ref="navbar" class="navbar">
      <Nav />
    </div>

    <!-- AI Readiness Assessment -->
    <section id="ai-readiness-assessment"
      class="py-16 dark:bg-indigo-950 bg-gray-100 dark:text-silver-light text-charcoal-dark">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mt-10">
          Let's start with an AI Readiness Assessment
        </h2>
        <div class="grid grid-cols-6 gap-4 text-center">
          <div class="col-start-2 col-span-4">
            <p class="mt-6 mb-12">
              Understanding where you stand is the first step to harnessing the power of AI. We evaluate your existing
              infrastructure, data, and business processes to identify potential areas for AI integration.
            </p>
            <NuxtLink to="ai-readiness-assessment" class="btn-primary-lg">What is an AI Readiness Assessment</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- How we work -->
    <section id="how-we-work" class="py-16 dark:bg-indigo-950 bg-gray-100 dark:text-silver-light text-charcoal-dark">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mt-10">
          Empowering Your Business With AI
        </h2>
        <div class="grid grid-cols-6 gap-4">
          <div class="col-start-2 col-span-4">
            <p class="text-center mt-6 mb-12">
              In a world where technology is constantly evolving, your business needs to harness the power of artificial
              intelligence to stay competitive. But understanding and implementing AI can be complex and challenging.
              That's
              where we come in.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="flex flex-col dark:bg-text-dark hover:dark:bg-gray-950 hover:bg-red-100 bg-text-light p-10 rounded-lg">
            <h3>1. Identifying Opportunities</h3>
            <p class="mb-6">
              We help you pinpoint where AI can add value, from streamlining operations to enhancing customer service or
              even creating new revenue streams.
            </p>
          </div>
          <div
            class="flex flex-col dark:bg-text-dark hover:dark:bg-gray-950 hover:bg-red-100 bg-text-light p-10 rounded-lg">
            <h3>2. Choosing AI Tools</h3>
            <p class="mb-6">
              With a myriad of AI technologies available, we guide you in selecting the most suitable tools for your
              unique needs and budget.
            </p>
          </div>
          <div
            class="flex flex-col dark:bg-text-dark hover:dark:bg-gray-950 hover:bg-red-100 bg-text-light p-10 rounded-lg">
            <h3>3. AI Implementation</h3>
            <p class="mb-6">
              We assist in integrating AI technologies into your existing systems, tailoring tools to meet your business
              needs, and ensuring a secure, compliant implementation.
            </p>
          </div>
          <div
            class="flex flex-col dark:bg-text-dark hover:dark:bg-gray-950 hover:bg-red-100 bg-text-light p-10 rounded-lg">
            <h3>4. Employee Training</h3>
            <p class="mb-6">
              We provide comprehensive training, empowering your team to leverage AI tools effectively and harness their
              full potential.
            </p>
          </div>
          <div
            class="flex flex-col dark:bg-text-dark hover:dark:bg-gray-950 hover:bg-red-100 bg-text-light p-10 rounded-lg">
            <h3>5. Monitoring and Optimisation</h3>
            <p class="mb-6">
              We don't stop at implementation. We monitor the performance of your AI tools and make necessary
              adjustments
              for optimal effectiveness.
            </p>
          </div>
          <div
            class="flex flex-col dark:bg-text-dark hover:dark:bg-gray-950 hover:bg-red-100 bg-text-light p-10 rounded-lg">
            <h3>6. Ongoing Support</h3>
            <p class="mb-6">
              Our relationship doesn't end after implementation. We offer ongoing support, ensuring that your AI systems
              continue to operate smoothly and contribute to your business's success.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Digital Sanctum? -->
    <section id="value-proposition" class="bg-silver-light py-16 dark:bg-charcoal-dark dark:text-silver-dark">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mt-10 mb-12 text-center">
          Why Choose Digital Sanctum?
        </h2>
        <div class="grid grid-cols-6 gap-4">
          <div class="col-start-2 col-span-4">
            <p class="text-center mt-6 mb-12">
              When you choose Digital Sanctum, you're opting for a partner who is as invested in your success as you are.
              Here's why we stand out:
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Over 30 Years of IT Experience -->
          <div class="flex flex-col p-10">
            <!-- <img src="experience-icon.png" alt="Experience Icon" class="w-20 h-20 mb-4" /> -->
            <h3 class="text-xl font-semibold mb-2">
              Personalised Approach
            </h3>
            <p>
              At Digital Sanctum, we believe in the power of bespoke solutions. Our expertise in CRM and ERP tool creation
              allows us to design systems specifically tailored to your unique needs, sidestepping the limitations of
              one-size-fits-all solutions.
            </p>
          </div>

          <!-- Clear, Jargon-Free Communication -->
          <div class="flex flex-col p-10">
            <!-- <img src="communication-icon.png" alt="Communication Icon" class="w-20 h-20 mb-4" /> -->
            <h3 class="text-xl font-semibold mb-2">
              Integrated Expertise
            </h3>
            <p>
              Our holistic approach blends AI consulting with comprehensive IT support. This synergistic combination
              provides you with wide-ranging solutions that address your broader business challenges, not just isolated
              technological issues.
            </p>
          </div>

          <!-- Patient and Empathetic Approach -->
          <div class="flex flex-col p-10">
            <!-- <img src="empathy-icon.png" alt="Empathy Icon" class="w-20 h-20 mb-4" /> -->
            <h3 class="text-xl font-semibold mb-2">
              Practical Business Acumen
            </h3>
            <p>
              With qualifications in business management and lean business models, we offer advice and tools that are
              grounded in both technical proficiency and sound business knowledge. We ensure our solutions fit your unique
              business context perfectly.
            </p>
          </div>

          <!-- Customised Solutions for Your Unique Needs -->
          <div class="flex flex-col p-10">
            <!-- <img src="custom-solutions-icon.png" alt="Custom Solutions Icon" class="w-20 h-20 mb-4" /> -->
            <h3 class="text-xl font-semibold mb-2">
              Long-Standing Experience
            </h3>
            <p>
              Having roots in IT support since 1992 and programming since 1996, we offer a depth of technological
              understanding that fosters credibility and instills trust. Our long-term industry presence means we
              understand technology's past, present, and future.
            </p>
          </div>

          <!-- Customised Solutions for Your Unique Needs -->
          <div class="flex flex-col p-10">
            <!-- <img src="custom-solutions-icon.png" alt="Custom Solutions Icon" class="w-20 h-20 mb-4" /> -->
            <h3 class="text-xl font-semibold mb-2">
              Agile and Future-Focused
            </h3>
            <p>
              Embracing Agile methodologies, we promise a flexible, iterative approach to product development, delivering
              quicker results and adapting to changes swiftly. Our commitment to continuous learning and staying updated
              with the latest advancements enables us to provide you with cutting-edge, effective solutions.
            </p>
          </div>
          <!-- Customised Solutions for Your Unique Needs -->
          <div class="flex flex-col p-10">
            <NuxtLink to="/about/business-principles" class="btn-primary">Our Business Principles</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Consulting for Improved Workflow and Productivity -->
    <section id="ai-consulting" class="py-16 bg-gray-100 dark:text-silver-light text-charcoal-dark"
      :style="{ backgroundImage: aiBackgroundImage }">
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
              We also specialise in <NuxtLink to="/guides/introduction-to-prompt-engineering" class="underline">prompt
                engineering</NuxtLink>, a technique used to improve
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
    <Contact />

  </div>
</template>

<script setup lang="ts">
import { useSiteStore } from '~~/stores/siteStore';
import heroImg from '~/assets/images/services-ai-consulting-dark.jpg'
import heroImgLight from '~/assets/images/services-ai-consulting-light.jpg'
import aiImg from '~/assets/images/ai-consulting-light-01.jpg'
import aiImgDark from '~/assets/images/ai-consulting-dark-01.jpg'
import Contact from '~/components/Contact.vue'

definePageMeta({
  layout: "landing",
});

const siteStore = useSiteStore()

const heroData = {
  heading: "AI Consulting Services",
  subHeading: "Empowering Your Business with Tailored AI Solutions",
  img: { dark: heroImg, light: heroImgLight },
  cta: { text: "It starts with...", to: "#ai-readiness-assessment" }
}

const aiBackgroundImage = computed(() => {
  return `url(${siteStore.theme === 'light' ? aiImg : aiImgDark})`;
});


const navbar = ref(null);
let isNavSticky = false;

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > navbar.value.offsetHeight && !isNavSticky) {
    navbar.value.style.position = 'sticky';
    navbar.value.style.top = '0';
    isNavSticky = true;
  } else if (scrollTop <= navbar.value.offsetHeight && isNavSticky) {
    navbar.value.style.position = 'fixed';
    navbar.value.style.top = '';
    navbar.value.style.bottom = '0';
    isNavSticky = false;
  }
};


onMounted(() => {
  // Get the saved theme from local storage
  const savedTheme = localStorage.getItem('theme');

  // Set the theme in the store based on the saved theme
  siteStore.setTheme(savedTheme ? savedTheme : 'dark');

  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);

});

const theme = siteStore.theme;

</script>


<style scoped>
.navbar {
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: top 0.3s;
}

.hero-section {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>
