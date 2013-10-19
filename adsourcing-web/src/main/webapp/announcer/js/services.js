'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])
.value('version', '0.1')
.factory('campaignService', ['$http', function($http) {
    return {
        create: function(campaign) {
            return $http.put('../api/advertiser/campaign/', campaign);
        }
    };
}])
.factory('currentUserService', ['$resource', function($resource) {
    return {
        get: function (cb) {
            cb({id:'plop', name:'plop'});
        }
    };
    //return $resource('../api/user/me');
}])
;
