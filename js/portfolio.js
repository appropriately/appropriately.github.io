var app = angular.module('portfolioApp', ["ngRoute"]);

app.config(function($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html'
      })
      .when('/unity', {
        templateUrl: 'partials/unity.html'
      })
      .when('/about', {
        templateUrl: 'partials/about.html'
      })
      .otherwise({redirectTo: '/404',
        templateUrl: 'partials/404.html'
      });
      $locationProvider.html5Mode(true);
  });
