const express = require('express');
const { default: mongoose } = require('mongoose');
const port = 5000;
const app = express();
const cookieparser = require('cookie-parser');
const session = require('express-session');
const passport = require("passport");
const passportLocal = require('./config/passport-local-strategy') 


/*Layouts*/
const expressLayout = require('express-ejs-layouts');

/*database*/
const db = require('./config/mongoose');


app.use(expressLayout);
app.use(cookieparser());

/*________access the assets________*/
app.use(express.static('assets'));
/*_________________________________*/

/* __Its display the Items find method___*/
app.use(express.urlencoded());


/*________access routers here___________*/

app.use('/', require('./routes'));
/*______________________________________*/


/*___________ access view folder_________ */
app.set('view engine', 'ejs');
app.set('views', 'views');
/*____________Passport session are used here_________________*/

app.use(session({
    name:'Auther',
    secret: "blha something",
    saveUninitialized:false,
    resave: false,
    cookie:{
        keys: ["user_id"],
        maxAge:(1000 * 60 * 100) // because the maxage is defined in miliseconds so it goes tp 
    }
}));


app.use(passport.initialize());
app.use(passport.session('/'));


app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


app.listen(port, (err)=>{
    if(err){
        console.log(`Error on this side ${err}`);
    }
    console.log(`Server is runn....... on port ${port}`);
})