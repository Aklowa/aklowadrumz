// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    
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