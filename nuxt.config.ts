// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // '@nuxtjs/eslint-module', idk not working sadge
    'nuxt-windicss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-chatgpt'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  windicss: {
    analyze: true // very cool windicss analyzer to see what classes are used
  },
  pinia: {
    autoImports: [
      'defineStore', // automatically imports `defineStore` for every store
      ['defineStore', 'acceptHMRUpdate'] // automatically imports `defineStore` and enables HMR for pinia stores
    ]
  },
  imports: {
    dirs: ['stores'] // automatically import all files from the stores directory
  },
  chatgpt: {
    apiKey: 'Your apiKey here goes here xd'
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
      'Syne+Mono': [400, 500, 600, 700]
    }
  }
})
