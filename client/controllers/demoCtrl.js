var demoCtrl = angular.module('demoCtrl', []);
demoCtrl.controller('demoCtrl', function ($scope, demoService, $rootScope) {



    $scope.showLanding = false;
    $scope.toggleShowLanding = function()
    {
        $scope.showLanding = !$scope.showLanding;
    }


    $rootScope.$watch('language', function () {

        if ($rootScope.language == "et") {
            demoService.getOneEst().then(function (data) {
                $scope.oneArray = data;
            })
        }
        else if ($rootScope.language == "en") {
            demoService.getOneEng().then(function (data) {
                $scope.oneArray = data;
            })
        }
        else {
            demoService.getOneRus().then(function (data) {
                $scope.oneArray = data;
            })
        }
    }, true);

});

