
import liveReload from 'tiny-lr';

const app = liveReload();

app 
  .listen(35729);

export default () => 

  app
    .changed({
      body: {
        files: 'dist/bundle.dev.js'
      }
    });