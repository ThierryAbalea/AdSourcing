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
    //$scope.campaigns = Campaign.query();

        $scope.campaigns = [{
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
        ];

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
.controller('CampaignDetailsController', ['$scope', function($scope) {
    $scope.campaign = {
        'title': 'Nouvelle collection hiver 2013',
        'advertiser': 'Sarenza',

        'description': 'La campagne hiver 2013 est Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',


    }
}])
;