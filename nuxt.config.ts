// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@nuxtjs/i18n',
    'nuxt-icon',
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'id',
        iso: 'id-ID'
      },
    ]
  }
})
