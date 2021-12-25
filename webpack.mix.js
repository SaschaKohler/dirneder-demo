const mix = require('laravel-mix');

const webpackConfig = require('./webpack.config');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .extract()    // extract vendor.js & manifest.js from the app.js code -> caching -> better performance
  .vue()
  .sass('resources/sass/app.scss', 'public/css')
  .webpackConfig(webpackConfig)   // create alis lik '@' for components to load in vue files
