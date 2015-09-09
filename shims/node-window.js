
import { jsdom } from 'jsdom';
import fs from 'fs';
import path from 'path';

const index = path.join(__dirname, '..', 'index.html');

const html = fs.readFileSync(index, 'utf8');

export var window = jsdom(html).defaultView;
export var document = window.document;