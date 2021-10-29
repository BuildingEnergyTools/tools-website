# Building Energy Tools Website

This project was generated with the Angular CLI. For more information on developing with Angular see the README 
in the [doc folder](doc). The purpose of this README is to document the basic workflows of getting started. 

## Basic Workflow

The most basic workflow to edit content is to leverage GitHub's website to create new branches, edit files, commit 
changes, and create pull requests. The branch structure of this repository is as follows:

* `main` - this is the branch that will be automatically deployed to the `gh-pages` and subsequently to https://buildingdata.energy.gov.
* `develop` - the most recent changes and from where all updates should branch. Will be deployed to https://buildingdata-stage.energy.gov.
* `gh-pages` - built and deployed website
* `pnnl` - branch to stage PNNL updates
* `lbnl` - branch to stage LBNL updates
* `nrel` - branch to stage NREL updates

The staging branches should be the jumping off point for each user in the respective labs; however, ensure that the staging branch is 
up to date with develop before starting. This is easily done by creating a new pull request in GitHub and having the base branch be the
national lab. Click on the links below to be directed to this for you:

* [Update PNNL with Develop](https://github.com/BuildingEnergyTools/tools-website/compare/pnnl...develop)
* [Update LBNL with Develop](https://github.com/BuildingEnergyTools/tools-website/compare/lbnl...develop)
* [Update NREL with Develop](https://github.com/BuildingEnergyTools/tools-website/compare/nrel...develop)

There are 3 staging sites (one for each laboratory). The respective lab branches will automatically be built and deployed upon pushing
to this lab's branch to this repository (pnnl, lbnl, nrel). The sites are located here:

* [PNNL Staging Site](https://staging-pnnl.buildingenergytools.org)
* [LBNL Staging Site](https://staging-lbnl.buildingenergytools.org)
* [NREL Staging Site](https://staging-nrel.buildingenergytools.org)


## Advanced Workflow

The more advanced workflow requires the installation and running of a local development server. Running the website locally is
recommended for larger or structural changes. You will need to install node package manager (npm) to run the server. 

* Mac OSX: `brew install npm`
* Linux: `apt install npm`
* Windows: TBD

After npm is installed, go into the root directory from a clone of this repository and run the following (note that you may need to
run `npm install -g @angular/cli` to have the Angular CLI `ng` be in the user's path). 

*Note that we are pinning to an older version of Node (12.22.5)*

```bash
nvm use 12.22.5
npm install
ng serve
```
Navigate to the URL that is printed to the screen. Typically `http://localhost:4200/`.

To manually sync the website with the S3 bucket, configure permissions for using aws cli and run.

```bash
ng build
aws s3 sync dist s3://nrel-btodatatools-web-prod-bucket
```

