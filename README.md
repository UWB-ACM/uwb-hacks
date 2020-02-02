# uwb-hacks [![Build Status](https://travis-ci.com/UWB-ACM/uwb-hacks.svg?branch=master)](https://travis-ci.com/UWB-ACM/uwb-hacks)

Website repo for the [uwbhacks.com](https://uwbhacks.com) website.

## Archiving Old Content

Some of the web design work for previous events is wonderful, and we'd like to preserve the old pages & project showcases.

To prepare this repository for a new site, follow these steps:

1. Make a new directory under `archive/` for the content you are retiring.
2. Move the top-level HTML files, stylesheets, and `images/` folder to `archive/<my_new_directory>`.
3. Move any additional site-specific files (such as favicons, images, text files) to the archive folder.
4. Add a new `index.html` file, and start adding styles to a `.scss` stylesheet if you like! To make content retiring easier, it is helpful to use **relative filepaths** when linking to stylesheets.

## How to build SASS

We are using SASS instead of normal CSS for this website.
If you are testing locally, there are a few ways of generating CSS from the SASS files:
* Use the VSCode plugin [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass); preferred method for [Chris](https://github.com/chris-johnston).
* Use the [SASS plugin for Gulp (part of Node.js)](https://www.npmjs.com/package/gulp-sass); preferred method for [Lizzy](https://github.com/etcadinfinitum).
* Use the [Ruby gem](https://rubygems.org/gems/sass/versions/3.4.22).

## Travis CI

Travis CI has been set up to build and deploy the website to the `gh-pages` branch when changes are
pushed to the `master` branch.
The logs for this can be found by clicking the build status badge.
The script for this can be found in `travis/deploy.sh`, and CI settings can be found in `.travis.yml`.
