const dyRoutes = [
  "/blog/what-is-your-cleaning-style",
  "/blog/where-do-we-start-cleaning",
  "/blog/clean-house-cleaner-perspective"
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
    /*
    **     title: process.env.npm_package_name || '',
    */
    title: 'Go Cleaning',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
    'vue2-datepicker/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/carousel.js',
    '~/plugins/faq-accordion.js',
    '~/plugins/datepicker.js',
    { src: '~plugins/ga.js', mode: 'client' }
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
    'nuxt-facebook-pixel-module',
    'vue-social-sharing/nuxt'

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
    duration: 3000
  },
  sitemap: {
    hostname: 'https://gocleaning.ca',
    path: '/sitemap.xml',
    // cacheTime: 1000 * 60 * 60 * 2,
    trailingSlash: true,
    gzip: true,
    generate: false,
    routes: dyRoutes
  },

  generate: {
    fallback: true
  },

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '2078883145737115',
    disabled: true
  },
}
