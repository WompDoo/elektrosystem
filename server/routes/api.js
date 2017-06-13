var express = require('express');
var router = express.Router();
var passport = require('passport');
var multer = require('multer');
var path = require('path');

var storage = multer.diskStorage({
    destination: path.join(__dirname, '../../client/uploads'),
    filename: function(req, file, cb){
        var extArray = file.mimetype.split('/');
        var extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + Date.now() + '.' + extension)
    }
})
var upload = multer({storage:storage});

var User = require('../models/user.js');
var Product = require('../models/product.js');
var Picture = require('../models/picture.js');
var Info = require('../models/contactInfo.js');


router.post('/register', function(req, res) {
  User.register(new User({ username: req.body.username }),
    req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({
        err: err
      });
    }
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({
        status: 'Registration successful!'
      });
    });
  });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      res.status(200).json({
        status: 'Login successful!'
      });
    });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});

router.get('/status', function(req, res) {
  if (!req.isAuthenticated()) {
    return res.status(200).json({
      status: false
    });
  }
  res.status(200).json({
    status: true
  });
});
router.post('/add', function(req, res){
	Product.create({
		name: req.body.name,
		price: req.body.price,
		information: req.body.information,
        quantity: req.body.quantity,
        serial: req.body.serial,
		picture: req.body.picture
	}, function(err, product){
		if(err) res.send(err);
		return res.status(200).json({
			status: "product added"
		});
	});
});
router.post('/update', function(req, res){
    Product.findOne({
        _id: req.body.id
    }, function(err, product){
        if(err)console.log(err);
        console.log(product);
        product.update({
            name: req.body.name,
            price: req.body.price,
            information: req.body.information
        }, function(err, callback){
            if(err)console.log(err);
            console.log(product);
        })
    })
})
router.get('/all', function(req, res){
	Product.find(function(err, products){
		if(err) res.send(err);
		res.json(products);
	});
});
router.post('/delete/:id', function(req, res){
    console.log(req.params.id);
	Product.findOne({
		_id: req.params.id
	}, function(err, product){
		if(err)res.send(err);
		product.remove(function(err){
			console.log("Product was deleted successfully");
		})
		Product.find(function(err, products){
			if(err) console.log(err);
			res.json(products);
		})
	})
})
router.get('/product/:id', function(req, res){
    Product.findOne({
        _id: req.params.id
    }, function(err, product){
        if(err) res.send(err);
        res.json(product);
    })
});
router.post('/update', function(req, res){

	Product.findOne({
		name: req.body.name
	}, function(err, product){
		if(err)res.send(err);
		product.update({
			price: req.body.price,
			information: req.body.information,
		},function(err){
			console.log(err)
		})
		Product.find(function(err, products){
			if(err) console.log(err);
			res.json(products);
		})
	})
})

router.post('/product/picture', upload.single('file'), function(req, res){
	console.log(req.file);
	Picture.create({
		picture: req.file.path
	})
	var str = req.file.path;
	var correctPath = str.replace(/\/Users\/Oskar\/Desktop\/elektronet\/client\//, '../');
    console.log(correctPath);

	res.json(correctPath);
})
router.post('/info/info/add', function(req, res){
    console.log(req.body);
    Info.create({
        title: req.body.title,
        info: req.body.info
    }, function(err, info){
        if(err) res.send(err);
        res.json(info)
    })
})
router.post('/info/get', function(req, res){
    Info.findOne({
        title: 'test'
    },function(err, info){
        if(err) res.send(err);
        res.json(info);
    })
})
router.post('/info', function(req, res){

    Info.findOne({
        title: 'test'
    }, function(err, info){
        console.log(info);
        if(err) res.send(err);
        info.update({
            info: req.body.info
        }, function(err, test){
            if(err) res.send(err);
            console.log(test);
            res.json({
                status: "Contact info was updated"
            })
        })
    })
})

module.exports = router;
