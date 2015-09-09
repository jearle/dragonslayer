
import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import glob from 'glob';

export default () => 

  browserify(glob.sync('./test/**/*.js'), { paths: ['./lib'], debug: true })
    .transform(['babelify'])
    .exclude('../shims/window')
    .require('./shims/browser-window', { expose: '../shims/window' })
    .bundle()
    .pipe(source('bundle.test.js'))
    .pipe(gulp.dest('./dist'));