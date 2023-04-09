// const cookieParser = require('cookie-parser');
const User = require('../models/user_m')


module.exports.home = (req,res)=>{
    console.log(req.cookies);
    res.cookie('user_id', 103);
    User.find({}, (err,user)=>{
        if(err){console.log('Error find the user data');return}
        res.render('index', {title: " I am a homecontlr", User_Data : user});
    })
    // res.render('home', {title: " I am a Home conn to index rout"});
}