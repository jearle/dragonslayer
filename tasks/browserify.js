
import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

export default () => 

  browserify('./lib/index.js', { debug: true })
    .transform(['babelify'])
    .exclude('../shims/window')
    .require('./shims/browser-window', { expose: '../shims/window' })
    .bundle()
    .pipe(source('bundle.dev.js'))
    .pipe(gulp.dest('./dist'));