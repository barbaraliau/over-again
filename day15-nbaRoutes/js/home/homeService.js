var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){


	this.getAllTeamData = function(){
		var dfd = $q.defer();
		var teamData = {};
		teamService.getTeamData('utahjazz')
			.then(function(data){
				teamData.utahjazz = data;
				teamService.getTeamData('losangeleslakers')
					.then(function(data){
						teamData.losangeleslakers = data;
						teamService.getTeamData('miamiheat')
							.then(function(data){
								teamData.miamiheat = data;
								dfd.resolve(teamData);
							});
					});
			});
		return dfd.promise;
	};

});
