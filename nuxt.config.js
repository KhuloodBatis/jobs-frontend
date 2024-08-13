

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jobs-frontend',
    htmlAttrs: {
      lang: 'en'
    },
    server: {
      host: 'jobs-frontend.test', // default: localhost
      port: 3000, // default: 3000
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css:['@/assets/css/main.css'],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/axios.js'
  ],


    devtools: { enabled: true },


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'cookie-universal-nuxt',
  ],


  auth: {
    strategies: {

      local: {
        endpoints: {
          login: { url: '/api/login', method: 'post', propertyName: false},
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/user', method: 'get' ,propertyName: false},
        },
        tokenRequired: false,
        tokenType: false,
      }
    },
    localStorage: false
  },

  axios: {
    baseURL: 'http://jobs-backend.test', // Replace with your API base URL
    credentials: true,
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@nuxt/auth-next']
  }

}

