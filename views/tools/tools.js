'use strict';

angular.module('myApp.tools', ['ngRoute'])

.controller('ToolsCtrl', ['$scope', '$location', '$route', '$routeParams', function($scope, $location, $route, $routeParams) {

	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };

    // default subtab to Home
    $scope.subNav = 'home'; 
    // check on optional subnav route param to link directly to a subtab
    if (angular.isDefined($routeParams.subNav)){
    	$scope.subNav = $routeParams.subNav;
    }
    

    // set these for nav from routes
    $scope.toolName = $route.current.$$route.toolName;
    $scope.navNum = $route.current.$$route.navNum;
    $scope.baseURL = $route.current.$$route.baseURL;
    
    $scope.subnavIsActive = function (name) {
    	return name === $scope.subNav;
    };

    $scope.setActive = function(name) {
    	$scope.subNav = name;
    }

}]);