const gulp = require('gulp');

require('./build');
require('./serve');

gulp.task('default', ['build', 'watch', 'serve']);
