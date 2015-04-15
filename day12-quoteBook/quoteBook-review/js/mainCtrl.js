var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService, $timeout){

	$scope.quotes = mainService.getData();

	$scope.addQuote = function(){
		mainService.addData($scope.quoteInput, $scope.authorInput)
	};

	$scope.removeQuote = function(){
		mainService.removeData($scope.quoteInput)
	}

	$scope.showMe = false;

	 var showButton = function(){
	 	$timeout(function(){
	 		$scope.showMe = true;
	 	}, 3000);
	 };

	 showButton();

});//end