<template>
  <div>

    <!-- Hero Section -->
    <section class="hero-section p-8 flex items-center justify-center bg-electric-blue-light dark:bg-electric-blue-dark"
      :style="{ backgroundImage: heroBackgroundImage }">
      <div class="container mx-auto px-4 sm:max-w-screen-lg">
        <h1
          class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          <span class="text-blue-600 dark:text-blue-500">Transform Your Business
          </span>with Digital Sanctum
        </h1>
        <h2 class="text-xl mt-4 text-charcoal-dark dark:text-silver-light">
          Unlock your organisation's full potential through expert IT solutions
          and innovation.
        </h2>
        <button @click="scrollToServices" class="btn-primary mt-4">
          Discover Our Services
        </button>
      </div>
    </section>

    <!-- Our Services -->
    <section id="our-services"
      class="py-16 dark:bg-electric-blue-dark dark:text-silver-light bg-electric-blue-light text-charcoal-dark">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Business Process Management -->
          <div class="flex flex-col items-center">
            <!-- <img src="business-process-management-icon.png" alt="Business Process Management Icon"
              class="w-20 h-20 mb-4" /> -->
            <h3 class="text-2xl font-semibold text-center mb-2">
              Business Process Management
            </h3>
            <p class="text-center">
              Optimise your organisation's processes and increase efficiency
              with our expert consulting services.
            </p>
          </div>

          <!-- Workflow Automation using Programming -->
          <div class="flex flex-col items-center">
            <!-- <img src="workflow-automation-icon.png" alt="Workflow Automation Icon" class="w-20 h-20 mb-4" /> -->
            <h3 class="text-2xl font-semibold text-center mb-2">
              Workflow Automation using Programming
            </h3>
            <p class="text-center">
              Harness the power of programming to automate routine tasks and
              improve overall productivity.
            </p>
          </div>

          <!-- IT Support -->
          <div class="flex flex-col items-center">
            <!-- <img src="it-support-icon.png" alt="IT Support Icon" class="w-20 h-20 mb-4" /> -->
            <h3 class="text-2xl font-semibold mb-2">IT Support</h3>
            <p class="text-center">
              Rely on our experienced team to provide comprehensive IT support
              for your organisation.
            </p>
          </div>

          <!-- AI Consulting -->
          <div class="flex flex-col items-center">
            <!-- <img src="ai-consulting-icon.png" alt="AI Consulting Icon" class="w-20 h-20 mb-4" /> -->
            <h3 class="text-2xl font-semibold mb-2">AI Consulting</h3>
            <p class="text-center">
              Leverage artificial intelligence to drive innovation and unlock
              new opportunities for your business.
            </p>
          </div>
        </div>
        <!-- <div class="text-center mt-12">
          <button class="bg-blue-500 text-white px-8 py-3 rounded">
            Learn More About Our Services
          </button>
        </div> -->
      </div>
    </section>
    <!-- Why Choose Digital Sanctum? -->
    <section class="bg-silver-light py-16 text-center dark:bg-charcoal-dark dark:text-silver-dark">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12">
          Why Choose Digital Sanctum?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Over 30 Years of IT Experience -->
          <div class="flex flex-col items-center">
            <!-- <img src="experience-icon.png" alt="Experience Icon" class="w-20 h-20 mb-4" /> -->
            <h3 class="text-2xl font-semibold mb-2">
              Over 30 Years of IT Experience
            </h3>
            <p>
              Our team has decades of experience in the IT industry, ensuring
              the highest quality services for your organization.
            </p>
          </div>

          <!-- Clear, Jargon-Free Communication -->
          <div class="flex flex-col items-center">
            <!-- <img src="communication-icon.png" alt="Communication Icon" class="w-20 h-20 mb-4" /> -->
            <h3 class="text-2xl font-semibold mb-2">
              Clear, Jargon-Free Communication
            </h3>
            <p>
              We prioritise clear and concise communication, making complex
              technical concepts easy to understand for everyone.
            </p>
          </div>

          <!-- Patient and Empathetic Approach -->
          <div class="flex flex-col items-center">
            <!-- <img src="empathy-icon.png" alt="Empathy Icon" class="w-20 h-20 mb-4" /> -->
            <h3 class="text-2xl font-semibold mb-2">
              Patient and Empathetic Approach
            </h3>
            <p>
              We take the time to understand your unique needs and provide
              patient guidance throughout our collaboration.
            </p>
          </div>

          <!-- Customised Solutions for Your Unique Needs -->
          <div class="flex flex-col items-center">
            <!-- <img src="custom-solutions-icon.png" alt="Custom Solutions Icon" class="w-20 h-20 mb-4" /> -->
            <h3 class="text-2xl font-semibold mb-2">
              Customised Solutions for Your Unique Needs
            </h3>
            <p>
              We create tailored solutions designed specifically to address the
              challenges and opportunities facing your business.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- AI Consulting for Improved Workflow and Productivity -->
    <section id="ai-consulting" class="py-16 bg-gray-100 dark:text-silver-light text-charcoal-dark"
      :style="{ backgroundImage: aiBackgroundImage }">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">
          AI Consulting for Improved Workflow and Productivity
        </h2>
        <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> -->
        <div class="grid grid-cols-2 gap-8">
          <div class="flex flex-col dark:bg-text-dark bg-text-light p-10 rounded-lg">
            <p class="mb-6">
              Our AI consulting services help businesses leverage the power of
              artificial intelligence to optimise their workflow, enhance
              productivity, and drive innovation.
            </p>
            <p class="mb-6">
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
            <p class="mb-6">
              Whether you're a small business or a large enterprise, our AI
              consultants can guide you through the process of adopting AI
              technologies, ensuring a seamless integration with your existing
              systems and a positive impact on your bottom line.
            </p>
          </div>

        </div>

        <!-- <div class="grid grid-cols-3 gap-8 mt-3">
          <div></div>
          <button class="bg-blue-500 text-white px-8 py-3 rounded">
            Explore AI Consulting Services
          </button>
          <div></div>
        </div> -->
      </div>
    </section>

    <!-- Call to Action -->
    <section id="contact"
      class="py-16 dark:bg-deep-blue-dark dark:text-silver-light bg-deep-blue-light text-charcoal-dark">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p class="text-xl mb-12">
          Get in touch with our team for a consultation or to learn more about
          our services.
        </p>
        <button class="disabled bg-blue-500 text-white px-8 py-3 rounded">
          We will relaunch our service on the 15th of May 2023
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSiteStore } from '~~/stores/siteStore';
import heroImg from '~/assets/images/hero.jpg'
import heroImgLight from '~/assets/images/hero-light-v1-0.jpg'
import aiImg from '~/assets/images/ds-abstract-services.png'
import aiImgDark from '~/assets/images/ai-consulting-dark-01.jpg'

const siteStore = useSiteStore()

const heroBackgroundImage = computed(() => {
  return `url(${siteStore.theme === 'light' ? heroImgLight : heroImg})`;
});

const aiBackgroundImage = computed(() => {
  return `url(${siteStore.theme === 'light' ? aiImg : aiImgDark})`;
});

const headerVisible = ref(false);

const scrollToServices = () => {
  const ourServices = document.querySelector('#our-services');
  if (ourServices) {
    ourServices.scrollIntoView({ behavior: 'smooth' });
  }
};

const handleScroll = () => {
  if (window.scrollY === 0) {
    headerVisible.value = false;
  } else {
    headerVisible.value = true;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // Get the saved theme from local storage
  const savedTheme = localStorage.getItem('theme');

  // Set the theme in the store based on the saved theme
  siteStore.setTheme(savedTheme ? savedTheme : 'dark');


  // Get the saved theme from local storage
  // const savedTheme = localStorage.getItem('theme');

  // Set the theme ref value based on the saved theme
  // theme.value = savedTheme ? savedTheme : 'dark';


});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const theme = siteStore.theme;

</script>


<style scoped>
.hero-section {
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
}

.sticky {
  position: sticky;
  top: 0;
}
</style>
