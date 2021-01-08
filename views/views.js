'use strict';

angular.module('myApp.views', ['ngRoute'])

.controller('ViewsCtrl', ['$scope', '$location', '$route', function($scope, $location, $route) {

	$scope.isActive = function (viewLocation) { 
		$scope.activeVal = false;

		if (viewLocation === $location.path()) {
			$scope.activeVal = true;
		}
		if ($route.current.$$route.navNum == 1 && viewLocation === '/collection-reporting'){
			$scope.activeVal = true;
		}
		if ($route.current.$$route.navNum == 2 && viewLocation === '/management-compliance'){
			$scope.activeVal = true;
		}
		if ($route.current.$$route.navNum == 3 && viewLocation === '/analysis-evaluation'){
			$scope.activeVal = true;
		}
		if ($route.current.$$route.navNum == 4 && viewLocation === '/goals-outcomes'){
			$scope.activeVal = true;
		}
		if ($route.current.$$route.navNum == 5 && viewLocation === '/developers'){
			$scope.activeVal = true;
		} 

        return $scope.activeVal;
    };

}]);