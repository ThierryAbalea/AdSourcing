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
.controller('NewCampaignController', ['$scope', '$location', 'createCampaignService', 
function($scope, $location, createCampaignService) {
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
        createCampaignService.create($scope.campaign)
        .success(function(campaignId) {
            $location.path('/campaigns/' + campaignId + '/dashboard');
        })
        .error(function(msg, status) {
            alert("Can't create campaign: " + msg + " (error " + status + ")");
        })
        ;
    };
}])
.controller('CampaignDashboardController', ['$scope', function($scope) {
    $scope.incoming = [
        {
            user: {
                name: 'Elena',
                perf: 2.5,
                reco: 2
            },
            visual: '../img/bandeau-sarenza-1.jpg',
            targeting: ['Women', 'Aged 30-50', 'From Any City']
        },
        { user: {name: 'Stephan'} },
        { user: {name: 'Morgane'} },
        { user: {name: 'David'} },
        { user: {name: 'TheDude'} },
        { user: {name: 'John'} },
        { user: {name: 'Tim'} },
    ];
    $scope.accepted = [
        { user: {name: 'Simon'} },
        { user: {name: 'Manu'} },
        { user: {name: 'Edith'} },
    ];
    $scope.rejected = [ { user: {name: 'Mary'} } ];
    $scope.current = {
        user: {
            name: 'David',
            perf: 2,
            reco: 3.5
        },
        visual: '../img/bandeau-sarenza-0.jpg',
        targeting: ['Women', 'Aged 20-40', 'From Paris (incl. suburbs)']
    };
    
    $scope.fullStars = function(score) {
        var res = [];
        for (var i = 0; i < Math.floor(score); i++) {
            res[i] = i;
        }
        return res;
    };
    $scope.emptyStars = function(score) {
        var res = [];
        for (var i = 0; i < Math.floor(4- score); i++) {
            res[i] = i;
        }
        return res;
    };
    $scope.halfStars = function(score) {
        if (Math.floor(score) === score) {
            return [];
        } else {
            return [0];
        }
    };
    
    $scope.accept = function () {
        $scope.accepted.unshift($scope.current);
        $scope.current = $scope.incoming.shift();
    };
    $scope.reject = function () {
        $scope.rejected.unshift($scope.current);
        $scope.current = $scope.incoming.shift();
    };
    $scope.later = function () {
        $scope.incoming.push($scope.current);
        $scope.current = $scope.incoming.shift();
    };
    $scope.requalify = function(scope, index) {
        var current = $scope.current;
        $scope.current = $scope[scope].splice(index, 1).pop();
        $scope.incoming.unshift(current);
    };
}])
.controller('DesignersController', [function() {

}])
.controller('ProfileController', [function() {
    
}])


.controller('CampaignMonitoringController', ['$scope', function($scope) {
        $scope.campaign = {
            title: 'Zarenza autonm sales'
        };
    }])


;