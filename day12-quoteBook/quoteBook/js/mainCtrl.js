var app = angular.module('quoteBook');

app.controller('MainCtrl', function($scope, dataService){

	$scope.quotes = dataService.getData();

	$scope.addQuote = function(){
		dataService.addData($scope.quoteText, $scope.quoteAuthor);
		$scope.quoteText = '';
		$scope.quoteAuthor = '';
	};

	$scope.deleteQuote = function(){
		dataService.removeData($scope.quoteTextDelete);
		$scope.quoteTextDelete = '';
	};

	$scope.openAddQuote = false;
	$scope.openDeleteQuote = false;


});//end