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
        about: "About",
        projects: "Projects",
    },
    id: {
        about: "Tentang",
        projects: "Proyek",
    },
  },
}));
