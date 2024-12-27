export default defineNuxtConfig({
  app:{
    baseURL:'/'
  },
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/content',
    '@tresjs/nuxt'
  ],

  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js', 'css' , 'json', 'bash', 'vue']
    }
  },
  

  compatibilityDate: '2024-12-22'
})