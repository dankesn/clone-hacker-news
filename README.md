# HackerNews

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

This project is a simple cloned version of popular "Hacker News". 

It consists of news and comments on computer science and enterpreneurship from various sources. 

It doesn't support user inputs or reactions , so it's made to be read only. 

## Details

Project uses official [Hacker News API] (https://github.com/HackerNews/API)

App suports simple navigation between news and comments page. Home page displays 20 top stories on initialization. Click on story title leads to original source, while click on  number of comments navigates to comments section at the same tab. 

Comments are organized in a way that only direct comments on stories are displayed right away. There is posiibility to view direct replies on comments or collapse whole comment. 

This is done for two reasons:

Firstly, for difficulties that were encountered when trying to display all comments and replies at the initialization of comments section, especially concerning loading time. 

Secondly, it showed up to be a good way to display comments in an organized and systematical manner. 

## Style

Style of the app is simple and responsive. It is made using CSS preprocessor SASS.

## Getting started

To get you started you can simply clone the clone-hacker-news repository and install the dependencies:

You need git to clone the clone-hacker-news repository.

Make sure you have node.js installed version 5+

Make sure you have NPM installed version 3+

Run `npm install` to install dependencies.

Make sure you have Angular CLI installed.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
