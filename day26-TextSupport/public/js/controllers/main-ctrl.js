var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function($scope, BankService){

	var getRate = function(){
		BankService.getRate().then(function(res){
			console.log(res);
			$scope.interest_rate = res.data;
		});
	};

	getRate();

	$scope.calculatePayment = function(){
		var interest = $scope.interest_rate / 100;
		var principal = parseInt($scope.principal);
		var amountOwed = interest * principal * 4;
		var total = amountOwed + principal;

		$scope.monthly_payment = (total / 48).toFixed(2);
	};

});