import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["vueuc"], // fix dev error: Cannot find module 'vueuc'
  },
  vite: {
    plugins: [
      Components({
        resolvers: [NaiveUiResolver()], // Automatically register all components in the `components` directory
      }),
    ],
    ssr: {
      noExternal: [
        "moment",
        "naive-ui",
        "@juggle/resize-observer",
        "@css-render/vue3-ssr",
      ],
    },
  },
});
