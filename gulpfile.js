const { watch, series, parallel, src, dest, task } = require('gulp')
const browser = require('browser-sync')
const clean = require('gulp-clean-css')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

function html () {
  return src('./src/index.html')
    .pipe(dest('./public'))
}
function css () {
  return src('./src/assets/css/*.css')
    .pipe(dest('./public/css'))
    .pipe(clean())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('./public/css'))
    .pipe(browser.reload({stream: true}))
}
function js () {
  return src('./src/assets/js/*.js')
    .pipe(dest('./public/js'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('./public/js'))
}

function watcher () {
  watch('./src/index.html').on('all', series(html, browser.reload))
  watch('./src/assets/css/*.css').on('all', css)
  watch('./src/assets/js/*.js').on('all', series(js, browser.reload))
}

function server (cb) {
  browser.init({
    server: 'public',
    port: 3030
  })
  cb()
}

task('build', parallel(html, css, js))

task('default', series('build', server, watcher))

