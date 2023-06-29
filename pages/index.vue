<template>
  <div>

    <SectionsHero :hero="content" :top="0" />

    <!-- Header and Navigation -->
    <div ref="navbar" class="navbar">
      <Nav />
    </div>

    <Services />

    <!-- Why Choose Digital Sanctum? -->
    <section class="bg-silver-light py-16 text-center dark:bg-charcoal-dark dark:text-silver-dark">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mt-10 mb-12">
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
              the highest quality services for your business.
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
        <NuxtLink to="/about/business-principles-at-digital-sanctum" class="btn-primary">Our Business Principles
        </NuxtLink>
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
import heroImg from '~/assets/images/hero.jpg'
import heroImgLight from '~/assets/images/hero-light-v1-0.jpg'
import aiImg from '~/assets/images/ai-consulting-light-01.jpg'
import aiImgDark from '~/assets/images/ai-consulting-dark-01.jpg'
import Services from '~/components/home/Services.vue';
import Contact from '~/components/Contact.vue'

definePageMeta({
  layout: "landing",
});

const siteStore = useSiteStore()

const heroBackgroundImage = computed(() => {
  return `url(${siteStore.theme === 'light' ? heroImgLight : heroImg})`;
});

const aiBackgroundImage = computed(() => {
  return `url(${siteStore.theme === 'light' ? aiImg : aiImgDark})`;
});

const scrollToServices = () => {
  const ourServices = document.querySelector('#our-services');
  if (ourServices) {
    ourServices.scrollIntoView({ behavior: 'smooth' });
  }
};

const navbar = ref(null);
let isNavSticky = false;

const content = ref({
  heading: "Transforming Your Business with AI Prowess",
  subHeading: "Enhancing your operational efficacy, cultivating innovation, and unlocking growth with our tech-savvy, forward-thinking solutions.",
  img: { dark: heroImg, light: heroImg },
  cta: { text: "Empower your business", to: "#our-services" }
})

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

  let randomIndex = Math.floor(Math.random() * heroText.length);

  content.value.heading = heroText[randomIndex].headline;
  content.value.subHeading = heroText[randomIndex].subheadline;
  withOrAnd.value = heroText[randomIndex].withOrAnd;


});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);

});

const theme = siteStore.theme;

let withOrAnd = ref('');

const heroText = [
  {
    headline: "Transforming Your Business with AI Prowess",
    subheadline: "Enhancing your operational efficacy, cultivating innovation, and unlocking growth with our tech-savvy, forward-thinking solutions.",
  },
  {
    headline: "Unleashing Your Business Potential with AI",
    subheadline: "Take your business on a journey of transformation, energised by the power of artificial intelligence and automation.",
  },
  {
    headline: "Spearheading Your Business Evolution with AI",
    subheadline: "Let's navigate the future together, with our passionate, user-friendly approach to AI and automation.",
  },
  {
    headline: "Empowering Your Business Progress with AI",
    subheadline: "Integrating cutting-edge technology and simple language to deliver value-driven AI solutions for your business.",
  },
  {
    headline: "Your Business: Supercharged by AI Innovation",
    subheadline: "Blending technical expertise and simplicity to turbocharge your business growth and efficiency.",
  },
  {
    headline: "Elevating Your Business with AI, Automation",
    subheadline: "Harnessing the power of advanced technology to inspire your business growth, foster innovation, and streamline processes.",
  },
  {
    headline: "Trailblazing Your Business Growth with AI",
    subheadline: "Bridging the gap between technology and growth with our engaging, effective, and efficient AI and automation solutions.",
  },
  {
    headline: "Driving Your Business Breakthroughs with AI",
    subheadline: "Reimagine your business potential through the lens of artificial intelligence, fostering a new era of efficiency and innovation.",
  },
  {
    headline: "Leading Your Business into the AI Revolution",
    subheadline: "Transform your business by integrating intelligent automation, inspiring efficiency, and enabling unprecedented growth.",
  },
];



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
