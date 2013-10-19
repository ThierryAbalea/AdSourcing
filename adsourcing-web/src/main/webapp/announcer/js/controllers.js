'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('NavbarController', ['$scope', '$location', 
    function NavbarController($scope, $location) {
        $scope.isActive = function (viewLocation) { 
            return $location.path().slice(0, viewLocation.length) === viewLocation;
        };
        $scope.go = function(viewLocation) {
            $location.path(viewLocation);
        };
    }]
)
.controller('CatalogController', [function() {

}])
.controller('CampaignsController', [function() {
      
}])
.controller('NewCampaignController', [function() {
    
}])
.controller('DesignersController', [function() {

}])
.controller('ProfileController', [function() {
    
}])
;