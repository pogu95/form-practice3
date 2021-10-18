var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/results', function(req, res){
  console.log(req.body.description);
  console.log(req.body.agree);
  console.log(req.body.icecream);
  console.log(req.body.iceCreamOther);
  console.log(req.body.text);
  console.log(req.body.dateOfBirth);
  res.render('card', {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: new Date(req.body.dateOfBirth),
    description: req.body.description,
    agree: req.body.agree,
    icecream: req.body.icecream
  })
});



module.exports = router;
