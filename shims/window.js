
import { window, document } from './node-window';

function globalize () {

  global.window = window;
  global.document = document;

}

globalize();