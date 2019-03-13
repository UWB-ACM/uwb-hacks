# uwb-hacks [![Build Status](https://travis-ci.com/UWB-ACM/uwb-hacks.svg?branch=master)](https://travis-ci.com/UWB-ACM/uwb-hacks)

Website repo for the [uwbhacks.com](https://uwbhacks.com) website.

## How to build SASS

We are using SASS instead of normal CSS for this website.
If you are testing locally, the VSCode plugin [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) can compile everything
in real time for you.

## Travis CI

I've set up Travis CI to build and deploy the website to the `gh-pages` branch when changes are
pushed to the `master` branch.
The logs for this can be found by clicking the build status badge.
The script for this can be found in `.travis.yml`.