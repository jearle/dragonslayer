
import shell from 'gulp-shell';

export default 
  
  shell.task(['npm test'], { ignoreErrors: true});