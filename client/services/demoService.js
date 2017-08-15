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
        $http.post('testroot/test/update', {
            LANDINGTITLE1: req.body.LANDINGTITLE1,
            LANDINGMESSAGE: req.body.LANDINGMESSAGE,
            LANDINGTITLE2: req.body.LANDINGTITLE2,
            INTROTEXT: req.body.INTROTEXT,
            INTROSUBHEADING1: req.body.INTROSUBHEADING1,
            INTROSUBHEADING2: req.body.INTROSUBHEADING2,
            INTROSUBHEADING3: req.body.INTROSUBHEADING3,
            INTROSUBHEADING4: req.body.INTROSUBHEADING4,
            INTROSUBTEXT1: req.body.INTROSUBHEADING1,
            INTROSUBTEXT2: req.body.INTROSUBHEADING2,
            INTROSUBTEXT3: req.body.INTROSUBHEADING3,
            INTROSUBTEXT4: req.body.INTROSUBHEADING4,
            CREWTEXT: req.body.CREWTEXT,
            CREWPOS1: req.body.CREWPOS1,
            CREWNAME1: req.body.CREWNAME1,
            CREWMAIL1: req.body.CREWMAIL1,
            CREWPOS2: req.body.CREWPOS1,
            CREWNAME2: req.body.CREWNAME1,
            CREWMAIL2: req.body.CREWMAIL1,
            CREWPOS3: req.body.CREWPOS1,
            CREWNAME3: req.body.CREWNAME1,
            CREWMAIL3: req.body.CREWMAIL1,
            MAIL: req.body.MAIL,
            ADDRESS: req.body.ADDRESS,
            PHONE: req.body.PHONE
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
        getOneEng: getOneEng
    })


});