
import gulp from 'gulp';

export default () =>
  
  gulp
    .watch(
      ['./lib/**/*', './test/**/*'],
      ['lint', 'test', 'browserify', 'browserify-test', 'compress', 'live-reload']);