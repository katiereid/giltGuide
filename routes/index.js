var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gilt Guide' });
});

router.get('/layout', function(req, res, next){
  res.render('layout', { title: 'Gilt Guide: Scaffolding and Layout'})
});

router.get('/typography', function(req, res, next){
  res.render('typography', { title: 'Gilt Guide: Typography and Colors'})
});

router.get('/forms', function(req, res, next){
  res.render('forms', { title: 'Gilt Guide: Forms and Buttons'})
});

router.get('/nav', function(req, res, next){
  res.render('nav', { title: 'Gilt Guide: Navs'})
});

router.get('/modules', function(req, res, next){
  res.render('modules', { title: 'Gilt Guide: Modules'})
});

module.exports = router;
