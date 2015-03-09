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


});

myApp.controller('meController', ['$scope', '$log', function($scope, $log) {
  
  $log.info('me');


}]);

myApp.controller('projectController', ['$scope', '$log', function($scope, $log) {
  
  $log.info('project');


}]);

myApp.controller('cs170Controller', ['$scope', '$log', function($scope, $log) {
  
  $log.info('cs-170');


}]);