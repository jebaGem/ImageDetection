# FlickerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.
## Problem Statement
It lists the search results of flickr api
It supports incremental loading when the user scroll the page
When you click on one of the images, it calculates the edges of the images using opencvjs “Canny edge detection” and open it on full screen mode
Responsive app design
## How Did I solve?
It lists the search results of flickr api - ***Called the API to load all the mamimum number of result. Added service worker to cache the data***
It supports incremental loading when the user scroll the page - *** Used angualr cdk-virtual-scroll-viewport to load the data on load ***
When you click on one of the images, it calculates the edges of the images using opencvjs “Canny edge detection” and open it on full screen mode *** Tried with the opencv, but i couldnt able to load the dynamic image from url ***
Responsive app design *** Loaded the data on scroll and when u click the items , the image from the service will be called , and displayed on the screen ***

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# ImageDetection
