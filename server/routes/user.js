var express = require('express')
var router = express.Router()
var logger = require('../logger');

var {user} = require('../service');
// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   logger.info('Time: ', Date.now())
//   next()
// })

// define the about route
router.get('/about', function (req, res) {
  logger.info('get /about');
  res.send('About users');
})

router.post('/add', function(req, res) {
  logger.info('post /add');
  var user1 = {};
  user1.name = req.query.name;
  user.add(user)
  .then(function(docs) {
    res.json(docs);
  })
  .catch(function(e) {
    res.send('err:' + e);
  });
  
})

// define the home page route
router.get('/', function (req, res) {
  logger.info('get /');
  user.get({})
    .then(function(docs) {
        res.send('Users home page|' + JSON.stringify(docs) + '|');
    })
    .catch(function(e){
        res.send(e);
    });
})
module.exports = router