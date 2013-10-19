'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['ngResource'])
.value('version', '0.1')
.factory('createCampaignService', ['$http', function($http) {
    return {
        create: function(campaign) {
            var result = {};
            result.success = function(cb) {
                cb(123);
                return result;
            };
            result.error = function() {
                return result;
            };
            return result;
            // return $http.put('../api/advertiser/campaign/', campaign);
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
.factory('campaignService', ['$resource', function($resource) {
    return {
        get: function (params, cb) {
            cb({
                id: params.id,
                title: 'campaign title',
                description: 'This is a very very long description for a campaign :)',
                tags: ['plop', 'plip', 'plouf'],
                budget: 10901,
                startDate: 123456,
                endDate: 123456,
            });
        }
    };
    //return $resource('../api/advertiser/campaign/:id');
}])
;
