const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Signup = require('../models/sign_up');

passport.use(new LocalStrategy({
    usernameField : 'email'
},
(email, password, done)=>{
    Signup.findOne({email:email}, (err, user)=>{
        if(err){console.log(`heyyy this passport generate error for this site`);return done(err)};
        if(!user || user.password != password){
            alert('invalid user password plz try again');
            return done(null, false);
        }
        return done(null, user);
    })
}
));

//Serializing the user

passport.serializeUser((user,done)=>{
    done (null, user._id);
})


//deserilize the user
passport.deserializeUser((user,done)=>{
    Signup.findById(id, (err, user)=>{
        if(err){
            console.log('DeserilizeUser create error for your site');
            return done(err)
    }
    return done (null, user);
    })
})

module.exports = passport;