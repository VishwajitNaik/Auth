const { default: mongoose } = require("mongoose");

mongoose.connect('mongodb://localhost/data_1');

const db = mongoose.connection;


db.on('error', console.error.bind(console, "error"));

db.once('open', ()=>{
    console.log('mongoose running succ......');
})