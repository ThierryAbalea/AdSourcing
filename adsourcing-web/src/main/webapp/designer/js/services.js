'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('designerServices', ['ngResource']).
  value('version', '0.1')
    .factory('Campaign', ['$resource', function($resource){
        return $resource('desginer/campaign/active/:id', { 'id': '@id'}, {

        });
    }])
;