'use strict';

angular.module('myApp.home', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl'
//   });
// }])

.controller('HomeCtrl', ['$scope', function($scope) {


	$scope.cardStatus = {'pm': false, 'at': false, 'seed': false, 'csrs': false, 'as': false, '3p': false, 'bsync1': false, 'bsync2': false}

	$scope.toggleCard = function(card) {
		console.log("card: ", card);
		$scope.cardStatus[card] = !$scope.cardStatus[card]
		console.log("status: ", $scope.cardStatus[card]);
	};


}]);