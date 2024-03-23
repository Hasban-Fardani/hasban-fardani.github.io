export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
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
  messages: {
    en: {
        about: "About"
    },
    id: {
        about: "Tentang",
    },
  },
}));
