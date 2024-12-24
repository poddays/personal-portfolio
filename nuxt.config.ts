export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/content'],

  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js', 'css' , 'json', 'bash', 'vue', 'react', 'angular']
    }
  },

  compatibilityDate: '2024-12-22'
})