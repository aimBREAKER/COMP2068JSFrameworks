var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// About Me page route
router.get('/about', (req, res) => {
  res.render('about');
});

// Projects page route
router.get('/projects', (req, res) => {
  res.render('projects');
});

// Contact Me page route
router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
