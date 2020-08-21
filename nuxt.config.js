const dyRoutes = [
  "/blog/custom-email-verification-notification-in-laravel",
  "/blog/how-to-create-custom-bash-commands",
  "/blog/intro-to-alpinejs"
]

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css", integrity:"sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=", crossorigin:"anonymous"},
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Dosis&display=swap" }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/styles.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/carousel.js',
    '~/plugins/faq-accordion.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // 'bootstrap-vue/nuxt',
    '@nuxtjs/toast',
    // nuxt sitemap
    '@nuxtjs/sitemap',

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },

  toast: {
    position: 'bottom-right',
    duration: 3000,
    register: [
      // Register custom toasts
      // {
      //   name: 'my-error',
      //   message: 'Oops...Something went wrong',
      //   options: {
      //     type: 'error'
      //   }
      // }
    ]
  },
  sitemap: {
    hostname: 'http:localhost',
    path: '/sitemap.xml',
    // cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    generate: false,
    routes: dyRoutes
  },

  server: {
    port: 7000, // default: 3000
    host: 'localhost' // default: localhost
  }
}
