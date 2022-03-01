const mix = require("laravel-mix");

require("laravel-mix-purgecss");
require("laravel-mix-clean");
require("laravel-mix-merge-manifest");

mix.setPublicPath("./public/");

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
mix
//   .postCss("./resources/styles/app.css", "./public/", [
//     require("tailwindcss")
//   ])
//   .postCss("./resources/styles/admin.css", "./public/", [
//     require("tailwindcss")
//   ])
  .js("resources/assets/js/vue/entry-client.js", "public/js/vue")
  .js("resources/assets/js/vue/entry-server.js", "public/js/vue")

  .js("resources/assets/js/react/entry-client.js", "public/js/react").react()
  .js("resources/assets/js/react/entry-server.js", "public/js/react").react()

  .postCss("resources/assets/css/app.css", "public/css/app.css", [
    require("tailwindcss")("./tailwind.js"),
  ])
  .copy("./resources/images/*", "./public/images/")
  .copy([
    "./resources/assets/android-chrome-192x192.png",
    "./resources/assets/android-chrome-384x384.png",
    "./resources/assets/apple-touch-icon.png",
    "./resources/assets/browserconfig.xml",
    "./resources/assets/favicon.ico",
    "./resources/assets/favicon.png",
    "./resources/assets/mstile-150x150.png",
    "./resources/assets/safari-pinned-tab.svg",
    "./resources/assets/site.manifest"
  ], "./public/")
  .webpackConfig({ stats: { children: true } });

mix["mergeManifest"]();

if (mix.inProduction()) {
  mix.version();
}
