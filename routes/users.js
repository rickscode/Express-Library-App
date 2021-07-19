// load express && express.router object
var express = require('express');
var router = express.Router();

/* GET users listing. */
// route callback will executed when url /users is recieved
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// /users/cool return Daisy so cool
router.get('/cool', (req, res) => {
  res.send('Daisy so cool')
})
// export && for import by app.js
module.exports = router;
