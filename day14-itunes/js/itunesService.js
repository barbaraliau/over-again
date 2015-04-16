var app = angular.module('itunes');

app.service('itunesService', function($http, $q){

  this.getSongByArtist = function(searchObj){
  	var dfd = $q.defer()
  	$http({
  		method: 'JSONP',
  		url: 'https://itunes.apple.com/search?term=' + searchObj.term + '&media=' + searchObj.media + '&callback=JSON_CALLBACK'
  	}).then(function(res){
  		console.log(res.data.results);
  		var songs = res.data.results;
  		var dataArray = [];
	    for(var i = 0; i < songs.length;i++){
	      dataArray.push({
	        AlbumArt: songs[i].artworkUrl100,
	        Artist: songs[i].artistName,
	        Title: songs[i].trackName,
	        Collection: songs[i].collectionName,
	        CollectionPrice: songs[i].collectionPrice,
	        Play: songs[i].previewUrl,
	        Type: songs[i].kind
	      });
	    }
  		dfd.resolve(dataArray);
  	}).catch(function(err){
  		console.log(err);
  		dfd.reject(err);
  	});
  	return dfd.promise;
  };

});