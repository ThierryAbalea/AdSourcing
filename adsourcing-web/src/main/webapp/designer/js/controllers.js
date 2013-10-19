'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('NavbarController', ['$scope', '$location', 
    function NavbarController($scope, $location) {
        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };
    }]
)
.controller('AdsController', ['$scope',function($scope) {

}])
.controller('CampaignsController', ['$scope', 'Campaign',function($scope, Campaign) {
    $scope.campaigns = Campaign.query();

        $scope.advertisers=['Sarenza', 'CDiscount'];

    /*    $scope.campaigns = [{
            'name': 'big campaign',
            'advertiserName': 'Sarenza',
            'description': 'Be creative !',
            'tags': ['shoes', 'girls', 'hello']
        },
        {
            'name': 'small campaign',
            'advertiserName': 'CDiscount',
            'description': 'Be creative !',
            'tags': ['tv', 'boys', 'world']
        }
        ]; */

        $scope.campaignsFullText=function(campaign) {
            var filter;
            filter = !$scope.searchName || 0 === $scope.searchName.length; // empty search field
            filter = filter || campaign.title.indexOf($scope.searchName) != -1;
            filter = filter || campaign.advertiserName.indexOf($scope.searchName) != -1;
            return filter;
        }
    }])
.controller('ProfileController', [function() {
    
}])
;