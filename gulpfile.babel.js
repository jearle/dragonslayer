
import gulp from 'gulp';
import fs from 'fs-extra';

import browserify from './tasks/browserify';
import browserifyTest from './tasks/browserify-test';
import test from './tasks/test';
import lint from './tasks/lint';
import compress from './tasks/compress';
import watch from './tasks/watch';
import serve from './tasks/serve';
import liveReload from './tasks/live-reload';
import babel from './tasks/babel';

fs.ensureDirSync('./dist');

gulp.task('default', [
  'lint',
  'test',
  'babel',
  'browserify',
  'browserify-test',
  'compress',
  'serve',
  'watch']);

gulp.task('babel', babel);
gulp.task('browserify', browserify);
gulp.task('browserify-test', browserifyTest);
gulp.task('test', test);
gulp.task('lint', lint);
gulp.task('compress', ['browserify'], compress);
gulp.task('watch', watch);
gulp.task('serve', ['live-reload'], serve);
gulp.task('live-reload', ['browserify', 'browserify-test'], liveReload);
