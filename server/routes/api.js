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
var demoPic = require('../models/demoPic.js');


router.post('/test/demoPic', upload.array('images'), function (req, res) {
    var holder = [];
    var imageUrls = [];
    for(i = 0; i < req.files.legnth; i++){
        var temp = {oPath: "", path: ""};
        temp.oPath = req.files[i].path;
        temp.path = '../uploads/' + req.files[i].filename;
        holder.push(temp);
    }
    for(i = 0; i < holder.length; i+s+){
        imageUrls.push(holder[i].path);
        demoPic.create({
            originalPath: holder[i].oPath,
            path: holder[i].path
        }, function (err, cb) {
            if(err) res.status(500).send(err);
            console.log(cb);
        })
    }
    res.status(200).send(imageUrls);
})

router.get('/test/projectbyid/:id', function (req, res) {
    project.findOne({
        _id: req.params.id
    }, function (err, cb) {
        if(err) res.status(500).send(err);
        res.status(200).send(cb);;
    })
})

router.get('/test/allprojects:id', function (req, res) {
    project.findOne({
        _id: req.params.id
    }, function (err, cb) {
        if(err) res.status(500).send(err);
        res.status(200).send(project);
    })
})


router.get('/test/allprojects', function (req, res) {
    project.find(function (err, projects) {
        if (err) res.status(500).send(err);
        res.status(200).send(projects);
    })
})
router.post('/test/project/update', function (req, res) {

})


router.post('/test/project', function (req, res) {
    project.create({
    }, function (err, project) {
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
