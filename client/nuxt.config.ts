// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      api: "http://localhost:8000/api",
    },
  },
  css: ["normalize.css/normalize.css", "@/assets/scss/app.scss"],
  modules: ["nuxt-icons"],
});
