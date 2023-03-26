// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // '@nuxtjs/eslint-module',
    'nuxt-windicss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-chatgpt'
  ],
  windicss: {
    analyze: true // very cool windicss analyzer to see what classes are used
  },
  pinia: {
    autoImports: [
      ['defineStore', 'acceptHMRUpdate'] // automatically imports `defineStore` and enables HMR for pinia stores
    ]
  },
  imports: {
    dirs: ['stores'] // automatically import all files from the stores directory
  },
  chatgpt: {
    apiKey: 'Your apiKey here goes here'
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      Poppins: [400, 500, 600, 700]
    }
  }
})
