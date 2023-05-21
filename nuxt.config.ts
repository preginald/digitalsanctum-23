// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	  // server config variable
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI,
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon"],
  nitro: {
    plugins: ["@/server/db/index.ts"],
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});

