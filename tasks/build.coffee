gulp       = require 'gulp'
rename     = require 'gulp-rename'
concat     = require 'gulp-concat'
stylus     = require 'gulp-stylus'
jade       = require 'gulp-jade'
browserify = require 'gulp-browserify'
iconfont   = require 'gulp-iconfont'

gulp.task 'templates', ->
  gulp.src('app/index.jade')
    .pipe(jade(pretty: true))
    .pipe(gulp.dest('.'))

gulp.task 'styles', ->
  gulp.src('app/styles/app.styl')
    .pipe(stylus(errors: true))
    .pipe(gulp.dest('compiled'))

gulp.task 'icons', ->
  gulp.src('icons/*.svg')
    .pipe(iconfont(
      fontName: 'icofont'
      appendCodepoints: true
    ))
    .pipe(gulp.dest('compiled'))

gulp.task 'scripts:app', ->
  gulp.src('app/scripts/app.coffee', read: false)
    .pipe(browserify(
      transform: ['coffeeify', 'jadeify', 'browserify-data']
      extensions: ['.coffee', '.jade']
    ))
    .pipe(rename(extname: '.js'))
    .pipe(gulp.dest('compiled'))

gulp.task 'scripts:vendor', ->
  gulp.src([
      'bower_components/jquery/dist/jquery.js'
      'bower_components/underscore/underscore.js'
      'bower_components/backbone/backbone.js'
      'bower_components/moment/moment.js'
      'bower_components/markdown/lib/markdown.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('compiled'))

gulp.task 'build', ['templates', 'styles', 'scripts:vendor', 'scripts:app']
