'use-strict'

const gulp = require('gulp')

const browserSync = require('browser-sync')

const paths = require('../../paths.js')
const config = require('../../config.js')()

gulp.task('browsersync', (done) => {
  console.log('-> Starting browserSync')

  // Create and initialize local server
  browserSync.create()
  browserSync.init({
    notify: config.syncOptions.notify,
    server: `${paths.to.build}`,
    ui: config.syncOptions.ui,
    open: config.syncOptions.open,
    tunnel: config.syncOptions.tunnelName
  })
  // Watch for build changes and reload browser
  browserSync.watch(`${paths.to.build}/**/*`).on('change', browserSync.reload)
  // Watch for source changes and execute associated tasks
  gulp.watch(`${paths.to.assets.in}/data/**/*`, gulp.series('data'))
  gulp.watch(`${paths.to.assets.in}/fonts/**/*`, gulp.series('fonts'))
  gulp.watch(`${paths.to.assets.in}/images/**/*`, gulp.series('images'))
  gulp.watch(`${paths.to.assets.in}/media/**/*`, gulp.series('media'))
  gulp.watch(`${paths.to.assets.in}/misc/**/*`, gulp.series('misc'))
  gulp.watch(`${paths.to.js.in}/**/*.js`, gulp.series('js'))
  gulp.watch(`${paths.to.sass.in}/**/*.scss`, gulp.series('sass'))
  gulp.watch(`${paths.to.vendors}/*.js`, gulp.series('vendors'))

  if (config.environment === 'production') {
    // During 'production' we inline the CSS and JS so, we clean
    // the compiled files from the build folder. Because of this,
    // we need to re-compile each file-type and re-inject into the
    // HTML document on each save then, finally re-clean the build directory.
    gulp.watch(`${paths.to.pug.in}/**/*.pug`, gulp.series('sass', 'js', 'vendors', 'pug', 'clean:compiled-files'))
  } else {
    // During 'development' we do not inline the CSS and JS,
    // thus we do not need to re-compile each file-type and
    // re-inject into the HTML document on each save.
    gulp.watch(`${paths.to.pug.in}/**/*.pug`, gulp.series('pug'))
  }

  done()
})
