const bodyParser = require('body-parser')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - RealTech',
    title: 'RealTech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'style', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red', height: '4px', duration: 5000 },
  loadingIndicator: {
    name: 'circle',
    color: 'red'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    baseUrl: process.env.BASE_URL || 'https://real-tech-d036d-default-rtdb.firebaseio.com',
    credentials: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://real-tech-d036d-default-rtdb.firebaseio.com',
    fbApiKey: 'AIzaSyChFE1gzUgbIE74gInPd_QnqQjRHbK4A5o'
  },
  // router: {
  //   middleware: 'log'
  // },
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
}
