var mingiAsiCtrl = angular.module('mingiAsiCtrl', []);


mingiAsiCtrl.controller('mingiAsiCtrl', function($rootScope, $scope){

    $scope.hide = function(){
        $rootScope.mingiasi = false;

    }

});
