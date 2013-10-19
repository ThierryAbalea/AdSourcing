'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'ui.bootstrap'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/catalog', {templateUrl: 'partials/catalog.html', controller: 'CatalogController'});
  $routeProvider.when('/campaigns', {templateUrl: 'partials/campaigns.html', controller: 'CampaignsController'});
  $routeProvider.when('/designers', {templateUrl: 'partials/designers.html', controller: 'DesignersController'});
  $routeProvider.otherwise({redirectTo: '/campaigns'});
}]);
