var sideMenuCtrl = angular.module('sideMenuCtrl', []);


sideMenuCtrl.controller('sideMenuCtrl', function($rootScope, $scope){

    $scope.hide = function(){
        $rootScope.sidemenu = false;
        $rootScope.sidemenuOverlay = false;
    }

})


