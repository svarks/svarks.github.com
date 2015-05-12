const gulp    = require('gulp');
const connect = require('gulp-connect');
const path    = require('path');

gulp.task('serve', function() {
  connect.server({
    root       : path.join(__dirname, '..'),
    livereload : true,
    port       : 5000,
  });
});

gulp.task('watch', function() {
  gulp.watch('app/index.jade', ['templates']);
  gulp.watch('app/styles/**/*.styl', ['styles']);
  gulp.watch(['app/**/*.jsx', 'app/data.yml'], ['scripts:app']);

  gulp.watch(['index.html', 'compiled/*.{js,css}'], function(event) {
    gulp.src(event.path).pipe(connect.reload());
  });
});
