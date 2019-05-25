var app = angular.module('news363', []);

const key = '41d47d4b47e143d0aa2b946c5fc1e606';

/* Overall Top News Controller */
    app.controller('topNewsCtrl', function ($scope, $http) {
        $scope.news = [];

        $http({
            url: 'https://newsapi.org/v2/top-headlines',
            method: 'GET',
            params: {
                country: 'us',
                apiKey: key,
                pageSize: 4
            }
        }).then(function(response) {
            console.log(response.data.articles);

            $scope.news = response.data.articles;

        }, function(error) {
            console.log(error);
        });
    });

/* Top Tech News Controller */
    app.controller('techNewsCtrl', function ($scope, $http) {
        $scope.news = [];

        $http({
            url: 'https://newsapi.org/v2/top-headlines',
            method: 'GET',
            params: {
                country: 'us',
                apiKey: key,
                pageSize: 4,
                category: 'technology'
            }
        }).then(function(response) {
            console.log(response.data.articles);

            $scope.news = response.data.articles;

        }, function(error) {
            console.log(error);
        });
    });

/* NY Times News Controller */
    app.controller('nyTimesNewsCtrl', function ($scope, $http) {
        $scope.news = [];

        $http({
            url: 'https://newsapi.org/v2/top-headlines',
            method: 'GET',
            params: {
                apiKey: key,
                pageSize: 8,
                sources: 'the-new-york-times'
            }
        }).then(function(response) {
            console.log(response.data.articles);

            $scope.news = response.data.articles;

        }, function(error) {
            console.log(error);
        });
    });
    
/* ESPN News Controller */
    app.controller('espnNewsCtrl', function ($scope, $http) {
        $scope.news = [];

        $http({
            url: 'https://newsapi.org/v2/top-headlines',
            method: 'GET',
            params: {
                apiKey: key,
                pageSize: 8,
                sources: 'espn'
            }
        }).then(function(response) {
            console.log(response.data.articles);

            $scope.news = response.data.articles;

        }, function(error) {
            console.log(error);
        });
    });

/* Main Header Component */

app.component('mainHeader',{
    template: `
    <header>
        <nav class="navbar navbar-light bg-light border-bottom fixed-top">
            <div class="container">
                <a href="#" class="navbar-brand">News365</a>

                <ul class="navbar-nav flex-row">
                    <li class="nav-item mr-4">
                        <a href="#top-news" class="nav-link">Top News</a>
                    </li>
                    <li class="nav-item mr-4">
                        <a href="#technology" class="nav-link">Technology</a>
                    </li>
                    <li class="nav-item mr-4">
                        <a href="#ny-times" class="nav-link">Source: NY Times</a>
                    </li>
                    <li class="nav-item mr-4">
                        <a href="#espn" class="nav-link">Source: ESPN</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    `
});


/* Story List Component */
app.component('storyItemList',{
    bindings:{
        news: '<'
    },
    template: `  
        <ul class="list-unstyled ml-5" style="font-size:19px;">
            <li class="my-3" ng-repeat="item in $ctrl.news">
                <a class="text-dark" ng-href="{{item.url}}">{{item.title}}</a>
            </li>
        </ul>
    `
});

/* Detailed Story Item Component */

app.component('detailedStoryItem',{
    bindings:{
        item: '<'
    },
    template: `  
        <article class="pb-4">
        <a class="text-dark" ng-href="{{$ctrl.item.url}}">
            <img ng-src="{{ $ctrl.item.urlToImage}}" alt="">
            
            <h3 class="font-weight-light">{{$ctrl.item.title}}</h3>
            
            <p>{{$ctrl.item.description}}</p>
        </a>
        </article>
    `
});

