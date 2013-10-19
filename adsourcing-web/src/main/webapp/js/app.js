'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/announcer', {templateUrl: 'partials/announcer.html', controller: 'AnnouncerController'});
  $routeProvider.when('/designer', {templateUrl: 'partials/designer.html', controller: 'DesignerController'});
  $routeProvider.otherwise({redirectTo: '/announcer'});
}]);
