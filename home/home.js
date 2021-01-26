'use strict';

angular.module('myApp.home', ['ngRoute'])

.controller('HomeCtrl', ['$scope', '$location', '$timeout', function($scope, $location, $timeout) {

	$scope.cardStatus = {
		'pm': false, 
		'at': false, 
		'seed': false, 
		'csrs': false, 
		'as': false, 
		'3p': false, 
		'bsync1': false, 
		'bsync2': false
	};

	$scope.toggleCard = function(card) {
		$scope.cardStatus[card] = !$scope.cardStatus[card]
	};

	$scope.connectDivs = function(leftId, rightId, useWhichY) {
	  // var left = document.getElementById(leftId);
	  // var right = document.getElementById(rightId);

	  var leftPos = $scope.findAbsolutePosition(leftId, 'left');
	  var rightPos = $scope.findAbsolutePosition(rightId, 'right');
	  
	  var x1 = leftPos.x;
	  var y1 = leftPos.y;
	  var x2 = rightPos.x;
	  var y2 = rightPos.y;

	  x2 = x2-20;

	  if (useWhichY == 1) {
	  	y2 = y1;
	  } else {
	  	y1 = y2;
	  }

	  if (leftId == 'bsync2') {
	  	x2 = x2 + 5;
	  }

	  if (rightId == 'bsync2') {
	  	x2 = x2 + 5;
	  }

	  $scope.drawLine(x1, y1, x2, y2, "white", true);

	};

	$scope.drawOtherArrows = function() {

		var g4Elem = document.getElementById('g4');
		var seedElem = document.getElementById('under-seed');

		var g4Rect = g4Elem.getBoundingClientRect();
		var seedRect = seedElem.getBoundingClientRect();

		var g4x = g4Rect.left + (g4Rect.width / 2);
		var g4y1 = g4Rect.bottom + 30;
		var g4y2 = seedRect.top + (seedRect.height / 2);
		var seedx = seedRect.right;

		// arrow from g4 back to under seed
		$scope.drawLine(g4x, g4y1, g4x, g4y2, "white", false);
		$scope.drawLine(g4x + 2, g4y1, seedx, g4y1, "white", true);

		var usx = seedRect.left + (seedRect.width / 2);
		var usy1 = seedRect.top - 10;
		var usy2 = usy1 - 25;
		// arrow from under seed to seed
		$scope.drawLine(usx, usy1, usx, usy2, "white", true);

	}

	$scope.drawLine = function(x1, y1, x2, y2, color, markerFlag=true) {

	 	var svg = $scope.createSVG();
	  var shape = document.createElementNS("http://www.w3.org/2000/svg", 
	                                       "path");

	  var hx1=x1;
	  var hy1=y1;
	  var hx2=x2;
	  var hy2=y2;
	  var path = "M "  + x1 + " " + y1 + 
	             " C " + hx1 + " " + hy1 
	                   + " "  + hx2 + " " + hy2 
	             + " " + x2 + " " + y2;
	  shape.setAttributeNS(null, "d", path);
	  shape.setAttributeNS(null, "fill", "none");
	  shape.setAttributeNS(null, "stroke", color);
	  shape.setAttributeNS(null, "stroke-width", 4);
	  if (markerFlag == true) {
			shape.setAttributeNS(null, 'marker-end', 'url(#arrow)');
	  }
	  svg.appendChild(shape);
	}; 

	$scope.createSVG = function() {
 		var svg = document.getElementById("svg-canvas");
	  if (null == svg) {
	    svg = document.createElementNS("http://www.w3.org/2000/svg", 
	                                   "svg");
	    svg.setAttribute('id', 'svg-canvas');
	    svg.setAttribute('style', 'position:absolute;top:0px;left:0px');
	    svg.setAttribute('width', document.body.clientWidth);
	    svg.setAttribute('height', document.body.clientHeight);
	    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", 
	                       "xmlns:xlink", 
	                       "http://www.w3.org/1999/xlink");

	    var defs = document.createElementNS('http://www.w3.org/2000/svg',
	    'defs');
			svg.appendChild(defs);

		  var marker = document.createElementNS('http://www.w3.org/2000/svg',
		    'marker');
		  marker.setAttribute('id', 'arrow');
		  marker.setAttribute('viewBox', '0 0 10 10');
		  marker.setAttribute('refX', '0');
		  marker.setAttribute('refY', '5');
		  marker.setAttribute('markerUnits', 'strokeWidth');
		  marker.setAttribute('markerWidth', '4');
		  marker.setAttribute('markerHeight', '3');
		  marker.setAttribute('orient', 'auto');
		  var path = document.createElementNS('http://www.w3.org/2000/svg',
		    'path');
		  marker.appendChild(path);
		  path.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
		  defs.appendChild(marker);

	    document.body.appendChild(svg);

	  }
	  return svg;
	};

	$scope.findAbsolutePosition = function(htmlElement, pos) {

	 	var elem = document.getElementById(htmlElement);
	 	var x = 0;
	 	var y = 0;
	  if (null == elem) {
	  	console.log("ERROR, there is no element named: ", htmlElement, " in the DOM");
	  } else {
		  var rect = elem.getBoundingClientRect();
		  y = Math.round((rect.height) / 2) + rect.top;
		  x = rect.left;
		  if (pos === 'left') {
		  	x = rect.right;
		  }
	  }

	  return {
	      "x": x,
	      "y": y
	  };
	};

	// draw all the svg arrows ONLY on homepage
	if ($location.path() == '/home') {
		angular.element(document).ready(function () {
		  $scope.connectDivs('pm', 'seed', 1);
		  $scope.connectDivs('seed', 'csrs', 2);
		  $scope.connectDivs('seed', 'better', 2);
		  $scope.connectDivs('at', 'bsync1', 2);
		  $scope.connectDivs('bsync1', 'seed', 1);
		  $scope.connectDivs('seed', 'bsync2', 2);
		  $scope.connectDivs('bsync2', 'as', 1);
		  $scope.connectDivs('csrs', 'g1', 2);
		  $scope.connectDivs('better', 'g2', 2);
		  $scope.connectDivs('as', 'g3', 2);
		  $scope.connectDivs('3p', 'g4', 1);
		  $scope.drawOtherArrows();
	  });
	}



}]);