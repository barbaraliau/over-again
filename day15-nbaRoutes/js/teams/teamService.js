var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

	//have data about each individual game that we'll send to parse
	this.addNewGame = function(gameObj){
		var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;

		if(parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)){
			gameObj.won = true;
		} else {
			gameObj.won = false;
		}
		return $http({
			method: 'POST',
			url: url,
			data: gameObj
		});
	};

	//accepts a team parameter and fetches the data of that specific team
	this.getTeamData = function(team){
		var dfd = $q.defer();
		var url = 'https://api.parse.com/1/classes/' + team;
		$http({
			method: 'GET',
			url: url
		}).then(function(data){
			var results = data.data.results;
			var wins = 0;
			var losses = 0;
			for(var i = 0; i < results.length; i++){
				if(results[i].won){
					wins++;
				} else if(!results[i].won){
					losses ++;
				}
			}
			results.wins = wins;
			results.losses = losses;
			//console.log('results: ', results);
			dfd.resolve(results);
		});
		return dfd.promise;
	};


});

/*
createdAt: "2015-02-18T00:57:29.527Z"
homeTeam: "utahjazz"
homeTeamScore: "50"
objectId: "47QUZy2xcQ"
opponent: "Memphis Grizzlies"
opponentScore: "400"
updatedAt: "2015-02-18T00:57:29.527Z"
won: false
*/