var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  $routeProvider
  .when('/', {
  	templateUrl: 'js/home/homeTmpl.html',
  	controller: 'homeCtrl',
  	resolve: {
  		allTeamData: function(homeService){
  			return homeService.getAllTeamData();
  		}
  	}
  })
  .when('/teams/:team', {
  	templateUrl: 'js/teams/teamTmpl.html',
  	controller: 'teamCtrl',
  	resolve: {
  		teamData: function(teamService, $route){
  			console.log('app.js, $route: ', $route);
  			return teamService.getTeamData($route.current.params.team);
  		}
  	}
  })
  .otherwise({
  	redirectTo: '/'
  });
  //router here
});