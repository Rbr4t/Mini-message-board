var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Express'})
})

router.post('/new', function(req, res, next) {
  const data = req.body
  messages.push({text: data.text, user: data.name, added: new Date()})
  res.redirect('/')
})

module.exports = router;
