
import express from 'express';
import liveReload from 'connect-livereload';
import path from 'path';
import fs from 'fs';

const publicPath = path.join(__dirname, '..');

export default () =>
  
  express()
  
    .use(liveReload())

    .use(express.static(publicPath))

    .get('/prod', (req, res) => 
        res.send(fs.readFileSync('./index.html', 'utf8').replace('.dev.', '.prod.')))

    .get('/test', (req, res) =>
        res.send(fs.readFileSync('./test.html', 'utf8')))

    .listen(3000, () => 
      console.log('Serving on http://localhost:3000'));
