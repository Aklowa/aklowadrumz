import { Static } from "vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  target: Static,
  app: {
    baseURL: '/aklowadrumband/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
    head: {
      title: 'Aklowa Drum Band',
      meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],

    }
},
build: {
transpile: ['@fortawesome/vue-fontawesome'],
chunkSizeWarningLimit: 1600,
cssMinify: {
  preset: 'default',
},
},
    
    modules: ['@hypernym/nuxt-gsap','@nuxtjs/tailwindcss', 'nuxt-purgecss' ],
  tailwindcss: {
    cssPath: ['../assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
    ]
})