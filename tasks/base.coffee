gulp    = require 'gulp'
connect = require 'gulp-connect'

require './build'

gulp.task 'connect', ->
  connect.server(
    root: '.'
    livereload: true
  )

gulp.task 'watch', ->
  gulp.watch('app/index.jade', ['templates'])
  gulp.watch('app/styles/**/*.styl', ['styles'])
  gulp.watch(['app/**/*.coffee', 'app/templates/*.jade', 'app/data.yml'], ['scripts:app'])

  gulp.watch ['index.html', 'compiled/*.{js,css}'], (event) ->
    gulp.src(event.path).pipe(connect.reload())

gulp.task 'default', ['build', 'watch', 'connect']
