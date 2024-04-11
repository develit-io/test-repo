// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/devtools',
    'nuxt-radash',
    '@nuxt/image',
    'nuxt-time',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  sourcemap: {
    server: true,
    client: false,
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Develitsse Nuxt',
    },
    pageTransition: false,
    layoutTransition: false,
  },
  pinia: {
    storesDirs: ['~/composables'],
  },
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    typedPages: true,
    componentIslands: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  nitro: {
    preset: 'vercel',
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
  vite: {
    build: {
      target: 'esnext',
    },
  },
})
