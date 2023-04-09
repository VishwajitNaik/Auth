const User = require('../models/user_m');

module.exports.remove = (req,res)=>{
    let id = req.query.id;
    // let id = req.query;
    User.findOneAndDelete(id,(err)=>{
        if(err){
            console.log('error deleting the Items');
            return;
        }
        return  res.redirect('/');
    })
}