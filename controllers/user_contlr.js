const User = require('../models/user_m');
const signUp = require('../models/sign_up');


//Create Data
module.exports.user = (req,res)=>{
    User.create({
        name: req.body.name
    },(err,data)=>{
        if(err){res.send(`alert('Plz fill the all fields') ${err}`);return}
        console.log('<><>', data);
         res.redirect('/');
    })
    // res.render('index', {title: " user is here"});
}

module.exports.user_data = (req,res)=>{
    // User.find({}, (err,user)=>{
    //     if(err){console.log('Error find the user data');return}
    //     res.render('home', {title: " I am a Usercontlr", User_Data : user});
    // })

    // signUp.find({},(err,data)=>{
    //     if(err){console.log('ERROR');return}
    //     console.log(data);
    //     // res.render
    //     if(req.cookies.user_id){
    //         signUp.findById(req.cookies.user_id,(err, user)=>{
    //             if(err){console.log('ERROR');return}
    //             if(user){
    //                 return res.render('home', {
    //                     title: " I am home",
    //                     shearData:data
    //                 });
    //             }
    //             return res.redirect('/'); // browser cookies available but not in database 
    //         });
    //     }
    //     return res.redirect('/user_data'); // browser cookies not avaia
    // })


}

module.exports.SignUp = (req, res)=>{
    res.send('I am user Sign Up')

}

module.exports.SignIn = (req, res)=>{
    res.send('HI I am Sign In guy');
}

module.exports.CreateSignUp = (req, res)=>{
    signUp.findOne({email:req.body.email}, (err,signupUser)=>{
        if(err){console.log(`Send user signUp to DB Error occured ${err}`);return;}
        
        // If user  are not sign up then
        if(!signupUser){
            signUp.create(req.body, (err, signupUser)=>{
                if(err){console.log(`Send user signUp to DB Error occured ${err}`);return;}
                        return res.render('home', {
                        title: " I am home",
                        shearData:signupUser
                    });
                 

            })
        }
    })
}

module.exports.CreateSignIn = (req, res)=>{
    signUp.findOne({email:req.body.email}, (err, signInUser)=>{
        if(err){console.log(`Error on finding the user ${err}`);return}
        // handle the user found or not
        if(signInUser){
             /*//[1}//_____Handle password which does not match______*/
            if(signInUser.password != req.body.password){
                return res.send(`alert('Hey!! Not match confirm passwor!') ${4+7}`);
            } 
            // handle session creation
            res.cookie('User-id', signInUser.id);
            // return res.redirect('/user_data')
            return res.redirect('/')
        }else{
            // return res.redirect('/user_data')
            return res.send(`alert('Hey!! Not match confirm passwor!') ${4+7}`);
        }
    })
}

module.exports.createSession = (req,res)=>{
    return res.redirect('/')
}
