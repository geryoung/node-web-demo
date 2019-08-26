var express = require('express')
var router = express.Router()

var {user} = require('../database/schema');
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the about route
router.get('/about', function (req, res) {
  res.send('About users')
})

router.post('/add', function(req, res) {
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
  user.find({}, function(err, docs) {
    res.send('Users home page|' + JSON.stringify(docs) + '|');
  })
})
module.exports = router