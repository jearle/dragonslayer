
import gulp from 'gulp';
import jshint from 'gulp-jshint';
import stylish from 'jshint-stylish';

export default () =>
  
  gulp.src(['./lib/**/*.js', './test/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));