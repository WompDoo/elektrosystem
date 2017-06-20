var introSelect = angular.module('introSelect', []);

introSelect.controller('introSelect', function ($scope) {
    $scope.page = 'default';

    $scope.selection = false;
    $scope.toggle = function () {
        $scope.selection = !$scope.selection;
    };
});
