// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico'
        }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],


  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/servicios/graphics',
        '/servicios/events',
        '/servicios/digital'
      ],
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  modules: [
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  runtimeConfig: {
    public: {
      whatsappNumber: '',
    }
  },

  site: {
    url: 'https://mi-proyecto.is-great.net/',
    name: 'Ikigai Advertising'
  },

  robots: {
    allow: '/',
    sitemap: 'https://mi-proyecto.is-great.net/sitemap.xml',
  }
  
})