# hide-desktop-icons-cli

Clean your desktop by temporarily hiding your icons

- Works only on macOS
- Easily clean your desktop for a screenshot/recording/presentation
- Use many classic macOS default wallpapers in high resolution (see bellow for details)


### Install

```shell
$ npm install -g hide-desktop-icons-cli
```


### Usage

```
$ hdi --help

  Usage

    $ hide-desktop-icons                        Hide desktop icons by using the current
                                                wallpaper in use

    $ hide-desktop-icons stop|reset             Restore the desktop icons

    $ hide-desktop-icons [file|url|<version>]   Use custom wallpaper, other than the
                                                current one. <version> refers to a macOS
                                                version's default wallpaper. To see all
                                                available versions see below

    $ hide-desktop-icons versions               List all available MacOS version
                                                default wallpapers

  Aliases

    $ clean-desktop
    $ hdi

  Examples

    $ hide-desktop-icons
    $ clean-desktop https://octodex.github.com/images/dojocat.jpg
    $ hdi /path/to/a/picture.png
    $ hdi yosemite
    $ hdi versions
    $ hdi stop
```


### macOS default wallpapers included for these versions:
- [Cheetah](http://512pixels.net/downloads/macos-wallpapers/10-0_10.1.png)
- [Puma](http://512pixels.net/downloads/macos-wallpapers/10-0_10.1.png)
- [Jaguar](http://512pixels.net/downloads/macos-wallpapers/10-2.png)
- [Panther](http://512pixels.net/downloads/macos-wallpapers/10-3.png)
- [Tiger](http://512pixels.net/downloads/macos-wallpapers/10-4.png)
- [Leopard](http://512pixels.net/downloads/macos-wallpapers/10-5.png)
- [Snow Leopard](http://512pixels.net/downloads/macos-wallpapers/10-6.png)
- [Lion](http://512pixels.net/downloads/macos-wallpapers/10-7.png)
- [Mountain Lion](http://512pixels.net/downloads/macos-wallpapers/10-8.jpg)
- [Mavericks](http://512pixels.net/downloads/macos-wallpapers/10-9.jpg)
- [Yosemite](http://512pixels.net/downloads/macos-wallpapers/10-10.jpg)
- [El-capitan](http://512pixels.net/downloads/macos-wallpapers/10-11.jpg)
- [Sierra](http://512pixels.net/downloads/macos-wallpapers/10-12.jpg)
- [High Sierra](https://512pixels.net/downloads/macos-wallpapers/10-13.jpg)

### Related

- [hide-desktop-icons](https://github.com/karaggeorge/hide-desktop-icons) - API for this module

### Inspired By

- [wallpaper-cli](https://github.com/sindresorhus/wallpaper-cli) - Get or set the desktop wallpaper


### License

MIT © George Karagkiaouris
