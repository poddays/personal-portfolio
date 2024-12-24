export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/content'],

  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js', 'css' , 'json', 'bash', 'vue']
    }
  },

  compatibilityDate: '2024-12-22'
})