var navBarCtrl = angular.module('navBarCtrl', []);

navBarCtrl.controller('navBarCtrl', function($rootScope, $scope, dataService){
    $scope.toggleSideMenu = function(){
        $rootScope.sidemenu = true;
        $rootScope.sidemenuOverlay = true;

    }
});
