var express = require('express')
var router = express.Router()
var logger = require('../logger');

var {user} = require('../database/schema');
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
  user1.name = req.query.name
  user.insert(user1, function(err, docs) {
    if(err) {
      res.send('err:' + err)
    }else {
      res.send(JSON.stringify(docs))
    }
  });
})

// define the home page route
router.get('/', function (req, res) {
  logger.info('get /');
  user.find({}, function(err, docs) {
    res.send('Users home page|' + JSON.stringify(docs) + '|');
  })
})
module.exports = router