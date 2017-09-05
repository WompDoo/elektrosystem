var demoPicCtrl = angular.module('demoPicCtrl', []);

demoPicCtrl.controller('demoPicCtrl', function ($scope, $http, Upload) {
    var id = window.location.hash.split('/')[3];
    $http.get('testroot/test/projectbyid/' + id).success(function (data) {
        console.log(data);
        $scope.estName = data.ee.name;
        $scope.estCat = data.ee.category;
        $scope.estDesc = data.ee.description;

        $scope.engName = data.en.name;
        $scope.engCat = data.en.category;
        $scope.engDesc = data.en.description;

        $scope.years = data.years;
    }).error(function (err) {
        console.log(err);
    });
    $scope.uploadFiles = function (images) {
        $scope.files = images;
        var data = {
            images: images
        };
        if (images) {
            Upload.upload({
                url: 'testroot/test/demopic',
                arrayKey: '',
                data: data
            }).then(function (data) {
                console.log(data);
                $scope.images = data.data;
            }, function (err) {
                console.log(err);
            })
        }
    }
});
