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


});

myApp.controller('meController', ['$scope', '$log', function($scope, $log) {
  
  $log.info('me');


}]);

myApp.controller('projectsController', ['$scope', '$log', function($scope, $log) {
  
  $log.info('second');


}]);