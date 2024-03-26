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
  routeRules: {
    '/': { redirect: '/en'}
  },

  i18n: {
    // defaultLocale: 'en',
    locale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'id',
        iso: 'id-ID'
      },
    ],
    vueI18n: './i18.config.ts'
  }
})
