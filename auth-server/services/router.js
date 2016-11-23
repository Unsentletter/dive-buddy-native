const passport = require('passport');

const AuthenticationController = require('../controllers/authentication_controller');
const passportService = require('./passport');
const CreateProfileController = require('../controllers/profile_controller');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireLogin = passport.authenticate('local', {session: false});
var router = require('express').Router();

// Auth routes
router.route('/signup')
  .post(AuthenticationController.signup);
router.route('/signin')
  .post([requireLogin, AuthenticationController.signin]);

//createProfile routes
router.route('/users/:user_id/createprofile')
  .post(requireAuth, CreateProfileController.create);
router.route('/users/:user_id/profile')
  .get(CreateProfileController.index);



//For reference
// router.route('/protected')
//   .get(requireAuth, protected);

module.exports = router;
