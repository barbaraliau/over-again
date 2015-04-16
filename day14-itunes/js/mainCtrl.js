var app = angular.module('itunes');

app.controller('mainCtrl', function($scope, itunesService){

  $scope.gridOptions = {
      data: 'songData',
      showFilter: true,
      showColumnMenu: true,
      height: '110px',
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Type', displayName: 'Type'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
      ]
  };

  $scope.getSongData = function(){
    var searchObj = {
      term: $scope.searchInput,
      media: $scope.mediaAttribute
    };
    itunesService.getSongByArtist(searchObj)
      .then(function(data){
        $scope.songData = data;
    });
  };

  $scope.options = [
    { value: 'all', label: 'All' },
    { value: 'music', label: 'Music' },
    { value: 'movie', label: 'Movie'},
    { value: 'podcast', label: 'Podcast' },
    { value: 'tvShow', label: 'TV Show' },
    { value: 'musicVideo', label: 'Music Video' },
    { value: 'audioBook', label: 'Audiobook' },
    { value: 'shortFilm', label: 'Short Film' }
  ];

  $scope.mediaAttribute = $scope.options[0].value;

});
