export default defineNuxtConfig({
  srcDir: 'src/',
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/default.scss";',
        },
      },
    },
  },
})
