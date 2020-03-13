export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'cyan' },
  /*
   ** Global CSS
   */
  css: ['~assets/variables.scss'],
  /*
   ** Router Middelware
   */
  router: {
    middleware: 'i18n'
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/i18n.js', '~/plugins/base.js', '~/plugins/chartist.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#4CAF50',
          secondary: '#9C27b0',
          accent: '#9C27b0',
          info: '#00CAE3'
        },
        dark: {
          primary: '#4CAF50',
          secondary: '#9C27b0',
          accent: '#9C27b0',
          info: '#00CAE3'
        }
      }
    }
  },
  styleResources: {
    sass: ['~/assets/overrides.sass']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
