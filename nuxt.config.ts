import { Static } from "vue";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV !== 'production' },
  ssr: true,
  target: Static,
  app: {
    baseURL: '/aklowadrumz/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets',
    head: {
      title: 'Aklowa Drum Band',
      meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: true }],
    }
},
build: {
  assetsDir: 'assets',
transpile: ['@fortawesome/vue-fontawesome'],
chunkSizeWarningLimit: 100000,
cssMinify: {
  preset: 'default',
},
},
    
publicPath: process.env.npm_lifecycle_event === 'generate' ? '/pwa/' : '/_nuxt/',

optimization: {
  splitChunks: {
    name: true,
  },
  runtimeChunk: true,
},

splitChunks: {
  layouts: true,
  pages: true,
  commons: true,
},

    modules: ['@hypernym/nuxt-gsap','@nuxtjs/tailwindcss', 'nuxt-purgecss', '@nuxtjs/eslint-module' ],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
    ],
})