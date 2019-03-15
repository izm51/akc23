import pkg from './package'

export default {
  mode: 'universal',
  router: {
    base: '/akc23/'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'あけちを祝イズミ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      { name: 'mobile-web-app-capable', content: 'yes'},
      { name: 'apple-mobile-web-app-capable', content: 'yes'},
      { hid: 'description', name: 'description', content: '-あけちを祝イズミ- あけちの23歳の誕生日を祝う優しいイマイズミのゲーム' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', size: '196x196', href: '/akc23/home-icon.png'},
      { rel: 'apple-touch-icon', href: '/akc23/home-icon.png'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  generate: {
    dir: 'docs'
  }
}
