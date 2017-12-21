# STAR WARS PORTAL

My name is Fabiano G. Lomonaco Júnior and I started study the Angular for a test that requested me to create a web application using an API with information about the Star Wars movie. Since I am on the beginning of this study, I may not have used the best practices, but with a lot of study and work time, this could be improve. 

This project consists on a web application, which uses the STAR WARS API (https://swapi.co/api/) to return characters and starships on a format list, using Angular CLI, Ng Bootstrap and TypeScript.

If you have had installed Node.JS and Angular CLI in your computer you just have to open the application directory in prompt or git bash and type it the command:

>>**-npm install**

>>**-ng server**

If you not, you may follow the steps to create a new project that will show you how to install Node.JS and Angular CLI.

## STEPS TO CREATE A NEW PROJECT:

-The creation of this project required the installment  of a few components, they are: 

>>**-Node.JS:** is available to download on the following link: (https://nodejs.org/en/)

>>**-Ng BootStrap:** to install it, you should open the prompt or git bash and type it the code below:
>>>-npm install --save @ng-bootstrap/ng-bootstrap

>>**-Angular CLI:** to install it, you should open the prompt or git bash and type   it the codes below:

>>>-npm install –g @angular/cli

>>>-ng new my-dream-app (nome do app)

>>>-cd my-dream-app

>>>-ng server (server started at localhost:4200)

-After that an application directory was created  with its respective files;

-Using the command ng g or ng generate, was created the required components to develop the app:

>>>-about-page;

>>>-characters-details-page;

>>>-characters-page;

>>>-common;

>>>-home-page;

>>>-sidenav;

>>>-starships-details-page;

>>>-starships-page.

-Configuration of the app.module to create routes;

-In addition, was created the services:

>>>-character.service – use the API: (https://swapi.co/api/people)

>>>-starship.service – use the API: (https://swapi.co/api/starships)

-Although, PIPE was create to use the text filed “input” component as a filter in the list by id and name;

-Also, was created the Interface to use the loading component in the transitions between the pages;

-Was used CORS plug-in for Google Chrome to fixing the 'Allow Control Allow Origin' problem;

-To sum up, the entire project uses the Type Script language in the .ts files;

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

I hope you enjoy it! Thanks!

## Development server

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
