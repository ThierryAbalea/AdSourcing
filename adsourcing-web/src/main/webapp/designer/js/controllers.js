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
            'name': 'big campaign',
            'advertiserName': 'CDiscount',
            'description': 'Be creative !',
            'tags': ['tv', 'boys', 'world']
        }
        ];
    }])
.controller('ProfileController', [function() {
    
}])
;