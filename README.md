# Building Energy Data Tools Website

This site in implemented with [AngularJS](https://angularjs.org/).


### Prerequisites


Angular requires [Node.js](https://nodejs.org/) and npm package manager.

### Install Dependencies

Clone the repo and run the following command from the root of the repo.

```
npm install
```

This will install dependencies and also copy the relevant files into the `app/lib` directory.


### Run the Application

Start the development web server with the following command. The site will then be available at `localhost:8000`.


## Updating dependencies

Use the following command to update dependencies.

```
npm run update-deps
```
To add new dependencies, add them to package.json and rerun `npm install`.


### Deploying to Production

The static pages are contained in the `app/` directory. Pushing the contents of this directory to github-pages should be all it takes to deploy the website.

