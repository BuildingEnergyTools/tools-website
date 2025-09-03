# Building Energy Tools Website

[![CI](https://github.com/BuildingEnergyTools/tools-website/actions/workflows/ci.yml/badge.svg)](https://github.com/BuildingEnergyTools/tools-website/actions/workflows/ci.yml)
[![Deploy](https://github.com/BuildingEnergyTools/tools-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/BuildingEnergyTools/tools-website/actions/workflows/deploy.yml)

This project was generated with the Angular CLI.

## Basic Workflow

The most basic workflow to edit content is to leverage GitHub's website to create new branches, edit files, commit changes, and create pull requests. The branch structure of this repository is as follows:

- `main` - this is the branch that will be automatically deployed to the `gh-pages` and subsequently to https://buildingdata.energy.gov.
- `develop` - the most recent changes and from where all updates should branch. Will be deployed to https://buildingdata-stage.energy.gov.
- `gh-pages` - built and deployed website

## Advanced Workflow

The more advanced workflow requires the installation and running of a local development server. Running the website locally is recommended for larger or structural changes. You will need to install Node and the node package manager (npm) to run the server. First install `nvm` or `nvm for Windows`, and then install Node v16.10 or later:

```bash
nvm install 16.18.0
nvm use 16.18.0
```

- Mac OSX: `brew install npm`
- Linux: `apt install npm`
- Windows: N/A (npm is bundled with Node)

After npm is installed, go into the root directory from a clone of this repository and run the following (note that you may need to
run `npm install -g @angular/cli` to have the Angular CLI `ng` be in the user's path).

```bash
npm install
ng serve
```

Navigate to the URL that is printed to the screen, typically `http://localhost:4200/`.

To manually sync the website with the S3 bucket, configure permissions for using aws cli and run.

```bash
ng build
aws s3 sync dist s3://nrel-btodatatools-web-prod-bucket
```
