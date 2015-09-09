
import gulp from 'gulp';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';

export default () =>

  gulp
    .src('./dist/bundle.dev.js')
    .pipe( uglify() )
    .pipe( rename('bundle.prod.js') )
    .pipe( gulp.dest('./dist') );