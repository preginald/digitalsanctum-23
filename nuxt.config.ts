// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ...
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon","nuxt-mongoose"],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
   mongoose: {
    uri: process.env.MONGODB_URI,
    options: {},
  },
});

