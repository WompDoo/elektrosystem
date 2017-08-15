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

router.post('/test/rusText', function (req, res) {
    rusText.create({
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
    }, function (err, rusText) {
        if (err) res.send(err);
        res.json(rusText);
    })
})


var TestMudel = require('../models/test.js');

router.post('/test/update', function (req, res) {
    estText.findOne({id: req.body.id}, function (err, esttext) {
        console.log(esttext);
        console.log(req.body.id);
        esttext.update({
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
        }, function (err, cb) {
            if (err) res.send(err);
            res.json({
                msg: "update was successful"
            });
        })


    })
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
