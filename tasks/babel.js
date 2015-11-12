
const gulp = require('gulp');
const babel = require('gulp-babel');
 

export default () =>

  gulp
    .src('./lib/index.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/lib'));