var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

  $routeProvider
  
  .when('/', {
    templateUrl: 'pages/me.html',
    controller: 'meController'
  })

  .when('/project', {
    templateUrl: 'pages/projects.html',
    controller: 'projectsController'
  })

  .when('/cs-170', {
    templateUrl: 'pages/cs-170.html',
    controller: 'cs170Controller'
  })


});

myApp.controller('meController', ['$scope', '$log', function($scope, $log) {
  
  $log.info('me');


}]);

myApp.controller('projectsController', ['$scope', '$log', function($scope, $log) {
  
  $log.info('second');


}]);

myApp.controller('cs170Controller', ['$scope', '$log', function($scope, $log) {
  
  $log.info('cs-170');


}]);