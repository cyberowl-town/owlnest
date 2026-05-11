import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/image", "@nuxt/ui", "@nuxt/test-utils/module", "nuxt-security"],
  css: ["~/assets/css/tailwind.css"],

  security: {
    sri: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
