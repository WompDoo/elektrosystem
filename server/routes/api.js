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

var bannerText = require('../models/bannerText.js');


router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        bannerText1: req.body.bannerText1

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/bannerText1', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            bannerText1: req.body.bannerText1
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        bannerText1: req.body.bannerText2

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/bannerText2', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            bannerText1: req.body.bannerText2
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        bannerText1: req.body.bannerText3

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/bannerText3', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            bannerText1: req.body.bannerText3
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})


router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        introText: req.body.introText

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/introText', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            introText: req.body.introText
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        intro1: req.body.intro1

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/intro1', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            intro1: req.body.intro1
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        intro2: req.body.intro2

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/intro2', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            intro2: req.body.intro2
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        intro3: req.body.intro3

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/intro3', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            intro3: req.body.intro3
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        intro4: req.body.intro4

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/intro4', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            intro4: req.body.intro4
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        teamText: req.body.teamText

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/teamText', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            teamText: req.body.teamText
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        personName1: req.body.personName1

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/personName1', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            personName1: req.body.personName1
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        personName2: req.body.personName2

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/personName2', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            personName2: req.body.personName2
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        personName3: req.body.personName3

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/personName3', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            personName3: req.body.personName3
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        personRole1: req.body.personRole1

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/personRole1', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            personRole1: req.body.personRole1
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        personRole2: req.body.personRole2

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/personRole2', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            personRole2: req.body.personRole2
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        personRole3: req.body.personRole3

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/personRole3', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            personRole3: req.body.personRole3
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        personEmail1: req.body.personEmail1

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/personEmail1', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            personEmail1: req.body.personEmail1
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        personEmail2: req.body.personEmail2

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/personEmail2', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            personEmail2: req.body.personEmail2
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        personEmail3: req.body.personEmail3

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/personEmail3', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            personEmail3: req.body.personEmail3
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        telephone: req.body.telephone

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/telephone', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            telephone: req.body.telephone
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})


router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        email: req.body.email

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/email', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            email: req.body.email
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})

router.post('/bannertext/update', function (req, res) {
    bannerText.update({

        address: req.body.address

    }, function (err, response) {
        if (err) res.send(err);
        res.json(response);
    })
})

router.post('/bannertext/address', function (req, res) {

    bannerText.findOne({
        _id: req.body.id // võid otsida ka muude parameetrite järgi aga id järgi kõige lihtsam
    }, function (err, bannertext) {
        if (err) res.send(err);
        bannertext.update({
            address: req.body.address
        }, function (err) {
            if (err) res.send(err);
            res.json({
                status: "update was done"
            })
        })
    })
})




















module.exports = router;
