import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/* eslint-disable no-console */

fs.readFile('app/src/index.html', 'utf8', (err, markup) => {

  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('app/dist/index.html', $.html(), 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to disk'.green);
  });

});