const { watch, series, parallel, src, dest, task } = require('gulp')
const browser = require('browser-sync')
const clean = require('gulp-clean-css')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const img = require('gulp-image')
const babel = require('gulp-babel')
const concat = require('gulp-concat')

function html () {
  return src('./src/index.html')
    .pipe(dest('./public'))
}
function copy() {
  return src('./src/*.ico')
    .pipe(dest('./public'))
}
function css () {
  return src('./src/assets/css/*.css')
    .pipe(dest('./public/css'))
    .pipe(clean({
      inline: ['none']
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('./public/css'))
    .pipe(browser.reload({ stream: true }))
}
function js () {
  return src('./src/assets/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(concat('app.js'))
    .pipe(dest('./public/js'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('./public/js'))
}
function images () {
  return src('./src/assets/img/*')
    .pipe(img())
    .pipe(dest('./public/img'))
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
task('miniImage', series(images))
task('build', parallel(html, css, js, copy))

task('default', series('build', server, watcher))
