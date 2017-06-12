angular.module('viceMusic', [])
  .controller('SongController', function($scope, $http)  {
    var songController = this;
    songController.episodes = []
    $http.get("schedule.json")
    .then(function(response) {
      songController.episodes = response.data.episodes;
    });
  });