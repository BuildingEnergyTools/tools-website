'use strict';

// Declare app level module which depends on views, and core components
var myapp = angular.module('myApp', [
  'ngRoute',
  'ngSanitize',
  'mdMarkdownIt',
  'myApp.home',
  'myApp.views',
  'myApp.tools',
  'myApp.version'
]);
myapp.config(['markdownItConverterProvider', function(markdownItConverter) {
  markdownItConverter.config('commonmark', {
    breaks: true,
    html: true
  });
}]);

myapp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});

  // home
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });

  // landing pages for each category
  $routeProvider.when('/collection-reporting', {
    templateUrl: 'views/collection-reporting.html',
    controller: 'ViewsCtrl',
    navNum: 1
  });
  $routeProvider.when('/management-compliance', {
    templateUrl: 'views/management-compliance.html',
    controller: 'ViewsCtrl',
    navNum: 2
  });
  $routeProvider.when('/analysis-evaluation', {
    templateUrl: 'views/analysis-evaluation.html',
    controller: 'ViewsCtrl',
    navNum: 3
  });
  $routeProvider.when('/goals-outcomes', {
    templateUrl: 'views/goals-outcomes.html',
    controller: 'ViewsCtrl',
    navNum: 4
  });
  $routeProvider.when('/developers', {
    templateUrl: 'views/developers.html',
    controller: 'ViewsCtrl',
    navNum: 5
  });  


  // sub pages
  $routeProvider.when('/portfolio-manager', {
    templateUrl: 'views/tools/portfolio-manager.html',
    controller: 'ToolsCtrl',
    toolName: 'Portfolio Manager',
    navNum: 1
  });
  $routeProvider.when('/audit-template', {
    templateUrl: 'views/tools/audit-template.html',
    controller: 'ToolsCtrl',
    toolName: 'Audit Template',
    navNum: 1
  });
  $routeProvider.when('/ubid', {
    templateUrl: 'views/tools/ubid.html',
    controller: 'ToolsCtrl',
    toolName: 'UBID',
    navNum: 5
  });
  $routeProvider.when('/seed', {
    templateUrl: 'views/tools/seed.html',
    controller: 'ToolsCtrl',
    toolName: 'SEED',
    navNum: 2
  });
  $routeProvider.when('/comstock-resstock', {
    templateUrl: 'views/tools/comstock-resstock.html',
    controller: 'ToolsCtrl',
    toolName: 'ComStock & ResStock',
    navNum: 3
  });
  $routeProvider.when('/asset-score', {
    templateUrl: 'views/tools/asset-score.html',
    controller: 'ToolsCtrl',
    toolName: 'Asset Score',
    navNum: 3
  });  
  $routeProvider.when('/buildingsync/:subNav?', {
    templateUrl: 'views/tools/buildingsync.html',
    controller: 'ToolsCtrl',
    toolName: 'BuildingSync',
    navNum: 5
  });  
 
}]);
