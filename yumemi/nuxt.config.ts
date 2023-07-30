// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-highcharts'],
  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY || '',
    },
  },
  app: {
    head: {
      title: '人口推移',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        {
          charset: 'utf-8',
        },
      ],
    },
  },
})
