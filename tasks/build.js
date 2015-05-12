const gulp       = require('gulp');
const concat     = require('gulp-concat');
const stylus     = require('gulp-stylus');
const jade       = require('gulp-jade');
const iconfont   = require('gulp-iconfont');
const uglify     = require('gulp-uglify');
const browserify = require('browserify');
const source     = require('vinyl-source-stream');
const buffer     = require('vinyl-buffer');

gulp.task('templates', function() {
  gulp.src('app/index.jade')
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest('.'));
});

gulp.task('styles', function() {
  gulp.src('app/styles/app.styl')
    .pipe(stylus({ errors: true }))
    .pipe(gulp.dest('compiled'));
});

gulp.task('icons', function() {
  gulp.src('icons/*.svg')
    .pipe(iconfont({ fontName: 'icofont', appendCodepoints: true }))
    .pipe(gulp.dest('compiled'));
});

gulp.task('scripts:app', function() {
  const b = browserify({
    entries: 'app/scripts/app.jsx',
    extensions: ['.jsx'],
  });

  b.transform(require('browserify-data'));
  b.transform(require('babelify'), { presets: ['es2015', 'react'] });

  b.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('compiled'));
});

gulp.task('scripts:vendor', function() {
  const sources = [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/lodash/lodash.js',
    'bower_components/react/react.js',
    'bower_components/react/react-dom.js',
    'bower_components/moment/moment.js',
    'bower_components/marked/lib/marked.js',
  ];

  gulp.src(sources)
    .pipe(uglify())
    .pipe(concat('vendor.js', { newLine: '\n\n'}))
    .pipe(gulp.dest('compiled'));
});

gulp.task('build', ['templates', 'styles', 'scripts:vendor', 'scripts:app']);
