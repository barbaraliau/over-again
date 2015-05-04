var app = angular.module('LoanCalculator');

app.service('BankService', function($http){

	this.getRate = function(){
		return $http({
			method: 'GET',
			url: '/api/interest_rate'
		});
	};

});
