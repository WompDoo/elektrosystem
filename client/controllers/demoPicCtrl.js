var demoPicCtrl = angular.module('demoPicCtrl', []);

demoPicCtrl.controller('demoPicCtrl', function ($scope, $http, $location) {
    var id = window.location.hash.split('/')[3];
    $http.get('testroot/test/projectbyid/' + id).success(function (data) {
        console.log(data);
        $scope.estName = data.ee.name;
        $scope.estCat = data.ee.category;
        $scope.estDesc = data.ee.description;

        $scope.engName = data.en.name;
        $scope.engCat = data.en.category;
        $scope.engDesc = data.en.description;

        $scope.estName = data.ee.name;
        $scope.estCat = data.ee.category;
        $scope.estDesc = data.ee.description;
    }).error(function (err) {
        console.log(err);
    })
});
