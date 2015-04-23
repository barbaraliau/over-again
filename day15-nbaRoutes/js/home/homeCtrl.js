var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, allTeamData){

		$scope.jazzData = allTeamData.utahjazz;
		$scope.lakersData = allTeamData.losangeleslakers;
		$scope.heatData = allTeamData.miamiheat;



});
