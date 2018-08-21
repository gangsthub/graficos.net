const tailwindConfig = require('./tailwind.config')
// const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

// class TailwindExtractor {
//   static extract (content) {
//     return content.match(/[A-Za-z0-9-_:\/]+/g) || []
//   }
// }

const APP_NAME = 'Graficos.net'
const THEME_COLOR = tailwindConfig.colors['teal-light']
const dynamicRoutes  = getDynamicPaths({
  '/blog': 'blog/posts/*.json'
});

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: APP_NAME + ' – %s',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '▶ Frontend Web Developer (now with more Backend!) // Former graffiti artist. && Agriculture Engineer. Responsive. WPO. Creative Ilustrator. Engineer. Freelance.' },
      { name: 'apple-mobile-web-app-title', content: APP_NAME },
      { name: 'application-name', content: APP_NAME },
      { name: 'theme-color', content: THEME_COLOR },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
    ]
  },
  /*
  ** Load global CSS
  */
  css: [
    '@/assets/css/main.css',
  ],
  /*
  ** This option is given directly to the vue-router Router constructor
  */
  router: {
    base: '',
    linkActiveClass: 'is-active'
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Extract CSS
    */
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      /*
      ** Cleanup CSS with PurgeCSS
      */
      // if (!isDev) {
        // config.plugins.push(
          // new PurgecssPlugin({
            // paths: glob.sync([
              // path.join(__dirname, './pages/**/*.vue'),
              // path.join(__dirname, './layouts/**/*.vue'),
              // path.join(__dirname, './components/**/*.vue')
            // ]),
            // extractors: [{
              // extractor: TailwindExtractor,
              // extensions: ['vue']
            // }],
            // whitelist: ['html', 'body']
          // })
        // )
      // }
    }
  },
  env: {
    APP_NAME
  },
  modules: [
    ['@nuxtjs/axios'],
  ],
  generate: {
    routes: dynamicRoutes
  },
}
/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
