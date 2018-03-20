// const AuthenticationController = require('../controllers/authentication_controller');

var router = require('express').Router();

function protect (req, res, next){
  res.send("Here is the protected route");
}
// make the page unseen unless login
router.route('/protected')
  .get(protect);

// router.route('/signup')
//   .post(AuthenticationController.signup);

module.exports = router;
