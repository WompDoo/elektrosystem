var demoService = angular.module('demoService', []);

demoService.factory('demoService', function ($q, $timeout, $http) {
    /*function getAll() {
     var d = $q.defer();
     $http.get('/testroot/test/getalltests')
     .success(function (data) {
     d.resolve(data);
     })
     .error(function (err) {
     d.reject(err);
     })
     return d.promise;
     }*/

    function getOneEst() {
        var d = $q.defer();
        $http.get('/testroot/test/getfirstEst')
            .success(function (data) {
                d.resolve(data);
            })
            .error(function (err) {
                d.reject(err);
            })
        return d.promise;
    }

    function getOneEng() {
        var d = $q.defer();
        $http.get('/testroot/test/getfirstEng')
            .success(function (data) {
                d.resolve(data);
            })
            .error(function (err) {
                d.reject(err);
            })
        return d.promise;
    }

    function getOneRus() {
        var d = $q.defer();
        $http.get('/testroot/test/getfirstRus')
            .success(function (data) {
                d.resolve(data);
            })
            .error(function (err) {
                d.reject(err);
            })
        return d.promise;
    }


    function update() {
        var d = $q.defer();
        $http.post('testroot/test/randomField', {

        })
            .success(function (data) {
                d.resolve(data);
            })
            .error(function (err) {
                d.reject(err);
            })
        return d.promise;
    }

    return ({
        getOneEst: getOneEst,
        getOneRus: getOneRus,
        update: update,
        getOneEng: getOneEng
    })


});