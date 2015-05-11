gulp       = require 'gulp'
concat     = require 'gulp-concat'
stylus     = require 'gulp-stylus'
jade       = require 'gulp-jade'
iconfont   = require 'gulp-iconfont'
browserify = require 'browserify'
source     = require 'vinyl-source-stream'
buffer     = require 'vinyl-buffer'

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
  b = browserify(
    entries: 'app/scripts/app.coffee'
    transform: [
      require('coffeeify')
      require('jadeify')
      require('browserify-data')
    ]
    extensions: ['.coffee', '.jade']
  )

  b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
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
