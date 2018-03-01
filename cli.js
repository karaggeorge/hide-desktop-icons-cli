#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const meow = require('meow');
const isUrl = require('is-url-superb');
const got = require('got');
const tempfile = require('tempfile');
const desktopIcons = require('hide-desktop-icons');

const wallpapers = {
  'cheetah': 'http://512pixels.net/downloads/macos-wallpapers/10-0_10.1.png',
  'puma': 'http://512pixels.net/downloads/macos-wallpapers/10-0_10.1.png',
  'jaguar': 'http://512pixels.net/downloads/macos-wallpapers/10-2.png',
  'panther': 'http://512pixels.net/downloads/macos-wallpapers/10-3.png',
  'tiger': 'http://512pixels.net/downloads/macos-wallpapers/10-4.png',
  'leopard': 'http://512pixels.net/downloads/macos-wallpapers/10-5.png',
  'snow-leopard': 'http://512pixels.net/downloads/macos-wallpapers/10-6.png',
  'lion': 'http://512pixels.net/downloads/macos-wallpapers/10-7.png',
  'mountain-lion': 'http://512pixels.net/downloads/macos-wallpapers/10-8.jpg',
  'mavericks': 'http://512pixels.net/downloads/macos-wallpapers/10-9.jpg',
  'yosemite': 'http://512pixels.net/downloads/macos-wallpapers/10-10.jpg',
  'el-capitan': 'http://512pixels.net/downloads/macos-wallpapers/10-11.jpg',
  'sierra': 'http://512pixels.net/downloads/macos-wallpapers/10-12.jpg',
  'high-sierra': 'https://512pixels.net/downloads/macos-wallpapers/10-13.jpg',
}

const cli = meow(`
  Usage

    $ hide-desktop-icons                        Hide desktop icons by using the current
                                                wallpaper in use

    $ hide-desktop-icons stop|reset             Restore the desktop icons

    $ hide-desktop-icons [file|url|<version>]   Use custom wallpaper, other than the
                                                current one. <version> refers to a MacOS
                                                version's default wallpaper. To see all
                                                available versions see below

    $ hide-desktop-icons versions               List all available MacOS version
                                                default wallpapers

  Aliases

    $ clean-desktop
    $ hdi

  Examples

    $ hide-desktop-icons unicorn.jpg
    $ clean-desktop https://octodex.github.com/images/dojocat.jpg
    $ hdi yosemite
    $ hdi versions
    $ hdi stop
`);

const stop = () => desktopIcons.forceShow().catch(() => {});

const hideIcons = (path) => {
  stop().then(() => {
    desktopIcons.hide(path, { detached: true }).then(pid => {
      fs.writeFile('hdi.pid', pid, () => process.exit(0));
    });
  });
}

const getImage = (url) => new Promise(done => {
  const file = tempfile(path.extname(url));

  got.stream(url)
     .pipe(fs.createWriteStream(file))
     .on('finish', () => {
       done(file);
     });
});

const input = cli.input[0];

if(!input) {
  hideIcons();
} else if (input === 'versions') {
  Object.keys(wallpapers).forEach(key => console.log(key));
} else if (input === 'stop') {
  stop();
} else if (isUrl(input)) {
  getImage(input).then(path => hideIcons(path));
} else if (fs.existsSync(input)) {
  hideIcons(input)
} else if (wallpapers[input]) {
  getImage(wallpapers[input]).then(path => hideIcons(path));
} else {
  cli.showHelp();
}
