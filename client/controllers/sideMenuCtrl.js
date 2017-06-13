var sideMenuCtrl = angular.module('sideMenuCtrl', []);


sideMenuCtrl.controller('sideMenuCtrl', function($rootScope, $scope, dataService){
    $scope.testing = dataService.getData();
    $scope.totalSum = 0;
    
    $scope.hide = function(){
        $rootScope.sidemenu = false;
        $rootScope.sidemenuOverlay = false;
    }
})
