const express = require('express');
const router = express.Router();
const passport = require('passport')



const homecontlr = require('../controllers/home_contlr');
router.get('/', homecontlr.home);



const removeContlr = require('../controllers/remove_contlr');
router.get('/delete-items', removeContlr.remove);


const userContlr = require('../controllers/user_contlr');
router.post('/user', userContlr.user);
router.get('/user_data', userContlr.user_data);
router.get('/signUp', userContlr.SignUp);
router.get('/signIn',userContlr.SignIn);
router.post('/CreateSignUp', userContlr.CreateSignUp);
router.post('/CreateSignIn', userContlr.CreateSignIn);

router.post('/createSession', passport.authenticate('local',{failureRedirect:'/CreateSignIn'},), userContlr.createSession);

module.exports = router