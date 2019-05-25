let app = angular.module('doggoTube', []);

app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'https://www.youtube.com/**',
        'https://youtube.com/**'
    ]);
});

const key = 'AIzaSyD-_rrmXui23uOnZej_RE6CHo534cpuIXg';

app.controller('videoCtrl', function($scope, $http){
    $scope.videos = [];

    $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: {
            part: 'snippet',
            maxResults: 8,
            q: 'dachshund',
            type: 'video',
            key: key
        }
    }).then(function(response){
        console.log(response.data.items);

        $scope.videos = response.data.items;
    }, function(error){
        console.log(error);
    });
});

app.controller('searchCtrl', function($scope, $http){
    $scope.videos = [];
    $scope.search_query = '';
    $scope.hide = false;

    $scope.search_videos = function(){
        $http({
            url: 'https://www.googleapis.com/youtube/v3/search',
            method: 'GET',
            params: {
                part: 'snippet',
                maxResults: 8,
                q: $scope.search_query + ' dog',
                type: 'video',
                key: key
            }
        }).then(function(response){
            console.log(response.data.items);
    
            $scope.videos = response.data.items;
            $scope.search_query = null;
            $scope.hide = true;
        }, function(error){
            console.log(error);
        });
    };

});

app.controller('playlistCtrl', function($scope, $http){
    $scope.playlist = [];

    $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: {
            part: 'snippet',
            maxResults: 8,
            q: 'corgi',
            type: 'playlist',
            key: key
        }
    }).then(function(response){
        console.log(response.data.items);

        $scope.playlist = response.data.items;
    }, function(error){
        console.log(error);
    });
});

app.controller('channelsCtrl', function($scope, $http){
    $scope.channel = [];

    $http({
        url: 'https://www.googleapis.com/youtube/v3/search',
        method: 'GET',
        params: {
            part: 'snippet',
            maxResults: 8,
            q: 'husky',
            type: 'channel',
            key: key
        }
    }).then(function(response){
        console.log(response.data.items);

        $scope.channel = response.data.items;
    }, function(error){
        console.log(error);
    });
});