'use strict';

/* Controllers */

angular.module('myApp.controllers', [])

.controller('NavbarController', ['$scope', '$location', 'currentUserService', 
function($scope, $location, currentUserService) {
    $scope.isActive = function (viewLocation) { 
        return $location.path().slice(0, viewLocation.length) === viewLocation;
    };
    $scope.go = function(viewLocation) {
        $location.path(viewLocation);
    };
    
    $scope.username = '';
    currentUserService.get(function (user) {
        $scope.username = user.name;
    });
}])
.controller('CatalogController', [function() {

}])
.controller('CampaignsController', [function() {
      
}])
.controller('NewCampaignController', ['$scope', '$location', 'campaignService', 
function($scope, $location, campaignService) {
    $scope.tagToAdd = "";
    $scope.campaign = {
        title: '',
        desciption: '',
        budget: 0,
        tags: [],
        startDate: 0,
        endDate: 0
    };
    $scope.addOnEnter = function(e, tag) {
        var code = e.keyCode || e.which;
        if (code == 13) {
            $scope.addTag(tag);
            e.preventDefault();
        }
    };
    $scope.addTag = function (tag) {
        if ($scope.campaign.tags.indexOf(tag) < 0) {
            $scope.campaign.tags.push(tag);
        }
        $scope.tagToAdd = "";
    };
    $scope.removeTag = function (tag) {
        var tags = [];
        while ($scope.campaign.tags.length > 0) {
            var existing = $scope.campaign.tags.shift();
            if (existing != tag) {
                tags.push(existing);
            }
        }
        $scope.campaign.tags = tags;
    };
    
    $scope.create = function() {
        campaignService.create($scope.campaign)
        .success(function(campaignId) {
            $location.path('/campaigns/' + campaignId + '/dashboard');
        })
        .error(function(msg, status) {
            alert("Can't create campaign: " + msg + " (error " + status + ")");
        })
        ;
    };
}])
.controller('DesignersController', [function() {

}])
.controller('ProfileController', [function() {
    
}])
;