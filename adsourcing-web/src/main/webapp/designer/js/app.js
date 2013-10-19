'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'designerServices',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/campaigns', {templateUrl: 'partials/campaigns.html', controller: 'CampaignsController'});
  $routeProvider.when('/ads', {templateUrl: 'partials/ads.html', controller: 'AdsController'});
  $routeProvider.when('/profile', {templateUrl: 'partials/profile.html', controller: 'ProfileController'});
  $routeProvider.otherwise({redirectTo: '/campaigns'});
}]);
