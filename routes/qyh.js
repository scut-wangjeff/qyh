var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('pedding');
});

router.get('/done', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('done');
});

router.get('/apply', function(req, res, next) {
  //res.send('respond with a resource');
  res.render('apply');
});

module.exports = router;
