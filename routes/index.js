var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/leaderboard', function(req, res, next) {
  let users = [
    {
      name: "John",
      score: 100
    },
    {
      name: "Jane",
      score: 200
    },
    {
      name: "Doe",
      score: 300
    }
  ]
  res.render('board', { users: users, title: 'Express' });
});

module.exports = router;
