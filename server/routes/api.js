var express = require('express');
var router = express.Router();
var passport = require('passport');
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: path.join(__dirname, '../../client/uploads'),
    filename: function (req, file, cb) {
        var extArray = file.mimetype.split('/');
        var extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + Date.now() + '.' + extension)
    }
})
var upload = multer({storage: storage});

var estText = require('../models/esttext.js');
var engText = require('../models/engtext.js');
var rusText = require('../models/rustext.js');
var project = require('../models/project.js');

router.post('/test/project', function (req, res) {
    project.create({
        name: req.body.name,
        category: req.body.category,
        years: req.body.years,
        picture: req.body.picture,
        description: req.body.description
    }, function (err, project) {
        if (err) res.send(err);
        res.json(project);
    })
})

router.get('/test/getallProjects', function (req, res) {
    project.find(function (err, project) {
        if (err) res.send(err);
        res.json(project);
    })
})



var TestMudel = require('../models/test.js');


router.post('/test/randomField', function(req, res){

    var key = req.body.fieldToBeUpdated;
    var dynSet = {$set: {}};
    dynSet.$set[key] = req.body.fieldToBeUpdatedValue;
    var language = req.body.lang;

    if(language === "et"){
        estText.find(function(err, esttext){
            if(err) res.send(err);
            esttext[0].update(dynSet, function(err, cb){
                console.log(cb);
                if(err)res.send(err);
                res.json({
                    msg: "The field {" + key + "} was successfully updated with text -> {"+ req.body.fieldToBeUpdatedValue +"}."
                });
            })
        })
    }
    if(language === "en"){
        engText.find(function(err, engtext){
            engtext[0].update(dynSet, function(err, cb){
                console.log(cb);
                if(err)res.send(err);
                res.json({
                    msg: "The field {" + key + "} was successfully updated with text -> {"+ req.body.fieldToBeUpdatedValue +"}."
                });
            })
        })
    }
    if(language === "ru"){
        rusText.find(function(err, rustext){
            if(err) res.send(err);
            rustext[0].update(dynSet, function(err, cb){
                console.log(cb);
                if(err)res.send(err);
                res.json({
                    msg: "The field {" + key + "} was successfully updated with text -> {"+ req.body.fieldToBeUpdatedValue +"}."
                });
            })
        })
    }

})






router.get('/test/getalltests', function (req, res) {
    TestMudel.find(function (err, testmudelid) {
        if (err) res.send(err);
        res.json(testmudelid);
    })
})

router.get('/test/getfirstEst', function (req, res) {
    estText.findOne(function (err, esttext) {

        if (err) res.send(err);
        res.json(esttext);
    })
})
router.get('/test/getfirstEng', function (req, res) {
    engText.findOne(function (err, engtext) {

        if (err) res.send(err);
        res.json(engtext);
    })
})
router.get('/test/getfirstRus', function (req, res) {
    rusText.findOne(function (err, rustext) {

        if (err) res.send(err);
        res.json(rustext);
    })
})


module.exports = router;
