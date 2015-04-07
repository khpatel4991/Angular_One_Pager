var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

  $routeProvider
  
  .when('/', {
    templateUrl: 'pages/me.html',
    controller: 'meController'
  })

  .when('/project', {
    templateUrl: 'pages/project.html',
    controller: 'projectController'
  })

  .when('/cs-170', {
    templateUrl: 'pages/cs-170.html',
    controller: 'cs170Controller'
  })

  .when('/social', {
    templateUrl: 'pages/social.html',
    controller: 'socialController'
  })


});

myApp.controller('meController', ['$scope', '$log', '$location', function($scope, $log, $location) {

  $log.info($location.absUrl());

}]);

myApp.controller('projectController', ['$scope', '$log', '$location', function($scope, $log, $location) {
  
  $log.info($location.absUrl());

}]);

myApp.controller('cs170Controller', ['$scope', '$log', '$location', function($scope, $log, $location) {
  
  $log.info($location.absUrl());

}]);

myApp.controller('socialController', ['$scope', '$log', '$location', function($scope, $log, $location) {
  
  $log.info($location.absUrl());

}]);